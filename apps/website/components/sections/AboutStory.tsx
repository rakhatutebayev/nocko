'use client';

import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="about-story section">
      <div className="container">
        <div className="about-story__header">
          <h2 className="about-story__title">Our Story</h2>
          <h3 className="about-story__subtitle">
            We Turn Complex IT Into Quiet, Reliable Simplicity
          </h3>
        </div>

        <div className="about-story__wrapper">
          <div className="about-story__content">
            <div className="about-story__text">
              <p>
                Our journey began with a simple belief: technology should remove
                complexity, not create it. In the early days, we helped companies fix
                unstable networks, insecure systems, and reactive support. But we quickly
                realized the real issue wasn't the hardware — it was the lack of clarity,
                responsibility, and engineering discipline.
              </p>

              <p>
                That insight shaped who we are today. We don't just solve problems — we
                build foundations. We bring order where there was chaos, transparency
                where there was uncertainty, and confidence where there was downtime.
                Project by project, we earned trust by making technology work silently and
                consistently in the background.
              </p>

              <p>
                Today, we design secure infrastructures, protect data, modernize
                operations, and unify systems into efficient ecosystems. From growing
                teams to large enterprises across the UAE, businesses rely on us for one
                thing: stability.
              </p>

              <p>
                We focus on what matters most — making IT predictable, scalable, and
                secure.
              </p>

              <p>Not temporary fixes. Not quick patches.</p>

              <p>Just systems you can depend on, day after day.</p>
            </div>
          </div>

          <div className="about-story__image">
            <Image
              src="/images/about/story.png"
              alt="Our Story"
              width={600}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



