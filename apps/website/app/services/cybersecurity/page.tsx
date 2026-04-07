import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceGeo from '@/components/services/ServiceGeo';

export const metadata: Metadata = {
  title: 'Cybersecurity Services in Dubai | #1 Data Protection UAE | NOCKO',
  description:
    'Advanced cybersecurity services in Dubai and UAE. Firewall management, threat detection, data encryption, and security compliance for businesses. Expert security solutions for DIFC, JLT and Business Bay.',
  keywords:
    'cybersecurity Dubai, data protection UAE, IT security services Dubai, network security UAE, security compliance Dubai, threat detection UAE, cybersecurity company Dubai',
  openGraph: {
    title: 'Cybersecurity Services in Dubai | #1 Data Protection UAE | NOCKO',
    description:
      'Enterprise cybersecurity and data protection for businesses in Dubai and across the UAE. Advanced threat detection and security compliance.',
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
    title: 'Cybersecurity Dubai | #1 Data Protection UAE',
    subtitle: 'Enterprise Security Solutions & Threat Detection for Businesses across UAE',
    description:
      'Protect your business from cyber threats with advanced firewall management, threat detection, and data encryption. We provide comprehensive security compliance for businesses in Dubai, Abu Dhabi, and the UAE including DIFC and Business Bay.',
    serviceType: 'Cybersecurity',
  },
  firstSection: [
    {
      title: 'Comprehensive Cybersecurity Protection',
      text: 'Protect your business from cyber threats with comprehensive security solutions. We implement multi-layered security defenses including firewalls, antivirus, intrusion detection, and threat monitoring. Your systems stay protected from malware, ransomware, phishing attacks, and other cyber threats.',
      link: '/articles/cybersecurity-protection',
      linkText: 'Learn more',
      image: '/images/services/cybersecurity-protection.png',
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
      image: '/images/services/cybersecurity-firewall.png',
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
  geoContent: {
    emirates: [
      { name: 'Dubai', hubs: ['DIFC', 'Business Bay', 'JLT', 'Silicon Oasis', 'Media City'] },
      { name: 'Abu Dhabi', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Sharjah', hubs: ['SAIF Zone'] },
      { name: 'Ajman', hubs: [] },
      { name: 'Fujairah', hubs: [] },
      { name: 'Ras Al Khaimah', hubs: [] },
      { name: 'Umm Al Quwain', hubs: [] }
    ],
    terms: ['Cybersecurity Dubai', 'Data Protection UAE', 'Network Security Dubai', 'Security Compliance'],
  },
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
        
        <ServiceGeo 
          title="Securing Businesses Throughout the Emirates"
          description="From high-stakes finance in DIFC to multi-national HQs in Business Bay, NOCKO protects the digital assets of UAE enterprise."
          emirates={cybersecurityContent.geoContent.emirates}
          terms={cybersecurityContent.geoContent.terms}
          footerNote="Enterprise Grade Security"
        />

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

