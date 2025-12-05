import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Support & Helpdesk Services in Dubai, UAE | NOCKO',
  description:
    '24/7 IT support and helpdesk services for businesses across UAE. Fast response times, remote support, on-site visits, proactive monitoring, and maintenance. Expert IT professionals available 24/7.',
  keywords:
    'IT support Dubai, helpdesk services UAE, 24/7 IT support, remote IT support, IT maintenance UAE, technical support Dubai',
  openGraph: {
    title: 'IT Support & Helpdesk Services in Dubai, UAE | NOCKO',
    description:
      '24/7 IT support and helpdesk services for businesses across UAE. Fast response times, remote support, on-site visits.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-support',
  },
};

const itSupportContent = {
  hero: {
    title: 'IT Support & Helpdesk Services',
    subtitle: '24/7 Technical Support and Maintenance for Businesses in UAE',
    description:
      'Comprehensive IT support and helpdesk services for businesses across UAE. 24/7 monitoring, optimization, and proactive maintenance to keep your IT systems running smoothly. Includes helpdesk, remote support, and on-site visits.',
    serviceType: 'IT Support & Helpdesk',
  },
  firstSection: [
    {
      title: '24/7 IT Support When You Need It Most',
      text: "IT problems don't wait for business hours. When something breaks, you need help immediately. Our 24/7 IT support team is always available to help resolve issues quickly. Fast response times with average 2 hours in Dubai and 4 hours across all Emirates. On-site engineers available 24/7.",
      link: '/articles/it-support-24-7',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: '24/7 IT support services in UAE',
    },
    {
      title: 'Professional Helpdesk for Quick Issue Resolution',
      text: 'Our helpdesk team handles all your IT support requests efficiently. From password resets to complex technical issues, we provide fast and reliable solutions. Clear communication, transparent processes, and predictable outcomes ensure you always know what to expect.',
      link: '/articles/it-support-helpdesk',
      linkText: 'Learn more',
    },
    {
      title: 'Remote Support for Instant Problem Solving',
      text: 'Many IT issues can be resolved remotely, saving time and reducing costs. Our remote support team can access your systems securely, diagnose problems quickly, and fix issues without needing to visit your office. Fast, efficient, and convenient.',
      link: '/articles/it-support-remote',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: '24/7 availability with fastest SLA response times',
    },
    {
      icon: 'icon2',
      title: 'Remote and on-site support options for all IT needs',
    },
    {
      icon: 'icon3',
      title: 'Proactive monitoring to prevent issues before they occur',
    },
    {
      icon: 'icon4',
      title: 'Expert IT professionals with 10+ years experience',
    },
    {
      icon: 'icon5',
      title: 'Comprehensive documentation and transparent communication',
    },
  ],
  secondSection: [
    {
      title: 'Proactive Monitoring and Maintenance',
      text: 'We monitor your IT systems 24/7 to catch problems before they affect your business. Proactive maintenance keeps your systems running smoothly, prevents downtime, and ensures optimal performance. Regular updates, patches, and optimization keep everything working at peak efficiency.',
      link: '/articles/it-support-monitoring',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'Proactive IT monitoring and maintenance',
    },
    {
      title: "On-Site Support When Remote Isn't Enough",
      text: "Some issues require hands-on attention. Our on-site engineers are available 24/7 across all Emirates. Whether you need hardware installation, network troubleshooting, or emergency repairs, we're there when you need us.",
      link: '/articles/it-support-onsite',
      linkText: 'Learn more',
    },
    {
      title: 'IT System Optimization and Performance Tuning',
      text: "We don't just fix problems—we optimize your systems for better performance. Regular performance tuning, capacity planning, and system optimization ensure your IT infrastructure runs efficiently and supports your business growth.",
      link: '/articles/it-support-optimization',
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
      title: 'How We Improved IT Support Response Times by 50%',
      description:
        'Learn how our proactive monitoring and 24/7 support helped a Dubai-based company reduce IT downtime and improve system reliability.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/it-support',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to IT Support Services in UAE',
      description:
        'Essential guide covering IT support options, helpdesk services, remote support, and best practices for IT maintenance in Dubai and UAE.',
      image: '/images/services/cards/guide.png',
      url: '/resources/it-support-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Proactive IT Maintenance: Preventing Problems Before They Occur',
      description:
        'Learn how proactive monitoring and maintenance can prevent IT issues and reduce downtime for businesses across UAE.',
      image: '/images/services/cards/multi.png',
      url: '/blog/proactive-it-maintenance',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Get Reliable IT Support?',
    text: "Contact us for a free consultation and let's discuss your IT support needs.",
    ctaText: 'Get Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
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
    {
      title: 'Cloud & Data Services',
      url: '/services/cloud',
      description: 'Cloud migration and data management services.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions About IT Support Services',
    items: [
      {
        question: 'What IT support services does your IT company in Dubai provide?',
        answer:
          'As an IT company in Dubai, we provide comprehensive IT support services including 24/7 helpdesk, remote support, on-site visits, proactive monitoring, system optimization, and maintenance. Our IT company in Dubai serves businesses across all Emirates with fast response times.',
      },
      {
        question: 'How quickly can the IT company in Dubai respond to IT issues?',
        answer:
          'Our IT company in Dubai provides fast response times with average 2 hours in Dubai and 4 hours across all Emirates. Remote support is available immediately, and on-site engineers are available 24/7 when needed.',
      },
      {
        question: 'Does the IT company in Dubai offer 24/7 IT support?',
        answer:
          'Yes, as a leading IT company in Dubai, NOCKO provides 24/7 IT support for businesses across UAE. Our IT company in Dubai has dedicated support teams available around the clock to resolve issues quickly.',
      },
      {
        question: 'What industries does the IT company in Dubai serve?',
        answer:
          'Our IT company in Dubai serves multiple industries including healthcare, finance, retail, education, logistics, manufacturing, real estate, and corporate/enterprise businesses. As an IT company in Dubai, we have experience across 8+ industries.',
      },
      {
        question: 'Why choose NOCKO as your IT company in Dubai?',
        answer:
          'NOCKO is a trusted IT company in Dubai with local expertise, 24/7 support, expert team with 10+ years experience, proven track record serving 50+ clients, comprehensive solutions, and cost-effective pricing. Our IT company in Dubai provides reliable IT support across all Emirates.',
      },
    ],
  },
};

export default function ITSupportPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Services', url: '/services' },
            { name: 'IT Support & Helpdesk' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={itSupportContent.hero.title}
          subtitle={itSupportContent.hero.subtitle}
          description={itSupportContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itSupportContent.firstSection} />
        <ServiceFeatures features={itSupportContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itSupportContent.secondSection} />
        <ServiceBenefits benefits={itSupportContent.benefits} />
        <ServiceFAQ
          title={itSupportContent.faq.title}
          items={itSupportContent.faq.items}
          includeDubaiKeyword={true}
        />
        <ServiceCTA
          title={itSupportContent.cta.title}
          text={itSupportContent.cta.text}
          ctaText={itSupportContent.cta.ctaText}
          ctaUrl={itSupportContent.cta.ctaUrl}
        />
        <RelatedServices services={itSupportContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

