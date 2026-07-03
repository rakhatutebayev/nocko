import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Cloud Migration Services UAE | Cloud Provider Dubai | AWS & Azure | NOCKO',
  description:
    'Leading cloud migration services provider in Dubai and UAE. Zero-downtime migration to AWS and Azure, cloud infrastructure setup, FinOps cost optimization, and DRaaS backup. Certified cloud architects for DIFC, DMCC, and Business Bay businesses.',
  keywords:
    'cloud migration services UAE, cloud migration provider Dubai, cloud services Dubai, cloud migration Dubai, cloud migration services in UAE, managed cloud services Dubai, AWS migration UAE, Azure migration Dubai, cloud infrastructure UAE',
  openGraph: {
    title: 'Cloud Migration Services UAE | Cloud Provider Dubai | NOCKO',
    description: 'Zero-downtime cloud migration to AWS and Azure for UAE businesses. Certified cloud architects in Dubai.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/cloud' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Cloud Migration Services in UAE',
    subtitle: 'Zero-Downtime Migration to AWS & Azure for Dubai Businesses',
    description:
      'Trusted cloud migration provider in Dubai. We execute zero-downtime migrations to AWS Middle East and Azure UAE Central, design cost-optimized cloud infrastructure, and ensure full TRA data residency compliance for businesses in DIFC, DMCC, Business Bay, and across the UAE.',
  },
  firstSection: [
    {
      title: 'Zero-Downtime Cloud Migration',
      text: "Evacuate your aging server room smoothly. Our certified cloud architects meticulously plan and execute migrations to the AWS Middle East (UAE) Region and Azure UAE Central. By utilizing secure parallel validation, we guarantee zero data loss and absolutely minimal downtime.",
      link: '/articles/cloud-migration',
      linkText: 'Read our Integration Guide',
      image: '/images/services/cloud-migration-v2.png',
      imageAlt: 'Cloud migration services in UAE',
    },
    {
      title: 'Infrastructure Setup and Cloud FinOps',
      text: 'Moving to the cloud should lower costs. We design strictly optimized environments utilizing auto-scaling and Reserved Instances to drastically reduce your monthly OPEX.',
      link: '/articles/cloud-cost-optimization',
      linkText: 'Learn about FinOps',
    },
    {
      title: 'Compliance-Driven Data Backup (DRaaS)',
      text: 'We deploy robust Disaster Recovery as a Service (DRaaS) with immutable, air-gapped backups and strict AES-256 encryption to ensure your data survives any disaster.',
      link: '/articles/cloud-data-management',
      linkText: 'Data Protection Strategies',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Zero-downtime migration workflows to AWS and Azure' },
    { icon: 'icon2', title: 'Guaranteed compliance with UAE TRA data residency mandates' },
    { icon: 'icon3', title: 'Proactive Cloud FinOps ensuring maximum cost reduction' },
    { icon: 'icon4', title: 'Military-grade encryption and automated Disaster Recovery' },
    { icon: 'icon5', title: '24/7 local SOC monitoring from our Dubai headquarters' },
  ],
  secondSection: [
    {
      title: 'Hybrid Cloud: Best of Both Worlds',
      text: 'We design sophisticated hybrid cloud architectures storing your sensitive databases on secure on-premise private servers in UAE data centers.',
      link: '/articles/cloud-multi-hybrid',
      linkText: 'Explore Hybrid Clouds',
      image: '/images/services/cloud-hybrid-v2.png',
      imageAlt: 'Hybrid cloud solutions in Dubai',
    },
    {
      title: 'Cloud Security & NESA Compliance',
      text: 'We take full IAM management deploying Zero-Trust protocols and protecting endpoints, ensuring your architecture meets NESA strict standards.',
      link: '/articles/cloud-security-compliance',
      linkText: 'Secure Your Cloud',
    },
    {
      title: 'Microsoft 365 & Google Workspace Integration',
      text: 'We conduct full enterprise migrations from legacy on-premise Exchange servers directly to Microsoft 365 or Google Workspace.',
      link: '/articles/cloud-infrastructure',
      linkText: 'Modernize your workspace',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Certified cloud architects in Dubai' },
    { icon: '/images/benefits/time.png', text: 'Zero-downtime migrations' },
    { icon: '/images/benefits/team.png', text: 'TRA / NESA data compliance' },
    { icon: '/images/benefits/pricing.png', text: 'Aggressive cost optimization' },
    { icon: '/images/benefits/communication.png', text: 'Transparent dashboard metrics' },
  ],
  resources: [
    {
      type: 'Case Study',
      title: 'Zero-Downtime Google Workspace Migration',
      description: 'How a Dubai hospitality group moved every mailbox to a new domain during a rebrand — with zero downtime and no lost history.',
      url: '/case-studies/workspace-migration',
      ctaText: 'Read the case study',
    },
  ],
  cta: {
    title: 'Ready to Evacuate Your Server Room?',
    text: 'Contact our senior cloud architects for a free Total Cost of Ownership (TCO) analysis.',
    ctaText: 'Request TCO Analysis',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Cybersecurity', url: '/services/cybersecurity', description: 'Zero Trust architecture and cloud endpoint protection.' },
    { title: 'Strategic IT Consulting', url: '/services/it-consulting', description: 'Vendor selection and digital transformation roadmaps.' },
    { title: 'Managed IT Services', url: '/services/managed-it', description: '24/7 NOC monitoring of your new cloud environment.' },
  ],
  faq: [
    { question: 'What cloud migration services do you provide in UAE?', answer: 'We provide end-to-end cloud migration services in UAE including infrastructure assessment, migration planning, zero-downtime execution to AWS or Azure, post-migration optimization, and ongoing managed cloud support. We serve businesses in Dubai, Abu Dhabi, and Sharjah.' },
    { question: 'Do AWS/Azure comply with UAE data localisation laws?', answer: 'Yes. Both AWS and Microsoft Azure have dedicated local regions in UAE — AWS Middle East (UAE) Region and Azure UAE Central. All data remains in-country, complying with UAE TRA data residency mandates and NESA cybersecurity regulations.' },
    { question: 'How long does a cloud migration in Dubai take?', answer: 'Depending on infrastructure complexity, standard enterprise cloud migrations in UAE take 4–12 weeks. We deploy parallel environments to guarantee zero downtime throughout the process. Small business migrations (under 20 servers) typically complete in 2–3 weeks.' },
    { question: 'Which cloud provider is better for UAE businesses — AWS or Azure?', answer: 'Both have UAE data centers. AWS Middle East Region is generally preferred for infrastructure-heavy workloads. Azure UAE Central is stronger for Microsoft-centric environments (Microsoft 365, Active Directory, SQL Server). We assess your existing stack and recommend the right provider or a hybrid approach.' },
    { question: 'Can you migrate our on-premise servers to cloud with no downtime?', answer: 'Yes. We use parallel environment validation — your new cloud environment is fully tested before cutover. For most workloads, the actual switchover takes less than 15 minutes during a scheduled maintenance window.' },
    { question: 'Can you reduce our current AWS or Azure bills after migration?', answer: 'Absolutely. Using Cloud FinOps strategies including Reserved Instances, right-sizing, and waste elimination, we typically reduce our clients\' monthly cloud bills by 30–50% within 90 days of taking over management.' },
    { question: 'What is hybrid cloud and does our UAE business need it?', answer: 'Hybrid cloud combines on-premise private servers with public cloud (AWS or Azure). It is essential for UAE businesses in banking, government contracting, or healthcare that must keep sensitive data on UAE soil while using cloud for scalable compute.' },
    { question: 'How much does cloud migration cost in UAE?', answer: 'Cloud migration costs in UAE depend on environment size and complexity. Small business migrations (10–30 servers) typically range from AED 15,000–40,000 as a one-time project. Enterprise migrations are scoped individually. Contact us for a free migration assessment and TCO analysis.' },
  ],
  faqTitle: 'Cloud Migration Services UAE — Frequently Asked Questions',
};

export default async function CloudPage() {
  const service = await getService('cloud');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Cloud Services', item: 'https://nocko.com/services/cloud' },
          ],
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Cloud Solutions' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
