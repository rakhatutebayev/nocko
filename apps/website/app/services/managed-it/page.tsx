import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Managed IT Services Dubai | Managed Service Provider UAE',
  description:
    'Leading managed IT services provider in Dubai and UAE. 24/7 NOC monitoring, complete infrastructure management, managed security, and helpdesk for businesses in DIFC, DMCC, Business Bay and across UAE. Predictable monthly pricing from AED 2,500.',
  keywords:
    'managed IT services Dubai, managed IT services UAE, managed service provider Dubai, managed services providers UAE, IT managed services Dubai, managed IT services in Dubai, managed service providers in Dubai, IT outsourcing Dubai, managed IT infrastructure UAE',
  openGraph: {
    title: 'Managed IT Services Dubai | Managed Service Provider UAE',
    description: 'Dubai-based managed IT services provider. 24/7 NOC, complete infrastructure management, managed security for UAE businesses.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/managed-it',
    languages: {
      'en-AE': '/services/managed-it',
      'ru-RU': '/ru/services/managed-it',
      'x-default': '/services/managed-it',
    },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Managed IT Services in Dubai & UAE',
    subtitle: 'Trusted Managed Service Provider for Dubai Businesses — 24/7 NOC, Helpdesk & Complete IT Management',
    description:
      'NOCKO is a Dubai-based managed IT services provider serving businesses across UAE free zones — DIFC, DMCC, DAFZA, JAFZA, Business Bay, and Abu Dhabi. We take full ownership of your IT infrastructure, monitoring, security, and support so your team can focus on growing your business.',
  },
  firstSection: [
    {
      title: 'Complete IT Infrastructure Management',
      text: 'We take ownership of your entire IT infrastructure — servers, networks, cloud services, and endpoints. Our team manages day-to-day operations, performs regular maintenance, and handles all hardware and software updates.',
      link: '/articles/managed-it-infrastructure',
      linkText: 'Infrastructure management details',
      image: '/images/services/managed-it-infrastructure.png',
      imageAlt: 'Managed IT infrastructure Dubai',
    },
    {
      title: '24/7 NOC Monitoring & Alerting',
      text: 'Our Network Operations Center monitors your systems around the clock. Intelligent alerting catches performance degradation, security threats, and hardware failures before they impact your business — often resolving issues before you know they exist.',
      link: '/articles/it-support-monitoring',
      linkText: 'NOC monitoring capabilities',
    },
    {
      title: 'Managed Security Operations',
      text: 'Security is built into every layer of our managed services. We deploy endpoint protection, manage firewall rules, apply security patches, and conduct regular vulnerability scans to keep your business protected.',
      link: '/articles/managed-it-services-guide',
      linkText: 'Security management approach',
    },
  ],
  features: [
    { icon: 'icon1', title: '24/7 NOC with proactive issue resolution' },
    { icon: 'icon2', title: 'Complete infrastructure lifecycle management' },
    { icon: 'icon3', title: 'Managed security and compliance monitoring' },
    { icon: 'icon4', title: 'Strategic IT leadership (vCIO services)' },
    { icon: 'icon5', title: 'Scalable services that grow with your business' },
  ],
  secondSection: [
    {
      title: 'Managed Backup & Disaster Recovery',
      text: 'Business continuity starts with reliable backups. We design, implement, and continuously test your backup strategy — ensuring rapid recovery from ransomware, hardware failures, or natural disasters with defined RTOs and RPOs.',
      link: '/articles/data-backup-services-dubai',
      linkText: 'Backup and DR planning',
      image: '/images/services/managed-it-security.png',
      imageAlt: 'Managed backup and disaster recovery UAE',
    },
    {
      title: 'Scalable IT That Grows With You',
      text: 'Our managed services scale seamlessly with your business. Whether you\'re adding 10 users or opening a new office, we provision and configure infrastructure quickly — ensuring your IT always matches your business needs.',
      link: '/articles/managed-it-services-guide',
      linkText: 'Scalability approach',
    },
    {
      title: 'Co-Managed IT for Internal Teams',
      text: 'Have an internal IT team? Our co-managed services supplement your team with additional expertise, specialized skills, and after-hours coverage — giving your IT staff the backup they need for complex projects.',
      link: '/articles/managed-it-co-managed',
      linkText: 'Co-managed IT model',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Dubai-based managed services team' },
    { icon: '/images/benefits/time.png', text: '24/7 NOC and helpdesk' },
    { icon: '/images/benefits/team.png', text: 'Dedicated account manager' },
    { icon: '/images/benefits/pricing.png', text: 'Predictable monthly costs' },
    { icon: '/images/benefits/communication.png', text: 'Monthly performance reports' },
  ],
  resources: [
    {
      type: 'Case Study',
      title: 'Automated EMR Backup & Compliance for a UAE Clinic',
      description: 'How we protected a medical clinic\'s EMR, imaging and accounting data with automated daily backups and audit-ready reporting.',
      url: '/case-studies/emr-backup',
      ctaText: 'Read the case study',
    },
  ],
  cta: {
    title: 'Ready to Outsource Your IT?',
    text: 'Get a free managed services assessment and discover how much you can save while improving IT performance.',
    ctaText: 'Get Free IT Assessment',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'IT Support', url: '/services/it-support', description: '24/7 helpdesk and on-site IT support.' },
    { title: 'Cybersecurity', url: '/services/cybersecurity', description: 'Managed security operations and threat detection.' },
    { title: 'Cloud Services', url: '/services/cloud', description: 'Cloud migration and managed cloud infrastructure.' },
  ],
  faq: [
    {
      question: 'What are managed IT services and how do they work in Dubai?',
      answer: 'Managed IT services means outsourcing your complete IT operation to a local provider like NOCKO. We install monitoring agents on your servers and devices, provide 24/7 NOC oversight, handle helpdesk requests, manage security, apply patches, and maintain your infrastructure — all for a fixed monthly fee. For Dubai businesses, this replaces the cost and hassle of hiring an in-house IT team.',
    },
    {
      question: 'What is the difference between managed IT services and IT support?',
      answer: 'IT support is reactive — you call when something breaks. Managed IT services are proactive — we monitor your systems 24/7, detect and fix issues before they become outages, and manage your infrastructure continuously. A managed service agreement (MSA) covers everything for a predictable monthly fee, while break-fix IT support charges per incident.',
    },
    {
      question: 'How much do managed IT services cost in Dubai?',
      answer: 'Managed IT services pricing in Dubai depends on company size and scope. For a 20–50 user business, managed IT services typically start from AED 2,500–6,000 per month — covering 24/7 monitoring, helpdesk, patch management, and security. This is substantially less than the AED 12,000–18,000/month cost of a single in-house IT engineer in Dubai, and includes a full team with specialist expertise.',
    },
    {
      question: 'Which UAE free zones do you serve as a managed IT provider?',
      answer: 'We serve businesses across all major UAE free zones and business districts: DIFC, DMCC, DAFZA, JAFZA, Dubai Internet City, Dubai Media City, Business Bay, Downtown Dubai, and Abu Dhabi (ADGM, Masdar City, Khalifa Industrial Zone). Our engineers are Dubai-based with same-day on-site response capability across the emirate.',
    },
    {
      question: 'How quickly can you transition us to managed IT services?',
      answer: 'Our standard onboarding takes 2–4 weeks. We start with a full infrastructure discovery and documentation audit, then install RMM agents, configure monitoring dashboards, establish SLA baselines, and integrate your team into our helpdesk system. For businesses with urgent requirements, we can begin remote monitoring within 48 hours.',
    },
    {
      question: 'What is included in a managed IT services agreement?',
      answer: 'A typical NOCKO managed IT services agreement covers: 24/7 NOC monitoring, helpdesk support (remote and on-site), patch management for Windows and third-party software, endpoint security management, backup monitoring, monthly performance reports, and a dedicated account manager. Cloud infrastructure management (AWS, Azure) and cybersecurity operations (SOC/SIEM) can be added as extensions.',
    },
    {
      question: 'Can you manage our cloud infrastructure alongside on-premise IT?',
      answer: 'Yes. We manage hybrid environments as a single unified service — on-premise servers, cloud workloads (AWS, Azure, Google Cloud), SaaS platforms (Microsoft 365, Google Workspace), and network infrastructure. Your account manager has visibility across all environments through a single dashboard.',
    },
    {
      question: 'Do you offer co-managed IT for companies that have an internal IT team?',
      answer: 'Yes. Co-managed IT is ideal for companies with 1–3 internal IT staff who need additional coverage, specialist expertise, or after-hours support. We work alongside your team, handling overflow tickets, complex projects, and 24/7 monitoring — without replacing your existing staff.',
    },
    {
      question: 'What SLAs do you offer for managed IT services in UAE?',
      answer: 'Our SLAs are tiered by severity. Critical incidents (network down, server failure) receive a 15-minute remote response and 2-hour on-site response for Dubai mainland locations. High severity incidents (single system failure, security alert) receive a 1-hour remote response. Standard requests are handled within 4 business hours. All SLAs are contractually guaranteed with financial penalties for non-compliance.',
    },
  ],
  faqTitle: 'Managed IT Services Dubai — Frequently Asked Questions',
};

export default async function ManagedItPage() {
  const service = await getService('managed-it');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Managed IT Services',
          name: 'Managed IT Services in Dubai & UAE',
          description: 'Fully managed IT operations: helpdesk, monitoring, security, and infrastructure management for a fixed monthly fee.',
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Managed IT Services' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
