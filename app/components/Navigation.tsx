'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#348981' }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/images/logo.png" alt="August Advisory Logo" className="h-8 sm:h-10" />
          <span className="text-lg sm:text-xl font-bold whitespace-nowrap">August Advisory</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8">
          <li><Link href="/" className="text-sm lg:text-base hover:opacity-80 transition">Home</Link></li>
          <li><Link href="/services" className="text-sm lg:text-base hover:opacity-80 transition">Services</Link></li>
          <li><Link href="/about" className="text-sm lg:text-base hover:opacity-80 transition">About</Link></li>
          <li><Link href="/team" className="text-sm lg:text-base hover:opacity-80 transition">Team</Link></li>
          <li><Link href="/blog" className="text-sm lg:text-base hover:opacity-80 transition">Blog</Link></li>
          <li><Link href="/contact" className="text-sm lg:text-base hover:opacity-80 transition">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-opacity-95 px-4 py-3 space-y-2" style={{ backgroundColor: '#2d7a70' }}>
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 hover:opacity-80 transition">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:opacity-80 transition">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:opacity-80 transition">About</Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="block py-2 hover:opacity-80 transition">Team</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block py-2 hover:opacity-80 transition">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:opacity-80 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
