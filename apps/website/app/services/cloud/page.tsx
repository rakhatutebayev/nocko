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
    title: 'Cloud Services Dubai | #1 Cloud Migration UAE',
    subtitle: 'Secure, Scalable Cloud Solutions for Modern Businesses across UAE',
    description:
      'Migrate to the cloud with confidence. We provide expert cloud infrastructure, data management, and backup solutions for businesses in Dubai, Abu Dhabi, and across the UAE including DIFC and Business Bay.',
    serviceType: 'Cloud & Data Services',
  },
  firstSection: [
    {
      title: 'Cloud Migration Services',
      text: "Move your business to the cloud safely and efficiently. We plan and execute cloud migrations carefully, ensuring minimal downtime and zero data loss. Whether you're moving to AWS, Azure, Google Cloud, or private cloud, we handle the entire migration process smoothly.",
      link: '/articles/cloud-migration',
      linkText: 'Learn more',
      image: '/images/services/cloud-migration-v2.png',
      imageAlt: 'Cloud migration services in UAE',
    },
    {
      title: 'Cloud Infrastructure Setup and Management',
      text: 'We design and deploy cloud infrastructure tailored to your business needs. From initial setup to ongoing management, we ensure your cloud environment is secure, scalable, and cost-effective. Optimized cloud architecture supports your business growth efficiently.',
      link: '/articles/cloud-infrastructure',
      linkText: 'Learn more',
    },
    {
      title: 'Data Management and Backup Solutions',
      text: 'Manage your data effectively with comprehensive data management solutions. Automated backups, data archiving, disaster recovery, and data governance ensure your data is protected, accessible, and compliant. Your data stays safe and organized in the cloud.',
      link: '/articles/cloud-data-management',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Safe and efficient cloud migration with zero downtime',
    },
    {
      icon: 'icon2',
      title: 'Scalable cloud infrastructure designed for your business',
    },
    {
      icon: 'icon3',
      title: 'Comprehensive data management and backup solutions',
    },
    {
      icon: 'icon4',
      title: 'Secure cloud environments with advanced security',
    },
    {
      icon: 'icon5',
      title: 'Cost optimization and cloud cost management',
    },
  ],
  secondSection: [
    {
      title: 'Multi-Cloud and Hybrid Cloud Solutions',
      text: 'We support multi-cloud and hybrid cloud architectures. Use multiple cloud providers or combine cloud with on-premises infrastructure for maximum flexibility. We manage complex cloud environments, ensuring everything works together seamlessly.',
      link: '/articles/cloud-multi-hybrid',
      linkText: 'Learn more',
      image: '/images/services/cloud-hybrid-v2.png',
      imageAlt: 'Multi-cloud and hybrid cloud solutions',
    },
    {
      title: 'Cloud Security and Compliance',
      text: 'We implement comprehensive cloud security measures to protect your data and applications. Encryption, access controls, security monitoring, and compliance management ensure your cloud environment meets security standards and regulatory requirements.',
      link: '/articles/cloud-security-compliance',
      linkText: 'Learn more',
    },
    {
      title: 'Cloud Cost Optimization',
      text: "We optimize your cloud costs to ensure you're getting the best value. Right-sizing resources, identifying unused services, and implementing cost-saving strategies reduce your cloud expenses while maintaining performance. You get maximum value from your cloud investment.",
      link: '/articles/cloud-cost-optimization',
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
    terms: ['Cloud Services Dubai', 'Cloud Migration UAE', 'Data Management Dubai', 'Managed Cloud Solutions'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Successful Cloud Migration: 50% Cost Reduction',
      description:
        'Learn how a Dubai-based company successfully migrated to the cloud and reduced IT costs by 50% while improving performance.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/cloud-migration',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to Cloud Services in UAE',
      description:
        'Essential guide covering cloud migration, cloud infrastructure, data management, and best practices for cloud services in Dubai and UAE.',
      image: '/images/services/cards/guide.png',
      url: '/resources/cloud-services-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Cloud Migration Strategy: Planning Your Move to the Cloud',
      description:
        'Learn how to plan and execute a successful cloud migration strategy for your business in the UAE.',
      image: '/images/services/cards/multi.png',
      url: '/blog/cloud-migration-strategy',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Move to the Cloud?',
    text: "Contact us for a free consultation and let's discuss your cloud and data services needs.",
    ctaText: 'Get Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Cybersecurity & Data Protection',
      url: '/services/cybersecurity',
      description: 'Enterprise cybersecurity solutions for your business.',
    },
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
  ],
  faq: {
    title: 'Frequently Asked Questions About Cloud Services',
    items: [
      {
        question: 'What cloud services does your IT company in Dubai provide?',
        answer:
          'As an IT company in Dubai, we provide comprehensive cloud services including cloud migration, cloud infrastructure setup, data management, backup solutions, multi-cloud and hybrid cloud solutions. Our IT company in Dubai helps businesses move to the cloud safely and efficiently.',
      },
      {
        question: 'How long does cloud migration take with an IT company in Dubai?',
        answer:
          'Cloud migration timelines vary based on your infrastructure size and complexity. As an IT company in Dubai, we typically complete migrations in 2-8 weeks, depending on your requirements. Our IT company in Dubai ensures minimal downtime during migration.',
      },
      {
        question: 'Does the IT company in Dubai offer cloud cost optimization?',
        answer:
          'Yes, our IT company in Dubai provides cloud cost optimization services including right-sizing resources, identifying unused services, and implementing cost-saving strategies. We help businesses reduce cloud expenses while maintaining performance.',
      },
      {
        question: 'What cloud platforms does the IT company in Dubai support?',
        answer:
          'Our IT company in Dubai supports all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and private cloud solutions. As an IT company in Dubai, we help you choose the best platform for your business needs.',
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

