'use client';

import Image from 'next/image';

interface ServiceFeature {
  icon: string;
  title: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="service-features section">
      <div className="container">
        <div className="service-features__grid">
          {features.map((feature, index) => (
            <div key={index} className="service-features__item">
              <div className="service-features__icon">
                <Image
                  src={`/images/services/icons/${feature.icon}.svg`}
                  alt={feature.title}
                  width={130}
                  height={130}
                  loading="lazy"
                />
              </div>
              <p className="service-features__text">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



