'use client';

import Image from 'next/image';

export default function AboutVisionMission() {
  return (
    <section className="about-vision-mission">
      <div className="container">
        <div className="about-vision-mission__content">
          <h2 className="about-vision-mission__title">Our Vision & Mission</h2>

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
                We turn complexity into clarity.
                <br />
                We make IT predictable, secure, and effortlessly reliable.
              </h4>
              <p className="about-vision-mission__quote-description">
                Wherever your business operates, we ensure your systems stay stable,
                protected, and ready — without noise, without uncertainty, without
                interruptions.
              </p>
            </div>
          </div>

          <p className="about-vision-mission__subtitle">
            BUILT FOR TODAY. READY FOR TOMORROW
          </p>
        </div>
      </div>
    </section>
  );
}




