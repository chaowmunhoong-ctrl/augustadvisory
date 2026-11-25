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
            The tax and business updates that matter to your business, sent straight to your inbox.
          </p>

          <ul className="space-y-4">
            {[
              ['rules', 'New rules and announcements', 'From LHDN, Customs and SSM'],
              ['court', 'Court cases explained', 'What happened, what it means, what you can do'],
              ['tips', 'Practical tips', 'For running your business day to day'],
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
