export const metadata = {
  title: 'Team - August Advisory',
  description: 'Meet the expert team at August Advisory.',
};

const founder = {
  name: 'Hazel Lim',
  title: 'Founder & CFO Advisor',
  bio: 'Hazel founded August Advisory with a clear purpose: to give Malaysian businesses access to the kind of financial expertise that was once reserved for large corporations. With a background spanning accounting, tax compliance, and CFO-level advisory, she has helped businesses at every stage navigate complex financial challenges and build stronger foundations for growth. Hazel believes that great financial advice should be honest, practical, and delivered in plain language. That is exactly the standard she holds August Advisory to, every day.',
};

export default function Team() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-base sm:text-lg font-bold tracking-widest mb-4" style={{ color: '#348981' }}>OUR TEAM</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            The People Behind Your Financial Success
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            Our team brings together experienced accountants, tax professionals, and financial advisors who are genuinely invested in your business outcomes, not just your compliance deadlines.
          </p>
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
