'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

// Digital business card pages (/card/*) render standalone, without the
// marketing site's nav bar, footer, or floating WhatsApp button - they're
// meant to feel like a card someone taps open, not a page on the website.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCard = pathname?.startsWith('/card');

  if (isCard) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
