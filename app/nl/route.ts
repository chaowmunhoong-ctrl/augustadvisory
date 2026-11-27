import { NextResponse } from 'next/server';

// Newsletter confirm / unsubscribe links (Jeffrey, 2026-11-27): readers land on our own website instead of
// Google's Apps Script page (which shows a Google bar). This page asks the newsletter script quietly, then sends
// the reader to the homepage, where NewsletterPopup shows the message.
//   /nl?a=confirm&t=TOKEN   /nl?a=unsub&t=TOKEN
const SCRIPT = 'https://script.google.com/macros/s/AKfycbx2fHcqnhnc_brjPLHJ0V4KVwslST_EHwdJtBuPChRg2g8FAoVc3Sku7ArGWkV_0nEy/exec';
const OK = ['welcome', 'unsubscribed', 'was-unsubscribed', 'invalid'];

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams;
  const a = q.get('a') === 'unsub' ? 'unsub' : 'confirm';
  const t = q.get('t') || '';
  let status = 'invalid';
  if (t) {
    try {
      const res = await fetch(`${SCRIPT}?a=${a}&f=json&t=${encodeURIComponent(t)}`, { redirect: 'follow', cache: 'no-store', signal: AbortSignal.timeout(20000) });
      const j = await res.json();
      if (OK.includes(j.status)) status = j.status;
    } catch {
      status = 'error';
    }
  }
  return NextResponse.redirect(new URL(`/?nl=${status}`, request.url), 302);
}
