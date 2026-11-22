'use client';

import { useState } from 'react';

// Sign-up for the August weekly tax & business update.
// Sends to the "August Weekly Update" Apps Script web app (august-apps/weekly-email, doPost), which adds the
// person to the Subscribers sheet. The field names below must match that script.
// Set NEXT_PUBLIC_NEWSLETTER_URL to the web app's public /exec address once it is deployed for "Anyone".
const SIGNUP_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL || '';

const ROLES = ['Owner / Director', 'Finance / Accounts', 'HR / Admin', 'Other'];

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
  const [websiteError, setWebsiteError] = useState('');
  const [matchWarning, setMatchWarning] = useState('');
  const [matchOk, setMatchOk] = useState(false);
  const [role, setRole] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') || '');
    if (!isCompanyEmail(email)) {
      setEmailError('Please use your company email (not Gmail, Yahoo, Hotmail or another personal email).');
      return;
    }
    // Check the email domain and the website are real before sending (server side: /api/check-signup)
    setState('checking');
    try {
      const res = await fetch('/api/check-signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, website: form.get('website') }) });
      const r = await res.json();
      setEmailError(r.errors?.email || '');
      setWebsiteError(r.errors?.website || '');
      if (!r.ok) { setState('idle'); return; }
      if (r.warnings?.match && !matchOk) { setMatchWarning(r.warnings.match); setState('idle'); return; }
    } catch {
      setState('idle');
      setWebsiteError('We could not check your details right now. Please try again.');
      return;
    }
    if (role === 'Other') form.set('role', String(form.get('role_other') || '').trim());
    form.delete('role_other');
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
        <p className="mt-2" style={{ color: '#5A6C7D' }}>We sent you a confirmation email. Click the button in it and your first weekly update arrives on Monday at 8am.</p>
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
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
        <label className={label} style={{ color: '#2C3E50' }} htmlFor="nl-name">Your name *</label>
        <input id="nl-name" name="name" required className={field} style={fieldStyle} />
      </div>
        <div>
        <label className={label} style={{ color: '#2C3E50' }} htmlFor="nl-role">Your role *</label>
        <select id="nl-role" name="role" required value={role} onChange={e => setRole(e.target.value)} className={field} style={fieldStyle}>
          <option value="">Choose your role</option>
          {ROLES.map(r => <option key={r}>{r}</option>)}
        </select>
      </div>
      </div>
      {role === 'Other' && (
        <div>
          <label className={label} style={{ color: '#2C3E50' }} htmlFor="nl-role-other">Tell us your role *</label>
          <input id="nl-role-other" name="role_other" required placeholder="e.g. Company secretary, Operations manager" className={field} style={fieldStyle} />
        </div>
      )}
      <div>
        <label className={label} style={{ color: '#2C3E50' }} htmlFor="nl-website">Company website *</label>
        <input id="nl-website" name="website" required placeholder="www.yourcompany.com.my" pattern="\S+\.\S+" title="Please enter your company website, e.g. www.yourcompany.com.my"
          className={field} style={{ ...fieldStyle, borderColor: websiteError ? '#a32638' : '#cfd8dc' }}
          onChange={() => { if (websiteError) setWebsiteError(''); if (matchWarning) { setMatchWarning(''); setMatchOk(false); } }} />
        {websiteError
          ? <p className="text-sm mt-1" style={{ color: '#a32638' }}>{websiteError}</p>
          : <p className="text-xs mt-1" style={{ color: '#5A6C7D' }}>We read it to understand your business (industry, what you do), so you don&apos;t have to fill in more.</p>}
      </div>
      {matchWarning && (
        <div className="rounded-lg p-4 border" style={{ backgroundColor: '#FFF7E0', borderColor: '#E3B23C', color: '#2C3E50' }}>
          <p className="text-sm font-semibold mb-2">{matchWarning}</p>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={matchOk} onChange={e => setMatchOk(e.target.checked)} className="w-4 h-4" />
            Yes, this is my company&apos;s website
          </label>
        </div>
      )}
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
      <p className="text-xs text-center" style={{ color: '#7A8A96' }}>We use your details only to pick the updates relevant to you.</p>
    </form>
  );
}
