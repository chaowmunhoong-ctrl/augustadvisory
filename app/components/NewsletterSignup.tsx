'use client';

import { useState } from 'react';

// Sign-up for the August weekly tax & business update.
// Sends to the "August Weekly Update" Apps Script web app (august-apps/weekly-email, doPost), which adds the
// person to the Subscribers sheet. The field names below must match that script.
// Set NEXT_PUBLIC_NEWSLETTER_URL to the web app's public /exec address once it is deployed for "Anyone".
const SIGNUP_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL || '';


// Company emails only (Jeffrey, 2026-11-22). Keep this list the same as PERSONAL_DOMAINS in august-apps/weekly-email/Main.js.
const PERSONAL_DOMAINS = ['gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.com.my', 'ymail.com', 'rocketmail.com', 'hotmail.com', 'hotmail.my', 'outlook.com', 'outlook.my', 'live.com', 'live.com.my', 'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'proton.me', 'protonmail.com', 'gmx.com', 'mail.com', 'qq.com', '163.com', '126.com', 'yandex.com', 'zoho.com', 'tutanota.com'];

export function isCompanyEmail(email: string) {
  const domain = email.trim().toLowerCase().split('@')[1] || '';
  return !!domain && !PERSONAL_DOMAINS.includes(domain);
}

const field = 'w-full px-3.5 py-2.5 rounded-lg border bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#348981]';
const fieldStyle = { borderColor: '#cfd8dc', color: '#2C3E50' };
const label = 'block text-sm font-semibold mb-1.5';

export default function NewsletterSignup() {
  const [state, setState] = useState<'idle' | 'checking' | 'sending' | 'done' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') || '');
    if (!isCompanyEmail(email)) {
      setEmailError('Please use your company email (not Gmail, Yahoo, Hotmail or another personal email).');
      return;
    }
    // Check the email's company domain is real before sending (server side: /api/check-signup)
    setState('checking');
    try {
      const res = await fetch('/api/check-signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      const r = await res.json();
      setEmailError(r.errors?.email || '');
      if (!r.ok) { setState('idle'); return; }
    } catch {
      setState('idle');
      setEmailError('We could not check your email right now. Please try again.');
      return;
    }
    // No website field any more (Jeffrey, 2026-11-25): the company domain of the email is passed as the website,
    // so the weekly-email script and the Monday profiling still work unchanged.
    form.set('website', email.trim().toLowerCase().split('@')[1] || '');
    if (!SIGNUP_URL) { setState('error'); return; }
    setState('sending');
    try {
      await fetch(SIGNUP_URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(form as unknown as Record<string, string>) });
      setState('done');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-extrabold" style={{ color: '#348981' }}>Almost done! Check your inbox.</p>
        <p className="mt-2" style={{ color: '#5A6C7D' }}>We sent you a confirmation email. Click the button in it to start your newsletter.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4" noValidate={false}>
      <div>
        <label className={label} style={{ color: '#2C3E50' }} htmlFor="nl-email">Company email *</label>
        <input id="nl-email" name="email" type="email" required placeholder="you@yourcompany.com.my"
          className={field} style={{ ...fieldStyle, borderColor: emailError ? '#a32638' : '#cfd8dc' }}
          onChange={() => emailError && setEmailError('')}
          onBlur={e => setEmailError(e.target.value && !isCompanyEmail(e.target.value) ? 'Please use your company email (not Gmail, Yahoo, Hotmail or another personal email).' : '')} />
        {emailError && <p className="text-sm mt-1" style={{ color: '#a32638' }}>{emailError}</p>}
      </div>
      {/* Email and name only (Jeffrey, 2026-11-27: role question removed, everyone gets the same updates) */}
      <div>
        <label className={label} style={{ color: '#2C3E50' }} htmlFor="nl-name">Your name *</label>
        <input id="nl-name" name="name" required className={field} style={fieldStyle} />
      </div>
      {/* Hidden from people; bots fill it and the script ignores them */}
      <input name="website_confirm" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
      <button type="submit" disabled={state === 'sending' || state === 'checking'} className="w-full px-8 py-3 rounded-full font-semibold text-white text-base hover:opacity-90 transition" style={{ backgroundColor: '#348981' }}>
        {state === 'checking' ? 'Checking your details...' : state === 'sending' ? 'Signing you up...' : 'Subscribe'}
      </button>
      {state === 'error' && (
        <p className="text-sm" style={{ color: '#a32638' }}>
          {SIGNUP_URL ? 'Something went wrong. Please try again, or WhatsApp us at 010-246 2151.' : 'Sign-up is not connected yet (preview only).'}
        </p>
      )}
      <p className="text-xs text-center" style={{ color: '#7A8A96' }}>We use your email only to send you the newsletter.</p>
    </form>
  );
}
