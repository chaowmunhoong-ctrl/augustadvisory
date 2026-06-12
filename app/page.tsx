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
      <section style={{ backgroundColor: '#E8F5F3' }} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left side - Image placeholder */}
            <div className="flex justify-center md:justify-start">
              <div
                className="w-full max-w-sm h-64 sm:h-80 md:h-96 rounded-2xl flex items-center justify-center text-gray-400"
                style={{ backgroundColor: '#D4EBE8', border: '2px dashed #348981' }}
              >
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-500">Image Placeholder</p>
                  <p className="text-sm text-gray-400 mt-2">Your professional image here</p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#2C3E50' }}>
                Professional Accounting & CFO Advisory
              </h1>
              <p className="text-base sm:text-lg mb-6" style={{ color: '#348981' }} className="font-semibold">
                for Malaysian Businesses
              </p>

              {/* Toggle Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  className="px-4 sm:px-6 py-2 rounded-full font-semibold text-white transition"
                  style={{ backgroundColor: '#348981' }}
                >
                  New Client
                </button>
                <button
                  className="px-4 sm:px-6 py-2 rounded-full font-semibold border-2 transition hover:opacity-80"
                  style={{ borderColor: '#348981', color: '#348981', backgroundColor: 'white' }}
                >
                  Existing Client
                </button>
              </div>

              {/* Tagline */}
              <p className="text-gray-700 mb-6 font-medium">
                Your Trusted Financial Partner for Seamless Growth
              </p>

              {/* Search Input and Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your company name..."
                  className="flex-1 px-4 sm:px-6 py-3 rounded-full border-2 focus:outline-none focus:border-teal-600"
                  style={{ borderColor: '#348981' }}
                />
                <button
                  className="px-6 sm:px-8 py-3 rounded-full font-bold text-white transition hover:opacity-90 w-full sm:w-auto"
                  style={{ backgroundColor: '#E94B8C' }}
                >
                  Get Started
                </button>
              </div>
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
