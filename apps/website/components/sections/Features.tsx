'use client';

import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
  iconId: string;
  link: string;
  linkText: string;
  linkAriaLabel: string;
  serviceType: string;
}

interface FeaturesProps {
  title?: string;
  intro?: string;
  features?: Feature[];
  /** Локализуемая строка со ссылкой под интро; по умолчанию английская */
  introLink?: { before: string; text: string; href: string; after: string };
  /** Скрытый SEO-суффикс к заголовкам карточек; по умолчанию " in UAE" */
  hiddenSuffix?: string;
}

const defaultFeatures: Feature[] = [
  {
    title: '24/7 IT Support',
    description: 'Round-the-clock IT support and technical assistance for businesses across UAE. Fast response times with on-site engineers available 24/7. Average response time: under 2 hours in Dubai, 4 hours across UAE.',
    iconId: 'support-24-7',
    link: '#services',
    linkText: 'Learn More',
    linkAriaLabel: 'Learn more about 24/7 IT Support in UAE',
    serviceType: 'IT Support',
  },
  {
    title: 'Experienced IT Professionals',
    description: 'Certified IT experts specializing in corporate IT infrastructure, cloud solutions, and cybersecurity. Certified in Microsoft, Cisco, AWS, and more.',
    iconId: 'expertise-15-years',
    link: '#about',
    linkText: 'Meet Our Team',
    linkAriaLabel: 'Learn more about our IT team',
    serviceType: 'IT Consulting',
  },
  {
    title: 'UAE-wide IT Service Coverage',
    description: 'Comprehensive IT services across all Emirates. Fast response times with on-site engineers available throughout UAE. Coverage map available.',
    iconId: 'dubai-service',
    link: '#contact',
    linkText: 'View Coverage',
    linkAriaLabel: 'View our UAE service coverage',
    serviceType: 'IT Services',
  },
  {
    title: '99.9% System Uptime Guarantee',
    description: 'Enterprise-grade IT infrastructure with 99.9% uptime SLA. Proactive monitoring and maintenance to ensure your business operations never stop. Real-time monitoring dashboard available for all clients.',
    iconId: 'high-availability',
    link: '#services',
    linkText: 'Learn More',
    linkAriaLabel: 'Learn more about uptime guarantee',
    serviceType: 'IT Infrastructure',
  },
];

export default function Features({
  title = 'Why Choose NOCKO',
  intro = 'Trusted IT partner delivering enterprise-grade solutions across UAE with proven expertise.',
  features = defaultFeatures,
  introLink = {
    before: 'As a leading ',
    text: 'IT company in Dubai',
    href: '/locations/dubai',
    after: ', we serve businesses across all Emirates with expert IT solutions.',
  },
  hiddenSuffix = ' in UAE',
}: FeaturesProps) {
  return (
    <section className="features" id="features" suppressHydrationWarning>
      <div className="container">
        <h2 className="features__title">{title}</h2>
        <p className="features__intro">
          {intro && <>{intro} </>}
          {introLink.before}
          <Link href={introLink.href} className="features__intro-link">{introLink.text}</Link>
          {introLink.after}
        </p>
        <div className="features__grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                <svg className="icon" width="80" height="80">
                  <use xlinkHref={`/images/icons-sprite.svg#${feature.iconId}`}></use>
                </svg>
              </div>
              <h3 className="feature-card__title">
                {feature.title}
                <span className="visually-hidden">{hiddenSuffix}</span>
              </h3>
              <p className="feature-card__description">{feature.description}</p>
              {feature.link && !feature.link.startsWith('#') && (
                <Link href={feature.link} className="feature-card__link" aria-label={feature.linkAriaLabel}>
                  {feature.linkText}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

