'use client';

import Link from 'next/link';

interface RelatedService {
  title: string;
  description?: string;
  url: string;
}

interface RelatedServicesProps {
  title?: string;
  subtitle?: string;
  services: RelatedService[];
}

const colorClasses = [
  'service-card--blue',
  'service-card--yellow',
  'service-card--green',
];

export default function RelatedServices({
  title = 'Related Services',
  subtitle = 'Explore other IT infrastructure services we offer',
  services,
}: RelatedServicesProps) {
  return (
    <section className="related-services section">
      <div className="container">
        <h2 className="related-services__title">{title}</h2>
        {subtitle && <p className="related-services__subtitle">{subtitle}</p>}
        <div className="related-services__grid">
          {services.map((service, index) => (
            <article
              key={index}
              className={`service-card ${colorClasses[index % colorClasses.length]}`}
            >
              <h3 className="service-card__title">
                <Link href={service.url} className="service-card__link">
                  {service.title}
                </Link>
              </h3>
              {service.description && (
                <p className="service-card__description">{service.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



