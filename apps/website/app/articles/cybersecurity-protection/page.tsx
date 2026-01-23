import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Comprehensive Cybersecurity Protection | Multi-Layered Security UAE | NOCKO',
  description:
    'Comprehensive cybersecurity protection services for businesses in UAE. Multi-layered security defenses including firewalls, antivirus, intrusion detection, and threat monitoring. Protect from malware, ransomware, phishing attacks, and other cyber threats.',
  keywords:
    'cybersecurity protection UAE, multi-layered security Dubai, IT security defenses, threat protection, malware protection UAE, ransomware protection',
  openGraph: {
    title: 'Comprehensive Cybersecurity Protection | Multi-Layered Security UAE | NOCKO',
    description:
      'Comprehensive cybersecurity protection services for businesses in UAE. Multi-layered security defenses including firewalls, antivirus, intrusion detection, and threat monitoring.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/cybersecurity-protection',
  },
};

const articleData = {
  hero: {
    title: 'Comprehensive Cybersecurity Protection',
    subtitle: 'Multi-Layered Security Defenses for Businesses in UAE',
    description: '',
  },
  intro:
    'Cyber threats are constantly evolving, and businesses need comprehensive protection to stay secure. A single layer of security isn\'t enough—you need multiple layers of defense working together. Comprehensive cybersecurity protection means implementing firewalls, antivirus, intrusion detection, threat monitoring, and other security measures to protect your business from all types of cyber threats.',
  blocks: [
    {
      title: 'What Multi-Layered Security Includes',
      text: '<p>Multi-layered security means implementing multiple security measures that work together to protect your systems. We deploy firewalls to block unauthorized access, antivirus software to detect and remove malware, intrusion detection systems to identify attacks, and threat monitoring to watch for suspicious activity.</p><p>Each layer provides protection against different types of threats. Firewalls protect your network perimeter, antivirus protects endpoints, intrusion detection identifies attacks, and threat monitoring provides continuous visibility. Together, these layers create comprehensive protection.</p>',
      list: [
        '<li>Firewall protection for network perimeter security</li>',
        '<li>Antivirus and anti-malware for endpoint protection</li>',
        '<li>Intrusion detection systems for attack identification</li>',
        '<li>Threat monitoring for continuous visibility</li>',
        '<li>Email security for phishing protection</li>',
        '<li>Web filtering for malicious content blocking</li>',
      ],
    },
    {
      title: 'Protection Against Common Cyber Threats',
      text: '<p>Comprehensive cybersecurity protection defends against all types of cyber threats. We protect your systems from malware that can damage files and steal data, ransomware that can encrypt your data and demand payment, phishing attacks that trick users into revealing credentials, and other threats that can compromise your business.</p><p>Our multi-layered approach ensures that even if one layer is bypassed, other layers continue to protect your systems. This defense-in-depth strategy provides robust protection against evolving threats.</p>',
      list: [
        '<li>Malware protection and removal</li>',
        '<li>Ransomware prevention and recovery</li>',
        '<li>Phishing attack detection and blocking</li>',
        '<li>DDoS attack mitigation</li>',
        '<li>Unauthorized access prevention</li>',
        '<li>Data breach protection</li>',
      ],
    },
    {
      title: 'Benefits of Comprehensive Cybersecurity Protection',
      text: '<p>Comprehensive cybersecurity protection provides peace of mind knowing your business is protected from cyber threats. You don\'t need to worry about malware infections, ransomware attacks, or data breaches. Our security experts handle everything proactively.</p><p>You also benefit from better protection, reduced risk, compliance assurance, and lower security costs. With comprehensive protection, your systems stay secure, threats are prevented or detected early, and your business can operate confidently.</p>',
      list: [
        '<li>Peace of mind with comprehensive protection</li>',
        '<li>Reduced risk of cyber attacks</li>',
        '<li>Early threat detection and prevention</li>',
        '<li>Compliance with security requirements</li>',
        '<li>Lower security-related costs</li>',
        '<li>Business continuity assurance</li>',
      ],
    },
  ],
};

export default function CybersecurityProtectionPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || 'Comprehensive Cybersecurity Protection | Multi-Layered Security UAE | NOCKO',
          description: 'Comprehensive cybersecurity protection services for businesses in UAE. Multi-layered security defenses including firewalls, antivirus, intrusion detec',
          datePublished: '2026-01-20',
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
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}        />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: 'Comprehensive Cybersecurity Protection ' },
            ]}
          />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

