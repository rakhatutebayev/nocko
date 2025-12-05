import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Security Management and Compliance | IT Security Management UAE | NOCKO',
  description:
    'Comprehensive IT security management and compliance services in UAE. Firewall management, antivirus updates, security patches, compliance monitoring, security audits, and vulnerability assessments. Complete security management so you don\'t have to worry about threats.',
  keywords:
    'IT security management UAE, security compliance Dubai, firewall management, security audits UAE, vulnerability assessments, IT security services',
  openGraph: {
    title: 'Security Management and Compliance | IT Security Management UAE | NOCKO',
    description:
      'Comprehensive IT security management and compliance services in UAE. Firewall management, antivirus updates, security patches, compliance monitoring, and security audits.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/managed-it-security',
  },
};

const articleData = {
  hero: {
    title: 'Security Management and Compliance',
    subtitle: 'Comprehensive IT Security Management for Businesses in UAE',
    description: '',
  },
  intro:
    'IT security threats are constantly evolving, and managing security requires continuous attention and expertise. From firewall management to antivirus updates, security patches to compliance monitoring, comprehensive security management ensures your systems stay protected. We handle all aspects of IT security so you don\'t have to worry about threats.',
  blocks: [
    {
      title: 'What Security Management Includes',
      text: '<p>Security management covers all aspects of protecting your IT systems. We manage firewalls, update antivirus software, apply security patches, monitor for threats, conduct security audits, and ensure compliance with regulations. Every security aspect is handled comprehensively.</p><p>We also implement security policies, manage access controls, monitor user activity, and respond to security incidents. Regular vulnerability assessments identify potential weaknesses before they\'re exploited, and security updates keep your systems protected against the latest threats.</p>',
      list: [
        '<li>Firewall management and configuration</li>',
        '<li>Antivirus and anti-malware updates</li>',
        '<li>Security patch management</li>',
        '<li>Threat monitoring and detection</li>',
        '<li>Security audits and assessments</li>',
        '<li>Compliance monitoring and reporting</li>',
      ],
      image: '/images/services/managed-it-security.png',
      imageAlt: 'IT security management and compliance services',
    },
    {
      title: 'Benefits of Comprehensive Security Management',
      text: '<p>Comprehensive security management provides peace of mind knowing your IT systems are protected. You don\'t need to worry about security threats, data breaches, or compliance issues. Our security experts handle everything proactively.</p><p>You also benefit from better protection, faster threat response, compliance assurance, and reduced security risks. With dedicated security management, your systems stay protected against evolving threats, and security incidents are prevented or resolved quickly.</p>',
      list: [
        '<li>Peace of mind with expert security management</li>',
        '<li>Proactive threat prevention and detection</li>',
        '<li>Faster response to security incidents</li>',
        '<li>Compliance with regulations and standards</li>',
        '<li>Reduced risk of data breaches</li>',
        '<li>Lower security-related costs</li>',
      ],
    },
    {
      title: 'Security Compliance and Audits',
      text: '<p>Many businesses must comply with security regulations and standards. We ensure your IT systems meet compliance requirements through regular audits, assessments, and monitoring. We document security measures, maintain compliance records, and prepare for audits.</p><p>Regular security audits identify vulnerabilities, assess security posture, and ensure compliance with regulations. We address any issues found during audits and implement improvements to strengthen your security. This keeps your systems compliant and protected.</p>',
      list: [
        '<li>Regular security audits and assessments</li>',
        '<li>Compliance with industry regulations</li>',
        '<li>Vulnerability identification and remediation</li>',
        '<li>Security documentation and reporting</li>',
        '<li>Audit preparation and support</li>',
        '<li>Continuous compliance monitoring</li>',
      ],
    },
  ],
};

export default function ManagedITSecurityPage() {
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


