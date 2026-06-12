export const metadata = {
  title: 'Team - August Advisory',
  description: 'Meet the expert team at August Advisory.',
};

const founder = {
  name: 'Hazel Lim',
  title: 'Founder & CFO Advisor',
  bio: 'With over 15 years of experience in accounting and financial advisory, Hazel brings a wealth of expertise to August Advisory. Her strategic approach to financial management has helped numerous Malaysian businesses achieve sustainable growth and financial excellence. Hazel is passionate about delivering personalized solutions that address the unique challenges faced by modern enterprises. Her commitment to integrity, innovation, and client success makes her a trusted advisor in the industry.',
};

export default function Team() {
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
                  <p className="text-lg font-semibold" style={{ color: '#348981' }}>Team Hero Image</p>
                  <p className="text-sm text-gray-500 mt-2">team-hero.png</p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-left">
              <div className="mb-4">
                <p className="text-base sm:text-lg font-bold tracking-widest" style={{ color: '#348981' }}>
                  OUR TEAM
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
                Expert Professionals at Your Service
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#5A6C7D' }}>
                Our team consists of experienced accountants, tax professionals, and financial advisors dedicated to delivering excellence in every engagement.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
                With decades of combined experience across various industries, we bring deep expertise and personalized service to each of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={`/images/${founder.name.split(' ')[0]}.png`}
                alt={founder.name}
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Profile Info */}
            <div>
              <p className="text-sm sm:text-base font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>
                Meet Our Founder
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#2C3E50' }}>
                {founder.name}
              </h2>
              <p className="text-lg font-semibold mb-6" style={{ color: '#348981' }}>
                {founder.title}
              </p>
              <p className="text-base leading-relaxed text-gray-700 mb-8">
                {founder.bio}
              </p>
              <a href="/contact" className="text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#348981' }}>
                Connect with Hazel
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
