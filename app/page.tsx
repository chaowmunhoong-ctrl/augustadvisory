import Link from 'next/link';

const services = [
  {
    title: 'CFO Advisory',
    description: 'Strategic financial leadership and advisory for your business growth',
    icon: '📊'
  },
  {
    title: 'Financial Operations Support',
    description: 'Streamline your accounting and financial operations',
    icon: '💼'
  },
  {
    title: 'Taxation',
    description: 'Expert tax planning and compliance services',
    icon: '📋'
  },
  {
    title: 'Payroll',
    description: 'Efficient and compliant payroll management',
    icon: '👥'
  },
  {
    title: 'Corporate Secretarial',
    description: 'Complete corporate compliance and governance',
    icon: '🏢'
  },
  {
    title: 'e-Stamping',
    description: 'Simplified e-stamping services for your documents',
    icon: '✍️'
  },
  {
    title: 'e-Invoice Training',
    description: 'Comprehensive e-invoice implementation and training',
    icon: '📱'
  },
];

const features = [
  { title: 'Expert Team', description: 'Experienced professionals dedicated to your success' },
  { title: 'Personalized Service', description: 'Solutions tailored to your unique business needs' },
  { title: 'Trusted Partner', description: 'Reliable support for your financial growth' },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F0FFFE' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Image (half width) */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/Images/hero-image.png"
                alt="August Advisory Team"
                className="w-full drop-shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-left">
              <div className="mb-4">
                <p className="text-sm sm:text-base font-bold tracking-widest" style={{ color: '#348981' }}>
                  ACCOUNTING & CFO ADVISORY
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
                Professional Financial Advisory
              </h1>
              <p className="text-lg sm:text-xl mb-6 leading-relaxed" style={{ color: '#5A6C7D' }}>
                for Malaysian Businesses
              </p>

              {/* August Advisory Description */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-left" style={{ color: '#2C3E50' }}>
                  About August Advisory
                </h3>
                <p className="text-base leading-relaxed mb-4 text-left" style={{ color: '#5A6C7D' }}>
                  August Advisory is a trusted financial advisory firm serving Malaysian businesses of all sizes. We provide comprehensive accounting, tax planning, and CFO services tailored to your unique business needs.
                </p>
                <p className="text-base leading-relaxed text-left" style={{ color: '#5A6C7D' }}>
                  Our team of experienced professionals is committed to helping you achieve financial excellence through expert guidance, compliance management, and strategic financial planning.
                </p>
              </div>

              <p className="text-base sm:text-lg leading-relaxed font-medium text-left" style={{ color: '#348981' }}>
                Your trusted partner for seamless financial growth and compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p style={{ color: '#348981' }} className="text-xs sm:text-sm font-bold tracking-wide mb-2">OUR EXPERTISE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#2C3E50' }}>Services We Offer</h2>
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
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#E0F2F1' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p style={{ color: '#348981' }} className="text-xs sm:text-sm font-bold tracking-wide mb-2">WHY CHOOSE US</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#2C3E50' }}>Why August Advisory?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div
                  className="rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl font-bold"
                  style={{ backgroundColor: '#348981', color: 'white' }}
                >
                  ✓
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#2C3E50' }}>{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#348981' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Ready to Get Started?</h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-white opacity-90">Let us help you achieve your financial goals</p>
          <Link href="/contact"
            className="bg-white px-6 sm:px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block w-full sm:w-auto text-center"
            style={{ color: '#348981' }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
