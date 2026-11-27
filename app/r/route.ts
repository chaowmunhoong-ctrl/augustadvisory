import { NextResponse, after } from 'next/server';

// Newsletter click counter (Jeffrey, 2026-11-27). Links in the August newsletter point here:
//   /r?t=<subscriber token>&n=<newsletter>&u=<real link>
// The reader is sent straight on to the real link; the click is logged afterwards in the
// "Tracking" tab of the August Weekly Update sheet (august-apps/weekly-email, Web.js ?a=click).
// Only our own pages, our social pages and official government sites are allowed, so this
// cannot be used to send people to other sites.
const TRACKER = 'https://script.google.com/macros/s/AKfycbx2fHcqnhnc_brjPLHJ0V4KVwslST_EHwdJtBuPChRg2g8FAoVc3Sku7ArGWkV_0nEy/exec';
const SAFE = /^https:\/\/([a-z0-9-]+\.)*(augustadvisory\.com\.my|wa\.me|facebook\.com|linkedin\.com|gov\.my|ssm\.com\.my)(\/|$)/i;

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams;
  const u = q.get('u') || '';
  if (!SAFE.test(u)) return NextResponse.redirect('https://www.augustadvisory.com.my/', 302);
  const log = `${TRACKER}?a=click&t=${encodeURIComponent(q.get('t') || '')}&n=${encodeURIComponent(q.get('n') || '')}&u=${encodeURIComponent(u)}`;
  after(async () => {
    try { await fetch(log, { redirect: 'follow', signal: AbortSignal.timeout(10000) }); } catch { /* never block the reader */ }
  });
  return NextResponse.redirect(u, 302);
}
