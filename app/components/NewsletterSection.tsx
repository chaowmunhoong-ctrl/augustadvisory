import TealLine from './TealLine';
import NewsletterSignup from './NewsletterSignup';

// Weekly tax & business update sign-up, in the live site's style (replaces the WhatsApp Channel banner, Jeffrey 2026-11-22).
// Wording follows the real weekly email: Monday 8am, customised by industry and role.
export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#E8F5F3' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

        {/* Left: text */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#348981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 6 12 13 2 6" /></svg>
            <span className="text-sm font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#2C3E50' }}>Weekly Newsletter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#2C3E50' }}>
            Stay <span style={{ color: '#348981' }}>Informed.</span><br />
            Stay <span style={{ color: '#348981' }}>Ahead.</span>
          </h2>

          <p className="text-base leading-relaxed mb-6" style={{ color: '#5A6C7D' }}>
            A <b style={{ color: '#2C3E50' }}>customised update based on your industry and role</b>, every Monday at 8am: the week&apos;s tax, SST, SSM, payroll and court updates that matter to your business, in plain English, with the official source.
          </p>

          <TealLine />

          <ul className="space-y-3 mb-2">
            {[
              'New rules and announcements from LHDN, Customs, SSM and PERKESO',
              'Court cases explained: what happened, what it means, what you can do',
              'Practical tips for running your business',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5" style={{ backgroundColor: '#348981' }}>✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5" style={{ backgroundColor: '#348981' }}>✓</span>
              <span className="text-sm font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#FFF1C7', color: '#2C3E50' }}>
                Customised to your industry and role. That&apos;s why we ask for your role and company website.
              </span>
            </li>
          </ul>
        </div>

        {/* Right: sign-up form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-xl mx-auto">
            <p className="text-2xl font-bold mb-1" style={{ color: '#2C3E50' }}>Sign up</p>
            <p className="text-sm mb-6" style={{ color: '#5A6C7D' }}>Takes 30 seconds. We customise each update to your industry and role, so you only read what matters to you.</p>
            <NewsletterSignup />
          </div>
        </div>

      </div>
    </section>
  );
}
