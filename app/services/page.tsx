import React from 'react';
import FadeIn from '../components/FadeIn';

export const metadata = {
  title: 'Services - August Advisory',
  description: 'Comprehensive accounting, tax, payroll, and CFO advisory services for Malaysian businesses.',
};

const iconMap: Record<string, React.ReactNode> = {
  cfo: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  financial: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  taxation: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  secretarial: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="30" r="22" fill="#e8f5f3" stroke="#222" strokeWidth="2"/>
      <circle cx="32" cy="30" r="16" fill="none" stroke="#348981" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="32" cy="30" r="10" fill="#348981" stroke="#222" strokeWidth="1.5"/>
      <text x="32" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">SSM</text>
      <text x="32" y="35" textAnchor="middle" fontSize="5" fill="white" fontFamily="system-ui,sans-serif">APPROVED</text>
      <rect x="28" y="52" width="8" height="10" rx="2" fill="#c8a96e" stroke="#222" strokeWidth="1.5"/>
      <rect x="24" y="50" width="16" height="4" rx="1" fill="#c8a96e" stroke="#222" strokeWidth="1.5"/>
    </svg>
  ),
  payroll: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  estamp: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  einvoice: (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

const serviceDetails = [
  {
    id: 'cfo',
    title: 'CFO Advisory',
    icon: '📊',
    description: 'Most growing businesses don\'t need a full-time CFO, but they do need CFO-level thinking. We step in as your strategic financial partner, giving you the clarity to make smarter decisions and the controls to protect what you\'ve built.',
    details: [
      'Financial strategy & planning',
      'Budgeting & forecasting',
      'Cost control & profitability analysis',
      'Risk management & internal controls',
      'Financial reporting & compliance',
      'Tax planning advisory',
    ],
  },
  {
    id: 'financial',
    title: 'Financial Operations Support',
    icon: '💼',
    description: 'Behind every successful business is a well-organized set of books. We manage your day-to-day financial operations so you have real-time visibility into your finances and more time to focus on running your business.',
    details: [
      'Organize and maintain financial records',
      'Monthly & quarterly management reporting',
      'Accounts payable & receivable management',
      'Bank and credit card reconciliations',
      'Accounting software setup & optimization',
    ],
  },
  {
    id: 'taxation',
    title: 'Taxation Services',
    icon: '📋',
    description: 'Tax compliance in Malaysia is complex and constantly evolving. We handle your filings, provide proactive tax planning to minimize your liabilities, and stand by your side if LHDN ever comes knocking.',
    details: [
      'Corporate income tax compliance & filing',
      'Tax planning & advisory',
      'e-Invoice implementation & management',
      'Withholding tax calculations & submissions',
      'Tax audit & investigation support',
      'Payroll-related tax filings & compliance',
    ],
  },
  {
    id: 'secretarial',
    title: 'Corporate Secretarial',
    icon: '🏢',
    description: 'From company incorporation to ongoing statutory compliance, we take care of all the regulatory requirements so your business remains in good standing with the authorities at all times.',
    details: [
      'Company incorporation & business setup',
      'Statutory compliance management',
      'Annual SSM filings & corporate records',
      'Board resolutions & meeting minutes',
      'Nominee director & shareholder services',
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll & Compliance',
    icon: '👥',
    description: 'Payroll is more than just paying salaries. It involves EPF, SOCSO, EIS, PCB, and annual submissions, all with strict deadlines. We manage the entire cycle so you stay compliant and your employees are paid accurately and on time.',
    details: [
      'Monthly payroll processing',
      'EPF, SOCSO, EIS & PCB submissions',
      'Annual Form E & EA preparation',
      'Payroll reporting & payslip generation',
      'New employee onboarding & offboarding',
    ],
  },
  {
    id: 'estamp',
    title: 'Stamp Duty & e-Stamping',
    icon: '🔏',
    description: 'Stamping your legal documents correctly is a statutory requirement in Malaysia. We handle the entire e-Stamping process on LHDN\'s portal, ensuring your documents are properly stamped, compliant, and submitted on time.',
    details: [
      'e-Stamping of tenancy agreements',
      'Stamping of loan & financing agreements',
      'Employment contract stamping',
      'Stamp duty computation & advisory',
      'Stamping of statutory & legal documents',
    ],
  },
  {
    id: 'einvoice',
    title: 'Training & Advisory Workshops',
    icon: '📱',
    description: 'Equipping business owners and their teams with the knowledge to stay compliant and operate efficiently. From e-Invoice readiness to accounting software onboarding, our practical workshops are designed for real-world application.',
    details: [
      'e-Invoice implementation & compliance training',
      'Accounting software training (SQL, Xero, Bukku)',
      'Bookkeeping fundamentals for business owners',
      'Payroll & HR compliance workshops',
      'Tax awareness sessions for SME owners',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#E8F5F3' }} className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>OUR SERVICES</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Everything Your Business Needs, Under One Roof
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            We provide tailored accounting, tax, payroll, and CFO advisory services designed around your business so you can operate with confidence, stay compliant, and focus on growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service, i) => (
              <FadeIn key={service.id} delay={(i % 6) + 1 as 1|2|3|4|5|6}>
              <div
                id={service.id}
                className="rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                style={{ backgroundColor: '#F0FFFE', borderTop: '4px solid #348981' }}
              >
                <div className="mb-4">{iconMap[service.id]}</div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#348981' }}>{service.title}</h2>
                <p className="text-sm text-gray-700 mb-5 flex-grow">{service.description}</p>
                <ul className="space-y-2 border-t pt-5" style={{ borderColor: '#E0F2F1' }}>
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <span className="font-bold mr-2" style={{ color: '#348981' }}>✓</span>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </FadeIn>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 rounded-lg text-center" style={{ backgroundColor: '#E8F5F3' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#2C3E50' }}>Not Sure Where to Start?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Every business is different. Reach out to us and we'll recommend the right combination of services based on your stage, industry, and goals. No obligation.
            </p>
            <a href="/contact" className="text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#348981' }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
