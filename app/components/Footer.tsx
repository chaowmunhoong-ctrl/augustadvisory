import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">August Advisory</h3>
            <p className="text-sm">Professional accounting and CFO advisory services for Malaysian businesses.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/services#cfo" className="hover:text-white">CFO Advisory</Link></li>
              <li><Link href="/services#financial" className="hover:text-white">Financial Operations</Link></li>
              <li><Link href="/services#taxation" className="hover:text-white">Taxation</Link></li>
              <li><Link href="/services#payroll" className="hover:text-white">Payroll</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">Email: info@augustadvisory.com</p>
            <p className="text-sm mb-2">Phone: +60 (your number)</p>
            <p className="text-sm">Malaysia</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 August Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
