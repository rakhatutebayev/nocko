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
  title: 'Cloud & Data Services in Dubai, UAE | Cloud Migration & Data Management | NOCKO',
  description:
    'Cloud migration and data management services for businesses across UAE. Cloud infrastructure setup, data migration, backup solutions, and cloud management. Secure and scalable cloud solutions.',
  keywords:
    'cloud services Dubai, cloud migration UAE, data management Dubai, cloud infrastructure UAE, cloud backup, cloud solutions',
  openGraph: {
    title: 'Cloud & Data Services in Dubai, UAE | Cloud Migration & Data Management | NOCKO',
    description:
      'Cloud migration and data management services for businesses across UAE. Cloud infrastructure setup, data migration, backup solutions, and cloud management.',
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
    title: 'Cloud & Data Services',
    subtitle: 'Cloud Migration and Data Management Solutions for Businesses in UAE',
    description:
      'Cloud migration and data management services for businesses across UAE. Secure and scalable cloud infrastructure setup, data migration, backup solutions, and cloud management. Move to the cloud with confidence and manage your data effectively.',
    serviceType: 'Cloud & Data Services',
  },
  firstSection: [
    {
      title: 'Cloud Migration Services',
      text: "Move your business to the cloud safely and efficiently. We plan and execute cloud migrations carefully, ensuring minimal downtime and zero data loss. Whether you're moving to AWS, Azure, Google Cloud, or private cloud, we handle the entire migration process smoothly.",
      link: '/articles/cloud-migration',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
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
      image: '/images/services/placeholder.svg',
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
};

export default function CloudPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
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

