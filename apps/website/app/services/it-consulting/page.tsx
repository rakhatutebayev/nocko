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

export const metadata: Metadata = {
  title: 'IT Consulting Services in Dubai | #1 Technology Strategy UAE | NOCKO',
  description:
    'Strategic IT consulting services in Dubai and UAE. Technology assessment, digital transformation, and infrastructure planning for businesses. Expert IT advisors for DIFC, JLT and Business Bay.',
  keywords:
    'IT consulting Dubai, IT strategy UAE, technology consulting Dubai, IT planning UAE, digital transformation Dubai, IT assessment UAE, best IT consulting Dubai',
  openGraph: {
    title: 'IT Consulting Services in Dubai | #1 Technology Strategy UAE | NOCKO',
    description:
      'Expert IT strategy and technology consulting for businesses in Dubai and across the UAE. Drive growth through digital transformation.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-consulting',
  },
};

const itConsultingContent = {
  hero: {
    title: 'IT Consulting Dubai | #1 Technology Strategy UAE',
    subtitle: 'Expert IT Strategy & Digital Transformation for Businesses across UAE',
    description:
      'Make informed technology decisions with expert IT consulting. We provide strategic planning, technology assessments, and digital transformation for businesses in Dubai, Abu Dhabi, and across the UAE including DIFC and Business Bay.',
    serviceType: 'IT Consulting',
  },
  firstSection: [
    {
      title: 'IT Strategy and Planning',
      text: 'Develop a comprehensive IT strategy aligned with your business goals. We analyze your current IT infrastructure, identify gaps, and create a strategic plan for technology adoption and optimization. Your IT strategy supports business growth and drives competitive advantage.',
      link: '/articles/it-consulting-strategy',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'IT strategy and planning services',
    },
    {
      title: 'Technology Assessment and Evaluation',
      text: 'Evaluate your current technology stack and identify opportunities for improvement. We assess your IT infrastructure, software, hardware, and processes to recommend the best solutions. Make informed technology decisions based on expert analysis and industry best practices.',
      link: '/articles/it-consulting-assessment',
      linkText: 'Learn more',
    },
    {
      title: 'Digital Transformation Consulting',
      text: 'Navigate digital transformation with expert guidance. We help you modernize your IT infrastructure, adopt new technologies, and transform your business processes. Digital transformation consulting ensures you leverage technology effectively to achieve business objectives.',
      link: '/articles/it-consulting-digital-transformation',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Comprehensive IT strategy aligned with business goals',
    },
    {
      icon: 'icon2',
      title: 'Expert technology assessment and evaluation',
    },
    {
      icon: 'icon3',
      title: 'Digital transformation guidance and planning',
    },
    {
      icon: 'icon4',
      title: 'Cost-benefit analysis and ROI evaluation',
    },
    {
      icon: 'icon5',
      title: 'Implementation roadmap and project planning',
    },
  ],
  secondSection: [
    {
      title: 'IT Infrastructure Design and Architecture',
      text: 'Design optimal IT infrastructure architecture for your business needs. We create scalable, secure, and efficient infrastructure designs that support current operations and future growth. Proper architecture ensures your IT infrastructure performs well and adapts to changing requirements.',
      link: '/articles/it-consulting-infrastructure-design',
      linkText: 'Learn more',
      image: '/images/services/placeholder.svg',
      imageAlt: 'IT infrastructure design and architecture',
    },
    {
      title: 'Cost-Benefit Analysis and ROI Evaluation',
      text: 'Evaluate technology investments with detailed cost-benefit analysis. We analyze costs, benefits, risks, and ROI to help you make informed decisions. Understand the financial impact of technology investments before you commit, ensuring maximum value from your IT spending.',
      link: '/articles/it-consulting-roi',
      linkText: 'Learn more',
    },
    {
      title: 'Implementation Roadmap and Project Planning',
      text: 'Create detailed implementation roadmaps for your IT projects. We plan project phases, timelines, resources, and milestones to ensure successful implementation. Clear roadmaps and project planning reduce risks and ensure smooth execution of your IT initiatives.',
      link: '/articles/it-consulting-roadmap',
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
    terms: ['IT Consulting Dubai', 'Technology Strategy UAE', 'IT Assessment Dubai', 'Digital Transformation'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'IT Strategy Success: 200% ROI in First Year',
      description:
        'Learn how our IT consulting helped a Dubai-based company develop a winning IT strategy that delivered 200% ROI in the first year.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/it-consulting',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to IT Consulting in UAE',
      description:
        'Essential guide covering IT strategy, technology assessment, digital transformation, and best practices for IT consulting in Dubai and UAE.',
      image: '/images/services/cards/guide.png',
      url: '/resources/it-consulting-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'How to Choose the Right IT Consulting Partner',
      description:
        'Learn what to look for when choosing an IT consulting partner and how to ensure successful IT strategy implementation.',
      image: '/images/services/cards/multi.png',
      url: '/blog/choose-it-consulting',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Develop Your IT Strategy?',
    text: "Contact us for a free consultation and let's discuss your IT consulting needs.",
    ctaText: 'Get Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Managed IT Services',
      url: '/services/managed-it',
      description: 'Complete IT infrastructure management.',
    },
    {
      title: 'Cloud & Data Services',
      url: '/services/cloud',
      description: 'Cloud migration and data management services.',
    },
    {
      title: 'Cybersecurity & Data Protection',
      url: '/services/cybersecurity',
      description: 'Enterprise cybersecurity solutions for your business.',
    },
  ],
};

export default function ITConsultingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={itConsultingContent.hero.title}
          subtitle={itConsultingContent.hero.subtitle}
          description={itConsultingContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itConsultingContent.firstSection} />
        <ServiceFeatures features={itConsultingContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itConsultingContent.secondSection} />
        <ServiceBenefits benefits={itConsultingContent.benefits} />
        
        <ServiceGeo 
          title="Strategic IT Guidance Across the Emirates"
          description="From DIFC-based financial strategies to retail-focused digital transformations in Business Bay, NOCKO is the trusted IT advisor for UAE businesses."
          emirates={itConsultingContent.geoContent.emirates}
          terms={itConsultingContent.geoContent.terms}
          footerNote="Expert Strategic Advice"
        />

        <ServiceCTA
          title={itConsultingContent.cta.title}
          text={itConsultingContent.cta.text}
          ctaText={itConsultingContent.cta.ctaText}
          ctaUrl={itConsultingContent.cta.ctaUrl}
        />
        <RelatedServices services={itConsultingContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

