import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Company in Sharjah | IT Support Services Sharjah | NOCKO',
  description:
    'Professional IT services in Sharjah — IT support, network infrastructure, cloud solutions, cybersecurity, and managed IT services. NOCKO serves SAIF Zone, Al Majaz, Industrial Area, and all Sharjah businesses with 24/7 support.',
  keywords: [
    'IT company Sharjah',
    'IT support Sharjah',
    'IT services Sharjah',
    'managed IT services Sharjah',
    'IT consulting Sharjah',
    'network infrastructure Sharjah',
    'cloud solutions Sharjah',
    'cybersecurity Sharjah',
    'SAIF Zone IT support',
    'IT company UAE',
  ],
  openGraph: {
    title: 'IT Company in Sharjah | IT Support Services | NOCKO',
    description:
      'Professional IT services in Sharjah — network, cloud, cybersecurity, and 24/7 managed IT support for businesses in SAIF Zone, Al Majaz, and Industrial Area.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'IT Company in Sharjah — NOCKO' }],
  },
  alternates: {
    canonical: '/locations/sharjah',
  },
};

const sharjahContent = {
  hero: {
    title: 'IT Company in Sharjah | IT Support & Solutions',
    subtitle: 'Expert IT Services for Sharjah Businesses — SAIF Zone, Industrial Area & Al Majaz',
    description:
      'NOCKO provides professional IT support, network infrastructure, cloud solutions, and cybersecurity for businesses across Sharjah. Proximity to Dubai means fast on-site response, competitive pricing, and UAE-qualified engineers.',
  },
  intro: {
    title: 'IT Services Tailored for Sharjah\'s Business Environment',
    text: 'Sharjah is home to one of the UAE\'s most diverse business ecosystems — from SAIF Zone\'s logistics and manufacturing companies to Al Majaz\'s professional services firms and Sharjah Media City\'s (Shams) creative businesses. Each sector has distinct IT infrastructure needs. NOCKO\'s experience across Sharjah\'s industrial, free zone, and commercial zones means we understand the specific connectivity, compliance, and operational requirements your business faces. Our Dubai base means we can reach any Sharjah location with an average 2-3 hour on-site response time.',
  },
  services: {
    title: 'IT Services for Sharjah Businesses',
    text: 'From SAIF Zone logistics companies needing network redundancy to Sharjah SMEs requiring cost-effective managed IT, NOCKO delivers enterprise-grade IT services at transparent pricing.',
    items: [
      {
        title: 'IT Support & Helpdesk',
        description:
          'Round-the-clock remote IT support for Sharjah businesses. Immediate remote resolution for software and connectivity issues. On-site dispatch with average 2-3 hour arrival from our Dubai base.',
        link: '/services/it-support',
      },
      {
        title: 'IT AMC Contracts',
        description:
          'Annual maintenance contracts popular with Sharjah SMEs seeking predictable IT costs. Fixed monthly fee covers hardware maintenance, helpdesk support, and scheduled preventive visits.',
        link: '/services/it-amc',
      },
      {
        title: 'Network Infrastructure',
        description:
          'Structured cabling, Wi-Fi, and network design for Sharjah warehouses, offices, and multi-site operations. Certified Cat6A and fiber optic installation for SAIF Zone and Industrial Area facilities.',
        link: '/services/structured-cabling',
      },
      {
        title: 'Cloud Solutions',
        description:
          'Cloud migration and management for Sharjah businesses. AWS and Azure deployments with UAE data residency compliance. Cost-optimized cloud architectures for Sharjah SMEs and enterprises.',
        link: '/services/cloud',
      },
      {
        title: 'Cybersecurity',
        description:
          'Cybersecurity for Sharjah businesses including threat detection, firewall management, and staff awareness training. Compliance-ready solutions for free zone and government-adjacent businesses.',
        link: '/services/cybersecurity',
      },
      {
        title: 'Managed IT Services',
        description:
          'Fully outsourced IT for Sharjah businesses wanting to focus on operations. Predictable monthly cost, proactive NOC monitoring, and strategic IT planning from NOCKO\'s vCIO team.',
        link: '/services/managed-it',
      },
    ],
  },
  zones: {
    title: 'Areas We Serve in Sharjah',
    items: [
      { name: 'SAIF Zone', desc: 'Logistics, manufacturing, and trading companies requiring robust network infrastructure and IT support.' },
      { name: 'Sharjah Industrial Area', desc: 'Industrial and manufacturing businesses needing hardware maintenance and on-site IT support.' },
      { name: 'Al Majaz & Al Nahda', desc: 'Commercial and professional services businesses requiring helpdesk, cloud, and managed IT.' },
      { name: 'Sharjah Media City (Shams)', desc: 'Creative and media businesses requiring cloud infrastructure and fast remote support.' },
      { name: 'Hamriyah Free Zone', desc: 'Port-adjacent businesses needing reliable IT and networking for 24/7 operations.' },
      { name: 'University City', desc: 'Educational and research institutions with specific IT and compliance requirements.' },
    ],
  },
  cta: {
    title: 'Need IT Support in Sharjah?',
    text: 'Contact NOCKO for a free IT consultation. Our engineers serve Sharjah businesses from our Dubai base with fast response times and transparent pricing.',
  },
};

export default function SharjahPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          '@id': 'https://nocko.com/#localbusiness',
          name: 'NOCKO Information Technology',
          image: `${baseUrl}/og-image.jpg`,
          description: 'IT services company providing IT support, network infrastructure, cloud, and cybersecurity in Sharjah, UAE.',
          url: `${baseUrl}/locations/sharjah`,
          telephone: '+971542448888',
          email: 'info@nocko.com',
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.07850',
          longitude: '55.27080',
          areaServed: [
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
          ],
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: `${baseUrl}/locations` },
            { '@type': 'ListItem', position: 3, name: 'Sharjah', item: `${baseUrl}/locations/sharjah` },
          ],
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Locations', url: '/locations' },
            { name: 'Sharjah' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={sharjahContent.hero.title}
          subtitle={sharjahContent.hero.subtitle}
          description={sharjahContent.hero.description}
        />

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{sharjahContent.intro.title}</h2>
              <p className="section__text">{sharjahContent.intro.text}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{sharjahContent.services.title}</h2>
              <p className="section__text">{sharjahContent.services.text}</p>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {sharjahContent.services.items.map((service, index) => (
                  <div key={index} className="service-card">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <a href={service.link} className="btn btn--primary btn--sm">
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{sharjahContent.zones.title}</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {sharjahContent.zones.items.map((zone, index) => (
                  <div key={index} className="feature-card">
                    <h3 className="feature-card__title">{zone.name}</h3>
                    <p className="feature-card__description">{zone.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="section__title">{sharjahContent.cta.title}</h2>
              <p className="section__text">{sharjahContent.cta.text}</p>
              <a href="/contact" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
