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
  title: 'IT AMC Services in Dubai, UAE | Annual Maintenance Contract | NOCKO',
  description:
    'IT Annual Maintenance Contract (AMC) services for businesses across UAE. Comprehensive IT maintenance, support, and management with fixed annual costs. Predictable IT expenses and reliable maintenance.',
  keywords:
    'IT AMC Dubai, annual maintenance contract UAE, IT maintenance contract, AMC services Dubai, IT support contract UAE',
  openGraph: {
    title: 'IT AMC Services in Dubai, UAE | Annual Maintenance Contract | NOCKO',
    description:
      'IT Annual Maintenance Contract (AMC) services for businesses across UAE. Comprehensive IT maintenance, support, and management with fixed annual costs.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-amc',
  },
};

const itAmcContent = {
  hero: {
    title: 'IT AMC Services',
    subtitle: 'Annual Maintenance Contract for Complete IT Support in UAE',
    description:
      'IT Annual Maintenance Contract (AMC) services for businesses across UAE. Comprehensive IT maintenance, support, and management with fixed annual costs. Predictable IT expenses, reliable maintenance, and peace of mind knowing your IT infrastructure is professionally managed.',
    serviceType: 'IT AMC',
  },
  firstSection: [
    {
      title: 'Predictable IT Costs with Annual Maintenance Contract',
      text: "IT AMC provides fixed annual costs for all your IT maintenance and support needs. No surprise expenses, no unexpected bills. You know exactly what you'll pay for IT maintenance each year, making budgeting easier and financial planning more predictable. One contract covers all your IT maintenance requirements.",
      link: '/articles/it-amc-costs',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'IT AMC annual maintenance contract services',
    },
    {
      title: 'Comprehensive IT Maintenance and Support',
      text: 'Our IT AMC includes complete maintenance and support services—regular system checks, software updates, hardware maintenance, troubleshooting, and technical support. Everything you need to keep your IT infrastructure running smoothly is covered under one annual contract.',
      link: '/articles/it-amc-comprehensive',
      linkText: 'Learn more',
    },
    {
      title: 'Priority Support and Faster Response Times',
      text: "IT AMC customers get priority support with faster response times. When you need help, you're at the front of the queue. Dedicated support team, guaranteed response times, and priority access to our IT professionals ensure your issues are resolved quickly.",
      link: '/articles/it-amc-priority',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Fixed annual costs for predictable IT budgeting',
    },
    {
      icon: 'icon2',
      title: 'Comprehensive maintenance covering all IT systems',
    },
    {
      icon: 'icon3',
      title: 'Priority support with guaranteed response times',
    },
    {
      icon: 'icon4',
      title: 'Regular maintenance visits and proactive system checks',
    },
    {
      icon: 'icon5',
      title: 'Complete documentation and transparent reporting',
    },
  ],
  secondSection: [
    {
      title: 'Regular Maintenance Visits and System Checks',
      text: 'We schedule regular maintenance visits to check your systems, update software, clean equipment, and ensure everything is working properly. Proactive maintenance prevents problems before they occur, keeping your IT infrastructure reliable and your business running smoothly.',
      link: '/articles/it-amc-maintenance-visits',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'Regular IT maintenance visits and system checks',
    },
    {
      title: 'Software Updates and Security Patches',
      text: 'We handle all software updates and security patches as part of your AMC. Operating system updates, application updates, security patches, and antivirus updates are all managed automatically. Your systems stay current, secure, and protected without you having to manage updates yourself.',
      link: '/articles/it-amc-updates',
      linkText: 'Learn more',
    },
    {
      title: 'Hardware Maintenance and Repairs',
      text: 'Hardware maintenance and repairs are included in your AMC. From cleaning equipment to replacing parts, we handle all hardware maintenance needs. If something breaks, we fix it quickly. Regular maintenance extends equipment lifespan and prevents costly failures.',
      link: '/articles/it-amc-hardware',
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
      title: 'How IT AMC Reduced IT Costs by 35%',
      description:
        'Learn how a Dubai-based company reduced IT costs and improved reliability with an IT AMC contract.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/it-amc',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to IT AMC in UAE',
      description:
        'Essential guide covering IT AMC services, benefits, costs, and what to include in your annual maintenance contract.',
      image: '/images/services/cards/guide.png',
      url: '/resources/it-amc-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Benefits of IT Annual Maintenance Contract for Your Business',
      description:
        'Learn why businesses in UAE choose IT AMC for predictable costs, reliable maintenance, and peace of mind.',
      image: '/images/services/cards/multi.png',
      url: '/blog/it-amc-benefits',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Get Predictable IT Maintenance?',
    text: "Contact us for a free consultation and let's discuss your IT AMC needs.",
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
      title: 'Managed IT Services',
      url: '/services/managed-it',
      description: 'Complete IT infrastructure management.',
    },
    {
      title: 'Structured Cabling',
      url: '/services/structured-cabling',
      description: 'Professional network infrastructure solutions.',
    },
  ],
};

export default function ITAMCPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={itAmcContent.hero.title}
          subtitle={itAmcContent.hero.subtitle}
          description={itAmcContent.hero.description}
          className="hero--it-amc"
        />

        <ServiceContentEnhanced blocks={itAmcContent.firstSection} />
        <ServiceFeatures features={itAmcContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itAmcContent.secondSection} />
        <ServiceBenefits benefits={itAmcContent.benefits} />
        <ServiceCTA
          title={itAmcContent.cta.title}
          text={itAmcContent.cta.text}
          ctaText={itAmcContent.cta.ctaText}
          ctaUrl={itAmcContent.cta.ctaUrl}
        />
        <RelatedServices services={itAmcContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

