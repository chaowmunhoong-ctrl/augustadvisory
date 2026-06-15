'use client';

import { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${delay ? `fade-up-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}
