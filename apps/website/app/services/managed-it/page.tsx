import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Managed IT Services in Dubai | Complete IT Management UAE | NOCKO',
  description:
    'Comprehensive managed IT services in Dubai and UAE. Complete IT infrastructure management, 24/7 monitoring, and proactive maintenance for businesses. Expert IT outsourcing for DIFC, JLT and Business Bay.',
  keywords:
    'managed IT services Dubai, IT management UAE, managed IT infrastructure Dubai, IT outsourcing UAE, complete IT management Dubai, best managed IT UAE',
  openGraph: {
    title: 'Managed IT Services in Dubai | Complete IT Management UAE | NOCKO',
    description: 'Professional managed IT services and infrastructure management for businesses in Dubai and across the UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/managed-it' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Fully Managed IT Services in Dubai',
    subtitle: 'Complete IT Outsourcing with 24/7 NOC Monitoring and Proactive Management',
    description:
      'Hand over your entire IT operation to a trusted partner. Our managed IT services provide complete infrastructure management, proactive monitoring, and strategic IT leadership — letting your team focus on core business objectives.',
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
      link: '/articles/managed-it-monitoring',
      linkText: 'NOC monitoring capabilities',
    },
    {
      title: 'Managed Security Operations',
      text: 'Security is built into every layer of our managed services. We deploy endpoint protection, manage firewall rules, apply security patches, and conduct regular vulnerability scans to keep your business protected.',
      link: '/articles/managed-it-security',
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
      link: '/articles/managed-it-backup',
      linkText: 'Backup and DR planning',
      image: '/images/services/managed-it-security.png',
      imageAlt: 'Managed backup and disaster recovery UAE',
    },
    {
      title: 'Scalable IT That Grows With You',
      text: 'Our managed services scale seamlessly with your business. Whether you\'re adding 10 users or opening a new office, we provision and configure infrastructure quickly — ensuring your IT always matches your business needs.',
      link: '/articles/managed-it-scalable',
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
  resources: [],
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
    { question: 'What is the difference between managed IT and IT support?', answer: 'IT support is reactive — you call when something breaks. Managed IT is proactive — we monitor, maintain, and manage your entire infrastructure to prevent issues from occurring in the first place.' },
    { question: 'How quickly can you transition us to managed services?', answer: 'Our typical onboarding takes 2-4 weeks. We conduct a thorough discovery, document your infrastructure, install monitoring agents, and establish baseline performance metrics before assuming full management.' },
    { question: 'Can you manage our cloud services too?', answer: 'Yes. Our managed services cover on-premise infrastructure, cloud services (AWS, Azure, Google Cloud), SaaS applications, and hybrid environments.' },
  ],
  faqTitle: 'Managed IT FAQs',
};

export default async function ManagedItPage() {
  const service = await getService('managed-it');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Managed IT Services', item: 'https://nocko.com/services/managed-it' },
          ],
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
