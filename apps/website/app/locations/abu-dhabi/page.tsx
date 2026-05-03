import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Company in Abu Dhabi | IT Support Services Abu Dhabi | NOCKO',
  description:
    'Professional IT services in Abu Dhabi — IT support, network infrastructure, cloud solutions, cybersecurity, and managed IT services. NOCKO serves ADGM, Khalifa City, Mussafah, and all Abu Dhabi zones with 24/7 support.',
  keywords: [
    'IT company Abu Dhabi',
    'IT support Abu Dhabi',
    'IT services Abu Dhabi',
    'managed IT services Abu Dhabi',
    'IT consulting Abu Dhabi',
    'network infrastructure Abu Dhabi',
    'cloud solutions Abu Dhabi',
    'cybersecurity Abu Dhabi',
    'IT company UAE',
    'ADGM IT support',
  ],
  openGraph: {
    title: 'IT Company in Abu Dhabi | IT Support Services | NOCKO',
    description:
      'Professional IT services in Abu Dhabi — network, cloud, cybersecurity, and 24/7 managed IT support for businesses in ADGM, Khalifa City, and Mussafah.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'IT Company in Abu Dhabi — NOCKO' }],
  },
  alternates: {
    canonical: '/locations/abu-dhabi',
  },
};

const abuDhabiContent = {
  hero: {
    title: 'IT Company in Abu Dhabi | IT Support & Solutions',
    subtitle: 'Expert IT Services for Abu Dhabi Businesses — ADGM, Khalifa City & Mussafah',
    description:
      'NOCKO provides professional IT support, network infrastructure, cloud solutions, and cybersecurity for businesses across Abu Dhabi. Fast response times, 24/7 availability, and UAE-qualified engineers.',
  },
  intro: {
    title: 'Why Abu Dhabi Businesses Choose NOCKO',
    text: 'Abu Dhabi\'s business environment — from ADGM financial firms to Mussafah industrial companies and Khalifa City enterprises — demands IT infrastructure that is reliable, compliant, and scalable. NOCKO delivers managed IT services tailored to the Abu Dhabi regulatory landscape, including Central Bank of the UAE (CBUAE) IT governance requirements and ADGM operational standards. Our engineers are familiar with the specific connectivity, licensing, and data residency requirements that Abu Dhabi businesses face.',
  },
  services: {
    title: 'IT Services for Abu Dhabi Businesses',
    text: 'From ADGM financial institutions requiring strict cybersecurity compliance to Mussafah manufacturers needing reliable network infrastructure, NOCKO delivers full-spectrum IT services across Abu Dhabi.',
    items: [
      {
        title: 'IT Support & Helpdesk',
        description:
          'Round-the-clock IT support for Abu Dhabi businesses. Remote resolution within minutes, on-site dispatch with average 4-hour arrival across Abu Dhabi. Multi-lingual support in English and Arabic.',
        link: '/services/it-support',
      },
      {
        title: 'Network Infrastructure',
        description:
          'Enterprise-grade network design and installation for Abu Dhabi offices, warehouses, and multi-site businesses. Cat6A, fiber optic, and wireless infrastructure built to UAE standards.',
        link: '/services/structured-cabling',
      },
      {
        title: 'Cloud Solutions',
        description:
          'Cloud migration and management for Abu Dhabi enterprises. AWS Middle East (UAE) Region, Microsoft Azure UAE North, and hybrid cloud architectures compliant with UAE data residency requirements.',
        link: '/services/cloud',
      },
      {
        title: 'Cybersecurity',
        description:
          'Cybersecurity solutions aligned with UAE NESA (National Electronic Security Authority) standards and ADGM data protection requirements. Threat detection, vulnerability assessment, and incident response.',
        link: '/services/cybersecurity',
      },
      {
        title: 'Managed IT Services',
        description:
          'Fully managed IT infrastructure for Abu Dhabi businesses. Predictable monthly cost, proactive maintenance, 24/7 NOC monitoring, and a dedicated account manager familiar with the Abu Dhabi market.',
        link: '/services/managed-it',
      },
      {
        title: 'IT AMC',
        description:
          'Annual maintenance contracts for Abu Dhabi businesses. Fixed-cost IT support, hardware maintenance, and priority response — no surprise invoices, no reactive-only firefighting.',
        link: '/services/it-amc',
      },
    ],
  },
  zones: {
    title: 'Areas We Serve in Abu Dhabi',
    items: [
      { name: 'ADGM (Abu Dhabi Global Market)', desc: 'Financial services and fintech firms requiring FSRA-aligned IT governance and cybersecurity.' },
      { name: 'Khalifa City', desc: 'Corporate offices and residential business hubs with enterprise network and cloud needs.' },
      { name: 'Mussafah Industrial Area', desc: 'Manufacturing and logistics companies requiring robust network infrastructure and hardware support.' },
      { name: 'Al Reem Island', desc: 'Financial and professional services firms in Abu Dhabi\'s modern business district.' },
      { name: 'Abu Dhabi City Centre', desc: 'Government-adjacent businesses and professional services requiring compliance-ready IT.' },
      { name: 'Al Ain (remote support)', desc: 'Remote IT support and scheduled on-site visits for Al Ain businesses.' },
    ],
  },
  cta: {
    title: 'Need IT Support in Abu Dhabi?',
    text: 'Contact NOCKO for a free IT consultation. Our Abu Dhabi-experienced engineers will assess your current infrastructure and propose a tailored support plan.',
  },
};

export default function AbuDhabiPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          '@id': 'https://nocko.com/#localbusiness',
          name: 'NOCKO Information Technology',
          image: `${baseUrl}/og-image.jpg`,
          description: 'IT services company providing IT support, network infrastructure, cloud, and cybersecurity in Abu Dhabi, UAE.',
          url: `${baseUrl}/locations/abu-dhabi`,
          telephone: '+971542448888',
          email: 'info@nocko.com',
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.07850',
          longitude: '55.27080',
          areaServed: [
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Sharjah' },
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
            { '@type': 'ListItem', position: 3, name: 'Abu Dhabi', item: `${baseUrl}/locations/abu-dhabi` },
          ],
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Locations', url: '/locations' },
            { name: 'Abu Dhabi' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={abuDhabiContent.hero.title}
          subtitle={abuDhabiContent.hero.subtitle}
          description={abuDhabiContent.hero.description}
        />

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{abuDhabiContent.intro.title}</h2>
              <p className="section__text">{abuDhabiContent.intro.text}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{abuDhabiContent.services.title}</h2>
              <p className="section__text">{abuDhabiContent.services.text}</p>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {abuDhabiContent.services.items.map((service, index) => (
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
              <h2 className="section__title">{abuDhabiContent.zones.title}</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {abuDhabiContent.zones.items.map((zone, index) => (
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
              <h2 className="section__title">{abuDhabiContent.cta.title}</h2>
              <p className="section__text">{abuDhabiContent.cta.text}</p>
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
