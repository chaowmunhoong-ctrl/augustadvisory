export const metadata = {
  title: 'Team - August Advisory',
  description: 'Meet the expert team at August Advisory.',
};

const team = [
  {
    name: 'Chao Wm Hoong',
    title: 'Founder & CFO Advisor',
    bio: 'Experienced financial leader with 15+ years in accounting and CFO advisory services.',
  },
  {
    name: 'Team Member Name',
    title: 'Senior Accountant',
    bio: 'Specializing in corporate accounting and financial reporting.',
  },
  {
    name: 'Team Member Name',
    title: 'Tax Specialist',
    bio: 'Expert in tax planning, compliance, and optimization strategies.',
  },
];

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
                <p className="text-sm sm:text-base font-bold tracking-widest" style={{ color: '#348981' }}>
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

      {/* Team Members */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="rounded-lg overflow-hidden hover:shadow-lg transition" style={{ backgroundColor: '#F9FFFE' }}>
                {/* Member Image Placeholder */}
                <div
                  className="w-full flex items-center justify-center text-center"
                  style={{ backgroundColor: '#E8F5F3', minHeight: '200px' }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#348981' }}>Member Photo</p>
                    <p className="text-xs text-gray-500 mt-1">team-{member.name.toLowerCase().replace(/\s+/g, '-')}.png</p>
                  </div>
                </div>
                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>{member.name}</h3>
                  <p className="font-semibold mb-3" style={{ color: '#348981' }}>{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 p-8 rounded-lg text-center" style={{ backgroundColor: '#E8F5F3' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#348981' }}>Ready to Work with Our Team?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how our team can support your business.
            </p>
            <a href="/contact" className="text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#348981' }}>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
