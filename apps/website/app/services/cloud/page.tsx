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
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cloud Services in Dubai | #1 Cloud Migration & Management UAE | NOCKO',
  description:
    'Expert cloud services in Dubai and UAE. Cloud migration, infrastructure setup, data management, and secure backup solutions for businesses. Specialized in AWS, Azure, and private cloud for DIFC and Business Bay.',
  keywords:
    'cloud services Dubai, cloud migration UAE, cloud hosting Dubai, data management UAE, cloud backup Dubai, managed cloud services Dubai, cloud infrastructure UAE',
  openGraph: {
    title: 'Cloud Services in Dubai | #1 Cloud Migration & Management UAE | NOCKO',
    description:
      'Secure and scalable cloud solutions for businesses in Dubai and across the UAE. Expert cloud migration and infrastructure management.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/cloud',
  },
};

const cloudContent = {
  hero: {
    title: 'Enterprise Cloud Services & Migration in Dubai',
    subtitle: 'Cost-Optimized AWS, Azure, and Private Cloud Solutions for UAE Businesses',
    description:
      'Reduce your IT CAPEX securely. We provide expert cloud architecture, zero-downtime migrations, and Data Residency-compliant hosting tailored for enterprises in Dubai, Abu Dhabi, and across the GCC.',
    serviceType: 'Cloud & Data Services',
  },
  firstSection: [
    {
      title: 'Zero-Downtime Cloud Migration',
      text: "Evacuate your aging server room smoothly. Our certified cloud architects meticulously plan and execute migrations to the AWS Middle East (UAE) Region and Azure UAE Central. By utilizing secure parallel validation, we guarantee zero data loss and absolutely minimal downtime—whether you require a 'lift-and-shift' or an application refactoring.",
      link: '/articles/cloud-infrastructure-guide',
      linkText: 'Read our Integration Guide',
      image: '/images/services/cloud-migration-v2.png',
      imageAlt: 'Cloud migration services in UAE',
    },
    {
      title: 'Infrastructure Setup and Cloud FinOps',
      text: 'Moving to the cloud should lower costs, not explode them. We design strictly optimized environments utilizing auto-scaling and Reserved Instances (RIs) to drastically reduce your monthly OPEX. Our FinOps dashboards ensure you never suffer from "bill shock" by instantly shutting down orphaned test servers during Dubai off-hours.',
      link: '/articles/cloud-infrastructure-guide',
      linkText: 'Learn about FinOps',
    },
    {
      title: 'Compliance-Driven Data Backup (DRaaS)',
      text: 'Is your company prepared for a massive ransomware attack? We deploy robust Disaster Recovery as a Service (DRaaS) with exact Recovery Point Objectives (RPO). By implementing immutable, air-gapped backups and strict AES-256 encryption, we ensure your data survives any disaster while strictly adhering to UAE federal data laws.',
      link: '/articles/cloud-data-management',
      linkText: 'Data Protection Strategies',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Zero-downtime migration workflows to AWS and Azure',
    },
    {
      icon: 'icon2',
      title: 'Guaranteed compliance with UAE TRA data residency mandates',
    },
    {
      icon: 'icon3',
      title: 'Proactive Cloud FinOps ensuring maximum cost reduction',
    },
    {
      icon: 'icon4',
      title: 'Military-grade encryption and automated Disaster Recovery',
    },
    {
      icon: 'icon5',
      title: '24/7 localized SOC monitoring from our Dubai headquarters',
    },
  ],
  secondSection: [
    {
      title: 'Hybrid Cloud: The Best of Both Worlds',
      text: 'Not all data belongs on a public server. We design sophisticated Hybrid Cloud architectures that keep your highly sensitive financial databases on secure, local private servers within UAE datacenters (like Khazna or Equinix DX1), while bursting non-sensitive frontend web traffic seamlessly into scalable AWS environments.',
      link: '/articles/cloud-multi-hybrid',
      linkText: 'Explore Hybrid Clouds',
      image: '/images/services/cloud-hybrid-v2.png',
      imageAlt: 'Hybrid cloud solutions in Dubai',
    },
    {
      title: 'Cloud Security and NESA Alignment',
      text: 'In the cloud, security relies on the Shared Responsibility Model. We take full ownership of your IAM (Identity and Access Management), deploying Zero-Trust protocols and securing endpoints. We ensure your architecture meets the rigorous National Electronic Security Authority (NESA/SIA) frameworks required by UAE government and enterprise clients.',
      link: '/articles/cloud-security-compliance',
      linkText: 'Ensure Cloud Security',
    },
    {
      title: 'Microsoft 365 and Google Workspace Integration',
      text: "Modernize your remote workforce. We handle complete corporate migrations from legacy on-premise Exchange servers directly into Microsoft 365 or Google Workspace. Complete with advanced spam filtering, SharePoint architecture, and strict mobile device management (MDM) endpoint controls.",
      link: '/articles/cloud-cost-optimization',
      linkText: 'Modernize Your Workforce',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Dubai-based Cloud <br> Certified Architects',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Zero-Downtime <br> Migration Workflows',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'TRA / NESA <br> Data Compliance',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Aggressive Cloud <br> Cost Optimization',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Transparent <br> Dashboard Metrics',
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
    terms: ['AWS Migration Dubai', 'Azure Integrator UAE', 'Cloud FinOps Middle East', 'Private Datacenter Hosting'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Successful Hybrid Migration: 40% OPEX Reduction',
      description:
        'Learn how a JLT-based financial firm maintained strict data residency compliance while completely removing their on-premise CAPEX.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/cloud-migration',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'The Ultimate Guide to Cloud Infrastructure',
      description:
        'Essential architectural guide covering TCO analysis, FinOps, and multi-cloud strategies for GCC businesses.',
      image: '/images/services/cards/guide.png',
      url: '/articles/cloud-infrastructure-guide',
      ctaText: 'Read Guide',
    },
    {
      type: 'CAPABILITY',
      title: 'Defending Your Cloud with Zero Trust',
      description:
        'Understand the shared responsibility model and why IAM security is critical for your Azure deployment.',
      image: '/images/services/cards/multi.png',
      url: '/articles/cybersecurity-guide',
      ctaText: 'Secure Your Cloud',
    },
  ],
  cta: {
    title: 'Ready to Evacuate Your Server Room?',
    text: "Contact our Senior Cloud Architects for a Free Total Cost of Ownership (TCO) Analysis.",
    ctaText: 'Request TCO Analysis',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Cybersecurity & IAM',
      url: '/services/cybersecurity',
      description: 'Zero Trust architecture and cloud endpoint security.',
    },
    {
      title: 'Strategic IT Consulting',
      url: '/services/it-consulting',
      description: 'Vendor selection and digital transformation roadmaps.',
    },
    {
      title: 'Managed IT Services',
      url: '/services/managed-it',
      description: '24/7 NOC monitoring of your new cloud environment.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions About Cloud Migrations',
    items: [
      {
        question: 'Does AWS/Azure comply with UAE data residency laws?',
        answer:
          'Yes. Both AWS and Microsoft Azure now host dedicated Local Regions within the UAE (AWS Middle East Region, Azure UAE Central). By actively selecting these availability zones, your data remains physically within the Emirates, fully complying with TDRA and NESA regulations.',
      },
      {
        question: 'How long does an enterprise cloud migration take in Dubai?',
        answer:
          'Depending on whether you are executing a simple "lift-and-shift" or refactoring legacy applications, standard enterprise migrations take 4 to 12 weeks. Our Dubai team stages parallel environments to ensure the final cutover is instantaneous, guaranteeing zero downtime during business hours.',
      },
      {
        question: 'Can you lower our existing AWS or Azure bills?',
        answer:
          'Absolutely. We utilize Cloud FinOps strategies. By terminating orphaned resources, right-sizing over-provisioned virtual machines, and implementing 3-Year Reserved Instances (RIs) or Savings Plans, we typically slash our clients’ monthly compute bills by 30% to 50%.',
      },
      {
        question: 'What is a Hybrid Cloud and do we need one?',
        answer:
          'A Hybrid Cloud combines your physical on-premise servers (or a dedicated local private datacenter like Khazna) with massive public clouds like AWS. This is critical for banks or government contractors in Abu Dhabi who need high-performance computing without ever moving sensitive IP out of their physical building.',
      },
    ],
  },
};

export default function CloudPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Services', url: '/services' },
            { name: 'Cloud & Data Services' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={cloudContent.hero.title}
          subtitle={cloudContent.hero.subtitle}
          description={cloudContent.hero.description}
        />

        <ServiceContentEnhanced blocks={cloudContent.firstSection} />
        <ServiceFeatures features={cloudContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={cloudContent.secondSection} />
        <ServiceBenefits benefits={cloudContent.benefits} />
        
        <ServiceGeo 
          title="Cloud Infrastructure for UAE Business Hubs"
          description="From cloud migration in DIFC to hybrid solutions in Abu Dhabi, NOCKO powers the digital transformation of Emirates-based businesses."
          emirates={cloudContent.geoContent.emirates}
          terms={cloudContent.geoContent.terms}
          footerNote="Scale with NOCKO"
        />

        <ServiceFAQ
          title={cloudContent.faq.title}
          items={cloudContent.faq.items}
        />
        <ServiceCTA
          title={cloudContent.cta.title}
          text={cloudContent.cta.text}
          ctaText={cloudContent.cta.ctaText}
          ctaUrl={cloudContent.cta.ctaUrl}
        />
        <RelatedServices services={cloudContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

