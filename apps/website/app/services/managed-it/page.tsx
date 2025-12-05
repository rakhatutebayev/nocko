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
  title: 'Managed IT Services in Dubai, UAE | Complete IT Management | NOCKO',
  description:
    'Comprehensive managed IT services for businesses across UAE. Complete IT infrastructure management, monitoring, maintenance, and support. Proactive IT management to keep your business running smoothly.',
  keywords:
    'managed IT services Dubai, IT management UAE, managed IT infrastructure, IT outsourcing Dubai, complete IT management UAE',
  openGraph: {
    title: 'Managed IT Services in Dubai, UAE | Complete IT Management | NOCKO',
    description:
      'Comprehensive managed IT services for businesses across UAE. Complete IT infrastructure management, monitoring, maintenance, and support.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/managed-it',
  },
};

const managedItContent = {
  hero: {
    title: 'Managed IT Services',
    subtitle: 'Complete IT Infrastructure Management for Businesses in UAE',
    description:
      'Comprehensive managed IT services for businesses across UAE. We handle all aspects of your IT infrastructure—monitoring, maintenance, support, and optimization—so you can focus on your business. Proactive management keeps your systems running smoothly and securely.',
    serviceType: 'Managed IT Services',
  },
  firstSection: [
    {
      title: 'Complete IT Infrastructure Management',
      text: 'We take full responsibility for your IT infrastructure. From network monitoring to system maintenance, security updates to performance optimization, we handle everything. You get a dedicated IT team managing your systems 24/7, ensuring everything runs smoothly without you having to worry about it.',
      link: '/articles/managed-it-infrastructure',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'Complete IT infrastructure management services',
    },
    {
      title: 'Proactive IT Management and Monitoring',
      text: 'We monitor your IT systems continuously, catching issues before they become problems. Proactive management means we fix things before they break, update systems before vulnerabilities appear, and optimize performance before slowdowns occur. Your IT infrastructure stays healthy and reliable.',
      link: '/articles/managed-it-monitoring',
      linkText: 'Learn more',
    },
    {
      title: 'Scalable IT Solutions That Grow With Your Business',
      text: "As your business grows, your IT needs change. Our managed IT services scale with you—adding capacity, expanding infrastructure, and adapting to new requirements. Whether you're opening new offices or adding employees, we ensure your IT infrastructure supports your growth seamlessly.",
      link: '/articles/managed-it-scalable',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: '24/7 monitoring and management of all IT systems',
    },
    {
      icon: 'icon2',
      title: 'Proactive maintenance to prevent issues before they occur',
    },
    {
      icon: 'icon3',
      title: 'Complete IT infrastructure management and support',
    },
    {
      icon: 'icon4',
      title: 'Scalable solutions that adapt to your business growth',
    },
    {
      icon: 'icon5',
      title: 'Transparent reporting and clear communication',
    },
  ],
  secondSection: [
    {
      title: 'Security Management and Compliance',
      text: "We manage your IT security comprehensively—firewall management, antivirus updates, security patches, and compliance monitoring. Regular security audits and vulnerability assessments ensure your systems stay protected. We handle security so you don't have to worry about threats.",
      link: '/articles/managed-it-security',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'IT security management and compliance',
    },
    {
      title: 'Backup and Disaster Recovery Management',
      text: 'We manage your backups and disaster recovery plans. Automated backups, regular testing, and recovery procedures ensure your data is safe and recoverable. If disaster strikes, we restore your systems quickly so your business can continue operating.',
      link: '/articles/managed-it-backup',
      linkText: 'Learn more',
    },
    {
      title: 'Cost-Effective IT Management',
      text: 'Managed IT services provide predictable costs and better value than hiring an in-house team. You get enterprise-level IT management without the overhead of full-time employees. Fixed monthly costs make budgeting easier, and you avoid unexpected IT expenses.',
      link: '/articles/managed-it-cost',
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
      title: 'How Managed IT Services Reduced Costs by 40%',
      description:
        'Learn how a Dubai-based company reduced IT costs and improved reliability by switching to managed IT services.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/managed-it',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to Managed IT Services in UAE',
      description:
        'Essential guide covering managed IT services, benefits, costs, and best practices for IT management in Dubai and UAE.',
      image: '/images/services/cards/guide.png',
      url: '/resources/managed-it-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'When to Consider Managed IT Services for Your Business',
      description:
        'Learn when and why businesses in UAE should consider managed IT services for better IT management and cost savings.',
      image: '/images/services/cards/multi.png',
      url: '/blog/managed-it-services',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Simplify Your IT Management?',
    text: "Contact us for a free consultation and let's discuss your managed IT services needs.",
    ctaText: 'Get Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'IT Support & Helpdesk',
      url: '/services/it-support',
      description: '24/7 IT support and helpdesk services.',
    },
    {
      title: 'Structured Cabling',
      url: '/services/structured-cabling',
      description: 'Professional network infrastructure solutions.',
    },
    {
      title: 'Cybersecurity & Data Protection',
      url: '/services/cybersecurity',
      description: 'Enterprise cybersecurity solutions for your business.',
    },
  ],
};

export default function ManagedITPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={managedItContent.hero.title}
          subtitle={managedItContent.hero.subtitle}
          description={managedItContent.hero.description}
        />

        <ServiceContentEnhanced blocks={managedItContent.firstSection} />
        <ServiceFeatures features={managedItContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={managedItContent.secondSection} />
        <ServiceBenefits benefits={managedItContent.benefits} />
        <ServiceCTA
          title={managedItContent.cta.title}
          text={managedItContent.cta.text}
          ctaText={managedItContent.cta.ctaText}
          ctaUrl={managedItContent.cta.ctaUrl}
        />
        <RelatedServices services={managedItContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

