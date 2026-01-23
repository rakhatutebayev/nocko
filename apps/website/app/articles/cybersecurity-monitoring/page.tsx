import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: '24/7 Security Monitoring and Threat Detection | Continuous Security Monitoring UAE | NOCKO',
  description:
    '24/7 security monitoring and threat detection services in UAE. Continuous monitoring for security threats and suspicious activity. Advanced threat detection systems identify potential attacks before they cause damage. Immediate alerts and rapid response.',
  keywords:
    'security monitoring UAE, threat detection Dubai, 24/7 security monitoring, continuous security monitoring, threat detection systems UAE',
  openGraph: {
    title: '24/7 Security Monitoring and Threat Detection | Continuous Security Monitoring UAE | NOCKO',
    description:
      '24/7 security monitoring and threat detection services in UAE. Continuous monitoring for security threats and suspicious activity. Advanced threat detection systems identify potential attacks.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/cybersecurity-monitoring',
  },
};

const articleData = {
  hero: {
    title: '24/7 Security Monitoring and Threat Detection',
    subtitle: 'Continuous Monitoring to Protect Your Business from Cyber Threats',
    description: '',
  },
  intro:
    'Cyber threats can occur at any time, day or night. Without continuous monitoring, threats can go undetected until they cause significant damage. 24/7 security monitoring and threat detection means we watch your systems continuously, identify potential attacks early, and respond immediately to neutralize threats before they impact your business.',
  blocks: [
    {
      title: 'How 24/7 Security Monitoring Works',
      text: '<p>24/7 security monitoring means we continuously watch your IT systems for security threats and suspicious activity. Advanced monitoring tools track network traffic, system logs, user activity, and security events. Automated systems analyze data in real-time to identify potential threats.</p><p>When a threat is detected, we receive immediate alerts and investigate quickly. Our security team responds rapidly to contain threats, prevent damage, and restore security. This continuous vigilance ensures threats are caught early and neutralized before they cause problems.</p>',
      list: [
        '<li>Continuous monitoring of network traffic</li>',
        '<li>Real-time analysis of security events</li>',
        '<li>Automated threat detection systems</li>',
        '<li>Immediate alerts for potential threats</li>',
        '<li>Rapid investigation and response</li>',
        '<li>24/7 security team availability</li>',
      ],
    },
    {
      title: 'Advanced Threat Detection Systems',
      text: '<p>Advanced threat detection systems use artificial intelligence and machine learning to identify potential attacks. These systems analyze patterns, detect anomalies, and identify threats that traditional security tools might miss. They learn from past attacks to improve detection accuracy.</p><p>Threat detection systems monitor for suspicious behavior, unusual network activity, unauthorized access attempts, and other indicators of potential attacks. They correlate events across systems to identify coordinated attacks and provide early warning of emerging threats.</p>',
      list: [
        '<li>AI-powered threat detection</li>',
        '<li>Machine learning for pattern recognition</li>',
        '<li>Behavioral analysis for anomaly detection</li>',
        '<li>Correlation of security events</li>',
        '<li>Early warning of emerging threats</li>',
        '<li>Continuous improvement through learning</li>',
      ],
    },
    {
      title: 'Benefits of Continuous Security Monitoring',
      text: '<p>Continuous security monitoring provides early detection of threats, allowing rapid response before damage occurs. You get peace of mind knowing your systems are watched 24/7, and threats are identified and neutralized quickly.</p><p>You also benefit from reduced risk, faster incident response, better security posture, and compliance assurance. With continuous monitoring, threats are caught early, incidents are resolved quickly, and your business stays protected.</p>',
      list: [
        '<li>Early threat detection and prevention</li>',
        '<li>Rapid response to security incidents</li>',
        '<li>Reduced risk of data breaches</li>',
        '<li>Better security posture and visibility</li>',
        '<li>Compliance with security requirements</li>',
        '<li>Peace of mind with 24/7 protection</li>',
      ],
    },
  ],
};

export default function CybersecurityMonitoringPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || '24/7 Security Monitoring and Threat Detection | Continuous Security Monitoring UAE | NOCKO',
          description: '24/7 security monitoring and threat detection services in UAE. Continuous monitoring for security threats and suspicious activity. Advanced threat det',
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
              { label: '24/7 Security Monitoring and Threat Detection ' },
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

