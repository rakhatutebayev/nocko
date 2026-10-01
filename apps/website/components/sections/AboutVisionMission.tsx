'use client';

import Image from 'next/image';

interface AboutVisionMissionProps {
  title?: string;
  quoteLine1?: string;
  quoteLine2?: string;
  description?: string;
  tagline?: string;
}

export default function AboutVisionMission({
  title = 'Our Vision & Mission',
  quoteLine1 = 'We turn complexity into clarity.',
  quoteLine2 = 'We make IT predictable, secure, and effortlessly reliable.',
  description = 'Wherever your business operates, we ensure your systems stay stable, protected, and ready - without noise, without uncertainty, without interruptions.',
  tagline = 'BUILT FOR TODAY. READY FOR TOMORROW',
}: AboutVisionMissionProps) {
  return (
    <section className="about-vision-mission">
      <div className="container">
        <div className="about-vision-mission__content">
          <h2 className="about-vision-mission__title">{title}</h2>

          <div className="about-vision-mission__quote-icon">
            <Image
              src="/images/about/light-blue-quotation-mark.png"
              alt="Quote"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>

          <div className="about-vision-mission__quote-block">
            <div className="about-vision-mission__quote-content">
              <h4 className="about-vision-mission__quote-text">
                {quoteLine1}
                <br />
                {quoteLine2}
              </h4>
              <p className="about-vision-mission__quote-description">
                {description}
              </p>
            </div>
          </div>

          <p className="about-vision-mission__subtitle">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}




