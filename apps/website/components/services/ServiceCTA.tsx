'use client';

import Link from 'next/link';

interface ServiceCTAProps {
  title?: string;
  text?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function ServiceCTA({
  title = "Ready to Get Started?",
  text = "Contact us for a free consultation and let's discuss how we can help your business.",
  ctaText = "Get Free Consultation",
  ctaUrl = "#contact",
}: ServiceCTAProps) {
  return (
    <section className="service-cta section">
      <div className="container">
        <div className="service-cta__content">
          <h2 className="service-cta__title">{title}</h2>
          <p className="service-cta__text">{text}</p>
          <div className="service-cta__buttons">
            <Link href={ctaUrl} className="btn btn--primary btn--lg">
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}




