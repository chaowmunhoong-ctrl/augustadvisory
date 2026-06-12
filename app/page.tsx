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
      <section
        className="relative w-full flex items-center"
        style={{
          backgroundImage: 'url(/Images/hero-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px',
        }}
      >
        {/* Light overlay on left, stronger on right for text readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 70%)' }} />

        {/* Text block on the right */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex justify-end">
          <div className="w-full sm:w-1/2 lg:w-2/5 text-left py-16">
            <p className="text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>
              Accounting & CFO Advisory
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight uppercase" style={{ color: '#2C3E50' }}>
              Professional & Trusted Accounting
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#4A5568' }}>
              August Advisory is your one-stop business advisory partner, helping Malaysian businesses stay compliant, operate efficiently, and grow with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-block px-8 py-3 rounded font-bold text-white hover:opacity-90 transition"
                style={{ backgroundColor: '#348981' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>What We Do</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>Our Services</h2>
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
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>{service.title}</h3>
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
            <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>Why August Advisory?</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#5A6C7D' }}>
              We don't just crunch numbers. We help you make better decisions, stay compliant, and build a stronger business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2C3E50' }}>{feature.title}</h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Channel Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden grid md:grid-cols-2 items-center" style={{ backgroundColor: '#F0FFFE', border: '2px solid #25D366' }}>
            {/* Left: Text */}
            <div className="p-8 sm:p-12">
              <p className="text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#25D366' }}>AUGUST ADVISORY CHANNEL</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug" style={{ color: '#2C3E50' }}>
                Stay Ahead of Every Regulation Change
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: '#5A6C7D' }}>
                Follow our WhatsApp Channel for timely updates on tax changes, SST, Companies Act, and government regulations, along with practical insights to help your business stay compliant and make informed decisions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Tax & SST regulation updates',
                  'Companies Act and SSM announcements',
                  'e-Invoice and payroll compliance news',
                  'Practical tips for Malaysian business owners',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-lg" style={{ color: '#25D366' }}>✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://whatsapp.com/channel/0029Vb8EDWHBKfhzGpiHA90c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Follow the Channel
              </a>
            </div>
            {/* Right: Visual */}
            <div className="hidden md:flex flex-col items-center justify-center p-12 gap-6" style={{ backgroundColor: '#E8F5F3' }}>
              <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#25D366' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <p className="text-center font-bold text-lg" style={{ color: '#2C3E50' }}>August Advisory</p>
              <p className="text-center text-sm" style={{ color: '#5A6C7D' }}>WhatsApp Channel</p>
              <div className="flex flex-col gap-2 w-full max-w-xs">
                {['📢 Tax Updates', '🏢 SSM Announcements', '📋 e-Invoice News', '💡 Business Tips'].map((tag) => (
                  <div key={tag} className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-center shadow-sm" style={{ color: '#348981' }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#E8F5F3' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>Ready to Get Started?</h2>
          <p className="mb-8 text-base sm:text-lg" style={{ color: '#5A6C7D' }}>
            Reach out today and let's have a conversation about your business goals. We'll recommend the right approach based on where you are and where you want to go.
          </p>
          <Link href="/contact"
            className="px-6 sm:px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition inline-block w-full sm:w-auto text-center"
            style={{ backgroundColor: '#348981' }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
