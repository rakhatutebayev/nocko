import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Real Estate | NOCKO UAE',
  description:
    'Modern IT solutions for real estate companies in UAE. Property management systems, network infrastructure, cloud services, and 24/7 support for developers and agencies.',
  keywords:
    'IT solutions real estate UAE, property management IT Dubai, real estate network infrastructure, property technology UAE, real estate IT support',
  openGraph: {
    title: 'IT Solutions for Real Estate | NOCKO UAE',
    description:
      'Modern IT solutions for real estate companies in UAE. Property management systems, network infrastructure, and cloud services.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/real-estate',
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Real Estate',
    subtitle: 'Technology Infrastructure for Property Developers, Agencies, and Management Companies',
    description: '',
  },
  intro:
    'Real estate companies need reliable IT systems to manage properties, serve clients, and operate efficiently across multiple locations. Our solutions deliver secure infrastructure, property management integration, and scalable technology for growth.',
  blocks: [
    {
      title: 'Property Management & CRM Integration',
      text: '<p>Modern real estate operations depend on integrated systems for property listings, client management, and transaction processing. We implement and support property management platforms, CRM systems, and document management solutions.</p><p>Our integration services connect your existing systems, automate workflows, and ensure data flows seamlessly between sales, leasing, and property management teams.</p>',
      list: [
        '<li>Property management system integration</li>',
        '<li>CRM and sales automation platforms</li>',
        '<li>Document management and e-signing</li>',
        '<li>Virtual tour and 3D visualization support</li>',
        '<li>Client portal and mobile app integration</li>',
        '<li>Listing syndication and API integration</li>',
      ],
    },
    {
      title: 'Multi-Site Network Infrastructure',
      text: '<p>Real estate companies operate across multiple sales offices, showrooms, and construction sites. We design and deploy standardized network infrastructure that connects all locations with secure, reliable connectivity.</p><p>Centralized management, remote monitoring, and rapid deployment capabilities ensure consistent performance and simplified support across your entire portfolio.</p>',
      list: [
        '<li>Standardized network design for all locations</li>',
        '<li>Secure VPN and site-to-site connectivity</li>',
        '<li>Wi-Fi for showrooms and sales centers</li>',
        '<li>Video conferencing and digital displays</li>',
        '<li>Mobile connectivity for field teams</li>',
        '<li>Construction site temporary networks</li>',
      ],
    },
    {
      title: 'Cloud & Digital Transformation',
      text: '<p>Move your real estate operations to the cloud for better collaboration, mobility, and scalability. We help you migrate to cloud-based property management, file storage, and communication platforms.</p><p>Cloud solutions enable remote work, mobile access, and seamless collaboration between offices, construction sites, and external partners.</p>',
      list: [
        '<li>Cloud-based property management systems</li>',
        '<li>Secure file sharing and collaboration</li>',
        '<li>Microsoft 365 and Google Workspace setup</li>',
        '<li>Mobile CRM and field service apps</li>',
        '<li>Automated backup and disaster recovery</li>',
        '<li>Scalable infrastructure for business growth</li>',
      ],
    },
  ],
};

export default function RealEstatePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: industryData.hero.title,
          description: metadata.description,
          datePublished: '2026-01-23',
          dateModified: '2026-01-23',
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-white.svg`,
            },
          },
        }}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '#' },
          { label: 'Real Estate' },
        ]}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={industryData.hero.title}
          subtitle={industryData.hero.subtitle}
          description={industryData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={industryData.intro} blocks={industryData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
