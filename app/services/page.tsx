export const metadata = {
  title: 'Services - August Advisory',
  description: 'Comprehensive accounting, tax, payroll, and CFO advisory services for Malaysian businesses.',
};

const serviceDetails = [
  {
    id: 'cfo',
    title: 'CFO Advisory',
    icon: '📊',
    description: 'Most growing businesses don\'t need a full-time CFO — but they do need CFO-level thinking. We step in as your strategic financial partner, giving you the clarity to make smarter decisions and the controls to protect what you\'ve built.',
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
    description: 'Behind every successful business is a well-organized set of books. We manage your day-to-day financial operations so you have real-time visibility into your finances — and more time to focus on running your business.',
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
    title: 'Payroll, Compliance & e-Stamping',
    icon: '👥',
    description: 'Payroll is more than just paying salaries. It involves EPF, SOCSO, EIS, PCB, and annual submissions — all with strict deadlines. We manage the entire cycle so you stay compliant and your employees are paid accurately and on time.',
    details: [
      'Monthly payroll processing',
      'EPF, SOCSO, EIS & PCB submissions',
      'Annual Form E & EA preparation',
      'e-Stamping of employment contracts',
      'Stamping of statutory documents',
    ],
  },
  {
    id: 'einvoice',
    title: 'e-Invoice Training',
    icon: '📱',
    description: 'Malaysia\'s e-Invoice mandate is rolling out across businesses of all sizes. Don\'t get caught unprepared. Our training programme walks your team through the requirements and the practical steps to implement it in your business.',
    details: [
      'Introduction to Malaysia e-Invoice requirements',
      'e-Invoice framework & compliance overview',
      'Consolidated & self-billed invoice handling',
      'Practical implementation strategies',
      'Integration with existing accounting systems',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-bold tracking-widest mb-4" style={{ color: '#348981' }}>OUR SERVICES</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Everything Your Business Needs, Under One Roof
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            We provide tailored accounting, tax, payroll, and CFO advisory services designed around your business — so you can operate with confidence, stay compliant, and focus on growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-xl p-8 shadow-md hover:shadow-lg transition h-full flex flex-col"
                style={{ backgroundColor: '#F0FFFE', borderTop: '4px solid #348981' }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
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
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 rounded-lg text-center" style={{ backgroundColor: '#E8F5F3' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#348981' }}>Not Sure Where to Start?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Every business is different. Reach out to us and we'll recommend the right combination of services based on your stage, industry, and goals — no obligation.
            </p>
            <a href="/contact" className="text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#348981' }}>
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
