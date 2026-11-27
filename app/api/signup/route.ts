import { NextResponse } from 'next/server';

// Newsletter sign-up (Jeffrey, 2026-11-27): the website form posts here, this passes it to the newsletter
// script and reads the answer, so the form can say "already subscribed" instead of "check your inbox".
// Answer: { status: 'pending' | 'already' | 'error', message? }
const SCRIPT = process.env.NEXT_PUBLIC_NEWSLETTER_URL || '';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!SCRIPT) return NextResponse.json({ status: 'error', message: 'Sign-up is not available right now.' });
  const form = new URLSearchParams(await request.text());
  form.set('f', 'json');
  try {
    // The script answers with a redirect; following it with GET returns the JSON
    const res = await fetch(SCRIPT, { method: 'POST', body: form, redirect: 'follow', cache: 'no-store', signal: AbortSignal.timeout(25000) });
    const j = await res.json();
    if (j && (j.status === 'pending' || j.status === 'already' || j.status === 'error')) return NextResponse.json(j);
  } catch { /* fall through */ }
  return NextResponse.json({ status: 'error', message: 'We could not sign you up just now. Please try again in a moment.' });
}
