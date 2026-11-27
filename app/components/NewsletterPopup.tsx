'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Pop-up after a reader clicks Confirm or Unsubscribe in a newsletter email (Jeffrey, 2026-11-27).
// The /nl page sends them here as /?nl=<status>.
const MESSAGES: Record<string, { title: string; text: string }> = {
  welcome: {
    title: 'Welcome to the August Advisory newsletter',
    text: 'Your subscription is confirmed. We will keep you informed of important LHDN, Customs and SSM updates that may affect your business.',
  },
  unsubscribed: {
    title: 'You have been unsubscribed',
    text: 'You will not receive the August Advisory newsletter any more. You can sign up again at any time.',
  },
  'was-unsubscribed': {
    title: 'You unsubscribed earlier',
    text: 'To receive the newsletter again, please sign up below.',
  },
  invalid: {
    title: 'This link is no longer valid',
    text: 'Please sign up again below, or contact us at client@augustadvisory.com.my.',
  },
  error: {
    title: 'Something went wrong',
    text: 'We could not complete this just now. Please try the link again in a moment.',
  },
};

export default function NewsletterPopup() {
  const params = useSearchParams();
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const k = params.get('nl');
    if (k && MESSAGES[k]) setKey(k);
  }, [params]);

  if (!key) return null;
  const m = MESSAGES[key];
  const close = () => {
    setKey(null);
    window.history.replaceState(null, '', window.location.pathname); // tidy the address bar after closing
    if (key === 'was-unsubscribed' || key === 'invalid') document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ backgroundColor: 'rgba(31,58,77,0.55)' }} onClick={close} role="dialog" aria-modal="true" aria-labelledby="nl-popup-title">
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white" onClick={e => e.stopPropagation()}>
        <div className="px-6 pt-6 pb-5" style={{ backgroundColor: '#1F3A4D' }}>
          <p className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#8FD3CB' }}>August Advisory</p>
          <p id="nl-popup-title" className="text-2xl font-bold text-white mt-2 leading-snug">{m.title}</p>
        </div>
        <div style={{ height: 4, backgroundColor: '#348981' }} />
        <div className="px-6 py-6">
          <p className="text-base leading-relaxed" style={{ color: '#2C3E50' }}>{m.text}</p>
          <button type="button" onClick={close} className="mt-6 w-full px-6 py-3 rounded-full font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: '#348981' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
