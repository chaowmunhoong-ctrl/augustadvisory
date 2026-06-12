export const metadata = {
  title: 'About Us - August Advisory',
  description: 'Learn about August Advisory, your trusted accounting and CFO advisory partner for Malaysian businesses.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>ABOUT US</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Your Trusted Financial Partner
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            August Advisory was built on a simple belief: that every Malaysian business, regardless of size, deserves access to professional financial guidance that is honest, practical, and genuinely useful.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Mission */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#348981' }}>Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower Malaysian businesses with the financial clarity, compliance confidence, and strategic insight they need to grow sustainably, through professional, reliable, and personalized accounting and advisory services that make a real difference.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#348981' }}>Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted and preferred accounting and CFO advisory firm in Malaysia, known not just for our expertise, but for the relationships we build and the results we deliver for every client we serve.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#348981' }}>Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8F5F3' }}>
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Integrity</h3>
                <p className="text-gray-600">We give honest advice, even when it's not what you want to hear. Our clients trust us because we always put their best interests first.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8F5F3' }}>
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Excellence</h3>
                <p className="text-gray-600">We hold ourselves to a high standard in everything we do, from the accuracy of a tax filing to the quality of a financial report.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8F5F3' }}>
                <div className="text-4xl mb-3">🤲</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Collaboration</h3>
                <p className="text-gray-600">We work alongside you, not just for you. Understanding your business deeply is how we deliver advice that actually moves the needle.</p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#348981' }}>Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              August Advisory was founded with a clear purpose: to give Malaysian businesses access to the kind of financial expertise that was once reserved only for large corporations. Too many SMEs and startups were navigating complex tax laws, compliance requirements, and financial decisions without the right guidance, and that needed to change.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we serve businesses across a wide range of industries, from early-stage startups setting up their first company to established businesses looking for a reliable long-term advisory partner. Our approach is always the same: understand your business first, then deliver solutions that fit.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="p-8 rounded-lg text-center mt-12" style={{ backgroundColor: '#E8F5F3' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#348981' }}>Let's Work Together</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Whether you're just getting started or looking to level up your financial operations, we'd love to learn about your business and explore how we can help.
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
