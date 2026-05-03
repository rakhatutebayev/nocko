import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Support & Managed IT Services in Dubai | NOCKO',
  description:
    'NOCKO provides IT support, network infrastructure, cloud solutions, and cybersecurity for businesses in Dubai — DIFC, Business Bay, DMCC, JAFZA, and across the UAE.',
  keywords: [
    'IT support Dubai',
    'managed IT services Dubai',
    'IT services Dubai',
    'IT consulting Dubai',
    'network infrastructure Dubai',
    'cloud solutions Dubai',
    'cybersecurity Dubai',
    'IT company Dubai',
    'IT support DIFC',
    'IT support Business Bay',
  ],
  openGraph: {
    title: 'IT Support & Managed IT Services in Dubai | NOCKO',
    description:
      'NOCKO provides IT support, network infrastructure, cloud solutions, and cybersecurity for businesses across Dubai and the UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/locations/dubai',
  },
};

const dubaiContent = {
  hero: {
    title: 'IT Support & Managed Services in Dubai',
    subtitle: 'Reliable IT for Finance, Logistics, Real Estate & Hospitality',
    description:
      'NOCKO delivers professional IT support, network infrastructure, cloud solutions, and cybersecurity for businesses operating across Dubai — from DIFC and Business Bay to JAFZA and Expo City.',
  },
  intro: {
    title: 'Professional IT Services Built for Dubai\'s Business Environment',
    text: 'Dubai operates at a pace where IT downtime is not a minor inconvenience — it is a revenue event. Financial firms in DIFC face regulatory obligations that require auditable, always-on systems. Logistics operators in JAFZA and Jebel Ali run 24-hour warehousing that cannot pause for a server failure. Hospitality groups across JBR and Downtown depend on property management software, payment systems, and guest Wi-Fi that must work without exception. NOCKO was built to serve exactly these environments: businesses where professional, accountable IT management is a functional requirement, not a luxury.',
  },
  services: {
    title: 'IT Services for Dubai Businesses',
    text: 'We cover the full spectrum of business IT — from initial infrastructure design through to ongoing day-to-day management. Whether you are setting up a new office in Business Bay or consolidating IT across multiple locations in the UAE, our team handles the technical complexity so your people can stay focused on operations.',
    items: [
      {
        title: 'IT Support & Helpdesk',
        description:
          'Guaranteed response times for every ticket, with L1 through L3 resolution handled by our local engineers. Average on-site response in Dubai under two hours, with remote triage beginning in under 15 minutes for critical issues.',
        link: '/services/it-support',
      },
      {
        title: 'Network Infrastructure',
        description:
          'Structured cabling, Wi-Fi design, firewall deployment, and VLAN segmentation for offices and commercial fit-outs across Dubai. We design for performance, redundancy, and the physical realities of high-density Dubai commercial spaces.',
        link: '/services/structured-cabling',
      },
      {
        title: 'Cloud Solutions',
        description:
          'Microsoft 365, Azure, and AWS deployments managed end-to-end. We handle migration planning, data residency compliance under UAE PDPL, and ongoing licence management — ensuring you only pay for what you actually use.',
        link: '/services/cloud',
      },
      {
        title: 'Cybersecurity',
        description:
          'Endpoint protection, firewall policy management, phishing simulation, and vulnerability assessments. For DIFC-regulated entities we assist with DFSA technology risk requirements and ISO 27001 alignment.',
        link: '/services/cybersecurity',
      },
      {
        title: 'Managed IT Services',
        description:
          'A fixed monthly AMC that covers proactive monitoring, patch management, hardware support, and helpdesk access. Predictable costs and a defined scope — no surprise invoices when something breaks.',
        link: '/services/managed-it',
      },
      {
        title: 'IT Consulting',
        description:
          'Technology roadmap planning, vendor selection, IT budget reviews, and infrastructure audits. Useful for growing businesses that need a clear picture of where their IT is today and what it needs to look like in 12 months.',
        link: '/services/it-consulting',
      },
    ],
  },
  whyChoose: {
    title: 'Why Dubai Businesses Choose NOCKO',
    items: [
      {
        title: 'Presence Across Key Districts',
        description:
          'We support clients in DIFC, Business Bay, DMCC, Media City, JAFZA, Deira, and across the Northern Emirates. Our engineers know the buildings, the access procedures, and the local logistics.',
      },
      {
        title: '24/7 Monitoring & Response',
        description:
          'NOC-level monitoring runs continuously. For critical incidents, our average Dubai on-site response is under two hours and UAE-wide under four. We align to DIFC market hours, logistics shift patterns, and hospitality needs.',
      },
      {
        title: 'Experienced Engineers',
        description:
          'Each engineer on our team brings over a decade of enterprise IT experience. We work with Microsoft, Cisco, Fortinet, and leading cloud platforms — no generalists handed a toolkit.',
      },
      {
        title: '50+ Active Clients in the UAE',
        description:
          'Our client base spans finance, real estate, logistics, hospitality, healthcare, and professional services. Long-term relationships rather than transactional support contracts.',
      },
      {
        title: 'Single Point of Accountability',
        description:
          'Infrastructure, cloud, security, and helpdesk all under one contract. When something goes wrong at 11pm, one call reaches the team responsible for the entire stack.',
      },
      {
        title: 'Transparent, Fixed-Cost Contracts',
        description:
          'AMC pricing is scoped against your actual asset inventory. No vague retainers, no hidden call-out fees for standard issues within contract scope.',
      },
    ],
  },
  localBenefits: {
    title: 'Coverage Across Dubai and the UAE',
    text: 'While NOCKO is headquartered in Dubai, we provide the same service levels to businesses in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. For multi-site organisations operating across the Emirates, we act as a unified IT partner rather than a separate vendor in each location. A single contract, a single helpdesk number, and engineers who can reach any site in the UAE.',
  },
};

export default function DubaiPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NOCKO Information Technology',
    image: `${baseUrl}/images/logo-white.svg`,
    description: 'Managed IT services, IT support, cloud solutions, and cybersecurity for businesses in Dubai and across the UAE.',
    url: `${baseUrl}/locations/dubai`,
    telephone: '+971542448888',
    email: 'info@nocko.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2048',
      longitude: '55.2708',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    serviceArea: {
      '@type': 'City',
      name: 'Dubai',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <>
      <StructuredData type="LocalBusiness" data={structuredData} />
      <StructuredData type="BreadcrumbList" data={{
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${baseUrl}/locations` },
          { '@type': 'ListItem', position: 3, name: 'Dubai', item: `${baseUrl}/locations/dubai` },
        ],
      }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Locations', url: '/locations' },
            { name: 'Dubai' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={dubaiContent.hero.title}
          subtitle={dubaiContent.hero.subtitle}
          description={dubaiContent.hero.description}
        />

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.intro.title}</h2>
              <p className="section__text">{dubaiContent.intro.text}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.services.title}</h2>
              <p className="section__text">{dubaiContent.services.text}</p>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {dubaiContent.services.items.map((service, index) => (
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
              <h2 className="section__title">{dubaiContent.whyChoose.title}</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {dubaiContent.whyChoose.items.map((item, index) => (
                  <div key={index} className="feature-card">
                    <h3 className="feature-card__title">{item.title}</h3>
                    <p className="feature-card__description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.localBenefits.title}</h2>
              <p className="section__text">{dubaiContent.localBenefits.text}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

