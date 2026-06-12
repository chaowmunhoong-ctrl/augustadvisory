import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#348981' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">August Advisory</h3>
            <p className="text-sm opacity-90">Your one-stop accounting and CFO advisory partner, helping Malaysian businesses stay compliant, grow confidently, and thrive.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/services#cfo" className="opacity-80 hover:opacity-100">CFO Advisory</Link></li>
              <li><Link href="/services#financial" className="opacity-80 hover:opacity-100">Financial Operations</Link></li>
              <li><Link href="/services#taxation" className="opacity-80 hover:opacity-100">Taxation</Link></li>
              <li><Link href="/services#payroll" className="opacity-80 hover:opacity-100">Payroll</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/about" className="opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link href="/team" className="opacity-80 hover:opacity-100">Team</Link></li>
              <li><Link href="/blog" className="opacity-80 hover:opacity-100">Blog</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2 opacity-90">Email: client@augustadvisory.com.my</p>
            <p className="text-sm mb-2 opacity-90">Phone: +60 (your number)</p>
            <p className="text-sm opacity-90">Malaysia</p>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2026 August Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
