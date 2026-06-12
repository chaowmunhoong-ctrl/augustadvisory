import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          August Advisory
        </Link>
        <ul className="flex gap-8">
          <li><Link href="/" className="hover:text-blue-200 transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-200 transition">Services</Link></li>
          <li><Link href="/about" className="hover:text-blue-200 transition">About</Link></li>
          <li><Link href="/team" className="hover:text-blue-200 transition">Team</Link></li>
          <li><Link href="/blog" className="hover:text-blue-200 transition">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-blue-200 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
