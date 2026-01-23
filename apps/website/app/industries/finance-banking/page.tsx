import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Finance & Banking | NOCKO UAE',
  description:
    'Secure IT solutions for financial institutions in UAE. Network infrastructure, cybersecurity, compliance, data protection, and 24/7 support for banks and financial services.',
  keywords:
    'IT solutions finance UAE, banking IT services Dubai, financial cybersecurity, banking network infrastructure, financial compliance IT',
  openGraph: {
    title: 'IT Solutions for Finance & Banking | NOCKO UAE',
    description:
      'Secure IT solutions for financial institutions in UAE. Network infrastructure, cybersecurity, compliance, and 24/7 support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/finance-banking',
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Finance & Banking',
    subtitle: 'Secure, Compliant, and Reliable Technology for Financial Institutions',
    description: '',
  },
  intro:
    'Financial institutions require the highest standards of security, reliability, and compliance. Our IT solutions for finance and banking deliver secure infrastructure, data protection, regulatory compliance, and 24/7 support to keep your operations running smoothly.',
  blocks: [
    {
      title: 'Security & Compliance First',
      text: '<p>Financial services face stringent security and regulatory requirements. Our solutions ensure compliance with local and international standards while protecting sensitive customer data and transactions.</p><p>We implement multi-layered security, encryption, access controls, and continuous monitoring to prevent breaches and ensure audit readiness.</p>',
      list: [
        '<li>PCI DSS compliance support</li>',
        '<li>Data encryption at rest and in transit</li>',
        '<li>Multi-factor authentication (MFA)</li>',
        '<li>Network segmentation and firewalls</li>',
        '<li>Regular security audits and penetration testing</li>',
        '<li>Compliance documentation and reporting</li>',
      ],
    },
    {
      title: 'High-Availability Infrastructure',
      text: '<p>Banking systems must operate 24/7 without interruption. Our infrastructure solutions provide redundancy, failover capabilities, and disaster recovery to ensure continuous availability.</p><p>We design and deploy resilient networks, backup systems, and business continuity plans that minimize downtime and protect against data loss.</p>',
      list: [
        '<li>Redundant network design with failover</li>',
        '<li>Backup and disaster recovery solutions</li>',
        '<li>99.9%+ uptime SLA</li>',
        '<li>Real-time system monitoring</li>',
        '<li>Automated backup and recovery testing</li>',
        '<li>Business continuity planning</li>',
      ],
    },
    {
      title: 'Digital Transformation & Cloud Services',
      text: '<p>Modern financial institutions need agility and scalability. We help banks and financial services migrate to secure cloud environments, implement digital banking platforms, and integrate new technologies.</p><p>Our cloud solutions balance security, compliance, and innovation, enabling you to deliver better customer experiences while maintaining control over sensitive data.</p>',
      list: [
        '<li>Secure cloud migration and hybrid solutions</li>',
        '<li>Core banking system integration</li>',
        '<li>API development and integration</li>',
        '<li>Mobile and online banking platforms</li>',
        '<li>Payment gateway integration</li>',
        '<li>Legacy system modernization</li>',
      ],
    },
  ],
};

export default function FinanceBankingPage() {
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
          { label: 'Finance & Banking' },
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
