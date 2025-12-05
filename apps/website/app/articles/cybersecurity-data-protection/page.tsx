import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Data Protection and Encryption | Data Security Services UAE | NOCKO',
  description:
    'Advanced data protection and encryption services for businesses in UAE. Encrypt data at rest and in transit, implement access controls, and ensure data privacy compliance. Protect sensitive business data from unauthorized access.',
  keywords:
    'data protection UAE, data encryption Dubai, data security services, data privacy compliance, encryption services UAE',
  openGraph: {
    title: 'Data Protection and Encryption | Data Security Services UAE | NOCKO',
    description:
      'Advanced data protection and encryption services for businesses in UAE. Encrypt data at rest and in transit, implement access controls, and ensure data privacy compliance.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/cybersecurity-data-protection',
  },
};

const articleData = {
  hero: {
    title: 'Data Protection and Encryption',
    subtitle: 'Advanced Data Security Solutions for Businesses in UAE',
    description: '',
  },
  intro:
    'Sensitive business data is a valuable target for cybercriminals. Without proper protection, data can be stolen, leaked, or compromised. Data protection and encryption ensure your sensitive data is secure, even if systems are breached. We encrypt data at rest and in transit, implement access controls, and ensure compliance with data privacy regulations.',
  blocks: [
    {
      title: 'What Data Protection and Encryption Includes',
      text: '<p>Data protection and encryption covers all aspects of securing your sensitive data. We encrypt data at rest (stored data) and in transit (data being transmitted), implement access controls to limit who can access data, and ensure compliance with data privacy regulations like GDPR.</p><p>We also implement data classification to identify sensitive data, data loss prevention to prevent unauthorized data sharing, and backup encryption to protect backup data. Every aspect of data security is handled comprehensively.</p>',
      list: [
        '<li>Data encryption at rest and in transit</li>',
        '<li>Access controls and authentication</li>',
        '<li>Data classification and labeling</li>',
        '<li>Data loss prevention (DLP)</li>',
        '<li>Backup encryption and protection</li>',
        '<li>Data privacy compliance management</li>',
      ],
    },
    {
      title: 'Benefits of Advanced Data Protection',
      text: '<p>Advanced data protection provides peace of mind knowing your sensitive data is secure. Even if systems are breached, encrypted data remains protected. Access controls ensure only authorized users can access data, and compliance measures ensure you meet regulatory requirements.</p><p>You also benefit from reduced risk of data breaches, compliance assurance, better data privacy, and protection of business reputation. With comprehensive data protection, your sensitive data stays secure and your business remains compliant.</p>',
      list: [
        '<li>Protection of sensitive business data</li>',
        '<li>Reduced risk of data breaches</li>',
        '<li>Compliance with data privacy regulations</li>',
        '<li>Better data privacy and confidentiality</li>',
        '<li>Protection of business reputation</li>',
        '<li>Peace of mind with secure data</li>',
      ],
    },
    {
      title: 'Data Privacy Compliance',
      text: '<p>Many businesses must comply with data privacy regulations like GDPR, which require protecting personal data and ensuring privacy. We help you meet compliance requirements by implementing data protection measures, maintaining compliance documentation, and conducting regular compliance assessments.</p><p>We ensure data is encrypted, access is controlled, data retention policies are followed, and privacy rights are respected. Regular compliance audits identify any gaps and ensure continuous compliance with regulations.</p>',
      list: [
        '<li>GDPR compliance and data protection</li>',
        '<li>Data privacy policy implementation</li>',
        '<li>Data retention and deletion policies</li>',
        '<li>Privacy rights management</li>',
        '<li>Compliance documentation and reporting</li>',
        '<li>Regular compliance assessments</li>',
      ],
    },
  ],
};

export default function CybersecurityDataProtectionPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

