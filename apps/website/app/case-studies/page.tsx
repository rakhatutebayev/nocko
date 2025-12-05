import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import CaseStudies from '@/components/sections/CaseStudies';
import { getCaseStudies } from '@/lib/api/strapi';

export const metadata: Metadata = {
  title: 'Case Studies | IT Success Stories in UAE | NOCKO',
  description:
    'Real results from real businesses in UAE. See how companies have transformed their IT infrastructure with NOCKO solutions. Network upgrades, cloud migration, and IT support success stories.',
  keywords:
    'IT case studies UAE, success stories Dubai, IT transformation UAE, network infrastructure case studies, cloud migration success',
  openGraph: {
    title: 'Case Studies | IT Success Stories in UAE | NOCKO',
    description: 'Real results from real businesses in UAE.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function CaseStudiesPage() {
  // Try to fetch case studies from Strapi, fallback to default if not available
  let caseStudies: Awaited<ReturnType<typeof getCaseStudies>> = [];
  try {
    caseStudies = await getCaseStudies();
  } catch (error) {
    console.error('Error fetching case studies:', error);
    caseStudies = [];
  }

  return (
    <>
      <HeaderWrapper />
      <main role="main">
        <Hero
          title="Case Studies"
          subtitle="Real Results from Real Businesses in UAE"
          description="See how businesses across UAE have transformed their IT infrastructure with our solutions. From network upgrades to cloud migration, discover the measurable results we've delivered."
        />
        <CaseStudies
          title="Check Out These Resources to Learn More"
          caseStudies={
            caseStudies.length > 0
              ? caseStudies.map((cs) => ({
                  id: cs.attributes.slug,
                  title: cs.attributes.title,
                  type: cs.attributes.industry || 'Case Study',
                  image: cs.attributes.images?.data?.[0]?.attributes?.url || '/images/cases/structured.svg',
                  alt: cs.attributes.title,
                  href: `/case-studies/${cs.attributes.slug}`,
                  color: 'blue' as const,
                }))
              : undefined
          }
        />
      </main>
      <Footer />
    </>
  );
}

