'use client';

import Image from 'next/image';

interface Stat {
  icon: string;
  text: string;
  alt: string;
}

interface AboutStatsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    icon: '/images/about/icon/plased.svg',
    text: '500+ Places Helped',
    alt: '500+ Places Helped',
  },
  {
    icon: '/images/about/icon/99.svg',
    text: '99.9% Stability',
    alt: '99.9% Stability',
  },
  {
    icon: '/images/about/icon/expertise.svg',
    text: '12+ Years Expertise',
    alt: '12+ Years Expertise',
  },
  {
    icon: '/images/about/icon/response.svg',
    text: 'Minutes to Respond',
    alt: 'Minutes to Respond',
  },
];

export default function AboutStats({ stats = defaultStats }: AboutStatsProps) {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="about-stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="about-stats__card">
              <div className="about-stats__icon">
                <Image
                  src={stat.icon}
                  alt={stat.alt}
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <p className="about-stats__text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



