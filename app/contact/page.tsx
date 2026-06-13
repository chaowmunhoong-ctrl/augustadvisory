export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#E8F5F3' }} className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>GET IN TOUCH</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Let's Talk About Your Business
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            Have questions about our services? Not sure where to start? Reach out and let's have a conversation. We'd love to learn about your business and explore how we can support your growth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#2C3E50' }}>Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Email</h3>
                  <p className="text-gray-600">client@augustadvisory.com.my</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Phone</h3>
                  <p className="text-gray-600">03-3358 2128</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>WhatsApp</h3>
                  <a href="https://wa.me/60102462151" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
                    010-246 2151
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Head Office (Klang)</h3>
                  <p className="text-gray-600">No. 12-1, Jalan Astaka 1C/KU2,</p>
                  <p className="text-gray-600">Bandar Bukit Raja, 41050 Klang,</p>
                  <p className="text-gray-600">Selangor</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>KL Office</h3>
                  <p className="text-gray-600">B-1-11, Northpoint, Mid Valley City,</p>
                  <p className="text-gray-600">No. 1, Medan Syed Putra Utara,</p>
                  <p className="text-gray-600">59200 Kuala Lumpur</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#348981' }}>Operating Hours</h3>
                  <p className="text-gray-600 mb-2">Monday to Friday: 9:00 AM to 6:00 PM</p>
                  <p className="text-gray-600">Saturday and Sunday: Closed</p>
                </div>

                <div className="p-6 rounded-lg mt-8" style={{ backgroundColor: '#E8F5F3' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#348981' }}>What to Expect</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Complimentary initial consultation</li>
                    <li>• We listen first, then recommend</li>
                    <li>• A tailored plan based on your needs</li>
                    <li>• Prompt, professional responses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#E8F5F3' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#348981' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>

                <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: '#348981' }}>CHAT WITH US</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2C3E50' }}>
                  Prefer a Quick Chat?
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#5A6C7D' }}>
                  Send us a message on WhatsApp and we'll get back to you as soon as we can. It's the fastest way to reach us.
                </p>

                <a
                  href="https://wa.me/60102462151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition"
                  style={{ backgroundColor: '#348981' }}
                >
                  Message Us on WhatsApp
                </a>

                <p className="text-sm mt-4" style={{ color: '#5A6C7D' }}>010-246 2151</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
