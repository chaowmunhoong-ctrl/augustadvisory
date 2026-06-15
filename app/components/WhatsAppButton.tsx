'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = 'https://wa.me/60102462151';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className="transition-all duration-300 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(10px)',
        }}
      >
        <div
          className="text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
          style={{ backgroundColor: '#348981' }}
        >
          Chat with us!
        </div>
      </div>

      {/* Button with ring animation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 flex items-center justify-center phone-ring"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="/images/whatsApp.png"
          alt="WhatsApp"
          className="w-14 h-14 rounded-full object-cover shadow-lg"
        />
      </a>
    </div>
  );
}
