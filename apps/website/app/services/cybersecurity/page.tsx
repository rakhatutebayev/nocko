import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';

export const metadata: Metadata = {
  title: 'Cybersecurity Services in Dubai, UAE | Data Protection & Security | NOCKO',
  description:
    'Enterprise cybersecurity and data protection services for businesses across UAE. Comprehensive security solutions including firewall management, threat detection, data encryption, and security compliance.',
  keywords:
    'cybersecurity Dubai, data protection UAE, IT security services, network security Dubai, security compliance UAE, threat detection',
  openGraph: {
    title: 'Cybersecurity Services in Dubai, UAE | Data Protection & Security | NOCKO',
    description:
      'Enterprise cybersecurity and data protection services for businesses across UAE. Comprehensive security solutions including firewall management, threat detection, and data encryption.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/cybersecurity',
  },
};

const cybersecurityContent = {
  hero: {
    title: 'Cybersecurity Services',
    subtitle: 'Enterprise Data Protection and Security Solutions for Businesses in UAE',
    description:
      'Comprehensive cybersecurity and data protection services for businesses across UAE. Protect your business from cyber threats with advanced security solutions including firewall management, threat detection, data encryption, security monitoring, and compliance management.',
    serviceType: 'Cybersecurity',
  },
  firstSection: [
    {
      title: 'Comprehensive Cybersecurity Protection',
      text: 'Protect your business from cyber threats with comprehensive security solutions. We implement multi-layered security defenses including firewalls, antivirus, intrusion detection, and threat monitoring. Your systems stay protected from malware, ransomware, phishing attacks, and other cyber threats.',
      link: '/articles/cybersecurity-protection',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'Comprehensive cybersecurity protection services',
    },
    {
      title: '24/7 Security Monitoring and Threat Detection',
      text: 'We monitor your systems 24/7 for security threats and suspicious activity. Advanced threat detection systems identify potential attacks before they cause damage. Immediate alerts and rapid response ensure threats are neutralized quickly, minimizing risk to your business.',
      link: '/articles/cybersecurity-monitoring',
      linkText: 'Learn more',
    },
    {
      title: 'Data Protection and Encryption',
      text: 'Protect your sensitive data with advanced encryption and data protection solutions. We encrypt data at rest and in transit, implement access controls, and ensure data privacy compliance. Your business data stays secure and protected from unauthorized access.',
      link: '/articles/cybersecurity-data-protection',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Multi-layered security defenses for comprehensive protection',
    },
    {
      icon: 'icon2',
      title: '24/7 security monitoring and threat detection',
    },
    {
      icon: 'icon3',
      title: 'Advanced data encryption and access controls',
    },
    {
      icon: 'icon4',
      title: 'Security compliance and audit management',
    },
    {
      icon: 'icon5',
      title: 'Rapid incident response and threat neutralization',
    },
  ],
  secondSection: [
    {
      title: 'Firewall Management and Network Security',
      text: 'We manage your firewalls and network security infrastructure. Proper firewall configuration, network segmentation, and access controls protect your network from unauthorized access. Regular security updates and rule optimization keep your defenses strong and effective.',
      link: '/articles/cybersecurity-firewall',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'Firewall management and network security',
    },
    {
      title: 'Security Compliance and Audit Management',
      text: 'We help you meet security compliance requirements and pass security audits. From GDPR to industry-specific regulations, we ensure your security practices meet all compliance standards. Regular security assessments and audit preparation keep you compliant and secure.',
      link: '/articles/cybersecurity-compliance',
      linkText: 'Learn more',
    },
    {
      title: 'Incident Response and Security Recovery',
      text: 'If a security incident occurs, we respond quickly to contain the threat and restore your systems. Our incident response team follows proven procedures to minimize damage, recover data, and prevent future incidents. You get rapid response and complete recovery support.',
      link: '/articles/cybersecurity-incident-response',
      linkText: 'Learn more',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Dubai-based with <br> global coverage',
    },
    {
      icon: '/images/benefits/time.png',
      text: '24/7 availability with <br> fastest SLA',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Highly-qualified <br> IT professionals',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Affordable pricing <br> & cost efficiency',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Clear and transparent <br> communication',
    },
  ],
  resources: [
    {
      type: 'CASE STUDY',
      title: 'How We Prevented a Major Cyber Attack',
      description:
        'Learn how our security monitoring and rapid response prevented a major cyber attack for a Dubai-based company.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/cybersecurity',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to Cybersecurity in UAE',
      description:
        'Essential guide covering cybersecurity threats, protection strategies, compliance requirements, and best practices for businesses in Dubai and UAE.',
      image: '/images/services/cards/guide.png',
      url: '/resources/cybersecurity-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Top Cybersecurity Threats Facing Businesses in UAE',
      description:
        'Learn about the most common cybersecurity threats and how to protect your business from attacks in the UAE market.',
      image: '/images/services/cards/multi.png',
      url: '/blog/cybersecurity-threats',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Secure Your Business?',
    text: "Contact us for a free consultation and let's discuss your cybersecurity needs.",
    ctaText: 'Get Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Managed IT Services',
      url: '/services/managed-it',
      description: 'Complete IT infrastructure management.',
    },
    {
      title: 'IT Support & Helpdesk',
      url: '/services/it-support',
      description: '24/7 IT support and helpdesk services.',
    },
    {
      title: 'Cloud & Data Services',
      url: '/services/cloud',
      description: 'Cloud migration and data management services.',
    },
  ],
};

export default function CybersecurityPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={cybersecurityContent.hero.title}
          subtitle={cybersecurityContent.hero.subtitle}
          description={cybersecurityContent.hero.description}
        />

        <ServiceContentEnhanced blocks={cybersecurityContent.firstSection} />
        <ServiceFeatures features={cybersecurityContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={cybersecurityContent.secondSection} />
        <ServiceBenefits benefits={cybersecurityContent.benefits} />
        <ServiceCTA
          title={cybersecurityContent.cta.title}
          text={cybersecurityContent.cta.text}
          ctaText={cybersecurityContent.cta.ctaText}
          ctaUrl={cybersecurityContent.cta.ctaUrl}
        />
        <RelatedServices services={cybersecurityContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

