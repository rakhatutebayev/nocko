import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'IT Consulting Services in Dubai | Technology Strategy & IT Consulting UAE | NOCKO',
  description:
    'Strategic IT consulting services in Dubai and UAE. Technology assessment, digital transformation, and infrastructure planning for businesses. Expert IT advisors for DIFC, JLT and Business Bay.',
  keywords:
    'IT consulting Dubai, IT strategy UAE, technology consulting Dubai, IT planning UAE, digital transformation Dubai, IT assessment UAE, best IT consulting Dubai',
  openGraph: {
    title: 'IT Consulting Services in Dubai | Technology Strategy & IT Consulting UAE | NOCKO',
    description: 'Expert IT strategy and technology consulting for businesses in Dubai and across the UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/it-consulting' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Strategic IT Consulting & Digital Transformation in Dubai',
    subtitle: 'Technology Assessment, Roadmapping, and Digital Strategy for UAE Enterprises',
    description:
      'Turn technology into a competitive advantage. Our senior IT consultants help businesses in Dubai and the UAE align technology investments with business objectives, optimize existing infrastructure, and navigate digital transformation.',
  },
  firstSection: [
    {
      title: 'IT Infrastructure Assessment',
      text: 'Begin with a comprehensive assessment of your current IT environment. Our consultants evaluate your infrastructure, identify inefficiencies, security gaps, and opportunities for optimization — delivering a detailed report with actionable recommendations.',
      link: '/articles/it-consulting-assessment',
      linkText: 'Assessment methodology',
      image: '/images/services/it-consulting-strategy-v2.png',
      imageAlt: 'IT infrastructure assessment Dubai',
    },
    {
      title: 'Technology Roadmap Development',
      text: 'We create detailed 12-36 month technology roadmaps aligned with your business goals. Our roadmaps prioritize investments by ROI, risk reduction, and strategic impact — giving your leadership team a clear path forward.',
      link: '/articles/it-consulting-roadmap',
      linkText: 'Roadmap approach',
    },
    {
      title: 'Digital Transformation Strategy',
      text: 'Navigate digital transformation with confidence. We help UAE businesses leverage cloud computing, automation, and emerging technologies to streamline operations, reduce costs, and create new revenue opportunities.',
      link: '/articles/it-consulting-digital-transformation',
      linkText: 'Digital transformation guide',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Vendor-neutral technology recommendations' },
    { icon: 'icon2', title: 'ROI-focused investment prioritization' },
    { icon: 'icon3', title: 'Change management and team adoption support' },
    { icon: 'icon4', title: 'Risk assessment and mitigation planning' },
    { icon: 'icon5', title: 'Board-level technology presentations' },
  ],
  secondSection: [
    {
      title: 'IT Strategy & Governance',
      text: 'Establish strong IT governance frameworks that align technology decisions with business strategy. We help you implement IT steering committees, policies, and KPIs that ensure technology investments deliver measurable business value.',
      link: '/articles/it-consulting-strategy',
      linkText: 'IT governance frameworks',
      image: '/images/services/it-consulting-architecture-v2.png',
      imageAlt: 'IT strategy consulting UAE',
    },
    {
      title: 'Vendor Selection & Procurement',
      text: 'Navigate the complex technology vendor landscape with expert guidance. We conduct objective vendor evaluations, negotiate contracts, and ensure you select solutions that best fit your specific business requirements and budget.',
      link: '/articles/it-consulting-roi',
      linkText: 'Vendor selection process',
    },
    {
      title: 'IT Cost Optimization',
      text: 'Identify and eliminate wasteful IT spending without compromising performance or security. Our cost optimization engagements typically identify 15-30% savings opportunities in licensing, infrastructure, and operational costs.',
      link: '/articles/it-consulting-ransomware-survival',
      linkText: 'Cost optimization approach',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Senior consultants with UAE market expertise' },
    { icon: '/images/benefits/time.png', text: 'Rapid assessment turnaround' },
    { icon: '/images/benefits/team.png', text: 'Vendor-neutral recommendations' },
    { icon: '/images/benefits/pricing.png', text: 'ROI-focused engagements' },
    { icon: '/images/benefits/communication.png', text: 'Executive-ready deliverables' },
  ],
  resources: [],
  cta: {
    title: 'Ready to Align Your IT with Business Goals?',
    text: 'Schedule a free consultation with our senior IT consultants to discuss your technology challenges.',
    ctaText: 'Schedule Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Managed IT Services', url: '/services/managed-it', description: 'Implement your IT strategy with managed services.' },
    { title: 'Cloud Services', url: '/services/cloud', description: 'Cloud strategy and migration execution.' },
    { title: 'Cybersecurity', url: '/services/cybersecurity', description: 'Security strategy and compliance frameworks.' },
  ],
  faq: [
    { question: 'How long does an IT consulting engagement typically take?', answer: 'Infrastructure assessments take 2-4 weeks. Full digital transformation roadmaps take 4-8 weeks. Implementation support can be ongoing or project-based.' },
    { question: 'Do you implement the recommendations you make?', answer: 'Yes. NOCKO provides both consulting and implementation services. Our engineers can execute the recommendations from our consulting engagements.' },
    { question: 'Are your technology recommendations vendor-neutral?', answer: 'Absolutely. We are not resellers or partners of any specific vendor, ensuring our recommendations are based solely on what best fits your business needs.' },
  ],
  faqTitle: 'IT Consulting FAQs',
};

export default async function ItConsultingPage() {
  const service = await getService('it-consulting');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'IT Consulting', item: 'https://nocko.com/services/it-consulting' },
          ],
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'IT Consulting' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
