import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Government | NOCKO UAE',
  description:
    'Secure IT solutions for government entities in UAE. Compliance, data security, network infrastructure, e-government services, and 24/7 support for public sector organizations.',
  keywords:
    'IT solutions government UAE, government IT services Dubai, public sector technology, e-government infrastructure, government cybersecurity UAE',
  openGraph: {
    title: 'IT Solutions for Government | NOCKO UAE',
    description:
      'Secure IT solutions for government entities in UAE. Compliance, data security, network infrastructure, and 24/7 support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/government',
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Government',
    subtitle: 'Secure, Compliant, and Reliable Technology for Public Sector Organizations',
    description: '',
  },
  intro:
    'Government entities require the highest standards of security, compliance, and reliability. Our IT solutions for the public sector deliver secure infrastructure, data protection, regulatory compliance, and 24/7 support for government operations and services.',
  blocks: [
    {
      title: 'Security & Compliance for Public Sector',
      text: '<p>Government organizations handle sensitive citizen data and critical infrastructure that must be protected and managed in compliance with strict regulations. We implement security measures, access controls, and monitoring to safeguard data and ensure regulatory compliance.</p><p>Our solutions include multi-layered security, encryption, audit logging, and compliance documentation to meet local and international standards.</p>',
      list: [
        '<li>Government security standards compliance</li>',
        '<li>Data classification and protection</li>',
        '<li>Role-based access control (RBAC)</li>',
        '<li>Network segmentation and isolation</li>',
        '<li>Security audit trails and reporting</li>',
        '<li>Incident response and forensics readiness</li>',
      ],
    },
    {
      title: 'E-Government Services & Digital Transformation',
      text: '<p>Modern government services are delivered digitally. We help public sector organizations implement e-government platforms, citizen portals, and digital services that improve accessibility, efficiency, and transparency.</p><p>Our solutions integrate with existing systems, support mobile access, and ensure secure authentication and data exchange between government entities.</p>',
      list: [
        '<li>E-government platform implementation</li>',
        '<li>Citizen portal and mobile app development</li>',
        '<li>Digital identity and authentication systems</li>',
        '<li>Inter-agency data exchange and integration</li>',
        '<li>Document management and workflow automation</li>',
        '<li>Open data and transparency initiatives</li>',
      ],
    },
    {
      title: 'High-Availability Infrastructure for Critical Services',
      text: '<p>Government services must operate continuously without interruption. We design and deploy resilient infrastructure with redundancy, disaster recovery, and 24/7 monitoring to ensure continuous availability.</p><p>Our solutions provide backup systems, failover capabilities, and business continuity plans that minimize downtime and maintain service delivery during incidents.</p>',
      list: [
        '<li>Redundant network design with failover</li>',
        '<li>Data center and cloud infrastructure</li>',
        '<li>99.9%+ uptime SLA for critical systems</li>',
        '<li>Disaster recovery and business continuity</li>',
        '<li>24/7 monitoring and support</li>',
        '<li>Automated backup and recovery testing</li>',
      ],
    },
  ],
};

export default function GovernmentPage() {
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
          { label: 'Government' },
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
