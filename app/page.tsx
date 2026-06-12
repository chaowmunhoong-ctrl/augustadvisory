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
        className="text-white py-32 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(52, 152, 129, 0.85), rgba(41, 128, 185, 0.85)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4">Accounting & CFO Advisory</h1>
          <p className="text-2xl mb-10 opacity-95">Professional financial partnership for Malaysian businesses</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services" className="bg-white text-teal-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition shadow-lg border-2 border-white">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: '#348981' }} className="text-sm font-bold tracking-wide mb-2">OUR EXPERTISE</p>
            <h2 className="text-4xl font-bold" style={{ color: '#2C3E50' }}>Services We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title}
                className="p-6 rounded-xl hover:shadow-lg transition border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E0F2F1' }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#348981' }}>{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services"
              className="font-bold text-lg hover:underline transition"
              style={{ color: '#348981' }}
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6" style={{ backgroundColor: '#E0F2F1' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: '#348981' }} className="text-sm font-bold tracking-wide mb-2">WHY CHOOSE US</p>
            <h2 className="text-4xl font-bold" style={{ color: '#2C3E50' }}>Why August Advisory?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: '#348981', color: 'white' }}
                >
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2C3E50' }}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#348981' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-white opacity-90">Let us help you achieve your financial goals</p>
          <Link href="/contact"
            className="bg-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block"
            style={{ color: '#348981' }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
