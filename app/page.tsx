import React from 'react';
import Link from 'next/link';
import FadeIn from './components/FadeIn';
import TealLine from './components/TealLine';
import TrackedLink from './components/TrackedLink';
import NewsletterSection from './components/NewsletterSection';
import LineIcon, { IconBadge } from './components/LineIcon';

const serviceIcon: Record<string, string> = {
  'CFO Advisory': 'cfo', 'Financial Operations': 'financial', 'Taxation': 'taxation', 'Payroll & Compliance': 'payroll',
  'Corporate Secretarial': 'secretarial', 'Stamp Duty & e-Stamping': 'estamp', 'Training & Advisory Workshops': 'training',
};
const serviceLink: Record<string, string> = {
  'CFO Advisory': 'cfo', 'Financial Operations': 'financial', 'Taxation': 'taxation', 'Payroll & Compliance': 'payroll',
  'Corporate Secretarial': 'secretarial', 'Stamp Duty & e-Stamping': 'estamp', 'Training & Advisory Workshops': 'einvoice',
};
const featureIcon: Record<string, string> = {
  'One-Stop Advisory Partner': 'onestop', 'Tailored to Your Business': 'tailored', 'Built for Malaysian Businesses': 'malaysia',
};

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
    title: 'Stamp Duty & e-Stamping',
    description: 'Fast and accurate electronic stamping for tenancy agreements, loan agreements, and statutory documents.',
    icon: '🔏'
  },
  {
    title: 'Training & Advisory Workshops',
    description: 'Practical workshops on e-Invoice compliance, accounting software (SQL, Xero, Bukku), and tax awareness for SMEs.',
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
        className="relative w-full flex items-center overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* Ken Burns background */}
        <div
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: 'url(/Images/hero-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 70%)' }} />
        {/* Phones: the text sits over the photo, so add an even white layer to keep it readable */}
        <div className="absolute inset-0 sm:hidden" style={{ background: 'rgba(255,255,255,0.85)' }} />

        {/* Text block on the right */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex justify-end">
          <div className="w-full sm:w-1/2 lg:w-2/5 text-left py-16">
            <p className="hero-text-1 text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>
              Accounting & CFO Advisory
            </p>
            <h1 className="hero-text-2 text-4xl sm:text-5xl font-extrabold mb-5 leading-tight uppercase" style={{ color: '#2C3E50' }}>
              Professional & Trusted Accounting
            </h1>
            <p className="hero-text-3 text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#5A6C7D' }}>
              August Advisory is your one-stop business advisory partner, helping Malaysian businesses stay compliant, operate efficiently, and grow with confidence.
            </p>
            <div className="hero-text-4 flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-block px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition"
                style={{ backgroundColor: '#348981' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-sm font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#348981' }}>What we do</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: '#2C3E50' }}>Our Services</h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
              From day-to-day bookkeeping to strategic CFO advisory, we handle the financial side of your business so you can focus on what matters most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(service => (
              <Link key={service.title} href={`/services#${serviceLink[service.title]}`}
                className="group flex flex-col p-6 rounded-2xl border bg-white transition-colors duration-200 hover:border-[#348981] hover:shadow-md"
                style={{ borderColor: '#E3EAED' }}>
                <IconBadge name={serviceIcon[service.title]} />
                <h3 className="text-lg font-semibold mt-5 mb-2" style={{ color: '#2C3E50' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#5A6C7D' }}>{service.description}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#348981' }}>Learn more <LineIcon name="arrow" size={16} /></span>
              </Link>
            ))}
            {/* 8th tile fills the grid: help choosing */}
            <div className="flex flex-col p-6 rounded-2xl" style={{ backgroundColor: '#2C3E50' }}>
              <h3 className="text-lg font-semibold mb-2 text-white">Not sure where to start?</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#C9D6DF' }}>Every business is different. Reach out and we&apos;ll recommend the right combination of services for your stage, industry and goals.</p>
              <Link href="/contact" className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm text-white hover:opacity-90 transition" style={{ backgroundColor: '#348981' }}>Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" style={{ backgroundColor: '#F4F8F8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-sm font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#348981' }}>Why choose us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: '#2C3E50' }}>Why August Advisory?</h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
              We don&apos;t just crunch numbers. We help you make better decisions, stay compliant, and build a stronger business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map(feature => (
              <div key={feature.title} className="h-full p-7 rounded-2xl bg-white border" style={{ borderColor: '#E3EAED' }}>
                <IconBadge name={featureIcon[feature.title]} />
                <h3 className="text-lg font-semibold mt-5 mb-2" style={{ color: '#2C3E50' }}>{feature.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#5A6C7D' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#348981' }}>Get started</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: '#2C3E50' }}>Ready to Get Started?</h2>
          <p className="mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#5A6C7D' }}>
            Reach out today and let&apos;s have a conversation about your business goals. We&apos;ll recommend the right approach based on where you are and where you want to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-8 py-3 rounded-full font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: '#348981' }}>Book a Consultation</Link>
            <a href="https://wa.me/60102462151" className="px-8 py-3 rounded-full font-semibold border transition hover:bg-[#E8F5F3]" style={{ borderColor: '#348981', color: '#348981' }}>WhatsApp 010-246 2151</a>
          </div>
        </div>
      </section>
    </div>
  );
}
