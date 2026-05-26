import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Cloud Services in Dubai | Cloud Migration & Management for UAE Businesses | NOCKO',
  description:
    'Expert cloud services in Dubai and UAE. Cloud migration, infrastructure setup, data management, and secure backup solutions for businesses. Specialized in AWS, Azure, and private cloud for DIFC and Business Bay.',
  keywords:
    'cloud services Dubai, cloud migration UAE, cloud hosting Dubai, data management UAE, cloud backup Dubai, managed cloud services Dubai, cloud infrastructure UAE',
  openGraph: {
    title: 'Cloud Services in Dubai | Cloud Migration & Management for UAE Businesses | NOCKO',
    description: 'Secure and scalable cloud solutions for businesses in Dubai and across the UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/cloud' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Enterprise Cloud Services & Migration in Dubai',
    subtitle: 'Cost-Optimized AWS, Azure, and Private Cloud Solutions for UAE Businesses',
    description:
      'Reduce your IT CAPEX securely. We provide expert cloud architecture, zero-downtime migrations, and Data Residency-compliant hosting tailored for enterprises in Dubai, Abu Dhabi, and across the GCC.',
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
  resources: [],
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
    { question: 'Do AWS/Azure comply with UAE data localisation laws?', answer: 'Yes. Both AWS and Microsoft Azure now have dedicated local regions in UAE (AWS Middle East Region, Azure UAE Central).' },
    { question: 'How long does an enterprise cloud migration in Dubai take?', answer: 'Depending on complexity, standard enterprise migrations take 4–12 weeks. Our team deploys parallel environments to ensure zero downtime.' },
    { question: 'Can you reduce our current AWS or Azure bills?', answer: 'Absolutely. Using Cloud FinOps strategies, we typically reduce our clients\' monthly compute bills by 30–50%.' },
    { question: 'What is hybrid cloud and do we need it?', answer: 'Hybrid cloud combines your physical on-premise servers with public clouds like AWS. It\'s critical for banks or contractors who must store data locally.' },
  ],
  faqTitle: 'Cloud Migration FAQs',
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
