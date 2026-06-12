import Link from 'next/link';

const services = [
  { title: 'CFO Advisory', description: 'Strategic financial leadership and advisory for your business growth' },
  { title: 'Financial Operations Support', description: 'Streamline your accounting and financial operations' },
  { title: 'Taxation', description: 'Expert tax planning and compliance services' },
  { title: 'Payroll', description: 'Efficient and compliant payroll management' },
  { title: 'Corporate Secretarial', description: 'Complete corporate compliance and governance' },
  { title: 'e-Stamping', description: 'Simplified e-stamping services for your documents' },
  { title: 'e-Invoice Training', description: 'Comprehensive e-invoice implementation and training' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section
        className="text-white py-32 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 37, 84, 0.7), rgba(23, 37, 84, 0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4">Professional Accounting & CFO Advisory</h1>
          <p className="text-2xl mb-10 opacity-95">Trusted financial partner for Malaysian businesses</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition border-2 border-white shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-blue-900 font-bold text-lg hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose August Advisory?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced accountants and CFO professionals with proven track record</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-600">Customized solutions tailored to your business needs and goals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Latest Technology</h3>
              <p className="text-gray-600">Using modern tools and systems for efficiency and compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with August Advisory?</h2>
          <p className="mb-8 text-lg opacity-90">Let us help you achieve your financial goals</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
