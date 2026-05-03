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
import ServiceFAQ from '@/components/services/ServiceFAQ';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Cybersecurity Services in Dubai | Data Protection & Cybersecurity UAE | NOCKO',
  description:
    'Advanced cybersecurity services in Dubai and UAE. Firewall management, threat detection, data encryption, and security compliance for businesses. Expert security solutions for DIFC, JLT and Business Bay.',
  keywords:
    'cybersecurity Dubai, data protection UAE, IT security services Dubai, network security UAE, security compliance Dubai, threat detection UAE, cybersecurity company Dubai',
  openGraph: {
    title: 'Cybersecurity Services in Dubai | Data Protection & Cybersecurity UAE | NOCKO',
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
    title: 'Enterprise Cybersecurity & SOC in Dubai',
    subtitle: 'Zero-Trust Architecture, Active Threat Hunting, and NESA Compliance',
    description:
      'Defend your corporate perimeter. We deliver 24/7 localized SOC monitoring, Next-Gen Firewall management, and advanced endpoint protection tailored specifically for UAE-based enterprises.',
    serviceType: 'Cybersecurity',
  },
  firstSection: [
    {
      title: 'Zero-Trust Architecture & IAM',
      text: 'Remove implicit trust from your network. We architect uncompromising Identity and Access Management (IAM) solutions where every user, whether sitting in your Business Bay office or working remotely, is continuously authenticated using contextual Multi-Factor Authentication (MFA) before accessing corporate data.',
      link: '/articles/cybersecurity-data-protection',
      linkText: 'Explore Zero-Trust Policies',
      image: '/images/services/cybersecurity-protection.png',
      imageAlt: 'Zero-Trust Architecture integration',
    },
    {
      title: '24/7 Security Operations Center (SOC)',
      text: 'Automated malware triggers don’t wait for business hours. Our dedicated SOC constantly analyzes your Microsoft 365 logs, firewall telemetry, and endpoint behaviors. Using SIEM (Security Information and Event Management) integrated with AI threat intelligence, our analysts physically block active ransomware encryption attempts in real-time.',
      link: '/articles/cybersecurity-monitoring',
      linkText: 'Learn about Active Threat Hunting',
    },
    {
      title: 'Next-Generation Firewall (NGFW) Management',
      text: 'Legacy routers cannot stop modern application-layer attacks. We deploy and manage Fortinet, Palo Alto, and Cisco Meraki NGFWs utilizing Deep Packet Inspection (DPI). By heavily segmenting your VLANs, we quarantine Guest Wi-Fi and IoT devices completely away from your critical on-premise Active Directory servers.',
      link: '/articles/cybersecurity-firewall',
      linkText: 'Upgrade your Perimeter',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Zero-Trust Architecture & strict Contextual MFA',
    },
    {
      icon: 'icon2',
      title: '24/7 localized SOC Event Monitoring in Dubai',
    },
    {
      icon: 'icon3',
      title: 'Endpoint Detection and Response (EDR / XDR)',
    },
    {
      icon: 'icon4',
      title: 'Strict adherence to UAE NESA and DESC frameworks',
    },
    {
      icon: 'icon5',
      title: 'Quarterly Penetration Testing and Vulnerability Audits',
    },
  ],
  secondSection: [
    {
      title: 'NESA & DESC Compliance Integration',
      text: 'For UAE government contractors, healthcare providers, and DIFC financial institutions, regulatory compliance is non-negotiable. NOCKO maps your IT infrastructure directly to the National Electronic Security Authority (SIA/NESA) controls, guaranteeing audit readiness and protecting C-level executives from Federal data breach liabilities.',
      link: '/articles/cybersecurity-compliance',
      linkText: 'Ensure Regulatory Compliance',
      image: '/images/services/cybersecurity-firewall.png',
      imageAlt: 'Security compliance and NESA auditing',
    },
    {
      title: 'Endpoint Detection and Response (EDR) against Ransomware',
      text: 'Standard Antivirus is mathematically obsolete against zero-day fileless malware. We deploy behavioral EDR agents (like CrowdStrike or SentinelOne) across your fleet of laptops and servers. If a background process attempts to sequentially encrypt files, the EDR instantly severs the machine from the network, containing the ransomware blast radius.',
      link: '/articles/cybersecurity-protection',
      linkText: 'Defeat Ransomware Syndicates',
    },
    {
      title: 'Incident Response & Digital Forensics',
      text: 'When a breach happens, time is your most valuable asset. Our elite Incident Response team acts as your digital paramedics. We follow strict chain-of-custody protocols to isolate the compromised hardware, eradicate the persistence mechanism from your network, and provide the legal reporting required under UAE cybercrime laws.',
      link: '/articles/cybersecurity-incident-response',
      linkText: 'Establish an Incident Response Plan',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Certified Ethical <br> Hackers & Analysts',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Sub-15 Minute <br> Threat Triage SLA',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Mandatory UAE <br> NESA Standardized',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Fixed-cost <br> Proactive Security',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Executive-Level <br> Risk Dashboards',
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
    terms: ['Cybersecurity SOC Dubai', 'NESA Compliance UAE', 'Ransomware Protection Middle East', 'Zero Trust IAM'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Defeating Ransomware: A 4-Hour Recovery',
      description:
        'Read how our EDR deployment automatically isolated a phishing payload, saving a Dubai logistics firm millions in downtime.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/solus',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'The Blueprint for Enterprise Cybersecurity',
      description:
        'A comprehensive guide covering NESA compliance, Zero-Trust Architecture, and Next-Gen Perimeters.',
      image: '/images/services/cards/guide.png',
      url: '/articles/cybersecurity-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Why standard Antivirus is dead in 2024',
      description:
        'Understand the stark technical difference between legacy signature-based Antivirus and behavioral AI-driven EDR.',
      image: '/images/services/cards/multi.png',
      url: '/articles/cybersecurity-antivirus-dead',
      ctaText: 'Read Architecture Article',
    },
  ],
  cta: {
    title: 'Is Your Corporate Network Compromised Right Now?',
    text: "Contact our UAE Security Analysts for an immediate Penetration Test and Infrastructure Audit.",
    ctaText: 'Request Security Audit',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Strategic IT Consulting',
      url: '/services/it-consulting',
      description: 'Audit your current architecture and licensing.',
    },
    {
      title: 'Managed IT Services',
      url: '/services/managed-it',
      description: 'Comprehensive 24/7 IT management and Helpdesk.',
    },
    {
      title: 'Structured Cabling',
      url: '/services/structured-cabling',
      description: 'Physical layer security and access control systems.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions About Cybersecurity Services',
    items: [
      {
        question: 'How long does a NESA compliance assessment take for a Dubai business?',
        answer: 'A full NESA IA-compliant gap assessment typically takes 5–10 business days depending on your infrastructure size. We deliver a prioritised remediation roadmap within 2 weeks of the initial assessment. Most DIFC and ADGM-regulated clients achieve compliance within 60–90 days.',
      },
      {
        question: 'What is the difference between EDR and traditional antivirus?',
        answer: 'Traditional antivirus uses signature-based detection — it can only catch known threats. EDR (Endpoint Detection and Response) tools like CrowdStrike Falcon and SentinelOne use behavioral AI to detect zero-day threats, ransomware, and fileless attacks in real time, and can automatically isolate infected endpoints within seconds.',
      },
      {
        question: 'Do you provide 24/7 SOC monitoring in Dubai?',
        answer: 'Yes. Our Security Operations Centre provides 24/7 threat monitoring with Arabic and English-speaking analysts. We monitor SIEM alerts, firewall logs, and endpoint telemetry around the clock, with a guaranteed P1 response under 15 minutes.',
      },
      {
        question: 'Can you help with a DFSA or HAAD cybersecurity audit?',
        answer: 'Yes. We have direct experience with DFSA IT risk framework requirements for DIFC-registered firms and HAAD/DOH cybersecurity compliance for UAE healthcare providers. We prepare your documentation, conduct the internal audit, and support you through the regulator\'s review process.',
      },
    ],
  },
};

export default function CybersecurityPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@id': 'https://nocko.com/services/cybersecurity#service',
          name: 'Cybersecurity Services Dubai',
          serviceType: 'Cybersecurity',
          description: 'Enterprise cybersecurity, threat detection, firewall management, and compliance for businesses in Dubai and UAE.',
          url: 'https://nocko.com/services/cybersecurity',
          provider: { '@type': 'Organization', '@id': 'https://nocko.com/#localbusiness', name: 'NOCKO Information Technology' },
          areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'City', name: 'Sharjah' }],
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{ itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nocko.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Cybersecurity', item: 'https://nocko.com/services/cybersecurity' },
        ]}}
      />
      <StructuredData
        type="FAQPage"
        data={{
          mainEntity: cybersecurityContent.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
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

        <ServiceFAQ
          title={cybersecurityContent.faq.title}
          items={cybersecurityContent.faq.items}
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

