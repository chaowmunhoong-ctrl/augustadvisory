import Link from 'next/link';

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
    title: 'e-Stamping',
    description: 'Fast and accurate electronic stamping for employment contracts and statutory documents.',
    icon: '✍️'
  },
  {
    title: 'e-Invoice Training',
    description: 'Get your team ready for Malaysia\'s e-Invoice mandate with practical, hands-on training.',
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
      <section style={{ backgroundColor: '#FFFFFF' }} className="pt-4 sm:pt-6 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="/Images/hero-image.png"
                alt="August Advisory Team"
                className="w-full"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-left">
              <div className="mb-1">
                <p className="text-xl sm:text-2xl font-bold tracking-widest uppercase" style={{ color: '#348981' }}>
                  Accounting & CFO Advisory
                </p>
              </div>
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#2C3E50' }}>
                Running a Business Is Hard Enough.
              </h1>
              <p className="text-base sm:text-lg mb-6 leading-relaxed font-semibold" style={{ color: '#348981' }}>
                Let Us Handle the Numbers.
              </p>

              <div className="mb-6">
                <p className="text-base leading-relaxed mb-4 text-left" style={{ color: '#5A6C7D' }}>
                  August Advisory is your one-stop business advisory partner, helping Malaysian businesses stay compliant, operate efficiently, and grow with confidence.
                </p>
                <p className="text-base leading-relaxed text-left" style={{ color: '#5A6C7D' }}>
                  Whether you're launching a startup, scaling an SME, or managing an established company, we bring the financial expertise you need without the overhead of a full in-house finance team.
                </p>
              </div>

              <Link href="/contact"
                className="inline-block text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
                style={{ backgroundColor: '#348981' }}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>Our Services</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#5A6C7D' }}>
              From day-to-day bookkeeping to strategic CFO advisory, we handle the financial side of your business so you can focus on what matters most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <div key={service.title}
                className="p-4 sm:p-6 rounded-xl hover:shadow-lg transition border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E0F2F1' }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#348981' }}>{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
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
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2C3E50' }}>Why August Advisory?</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#5A6C7D' }}>
              We don't just crunch numbers. We help you make better decisions, stay compliant, and build a stronger business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#2C3E50' }}>{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#348981' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="mb-8 text-base sm:text-lg text-white opacity-90">
            Contact us today for a free consultation and let's explore how August Advisory can support your financial success.
          </p>
          <Link href="/contact"
            className="bg-white px-6 sm:px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block w-full sm:w-auto text-center"
            style={{ color: '#348981' }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
