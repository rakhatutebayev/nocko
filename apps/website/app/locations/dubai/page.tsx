import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Company in Dubai | IT Support Services Dubai | NOCKO',
  description:
    'Leading IT company in Dubai providing comprehensive IT support, network infrastructure, cloud solutions, cybersecurity, and managed IT services. Expert IT company in Dubai with 24/7 support for businesses.',
  keywords: [
    'it company in dubai',
    'IT company Dubai',
    'IT support Dubai',
    'IT services Dubai',
    'managed IT services Dubai',
    'IT consulting Dubai',
    'network infrastructure Dubai',
    'cloud solutions Dubai',
    'cybersecurity Dubai',
    'IT company in Dubai UAE',
    'best IT company Dubai',
    'IT support company Dubai',
  ],
  openGraph: {
    title: 'IT Company in Dubai | IT Support Services Dubai | NOCKO',
    description:
      'Leading IT company in Dubai providing comprehensive IT support, network infrastructure, cloud solutions, and cybersecurity services.',
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
    title: 'IT Company in Dubai | Expert IT Support & Solutions',
    subtitle: 'Leading IT Company in Dubai Serving Businesses Across UAE',
    description:
      'NOCKO is a trusted IT company in Dubai providing comprehensive IT support, network infrastructure, cloud solutions, cybersecurity, and managed IT services. As a leading IT company in Dubai, we serve businesses across all Emirates with 24/7 support and expert solutions.',
  },
  intro: {
    title: 'Why Choose NOCKO as Your IT Company in Dubai?',
    text: 'As a leading IT company in Dubai, NOCKO provides comprehensive IT solutions for businesses across UAE. Our IT company in Dubai offers 24/7 support, expert consulting, and reliable infrastructure services. With deep local knowledge and global expertise, we understand the unique IT challenges businesses face in Dubai and across the Emirates.',
  },
  services: {
    title: 'IT Services from Your Trusted IT Company in Dubai',
    text: 'As an IT company in Dubai, we provide a full range of IT services to help your business succeed. From network infrastructure setup to cloud migration, cybersecurity to managed IT services, our IT company in Dubai delivers solutions tailored to your needs.',
    items: [
      {
        title: 'IT Support & Helpdesk',
        description:
          '24/7 IT support services from your trusted IT company in Dubai. Fast response times, remote support, and on-site visits when needed.',
        link: '/services/it-support',
      },
      {
        title: 'Network Infrastructure',
        description:
          'Professional network setup and maintenance from Dubai-based IT company. Structured cabling, wireless networks, and connectivity solutions.',
        link: '/services/structured-cabling',
      },
      {
        title: 'Cloud Solutions',
        description:
          'Cloud migration and management services from IT company in Dubai. Hybrid cloud, multi-cloud, and cloud security solutions.',
        link: '/services/cloud',
      },
      {
        title: 'Cybersecurity',
        description:
          'Enterprise cybersecurity solutions from leading IT company in Dubai. Firewall configuration, data protection, and compliance.',
        link: '/services/cybersecurity',
      },
      {
        title: 'Managed IT Services',
        description:
          'Complete managed IT services from IT company in Dubai. Proactive monitoring, maintenance, and optimization for your IT infrastructure.',
        link: '/services/managed-it',
      },
      {
        title: 'IT Consulting',
        description:
          'Strategic IT consulting from experienced IT company in Dubai. Digital transformation, infrastructure design, and technology roadmaps.',
        link: '/services/it-consulting',
      },
    ],
  },
  whyChoose: {
    title: 'Why Choose NOCKO as Your IT Company in Dubai?',
    items: [
      {
        title: 'Local Expertise',
        description:
          'As an IT company in Dubai, we understand the local business environment, regulations, and IT requirements specific to Dubai and UAE.',
      },
      {
        title: '24/7 Support',
        description:
          'Your IT company in Dubai available around the clock. Fast response times with average 2 hours in Dubai and 4 hours across all Emirates.',
      },
      {
        title: 'Expert Team',
        description:
          'Our IT company in Dubai employs highly qualified IT professionals with 10+ years of individual experience in enterprise IT solutions.',
      },
      {
        title: 'Proven Track Record',
        description:
          'Trusted IT company in Dubai serving 50+ clients across UAE. Healthcare, finance, retail, education, and enterprise businesses.',
      },
      {
        title: 'Comprehensive Solutions',
        description:
          'Full-service IT company in Dubai offering everything from infrastructure to cloud, security to consulting under one roof.',
      },
      {
        title: 'Cost-Effective',
        description:
          'Affordable IT solutions from IT company in Dubai. Transparent pricing, predictable costs, and excellent value for your IT investment.',
      },
    ],
  },
  localBenefits: {
    title: 'IT Company in Dubai Serving All Emirates',
    text: 'Our IT company in Dubai provides services across all Emirates including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. While based in Dubai, our IT company serves businesses throughout UAE with the same level of expertise and support.',
  },
  faq: {
    title: 'Frequently Asked Questions About IT Company in Dubai',
    items: [
      {
        question: 'What services does an IT company in Dubai provide?',
        answer:
          'An IT company in Dubai typically provides IT support, network infrastructure, cloud solutions, cybersecurity, managed IT services, and IT consulting. NOCKO, as a leading IT company in Dubai, offers all these services with 24/7 support and expert solutions.',
      },
      {
        question: 'Why choose NOCKO as your IT company in Dubai?',
        answer:
          'NOCKO is a trusted IT company in Dubai with local expertise, 24/7 support, expert team, proven track record, comprehensive solutions, and cost-effective pricing. Our IT company in Dubai serves businesses across all Emirates.',
      },
      {
        question: 'Does the IT company in Dubai offer 24/7 support?',
        answer:
          'Yes, NOCKO as an IT company in Dubai provides 24/7 IT support with fast response times. Average 2 hours in Dubai and 4 hours across all Emirates. On-site engineers available 24/7.',
      },
      {
        question: 'What industries does the IT company in Dubai serve?',
        answer:
          'Our IT company in Dubai serves multiple industries including healthcare, finance, retail, education, logistics, manufacturing, real estate, and corporate/enterprise businesses across Dubai and all Emirates.',
      },
      {
        question: 'How quickly can the IT company in Dubai respond to IT issues?',
        answer:
          'As an IT company in Dubai, NOCKO provides fast response times with average 2 hours in Dubai and 4 hours across all Emirates. Remote support available immediately, on-site visits scheduled based on urgency.',
      },
    ],
  },
};

export default function DubaiPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NOCKO Information Technology - IT Company in Dubai',
    image: `${baseUrl}/images/logo-white.svg`,
    description: 'Leading IT company in Dubai providing IT support and solutions',
    url: `${baseUrl}/locations/dubai`,
    telephone: '+971542448888',
    email: 'info@nocko.ae',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
      streetAddress: 'Dubai, United Arab Emirates',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dubaiContent.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.faq.title}</h2>
              <div className="faq-list" style={{ marginTop: '2rem' }}>
                {dubaiContent.faq.items.map((item, index) => (
                  <div key={index} className="faq-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e0e0e0' }}>
                    <h3 className="faq-question" style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {item.question}
                    </h3>
                    <p className="faq-answer" style={{ color: '#666', lineHeight: '1.6' }}>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

