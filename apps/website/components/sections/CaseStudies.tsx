'use client';

import Link from 'next/link';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  title: string;
  type: string;
  image: string;
  alt: string;
  href: string;
  color?: 'blue' | 'purple';
}

interface CaseStudiesProps {
  title?: string;
  caseStudies?: CaseStudy[];
}

const defaultCaseStudies: CaseStudy[] = [
  {
    id: 'scalini',
    title: 'How Scalini Transformed Network Infrastructure Across 5 Locations',
    type: 'Structured Cabling',
    image: '/images/cases/structured.svg',
    alt: 'Scalini network infrastructure transformation',
    href: '/case-studies/scalini',
    color: 'blue',
  },
  {
    id: 'gss',
    title: 'How Global Service Solution Achieved 24/7 IT Support Excellence',
    type: 'IT Support & Helpdesk',
    image: '/images/cases/itsupport.svg',
    alt: 'IT Support & Helpdesk case study',
    href: '/case-studies/gss',
    color: 'blue',
  },
  {
    id: 'technohub',
    title: 'How TechnoHub Transformed IT Operations with Managed Services',
    type: 'Managed IT Services',
    image: '/images/cases/itmanagment.svg',
    alt: 'Managed IT Services case study',
    href: '/case-studies/technohub',
    color: 'blue',
  },
  {
    id: 'projection',
    title: 'How Projection Improved IT Reliability with Annual Maintenance Contract',
    type: 'IT AMC',
    image: '/images/cases/amc.svg',
    alt: 'IT AMC case study',
    href: '/case-studies/projection',
    color: 'blue',
  },
  {
    id: 'solus',
    title: 'How Solus Insurance Enhanced Security with Enterprise Cybersecurity',
    type: 'Cybersecurity',
    image: '/images/cases/cybersecurity.svg',
    alt: 'Cybersecurity case study',
    href: '/case-studies/solus',
    color: 'blue',
  },
  {
    id: 'fh',
    title: 'How FH Fundamental Migrated to Cloud with Zero Downtime',
    type: 'Cloud & Data Services',
    image: '/images/cases/cloud.svg',
    alt: 'Cloud migration case study',
    href: '/case-studies/fh',
    color: 'blue',
  },
];

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






