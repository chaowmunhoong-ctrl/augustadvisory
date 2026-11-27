import NewsletterSignup from './NewsletterSignup';
import LineIcon from './LineIcon';

// Weekly tax & business update sign-up (replaces the WhatsApp Channel banner, Jeffrey 2026-11-22).
// Deep navy band so it stands apart from the light sections around it; compact form card on the right.
export default function NewsletterSection() {
  return (
    <section id="newsletter" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#1F3A4D' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: what it is */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#8FD3CB' }}>
            <LineIcon name="mail" size={18} /> Tax &amp; business updates
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-4">
            <span style={{ color: '#8FD3CB' }}>Newsletter</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#C9D6DF' }}>
            Official LHDN, Customs and SSM updates that matter to your business, sent straight to your inbox.
          </p>

          {/* LHDN, Customs and SSM news only, sent on working days (Jeffrey, 2026-11-27) */}
          <ul className="space-y-4">
            {[
              ['taxation', 'LHDN updates', 'Tax rules, deadlines, e-Invoice'],
              ['rules', 'Customs updates', 'SST rates, scope and announcements'],
              ['secretarial', 'SSM updates', 'Company filing rules and deadlines'],
            ].map(([icon, title, text]) => (
              <li key={title} className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(143,211,203,0.14)', color: '#8FD3CB' }}>
                  <LineIcon name={icon} size={20} />
                </span>
                <span>
                  <span className="block font-semibold text-white">{title}</span>
                  <span className="block text-sm" style={{ color: '#AFC1CC' }}>{text}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-6" style={{ color: '#AFC1CC' }}>Sent on working days, only when there is news. Official sources only.</p>
          <p className="text-sm mt-2" style={{ color: '#AFC1CC' }}>
            For court cases, tips and all our other posts, follow us on{' '}
            <a href="https://www.facebook.com/augustadvisory" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#8FD3CB' }}>Facebook</a>,{' '}
            <a href="https://www.linkedin.com/company/august-advisory-sdn-bhd/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#8FD3CB' }}>LinkedIn</a> and{' '}
            <a href="https://instagram.com/august_advisory_sdn_bhd/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#8FD3CB' }}>Instagram</a>.
          </p>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
          <p className="text-xl font-bold mb-1" style={{ color: '#2C3E50' }}>Subscribe</p>
          <p className="text-sm mb-6" style={{ color: '#5A6C7D' }}>Get the newsletter in your inbox. Unsubscribe any time.</p>
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
}
