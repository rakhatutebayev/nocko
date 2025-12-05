'use client';

import Image from 'next/image';

interface ServiceBenefit {
  icon: string;
  text: string;
}

interface ServiceBenefitsProps {
  title?: string;
  benefits: ServiceBenefit[];
}

export default function ServiceBenefits({
  title = 'Reasons to Choose Us',
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="benefits section">
      <div className="container benefits__container">
        <h2 className="benefits__title">{title}</h2>
        <ul className="benefits__list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefits__item">
              {benefit.icon && (
                <Image
                  src={benefit.icon}
                  alt=""
                  className="benefits__icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  unoptimized={true}
                />
              )}
              <p
                className="benefits__text"
                dangerouslySetInnerHTML={{ __html: benefit.text }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

