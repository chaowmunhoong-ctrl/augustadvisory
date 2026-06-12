'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-bold tracking-widest mb-4" style={{ color: '#348981' }}>GET IN TOUCH</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            Have questions about our services? Ready to discuss your financial needs? Contact us today for a free consultation and let's explore how August Advisory can support your financial success.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#348981' }}>Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Email</h3>
                  <p className="text-gray-600">client@augustadvisory.com.my</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Phone</h3>
                  <p className="text-gray-600">+60 (your number)</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#348981' }}>Location</h3>
                  <p className="text-gray-600">Malaysia</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#348981' }}>Operating Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>

                <div className="p-6 rounded-lg mt-8" style={{ backgroundColor: '#E8F5F3' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#348981' }}>What to Expect</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Free initial consultation</li>
                    <li>• Personalized service plan</li>
                    <li>• Prompt responses to inquiries</li>
                    <li>• Expert guidance and support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#348981' }}>Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg text-green-700" style={{ backgroundColor: '#D4EDDA', borderColor: '#C3E6CB', border: '1px solid' }}>
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
                  style={{ backgroundColor: '#348981' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
