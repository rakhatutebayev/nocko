import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Cybersecurity Services in Dubai | Data Protection & Cybersecurity UAE | NOCKO',
  description:
    'Advanced cybersecurity services in Dubai and UAE. Firewall management, threat detection, data encryption, and security compliance for businesses. Expert security solutions for DIFC, JLT and Business Bay.',
  keywords:
    'cybersecurity Dubai, data protection UAE, IT security services Dubai, network security UAE, security compliance Dubai, threat detection UAE, cybersecurity company Dubai',
  openGraph: {
    title: 'Cybersecurity Services in Dubai | Data Protection & Cybersecurity UAE | NOCKO',
    description: 'Enterprise cybersecurity and data protection for businesses in Dubai and across the UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/cybersecurity' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Enterprise Cybersecurity & Data Protection in Dubai',
    subtitle: 'Zero-Trust Architecture, Threat Detection, and NESA Compliance for UAE Businesses',
    description:
      'Protect your business from evolving cyber threats. We deliver enterprise-grade cybersecurity solutions including firewall management, endpoint protection, and compliance frameworks tailored for businesses in Dubai and across the UAE.',
  },
  firstSection: [
    {
      title: 'Advanced Threat Detection & Response',
      text: 'Our Security Operations Center (SOC) monitors your infrastructure 24/7, detecting and neutralizing threats before they impact your business. We deploy AI-powered threat intelligence with sub-15-minute response times across all UAE business hours.',
      link: '/articles/it-support-monitoring',
      linkText: 'Learn about threat monitoring',
      image: '/images/services/cybersecurity-protection.png',
      imageAlt: 'Cybersecurity threat detection in UAE',
    },
    {
      title: 'Firewall Management & Network Security',
      text: 'We implement and manage enterprise-grade firewalls from Fortinet, Cisco, and Palo Alto Networks. Our network security engineers continuously tune rules to block emerging threats while maintaining optimal business performance.',
      link: '/articles/cybersecurity-guide',
      linkText: 'Network security details',
    },
    {
      title: 'Data Encryption & Protection',
      text: 'Comprehensive data protection covering data at rest and in transit. We implement AES-256 encryption, DLP policies, and access controls ensuring your sensitive business data remains protected and compliant with UAE data regulations.',
      link: '/articles/cybersecurity-guide',
      linkText: 'Data protection strategies',
    },
  ],
  features: [
    { icon: 'icon1', title: '24/7 SOC monitoring and real-time threat detection' },
    { icon: 'icon2', title: 'Zero-Trust network architecture implementation' },
    { icon: 'icon3', title: 'NESA and UAE regulatory compliance frameworks' },
    { icon: 'icon4', title: 'Endpoint Detection and Response (EDR) solutions' },
    { icon: 'icon5', title: 'Security awareness training for your team' },
  ],
  secondSection: [
    {
      title: 'Zero-Trust Security Architecture',
      text: 'Implement a comprehensive Zero-Trust security model that verifies every user, device, and network request. We design and deploy micro-segmentation, multi-factor authentication, and least-privilege access controls across your entire infrastructure.',
      link: '/articles/cloud-zero-trust',
      linkText: 'Explore Zero-Trust',
      image: '/images/services/cybersecurity-firewall.png',
      imageAlt: 'Zero-Trust security architecture Dubai',
    },
    {
      title: 'Security Compliance & Auditing',
      text: 'Achieve and maintain compliance with UAE NESA, ISO 27001, and international security standards. Our compliance experts conduct thorough security audits, gap analysis, and provide detailed remediation roadmaps.',
      link: '/articles/cybersecurity-guide',
      linkText: 'Compliance frameworks',
    },
    {
      title: 'Incident Response Planning',
      text: 'Prepare for the worst with a robust incident response plan. We develop, test, and maintain your organization\'s ability to detect, contain, and recover from security incidents with minimal business disruption.',
      link: '/articles/cybersecurity-guide',
      linkText: 'Incident response details',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Certified security experts in Dubai' },
    { icon: '/images/benefits/time.png', text: '24/7 SOC monitoring' },
    { icon: '/images/benefits/team.png', text: 'NESA & ISO 27001 compliance' },
    { icon: '/images/benefits/pricing.png', text: 'Predictable security costs' },
    { icon: '/images/benefits/communication.png', text: 'Regular security reports' },
  ],
  resources: [
    {
      type: 'Article',
      title: 'Email Sandboxing & Phishing Protection',
      description: 'How we detonate weaponised attachments in isolated cloud VMs and stop BEC fraud before it reaches your inbox.',
      url: '/articles/cybersecurity-guide',
      ctaText: 'Read the guide',
    },
    {
      type: 'Article',
      title: 'Why Traditional Antivirus Is Dead',
      description: 'Signature-based antivirus can no longer stop modern ransomware. See what EDR does differently.',
      url: '/articles/cybersecurity-antivirus-dead',
      ctaText: 'Read the guide',
    },
    {
      type: 'Guide',
      title: 'UAE Cybersecurity Guide for Businesses',
      description: 'A practical overview of the threats, controls, and compliance requirements facing UAE companies.',
      url: '/articles/cybersecurity-guide',
      ctaText: 'Read the guide',
    },
  ],
  cta: {
    title: 'Ready to Secure Your Business?',
    text: 'Get a free cybersecurity assessment and discover your vulnerabilities before attackers do.',
    ctaText: 'Get Free Security Assessment',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Cloud Services', url: '/services/cloud', description: 'Secure cloud infrastructure and migration.' },
    { title: 'Managed IT Services', url: '/services/managed-it', description: '24/7 IT infrastructure monitoring and management.' },
    { title: 'IT Consulting', url: '/services/it-consulting', description: 'Strategic security planning and technology roadmaps.' },
  ],
  faq: [
    { question: 'What cybersecurity standards apply to businesses in UAE?', answer: 'UAE businesses must comply with NESA (National Electronic Security Authority) standards. Financial institutions also follow CBUAE guidelines, while healthcare follows DHA requirements.' },
    { question: 'How quickly can you respond to a security incident?', answer: 'Our SOC team responds to critical alerts within 15 minutes, 24/7. For on-site response in Dubai, we can dispatch engineers within 2 hours.' },
    { question: 'Do you provide employee security awareness training?', answer: 'Yes. We conduct quarterly security awareness training, phishing simulations, and provide ongoing educational resources to reduce human-factor risks.' },
  ],
  faqTitle: 'Cybersecurity FAQs',
};

export default async function CybersecurityPage() {
  const service = await getService('cybersecurity');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Cybersecurity', item: 'https://nocko.com/services/cybersecurity' },
          ],
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Cybersecurity' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
