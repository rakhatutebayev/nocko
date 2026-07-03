'use client';

import Link from 'next/link';
import Image from 'next/image';
import { defaultCaseStudies, type CaseStudy } from '@/lib/data/caseStudies';

interface CaseStudiesProps {
  title?: string;
  caseStudies?: CaseStudy[];
}

export default function CaseStudies({
  title = 'Check Out These Resources to Learn More',
  caseStudies = defaultCaseStudies,
}: CaseStudiesProps) {
  return (
    <section className="service-resources section">
      <div className="container">
        {title && <h2 className="service-resources__title">{title}</h2>}
        <div className="service-resources__grid">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.id}
              className={`service-resources__card service-resources__card--${caseStudy.color || 'blue'}`}
            >
              <div className="service-resources__content">
                {caseStudy.type && (
                  <span className="service-resources__type">{caseStudy.type}</span>
                )}
                <h3 className="service-resources__card-title">{caseStudy.title}</h3>
              </div>
              {caseStudy.image && (
                <div
                  className={`service-resources__visual service-resources__visual--${caseStudy.color || 'blue'}`}
                >
                  <div className="service-resources__circle">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.alt}
                      className="service-resources__image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              {caseStudy.href && (
                <Link href={caseStudy.href} className="service-resources__link">
                  Read Case Study
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
