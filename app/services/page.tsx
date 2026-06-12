export const metadata = {
  title: 'Services - August Advisory',
  description: 'Our comprehensive accounting and CFO advisory services for Malaysian businesses.',
};

const serviceDetails = [
  {
    id: 'cfo',
    title: 'CFO Advisory',
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
      {/* Header with Background Image */}
      <section
        className="text-white py-20 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(52, 152, 129, 0.85), rgba(41, 128, 185, 0.85)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl opacity-95 mt-3">Comprehensive accounting and CFO solutions for your business</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {serviceDetails.map((service) => (
              <div key={service.id} id={service.id} className="border-l-4 border-blue-900 pl-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-3">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <span className="text-blue-900 font-bold mr-3">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how we can tailor our services to meet your specific business needs.
            </p>
            <a href="/contact" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
