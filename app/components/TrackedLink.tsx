'use client';

import { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEvent } from '../lib/gtag';

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventParams?: Record<string, unknown>;
  children: ReactNode;
}

export default function TrackedLink({ eventName, eventParams, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(eventName, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
