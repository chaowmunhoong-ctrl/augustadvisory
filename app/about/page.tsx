export const metadata = {
  title: 'About Us - August Advisory',
  description: 'Learn about August Advisory and our mission to support Malaysian businesses.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Image placeholder */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div
                className="w-full drop-shadow-lg rounded-xl p-8 flex items-center justify-center text-center"
                style={{ backgroundColor: '#E8F5F3', minHeight: '400px' }}
              >
                <div>
                  <p className="text-lg font-semibold" style={{ color: '#348981' }}>About Us Hero Image</p>
                  <p className="text-sm text-gray-500 mt-2">about-hero.png</p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-left">
              <div className="mb-4">
                <p className="text-base sm:text-lg font-bold tracking-widest" style={{ color: '#348981' }}>
                  ABOUT US
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
                Your Trusted Financial Partner
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#5A6C7D' }}>
                Founded in 2023, August Advisory is dedicated to providing professional, reliable, and innovative accounting and financial advisory services to Malaysian businesses of all sizes.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
                We believe that strong financial management is the foundation of business success, and we're committed to being the trusted partner that helps you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#348981' }}>Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At August Advisory, we are committed to providing Malaysian businesses with professional, reliable, and innovative accounting and financial advisory services. We believe that strong financial management is the foundation of business success, and we strive to be the trusted partner that helps you achieve your goals.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#348981' }}>Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted and preferred accounting and CFO advisory firm in Malaysia, known for our expertise, integrity, and commitment to client success.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#348981' }}>Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8F5F3' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Integrity</h3>
                <p className="text-gray-600">We maintain the highest ethical standards in all our dealings and advice.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8F5F3' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Excellence</h3>
                <p className="text-gray-600">We deliver quality work that exceeds expectations and drives real value.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E8F5F3' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Collaboration</h3>
                <p className="text-gray-600">We work as partners with our clients to understand and achieve their goals.</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#348981' }}>Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in 2023, August Advisory was established with a vision to revolutionize financial advisory services in Malaysia. Our founder brought together a team of experienced accountants, tax professionals, and financial advisors to create a firm that truly understands the needs of Malaysian businesses.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over the years, we have worked with numerous businesses across various industries, helping them navigate complex financial challenges, optimize their operations, and achieve sustainable growth. Our personalized approach and deep industry knowledge have made us a trusted partner for businesses of all sizes.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="p-8 rounded-lg text-center mt-12" style={{ backgroundColor: '#E8F5F3' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#348981' }}>Want to Work with Us?</h3>
            <p className="text-gray-600 mb-6">
              Learn how August Advisory can help your business achieve financial excellence.
            </p>
            <a href="/contact" className="text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#348981' }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
