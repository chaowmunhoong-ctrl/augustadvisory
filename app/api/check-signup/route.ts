import { NextResponse } from 'next/server';
import { promises as dns } from 'node:dns';

// Checks a newsletter sign-up before it is sent to the weekly-email script (Jeffrey, 2026-11-22):
// the email's domain can receive email (has MX records, or at least an address).
// Website field and website checks removed (Jeffrey, 2026-11-25); personal emails are blocked in NewsletterSignup.tsx.
// Full proof that the person owns the email needs a confirmation email from the weekly-email script.
export const runtime = 'nodejs';

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

export async function POST(req: Request) {
  let body: { email?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, errors: { form: 'Bad request' } }, { status: 400 }); }
  const email = String(body.email || '').trim().toLowerCase();
  const errors: Record<string, string> = {};

  const emailDomain = email.split('@')[1] || '';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = 'Please enter a valid email address.';
  else if (!(await domainReceivesMail(emailDomain))) errors.email = `We could not find "${emailDomain}". Please check your company email.`;

  return NextResponse.json({ ok: Object.keys(errors).length === 0, errors });
}
