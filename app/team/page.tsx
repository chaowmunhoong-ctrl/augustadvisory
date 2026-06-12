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
          <h1 className="text-5xl font-bold">Our Team</h1>
          <p className="text-xl opacity-95 mt-3">Expert professionals dedicated to your financial success</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
                <div className="bg-blue-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Ready to Work with Our Team?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how our team can support your business.
            </p>
            <a href="/contact" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
