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
      <section
        className="text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(52, 152, 129, 0.85), rgba(41, 128, 185, 0.85)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">Accounting & CFO Advisory</h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 opacity-95">Professional financial partnership for Malaysian businesses</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
            <Link href="/services" className="bg-white text-teal-700 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg w-full sm:w-auto text-center">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition shadow-lg border-2 border-white w-full sm:w-auto text-center">
              Get in Touch
            </Link>
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
