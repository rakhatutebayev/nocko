import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    number: string;
    label: string;
  }>;
  variant?: 'default' | 'service' | 'service-enhanced' | 'about' | 'article';
  className?: string;
}

export default function Hero({
  title = 'Leading IT Company in Dubai | IT Support & Solutions UAE',
  subtitle = 'Professional IT company in Dubai providing network infrastructure, cloud solutions, cybersecurity, and 24/7 IT support for businesses across UAE.',
  description,
  ctaPrimary = {
    text: 'Get IT Support in UAE',
    href: '#contact',
  },
  ctaSecondary = {
    text: 'View All Services',
    href: '#services',
  },
  stats = [
    { number: '10+', label: 'Years Expert Experience' },
    { number: '50+', label: 'Clients in UAE' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' },
  ],
  variant = 'default',
  className = '',
}: HeroProps) {
  // For service-enhanced variant, match original HTML structure exactly
  if (variant === 'service-enhanced') {
    const additionalClasses = className ? className.trim() : '';
    const heroClasses = `hero hero--service-enhanced${additionalClasses ? ` ${additionalClasses}` : ''}`;

    return (
      <section className={heroClasses} itemScope itemType="https://schema.org/Service">
        <div className="container">
          <div className="hero__content">
            {title && (
              <h1 className="hero__title" itemProp="name">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="hero__subtitle" itemProp="description">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="hero__description" itemProp="description">
                {description}
              </p>
            )}
          </div>
        </div>
        {/* Schema.org meta tags for Service */}
        <meta itemProp="serviceType" content="Structured Cabling" />
        <meta itemProp="areaServed" content="United Arab Emirates" />
        <meta itemProp="provider" content="NOCKO Information Technology" />
      </section>
    );
  }

  // About variant - matches original HTML structure
  if (variant === 'about') {
    const heroClasses = [
      'hero',
      'hero--service',
      'hero--service-enhanced',
      'hero--about',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <section className={heroClasses} itemScope itemType="https://schema.org/Organization">
        <div className="container">
          <div className="hero__content">
            {title && (
              <h1 className="hero__title" itemProp="name">
                {title}
              </h1>
            )}
            {description && (
              <p className="hero__description" itemProp="description">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default variant with wrapper, CTA, and stats
  const heroClasses = [
    'hero',
    variant === 'service' && 'hero--service',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={heroClasses} itemScope itemType="https://schema.org/Organization">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            {title && (
              <h1 className="hero__title" itemProp="name">
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 className="hero__subtitle" itemProp="description">
                {subtitle}
              </h2>
            )}
            {description && (
              <p className="hero__description" itemProp="description">
                {description}
              </p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <div className="hero__cta-wrapper">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="btn btn--primary btn--hero"
                    aria-label={ctaPrimary.text}
                  >
                    {ctaPrimary.text}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="btn btn--secondary btn--hero"
                    aria-label={ctaSecondary.text}
                  >
                    {ctaSecondary.text}
                  </Link>
                )}
              </div>
            )}

            {variant === 'default' && stats && stats.length > 0 && (
              <div className="hero__stats" itemScope itemType="https://schema.org/AggregateRating">
                {stats.map((stat, index) => (
                  <div key={index} className="hero__stat">
                    <span className="hero__stat-number">{stat.number}</span>
                    <span className="hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

