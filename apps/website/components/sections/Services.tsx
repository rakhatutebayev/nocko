'use client';

import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  href: string;
  serviceType: string;
  color?: 'blue' | 'yellow' | 'green' | 'cyan' | 'lightblue' | 'red';
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: 'IT Support & Maintenance',
    description:
      'Comprehensive IT support and maintenance services for businesses across UAE. 24/7 monitoring, optimization, and proactive maintenance to keep your IT systems running smoothly. Includes helpdesk, remote support, and on-site visits.',
    href: '/services/it-support',
    serviceType: 'IT Support',
    color: 'blue',
  },
  {
    title: 'Network & Infrastructure Setup',
    description:
      'Design and deployment of high-performance corporate networks for businesses across UAE. Secure, scalable, and optimized for business growth.',
    href: '/services/structured-cabling',
    serviceType: 'Network Infrastructure',
    color: 'yellow',
  },
  {
    title: 'Cybersecurity & Data Protection',
    description:
      'Enterprise cybersecurity solutions for businesses across UAE. Security audits, firewall configuration, data encryption, and compliance frameworks to protect your business operations and ensure continuity.',
    href: '/services/cybersecurity',
    serviceType: 'Cybersecurity',
    color: 'green',
  },
  {
    title: 'Cloud Solutions & Virtualization',
    description:
      'Cloud infrastructure setup, migration, and management for businesses across UAE. Hybrid and remote workforce solutions. Scalable, cost-efficient cloud services with zero downtime.',
    href: '/services/cloud',
    serviceType: 'Cloud Computing',
    color: 'cyan',
  },
  {
    title: 'IT Consulting & Strategy',
    description:
      'Strategic IT planning and digital transformation consulting for enterprises across UAE. Technology optimization, process automation, and IT strategy aligned with your business goals.',
    href: '/services/it-consulting',
    serviceType: 'IT Consulting',
    color: 'lightblue',
  },
  {
    title: 'Hardware & Software Supply',
    description:
      'Enterprise-grade IT equipment and licensed software for businesses across UAE. End-to-end sourcing, configuration, and support. Delivered and ready for deployment.',
    href: '#hardware',
    serviceType: 'IT Equipment',
    color: 'red',
  },
];

export default function Services({
  title = 'IT Services in UAE: Network, Cloud, Security & Support',
  subtitle = 'Comprehensive IT solutions for businesses across UAE. We design, build, and maintain secure, scalable technology infrastructure that drives business growth. Serving 8+ industries with experienced IT professionals.',
  services = defaultServices,
}: ServicesProps) {
  return (
    <section className="services" id="services" itemScope itemType="https://schema.org/Service">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">{title}</h2>
          {subtitle && <p className="services__subtitle">{subtitle}</p>}
        </div>

        <div className="services__grid" itemScope itemType="https://schema.org/ItemList">
          {services.map((service, index) => (
            <article
              key={index}
              className={`service-card service-card--${service.color || 'blue'}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 className="service-card__title" itemProp="name">
                <Link href={service.href} className="service-card__link" itemProp="url">
                  {service.title}
                  <span className="visually-hidden"> in UAE</span>
                </Link>
              </h3>
              <p className="service-card__description" itemProp="description">
                {service.description}
              </p>
              <meta itemProp="serviceType" content={service.serviceType} />
              <meta itemProp="areaServed" content="United Arab Emirates" />
              <meta itemProp="provider" content="NOCKO Information Technology" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



