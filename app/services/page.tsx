export const metadata = {
  title: 'Services - August Advisory',
  description: 'Our comprehensive accounting and CFO advisory services for Malaysian businesses.',
};

const serviceDetails = [
  {
    id: 'cfo',
    title: 'CFO Advisory',
    icon: '📊',
    description: 'Strategic financial leadership and guidance for business growth',
    details: [
      'Financial planning and forecasting',
      'Budgeting and cost management',
      'Financial analysis and reporting',
      'Strategic decision support',
      'Risk management',
    ],
  },
  {
    id: 'financial',
    title: 'Financial Operations Support',
    icon: '💼',
    description: 'Streamline your accounting operations with our professional support',
    details: [
      'General accounting services',
      'Month-end and year-end closing',
      'Financial statement preparation',
      'Internal controls setup',
      'Accounting system implementation',
    ],
  },
  {
    id: 'taxation',
    title: 'Taxation',
    icon: '📋',
    description: 'Expert tax planning and compliance services',
    details: [
      'Corporate income tax filing',
      'Personal income tax advisory',
      'Sales and Service Tax (SST) compliance',
      'Tax planning and optimization',
      'Tax dispute resolution',
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll',
    icon: '👥',
    description: 'Efficient and compliant payroll management',
    details: [
      'Monthly payroll processing',
      'Statutory compliance (EPF, SOCSO, etc.)',
      'Payroll tax management',
      'Payroll system setup and support',
      'Employee benefits administration',
    ],
  },
  {
    id: 'secretarial',
    title: 'Corporate Secretarial',
    icon: '🏢',
    description: 'Complete corporate compliance and governance services',
    details: [
      'Company registration and incorporation',
      'Annual filing with SSM',
      'Board resolutions and minutes',
      'Statutory compliance',
      'Corporate governance advisory',
    ],
  },
  {
    id: 'estamping',
    title: 'e-Stamping',
    icon: '✍️',
    description: 'Simplified electronic stamping services for your documents',
    details: [
      'Document e-stamping assistance',
      'Electronic stamp processing',
      'Stamp duty calculation',
      'Document archival support',
      'Consultation on stamping requirements',
    ],
  },
  {
    id: 'einvoice',
    title: 'e-Invoice Training',
    icon: '📱',
    description: 'Comprehensive e-invoice implementation and training',
    details: [
      'e-Invoice system setup',
      'Staff training and support',
      'Integration with accounting systems',
      'Compliance documentation',
      'Ongoing technical support',
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
            Comprehensive Accounting & CFO Solutions
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            We provide tailored accounting and financial advisory services designed to meet the unique needs of your business. From tax planning to CFO advisory, our expert team is here to support your financial success.
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
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3" style={{ color: '#348981' }}>{service.title}</h2>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-5 flex-grow">{service.description}</p>

                {/* Details List */}
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
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#348981' }}>Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how we can tailor our services to meet your specific business needs.
            </p>
            <a href="/contact" className="text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#348981' }}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
