import React from 'react';
import Link from 'next/link';
import FadeIn from './components/FadeIn';
import TrackedLink from './components/TrackedLink';

const serviceIconMap: Record<string, React.ReactNode> = {
  'CFO Advisory': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="18" r="12" fill="#FDDBB4" stroke="#222" strokeWidth="2"/>
      <path d="M20,14 Q22,6 32,6 Q42,6 44,14" fill="#3a2a1a" stroke="#222" strokeWidth="1.5"/>
      <rect x="24" y="16" width="7" height="5" rx="2" fill="none" stroke="#222" strokeWidth="1.5"/>
      <rect x="33" y="16" width="7" height="5" rx="2" fill="none" stroke="#222" strokeWidth="1.5"/>
      <line x1="31" y1="18.5" x2="33" y2="18.5" stroke="#222" strokeWidth="1.5"/>
      <path d="M27,24 Q32,28 37,24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18,58 Q18,38 32,36 Q46,38 46,58Z" fill="#1a3a6b" stroke="#222" strokeWidth="2"/>
      <path d="M30,36 L32,44 L34,36 L32,38Z" fill="#e63946" stroke="#222" strokeWidth="1"/>
      <rect x="38" y="44" width="14" height="10" rx="2" fill="#c8a96e" stroke="#222" strokeWidth="1.5"/>
      <rect x="41" y="42" width="8" height="4" rx="1" fill="none" stroke="#222" strokeWidth="1.5"/>
      <line x1="38" y1="49" x2="52" y2="49" stroke="#222" strokeWidth="1"/>
    </svg>
  ),
  'Financial Operations': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="10" width="36" height="46" rx="3" fill="#fff" stroke="#222" strokeWidth="2"/>
      <rect x="8" y="10" width="8" height="46" rx="2" fill="#348981" stroke="#222" strokeWidth="2"/>
      <line x1="20" y1="22" x2="40" y2="22" stroke="#ccc" strokeWidth="1.5"/>
      <line x1="20" y1="29" x2="40" y2="29" stroke="#ccc" strokeWidth="1.5"/>
      <line x1="20" y1="36" x2="40" y2="36" stroke="#ccc" strokeWidth="1.5"/>
      <line x1="20" y1="43" x2="40" y2="43" stroke="#ccc" strokeWidth="1.5"/>
      <polyline points="21,21 23,23 27,19" fill="none" stroke="#348981" strokeWidth="1.5" strokeLinecap="round"/>
      <polyline points="21,28 23,30 27,26" fill="none" stroke="#348981" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="48" cy="44" r="10" fill="#fff" stroke="#222" strokeWidth="2"/>
      <circle cx="48" cy="44" r="6" fill="none" stroke="#222" strokeWidth="1.5"/>
      <line x1="55" y1="51" x2="60" y2="56" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="45" y="47" fontSize="7" fontWeight="700" fill="#348981" fontFamily="system-ui,sans-serif">RM</text>
    </svg>
  ),
  'Taxation': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="20" width="36" height="36" rx="2" fill="#e8f5f3" stroke="#222" strokeWidth="2"/>
      <rect x="22" y="10" width="20" height="12" rx="1" fill="#348981" stroke="#222" strokeWidth="2"/>
      <text x="32" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">TAX</text>
      <rect x="18" y="28" width="8" height="8" rx="1" fill="#b2dfdb" stroke="#222" strokeWidth="1"/>
      <rect x="28" y="28" width="8" height="8" rx="1" fill="#b2dfdb" stroke="#222" strokeWidth="1"/>
      <rect x="38" y="28" width="8" height="8" rx="1" fill="#b2dfdb" stroke="#222" strokeWidth="1"/>
      <rect x="26" y="42" width="12" height="14" rx="1" fill="#c8a96e" stroke="#222" strokeWidth="1.5"/>
      <circle cx="36" cy="49" r="1.5" fill="#222"/>
      <circle cx="52" cy="18" r="8" fill="#4caf50" stroke="#222" strokeWidth="1.5"/>
      <polyline points="48,18 51,21 56,14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'Payroll & Compliance': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="14" width="34" height="42" rx="3" fill="#fff" stroke="#222" strokeWidth="2"/>
      <rect x="6" y="14" width="34" height="10" rx="3" fill="#348981" stroke="#222" strokeWidth="2"/>
      <text x="23" y="22" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">PAYSLIP</text>
      <line x1="12" y1="32" x2="34" y2="32" stroke="#eee" strokeWidth="1.5"/>
      <line x1="12" y1="38" x2="34" y2="38" stroke="#eee" strokeWidth="1.5"/>
      <line x1="12" y1="44" x2="34" y2="44" stroke="#eee" strokeWidth="1.5"/>
      <text x="12" y="31" fontSize="5.5" fill="#888" fontFamily="system-ui,sans-serif">EPF</text>
      <text x="12" y="37" fontSize="5.5" fill="#888" fontFamily="system-ui,sans-serif">SOCSO</text>
      <text x="12" y="43" fontSize="5.5" fill="#888" fontFamily="system-ui,sans-serif">PCB</text>
      <text x="30" y="31" textAnchor="end" fontSize="6" fill="#348981" fontFamily="system-ui,sans-serif">✓</text>
      <text x="30" y="37" textAnchor="end" fontSize="6" fill="#348981" fontFamily="system-ui,sans-serif">✓</text>
      <text x="30" y="43" textAnchor="end" fontSize="6" fill="#348981" fontFamily="system-ui,sans-serif">✓</text>
      <ellipse cx="50" cy="50" rx="9" ry="3" fill="#f5c842" stroke="#222" strokeWidth="1.5"/>
      <rect x="41" y="44" width="18" height="6" fill="#f5c842" stroke="#222" strokeWidth="1.5"/>
      <ellipse cx="50" cy="44" rx="9" ry="3" fill="#ffd966" stroke="#222" strokeWidth="1.5"/>
      <ellipse cx="50" cy="38" rx="9" ry="3" fill="#ffd966" stroke="#222" strokeWidth="1.5"/>
      <rect x="41" y="32" width="18" height="6" fill="#ffd966" stroke="#222" strokeWidth="1.5"/>
      <ellipse cx="50" cy="32" rx="9" ry="3" fill="#ffe080" stroke="#222" strokeWidth="1.5"/>
    </svg>
  ),
  'Corporate Secretarial': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="30" r="22" fill="#e8f5f3" stroke="#222" strokeWidth="2"/>
      <circle cx="32" cy="30" r="16" fill="none" stroke="#348981" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="32" cy="30" r="10" fill="#348981" stroke="#222" strokeWidth="1.5"/>
      <text x="32" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">SSM</text>
      <text x="32" y="35" textAnchor="middle" fontSize="5" fill="white" fontFamily="system-ui,sans-serif">APPROVED</text>
      <rect x="28" y="52" width="8" height="10" rx="2" fill="#c8a96e" stroke="#222" strokeWidth="1.5"/>
      <rect x="24" y="50" width="16" height="4" rx="1" fill="#c8a96e" stroke="#222" strokeWidth="1.5"/>
    </svg>
  ),
  'Stamp Duty & e-Stamping': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="8" width="30" height="40" rx="2" fill="#fff" stroke="#222" strokeWidth="2"/>
      <path d="M30,8 L40,18 L30,18Z" fill="#ddd" stroke="#222" strokeWidth="1.5"/>
      <line x1="16" y1="24" x2="34" y2="24" stroke="#ccc" strokeWidth="1.5"/>
      <line x1="16" y1="30" x2="34" y2="30" stroke="#ccc" strokeWidth="1.5"/>
      <line x1="16" y1="36" x2="28" y2="36" stroke="#ccc" strokeWidth="1.5"/>
      <rect x="34" y="36" width="22" height="22" rx="4" fill="#348981" stroke="#222" strokeWidth="2"/>
      <text x="45" y="47" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">e-</text>
      <text x="45" y="55" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">STM</text>
      <circle cx="34" cy="36" r="6" fill="#f5c842" stroke="#222" strokeWidth="1.5"/>
      <text x="34" y="39" textAnchor="middle" fontSize="7" fontWeight="700" fill="#222" fontFamily="system-ui,sans-serif">!</text>
    </svg>
  ),
  'Training & Advisory Workshops': (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="8" width="50" height="34" rx="3" fill="#fff" stroke="#222" strokeWidth="2"/>
      <rect x="6" y="8" width="50" height="6" rx="3" fill="#348981" stroke="#222" strokeWidth="2"/>
      <rect x="14" y="22" width="6" height="14" rx="1" fill="#b2dfdb"/>
      <rect x="24" y="18" width="6" height="18" rx="1" fill="#348981"/>
      <rect x="34" y="24" width="6" height="12" rx="1" fill="#b2dfdb"/>
      <line x1="12" y1="36" x2="44" y2="36" stroke="#222" strokeWidth="1"/>
      <circle cx="52" cy="22" r="5" fill="#FDDBB4" stroke="#222" strokeWidth="1.5"/>
      <path d="M47,44 Q47,32 52,30 Q57,32 57,44Z" fill="#1a3a6b" stroke="#222" strokeWidth="1.5"/>
      <line x1="47" y1="34" x2="38" y2="30" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="42" x2="20" y2="52" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
      <line x1="38" y1="42" x2="42" y2="52" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
      <line x1="31" y1="42" x2="31" y2="52" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

const services = [
  {
    title: 'CFO Advisory',
    description: 'CFO-level strategic thinking without the full-time cost, built for businesses that want to grow smarter.',
    icon: '📊'
  },
  {
    title: 'Financial Operations',
    description: 'Accurate books, timely reports, and organized records so you always know where your business stands.',
    icon: '💼'
  },
  {
    title: 'Taxation',
    description: 'Stay compliant and minimize your tax liability, from corporate filings to e-Invoice readiness.',
    icon: '📋'
  },
  {
    title: 'Payroll & Compliance',
    description: 'Accurate payroll processing and on-time statutory submissions including EPF, SOCSO, EIS, PCB, and more.',
    icon: '👥'
  },
  {
    title: 'Corporate Secretarial',
    description: 'From company incorporation to annual SSM filings, we keep your business legally compliant.',
    icon: '🏢'
  },
  {
    title: 'Stamp Duty & e-Stamping',
    description: 'Fast and accurate electronic stamping for tenancy agreements, loan agreements, and statutory documents.',
    icon: '🔏'
  },
  {
    title: 'Training & Advisory Workshops',
    description: 'Practical workshops on e-Invoice compliance, accounting software (SQL, Xero, Bukku), and tax awareness for SMEs.',
    icon: '📱'
  },
];

const features = [
  {
    title: 'One-Stop Advisory Partner',
    description: 'From accounting to CFO strategy, everything your business needs is under one roof.',
    icon: '🏆'
  },
  {
    title: 'Tailored to Your Business',
    description: 'No cookie-cutter solutions. We take the time to understand your business before we advise.',
    icon: '🎯'
  },
  {
    title: 'Built for Malaysian Businesses',
    description: 'Deep knowledge of local regulations, tax laws, and compliance requirements so you never have to worry about falling behind.',
    icon: '🇲🇾'
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F0FFFE' }}>
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* Ken Burns background */}
        <div
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: 'url(/Images/hero-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 70%)' }} />

        {/* Text block on the right */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex justify-end">
          <div className="w-full sm:w-1/2 lg:w-2/5 text-left py-16">
            <p className="hero-text-1 text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>
              Accounting & CFO Advisory
            </p>
            <h1 className="hero-text-2 text-4xl sm:text-5xl font-extrabold mb-5 leading-tight uppercase" style={{ color: '#2C3E50' }}>
              Professional & Trusted Accounting
            </h1>
            <p className="hero-text-3 text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#5A6C7D' }}>
              August Advisory is your one-stop business advisory partner, helping Malaysian businesses stay compliant, operate efficiently, and grow with confidence.
            </p>
            <div className="hero-text-4 flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-block px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition"
                style={{ backgroundColor: '#348981' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>What We Do</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>Our Services</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#5A6C7D' }}>
              From day-to-day bookkeeping to strategic CFO advisory, we handle the financial side of your business so you can focus on what matters most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={(i % 6) + 1 as 1|2|3|4|5|6}>
              <div
                className="p-4 sm:p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border h-full"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E0F2F1' }}
              >
                <div className="mb-3 sm:mb-4">{serviceIconMap[service.title]}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services"
              className="font-bold text-base sm:text-lg hover:underline transition inline-block"
              style={{ color: '#348981' }}
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#E8F5F3' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>Why August Advisory?</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#5A6C7D' }}>
              We don't just crunch numbers. We help you make better decisions, stay compliant, and build a stronger business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={(i % 6) + 1 as 1|2|3|4|5|6}>
              <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#348981' }}>{feature.title}</h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Channel Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">

            {/* Left: Text */}
            <div className="lg:col-span-2">
              {/* Brand label */}
              <div className="flex items-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#348981" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="text-sm font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#2C3E50' }}>August Advisory</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#2C3E50' }}>
                Stay <span style={{ color: '#348981' }}>Informed.</span><br />
                Stay <span style={{ color: '#348981' }}>Ahead.</span>
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{ color: '#5A6C7D' }}>
                Get the latest tax, SST, e-Invoice, and regulatory updates directly on WhatsApp.
              </p>

              <div className="w-10 mb-6" style={{ borderTop: '3px solid #348981' }} />

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  'Income tax and SST updates',
                  'e-Invoice implementation and compliance guidance',
                  'LHDN, SSM, and Customs announcements',
                  'Business compliance tips and reminders',
                  'Practical insights for SME owners and entrepreneurs',
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3 slide-in-right" style={{ animationDelay: `${i * 0.15}s` }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5" style={{ backgroundColor: '#348981' }}>✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <TrackedLink
                href="https://whatsapp.com/channel/0029Vb8EDWHBKfhzGpiHA90c"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-pulse inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white hover:opacity-90 transition w-full sm:w-auto justify-center"
                style={{ backgroundColor: '#348981' }}
                eventName="whatsapp_channel_click"
                eventParams={{ location: 'homepage_channel_section' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Follow Our WhatsApp Channel
              </TrackedLink>
              <p className="text-xs mt-3" style={{ color: '#5A6C7D' }}>No spam. Unsubscribe anytime.</p>
            </div>

            {/* Right: Phone image (60%) */}
            <div className="lg:col-span-3 flex justify-center">
              <img
                src="/Images/channel.png"
                alt="August Advisory WhatsApp Channel"
                className="w-full object-contain drop-shadow-xl float-phone"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#E8F5F3' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>Get Started</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>Ready to Get Started?</h2>
          <p className="mb-8 text-base sm:text-lg" style={{ color: '#5A6C7D' }}>
            Reach out today and let's have a conversation about your business goals. We'll recommend the right approach based on where you are and where you want to go.
          </p>
          <Link href="/contact"
            className="px-6 sm:px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition inline-block w-full sm:w-auto text-center"
            style={{ backgroundColor: '#348981' }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
