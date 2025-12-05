'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServiceResource {
  type: string;
  title: string;
  description: string;
  image?: string;
  url: string;
  ctaText?: string;
}

interface ServiceResourcesProps {
  title?: string;
  resources: ServiceResource[];
}

export default function ServiceResources({
  title = 'Check Out These Resources to Learn More',
  resources,
}: ServiceResourcesProps) {
  return (
    <section className="service-resources section">
      <div className="container">
        <h2 className="service-resources__title">{title}</h2>
        <div className="service-resources__grid">
          {resources.map((resource, index) => {
            const isFirst = index === 0;
            const cardClass = isFirst
              ? 'service-resources__card service-resources__card--purple'
              : 'service-resources__card service-resources__card--blue';
            const visualClass = isFirst
              ? 'service-resources__visual service-resources__visual--purple'
              : 'service-resources__visual service-resources__visual--blue';

            return (
              <article key={index} className={cardClass}>
                <div className="service-resources__content">
                  {resource.type && (
                    <span className="service-resources__type">{resource.type}</span>
                  )}
                  <h3 className="service-resources__card-title">{resource.title}</h3>
                </div>
                {resource.image && (
                  <div className={visualClass}>
                    <div className="service-resources__circle">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        className="service-resources__image"
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {resource.url && (
                  <Link href={resource.url} className="service-resources__link">
                    {resource.ctaText || 'Learn more'}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



