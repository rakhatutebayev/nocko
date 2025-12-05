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
  title: 'Structured Cabling Services in Dubai, UAE | NOCKO',
  description:
    'Professional structured cabling services in Dubai, UAE. Cat6/Cat6A and fiber optic installation, testing, and certification. Expert network infrastructure solutions for businesses.',
  keywords:
    'structured cabling Dubai, network cabling UAE, Cat6 installation, fiber optic cabling, network infrastructure Dubai',
  openGraph: {
    title: 'Structured Cabling Services in Dubai, UAE | NOCKO',
    description:
      'Professional structured cabling services in Dubai, UAE. Cat6/Cat6A and fiber optic installation, testing, and certification.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/structured-cabling',
  },
};

// Static content from original HTML
const firstSection = [
  {
    title: 'Start Deploying in Minutes Across All Emirates',
    text: 'Prebuilt cabling solutions and certified technicians allow you to deploy network infrastructure across Dubai, Abu Dhabi, Sharjah, and all Emirates, without any of the complexity or deployment risks. Our team handles site surveys, route planning, and compliance requirements, so you can focus on your business operations.',
    link: '/articles/deployment',
    linkText: 'Learn more',
    image: '/images/services/cabling-deploy.png',
    imageAlt: 'Network infrastructure deployment across UAE Emirates',
  },
  {
    title: 'Accelerate Network Performance Through Expert Installation',
    text: 'Get optimal network performance via our certified technicians and industry-standard installation practices. Use our channel management solutions to ensure proper cable routing, labeling, and documentation. Reach peak performance through the infrastructure your business needs.',
    link: '/articles/performance',
    linkText: 'Learn more',
  },
  {
    title: 'Maintain Performance Across the Entire Network Lifecycle',
    text: "It's now easier to manage network infrastructure. Tools like proactive monitoring, preventive maintenance, performance optimization, and lifecycle management allow you to turn potential downtime into maximum uptime across the network lifecycle, from installation to optimization, upgrades, and expansion.",
    link: '/articles/lifecycle',
    linkText: 'Learn more',
  },
];

const features = [
  {
    icon: 'icon1',
    title: 'Offer the localized experience your businesses expect in UAE',
  },
  {
    icon: 'icon2',
    title: 'Integrate quickly with any network infrastructure type',
  },
  {
    icon: 'icon3',
    title: 'Manage the entire network lifecycle with 24/7 support',
  },
  {
    icon: 'icon4',
    title: 'Automate monitoring and maintenance processes',
  },
  {
    icon: 'icon5',
    title: 'Strong documentation for network management',
  },
];

const secondSection = [
  {
    title: 'Grow Network Performance with Advanced Solutions',
    text: 'Use our comprehensive network solutions to plan and execute infrastructure expansion strategies - upgrades, scalability, optimization - and manage networks from any location. Our tools help you scale from small office networks to enterprise-wide infrastructure across multiple locations in UAE.',
    link: '/articles/solutions',
    linkText: 'Learn more',
    image: '/images/services/cabling-performance.png',
    imageAlt: 'Advanced network solutions for business growth',
  },
  {
    title: 'Mix and Manage Multiple Network Types',
    text: 'Our flexible platform supports deployment of multiple cabling types, allowing you to simultaneously manage Cat6, Cat6A, and fiber optic infrastructure. You can make the transition to higher-speed networks without disruption and maximize your network performance.',
    link: '/articles/network-types',
    linkText: 'Learn more',
  },
  {
    title: 'Scale Your Network Across UAE Without Risk',
    text: "Use our flexible deployment models - standard installation, rapid deployment, or hybrid solutions - to adapt to what's next and give your business the network infrastructure experience it expects. From single office to multi-location enterprise networks.",
    link: '/articles/scaling',
    linkText: 'Learn more',
  },
];

const benefits = [
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
];

const resources = [
  {
    type: 'CASE STUDY',
    title: 'How Scalini Transformed Network Infrastructure Across 5 Locations',
    description:
      'Learn how Scalini restaurant chain upgraded their network infrastructure across 5 locations in Dubai, reducing downtime by 95% and improving customer experience.',
    image: '/images/services/cards/book.png',
    url: '/case-studies/scalini',
    ctaText: 'Read Case Study',
    imageAlt: 'Scalini network infrastructure case study',
  },
  {
    type: 'GUIDE',
    title: 'Complete Guide to Structured Cabling in UAE',
    description:
      'Essential guide covering Cat6 vs Cat6A, fiber optic options, compliance requirements, and best practices for network infrastructure in Dubai and UAE.',
    image: '/images/services/cards/guide.png',
    url: '/resources/structured-cabling-guide',
    ctaText: 'Download Guide',
    imageAlt: 'Structured cabling guide for UAE businesses',
  },
  {
    type: 'ARTICLE',
    title: 'Network Infrastructure Planning for Multi-Location Businesses',
    description:
      'Learn how to plan and deploy network infrastructure across multiple locations in UAE, including Dubai, Abu Dhabi, and other Emirates.',
    image: '/images/services/cards/multi.png',
    url: '/blog/network-infrastructure-planning',
    ctaText: 'Read Article',
    imageAlt: 'Multi-location network planning article',
  },
];

const relatedServices = [
  {
    title: 'Network & Infrastructure Setup',
    url: '/services/network-infrastructure',
    description: 'Complete network design and deployment solutions.',
  },
  {
    title: 'IT Support & Maintenance',
    url: '/services/it-support',
    description: '24/7 IT support and maintenance services.',
  },
  {
    title: 'Cybersecurity & Data Protection',
    url: '/services/cybersecurity',
    description: 'Enterprise cybersecurity solutions for your business.',
  },
];

export default function StructuredCablingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title="Structured Cabling Services"
          subtitle="Professional Network Infrastructure Solutions for Businesses in UAE"
          description="Professional structured cabling services for businesses across UAE. Simplify network infrastructure deployment with reliable solutions that maximize performance, scalability, and compliance."
        />

        <ServiceContentEnhanced blocks={firstSection} />
        <ServiceFeatures features={features} />
        <ServiceContentEnhanced modifier="second" blocks={secondSection} />
        <ServiceBenefits benefits={benefits} />
        <ServiceCTA
          title="Ready to Upgrade Your Network Infrastructure?"
          text="Contact us for a free consultation and let's discuss your structured cabling needs."
          ctaText="Get Free Consultation"
          ctaUrl="#contact"
        />
        <RelatedServices
          title="Related Services"
          subtitle="Explore other IT infrastructure services we offer"
          services={relatedServices}
        />
      </main>
      <Footer />
    </>
  );
}

