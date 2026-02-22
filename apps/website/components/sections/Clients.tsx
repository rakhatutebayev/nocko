'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  alt: string;
  ariaLabel: string;
}

interface ClientsProps {
  title?: string;
  subtitle?: string;
  clients?: Client[];
  ctaText?: string;
  ctaHref?: string;
}

const defaultClients: Client[] = [
  {
    name: 'FH Fundamental',
    logo: '/images/clients/fh.svg',
    alt: 'FH Fundamental - NOCKO IT Client in UAE | Healthcare IT Solutions',
    ariaLabel: 'FH Fundamental - NOCKO IT Client in UAE',
  },
  {
    name: 'Global Service Solution',
    logo: '/images/clients/gss.svg',
    alt: 'Global Service Solution - NOCKO IT Client in Dubai',
    ariaLabel: 'Global Service Solution - NOCKO IT Client in Dubai',
  },
  {
    name: 'Projection',
    logo: '/images/clients/projection.svg',
    alt: 'Projection - NOCKO IT Client in UAE',
    ariaLabel: 'Projection - NOCKO IT Client in UAE',
  },
  {
    name: 'Scalini',
    logo: '/images/clients/scalini.svg',
    alt: 'Scalini - NOCKO IT Client in Dubai',
    ariaLabel: 'Scalini - NOCKO IT Client in Dubai',
  },
  {
    name: 'Solus Insurance',
    logo: '/images/clients/solus.svg',
    alt: 'Solus Insurance - NOCKO IT Client in UAE',
    ariaLabel: 'Solus Insurance - NOCKO IT Client in UAE',
  },
  {
    name: 'TechnoHub',
    logo: '/images/clients/technohub.svg',
    alt: 'TechnoHub - NOCKO IT Client in Dubai',
    ariaLabel: 'TechnoHub - NOCKO IT Client in Dubai',
  },
];

export default function Clients({
  title = 'Trusted IT Partner for Businesses in UAE',
  subtitle = 'Leading companies across UAE choose NOCKO for their IT infrastructure and support needs. From healthcare and finance to retail and education, we serve businesses across 8+ industries with modern solutions and dedicated expertise.',
  clients = defaultClients,
  ctaText = 'Become Our Client',
  ctaHref = '#contact',
}: ClientsProps) {
  return (
    <section className="clients" id="clients">
      <div className="container clients__container">
        <div className="clients__header">
          <h2 className="clients__title">{title}</h2>
          {subtitle && <p className="clients__subtitle">{subtitle}</p>}
        </div>

        <div className="clients__logos" itemScope itemType="https://schema.org/ItemList">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-logo"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <a
                href="#clients"
                className="client-logo__link"
                aria-label={client.ariaLabel}
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  itemProp="logo"
                  width={150}
                  height={60}
                  loading="lazy"
                />
                <meta itemProp="name" content={client.name} />
              </a>
            </div>
          ))}
        </div>

        {ctaText && (
          <div className="clients__cta">
            {ctaHref.startsWith('#') ? (
              <a
                href={ctaHref}
                className="btn btn--primary"
                onClick={(e) => {
                  if (ctaHref === '#contact' && typeof window !== 'undefined') {
                    e.preventDefault();
                    window.dispatchEvent(new Event('nocko:open-contact'));
                  }
                }}
              >
                {ctaText}
              </a>
            ) : (
              <Link href={ctaHref} className="btn btn--primary">
                {ctaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}






