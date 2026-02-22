'use client';

import React from 'react';

type Props = {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function ContactCtaLink({ href, className, ariaLabel, children }: Props) {
  const isContact = href === '#contact';

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        if (!isContact) return;
        e.preventDefault();
        window.dispatchEvent(new Event('nocko:open-contact'));
      }}
    >
      {children}
    </a>
  );
}

