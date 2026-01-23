import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Hardware Maintenance and Repairs | IT AMC Services UAE | NOCKO',
  description:
    'Hardware maintenance and repairs included in IT AMC. Equipment cleaning, part replacement, repairs, and lifecycle management to keep hardware reliable in Dubai, UAE.',
  keywords:
    'hardware maintenance UAE, IT equipment repairs Dubai, hardware maintenance contract, IT AMC hardware, equipment lifecycle management',
  openGraph: {
    title: 'Hardware Maintenance and Repairs | IT AMC Services UAE | NOCKO',
    description:
      'Hardware maintenance and repairs included in IT AMC. Equipment cleaning, part replacement, repairs, and lifecycle management to keep hardware reliable in Dubai, UAE.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-amc-hardware',
  },
};

const articleData = {
  hero: {
    title: 'Hardware Maintenance and Repairs',
    subtitle: 'Complete Hardware Maintenance and Repair Services Under IT AMC',
    description: '',
  },
  intro:
    'Hardware failures can stop business operations and cost thousands in emergency repairs. Regular hardware maintenance prevents failures, extends equipment lifespan, and keeps systems running reliably. IT AMC includes comprehensive hardware maintenance and repairs, so your equipment stays operational and your business keeps running.',
  blocks: [
    {
      title: 'Why Hardware Maintenance Is Important',
      text: '<p>Hardware requires regular maintenance to prevent failures. Without maintenance, equipment collects dust and overheats, components wear out and fail, cooling systems become inefficient, power supplies degrade, and cables become damaged. These problems lead to unexpected failures, costly downtime, and expensive emergency repairs.</p><p>Regular maintenance prevents these issues by keeping equipment clean, replacing worn components before they fail, maintaining cooling systems, verifying power supplies, and inspecting cables. Preventive maintenance costs much less than emergency repairs.</p>',
      list: [
        '<li>Equipment collects dust and overheats</li>',
        '<li>Components wear out and fail</li>',
        '<li>Cooling systems become inefficient</li>',
        '<li>Power supplies degrade over time</li>',
        '<li>Cables become damaged</li>',
        '<li>Unexpected failures cause costly downtime</li>',
      ],
    },
    {
      title: "What's Included in Hardware Maintenance",
      text: '<p>Hardware maintenance under IT AMC includes comprehensive services. Equipment cleaning to remove dust and debris, component inspection to identify wear, preventive part replacement before failures, cooling system maintenance and optimization, power supply testing and verification, cable inspection and management, and complete documentation of all work performed.</p><p>All maintenance work is performed by certified technicians using proper tools and procedures. Equipment is maintained to manufacturer specifications to ensure reliability and warranty compliance.</p>',
      list: [
        '<li>Equipment cleaning and dust removal</li>',
        '<li>Component inspection and wear detection</li>',
        '<li>Preventive part replacement</li>',
        '<li>Cooling system maintenance</li>',
        '<li>Power supply testing and verification</li>',
        '<li>Cable inspection and management</li>',
      ],
    },
    {
      title: 'Equipment Cleaning and Dust Removal',
      text: '<p>Dust accumulation is a major cause of hardware failures. Dust blocks airflow, causes overheating, damages components, and reduces equipment lifespan. Regular cleaning removes dust, improves airflow, prevents overheating, protects components, and extends equipment life.</p><p>We clean servers, workstations, network equipment, printers, and all IT hardware. Cleaning is performed using proper tools and techniques to avoid damage. Equipment is cleaned regularly as part of scheduled maintenance visits.</p>',
      list: [
        '<li>Remove dust and debris buildup</li>',
        '<li>Improve airflow and cooling</li>',
        '<li>Prevent overheating and component damage</li>',
        '<li>Extend equipment lifespan</li>',
        '<li>Use proper cleaning tools and techniques</li>',
        '<li>Clean all IT hardware regularly</li>',
      ],
    },
    {
      title: 'Preventive Part Replacement',
      text: '<p>Replacing parts before they fail prevents unexpected downtime. We monitor component health, identify failing parts early, replace parts proactively, use manufacturer-approved components, maintain spare parts inventory, and minimize downtime with quick replacements.</p><p>Preventive replacement is much cheaper than emergency repairs. A hard drive replaced during maintenance costs less than data recovery after a failure. A power supply replaced proactively prevents system crashes and data loss.</p>',
      list: [
        '<li>Monitor component health continuously</li>',
        '<li>Identify failing parts early</li>',
        '<li>Replace parts before failures</li>',
        '<li>Use manufacturer-approved components</li>',
        '<li>Maintain spare parts inventory</li>',
        '<li>Quick replacements minimize downtime</li>',
      ],
    },
    {
      title: 'Hardware Repairs and Lifecycle Management',
      text: '<p>When hardware fails, we repair it quickly to minimize downtime. Repairs are performed by certified technicians using proper parts and procedures. We diagnose problems accurately, repair equipment efficiently, test repairs thoroughly, and document all work performed.</p><p>We also help manage hardware lifecycle by planning upgrades, recommending replacements, coordinating new equipment installation, and disposing of old equipment properly. This ensures your IT infrastructure stays current and efficient.</p>',
      list: [
        '<li>Quick repairs to minimize downtime</li>',
        '<li>Certified technicians and proper procedures</li>',
        '<li>Accurate problem diagnosis</li>',
        '<li>Thorough testing after repairs</li>',
        '<li>Hardware lifecycle planning</li>',
        '<li>Equipment upgrade coordination</li>',
      ],
    },
  ],
};

export default function ITAMCHardwarePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || 'Hardware Maintenance and Repairs | IT AMC Services UAE | NOCKO',
          description: 'Hardware maintenance and repairs included in IT AMC. Equipment cleaning, part replacement, repairs, and lifecycle management to keep hardware reliable',
          datePublished: '2026-01-20',
          dateModified: '2026-01-23',
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-white.svg`,
            },
          },
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
      </main>
      <Footer />
    </>
  );
}





