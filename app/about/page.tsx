export const metadata = {
  title: 'About Us - August Advisory',
  description: 'Learn about August Advisory and our mission to support Malaysian businesses.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Header with Background Image */}
      <section
        className="text-white py-20 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(52, 152, 129, 0.85), rgba(41, 128, 185, 0.85)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold">About August Advisory</h1>
          <p className="text-xl opacity-95 mt-3">Your trusted partner in financial excellence</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At August Advisory, we are committed to providing Malaysian businesses with professional, reliable, and innovative accounting and financial advisory services. We believe that strong financial management is the foundation of business success, and we strive to be the trusted partner that helps you achieve your goals.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted and preferred accounting and CFO advisory firm in Malaysia, known for our expertise, integrity, and commitment to client success.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We maintain the highest ethical standards in all our dealings and advice.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We deliver quality work that exceeds expectations and drives real value.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We work as partners with our clients to understand and achieve their goals.</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in 2023, August Advisory was established with a vision to revolutionize financial advisory services in Malaysia. Our founder brought together a team of experienced accountants, tax professionals, and financial advisors to create a firm that truly understands the needs of Malaysian businesses.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over the years, we have worked with numerous businesses across various industries, helping them navigate complex financial challenges, optimize their operations, and achieve sustainable growth. Our personalized approach and deep industry knowledge have made us a trusted partner for businesses of all sizes.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-50 p-8 rounded-lg text-center mt-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Want to Work with Us?</h3>
            <p className="text-gray-600 mb-6">
              Learn how August Advisory can help your business achieve financial excellence.
            </p>
            <a href="/contact" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
