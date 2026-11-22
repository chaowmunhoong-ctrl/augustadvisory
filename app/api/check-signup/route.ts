import { NextResponse } from 'next/server';
import { promises as dns } from 'node:dns';

// Checks a newsletter sign-up before it is sent to the weekly-email script (Jeffrey, 2026-11-22):
// 1. the email's domain can receive email (has MX records, or at least an address),
// 2. the company website exists and answers,
// 3. warns (does not block) when the email domain and the website domain look unrelated.
// Full proof that the person owns the email needs a confirmation email from the weekly-email script.
export const runtime = 'nodejs';

const bareDomain = (host: string) => host.toLowerCase().replace(/^www\./, '').replace(/\.$/, '');

// Backup lookup over HTTPS (only the domain name is sent, never the email) for servers where direct DNS is blocked.
async function dohHas(name: string, type: 'MX' | 'A'): Promise<boolean | null> {
  try {
    const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`, {
      headers: { accept: 'application/dns-json' }, signal: AbortSignal.timeout(5000),
    });
    const j = await res.json();
    return Array.isArray(j.Answer) && j.Answer.some((a: { type: number }) => a.type === (type === 'MX' ? 15 : 1));
  } catch {
    return null; // could not check
  }
}

async function domainReceivesMail(domain: string) {
  let dnsWorked = true;
  try {
    if ((await dns.resolveMx(domain)).length > 0) return true;
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code !== 'ENOTFOUND' && code !== 'ENODATA') dnsWorked = false;
  }
  if (dnsWorked) {
    try { return (await dns.resolve4(domain)).length > 0; } catch { return false; }
  }
  const mx = await dohHas(domain, 'MX');
  if (mx) return true;
  const a = await dohHas(domain, 'A');
  if (a === null && mx === null) return true; // cannot check at all: do not block a real person
  return !!a;
}

async function websiteAnswers(input: string): Promise<{ ok: boolean; host?: string }> {
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
  } catch {
    return { ok: false };
  }
  const host = bareDomain(url.hostname);
  if (!host.includes('.')) return { ok: false };
  for (const u of [url.toString(), url.toString().replace(/^https:/, 'http:')]) {
    try {
      const res = await fetch(u, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(6000), headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AugustAdvisorySignupCheck/1.0)' } });
      // Any real answer counts (some sites block unknown visitors with 403); only "no answer" or server errors fail.
      if (res.status < 500) return { ok: true, host: bareDomain(new URL(res.url || u).hostname) };
    } catch { /* try next */ }
  }
  return { ok: false, host };
}

// "abc.com.my" and "mail.abc.com.my" count as the same company; compare the last two labels (three for .com.my style).
function rootOf(host: string) {
  const parts = host.split('.');
  const twoLevel = /^(com|net|org|gov|edu|co)$/.test(parts[parts.length - 2] || '') && parts.length >= 3;
  return parts.slice(twoLevel ? -3 : -2).join('.');
}

export async function POST(req: Request) {
  let body: { email?: string; website?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, errors: { form: 'Bad request' } }, { status: 400 }); }
  const email = String(body.email || '').trim().toLowerCase();
  const website = String(body.website || '').trim();
  const errors: Record<string, string> = {};
  const warnings: Record<string, string> = {};

  const emailDomain = email.split('@')[1] || '';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = 'Please enter a valid email address.';
  else if (!(await domainReceivesMail(emailDomain))) errors.email = `We could not find "${emailDomain}". Please check your company email.`;

  const site = await websiteAnswers(website);
  if (!site.ok) errors.website = 'We could not open this website. Please check the address.';

  if (!errors.email && !errors.website && site.host && rootOf(bareDomain(emailDomain)) !== rootOf(site.host)) {
    warnings.match = `Your email (${emailDomain}) and website (${site.host}) look different. Is this the same company?`;
  }

  return NextResponse.json({ ok: Object.keys(errors).length === 0, errors, warnings });
}
