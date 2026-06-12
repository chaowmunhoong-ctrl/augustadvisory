import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2332' }} className="text-gray-300 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">August Advisory</h3>
            <p className="text-xs sm:text-sm leading-relaxed">Professional accounting and CFO advisory services for Malaysian businesses.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Services</h4>
            <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li><Link href="/services#cfo" className="hover:text-white transition">CFO Advisory</Link></li>
              <li><Link href="/services#financial" className="hover:text-white transition">Financial Operations</Link></li>
              <li><Link href="/services#taxation" className="hover:text-white transition">Taxation</Link></li>
              <li><Link href="/services#payroll" className="hover:text-white transition">Payroll</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
            <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition">Team</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
            <p className="text-xs sm:text-sm mb-2">Email: info@augustadvisory.com</p>
            <p className="text-xs sm:text-sm mb-2">Phone: +60 (your number)</p>
            <p className="text-xs sm:text-sm">Malaysia</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          <p>&copy; 2026 August Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
