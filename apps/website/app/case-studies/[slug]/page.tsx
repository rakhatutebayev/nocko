import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import { getCaseStudy, getCaseStudies } from '@/lib/api/strapi';

export const revalidate = 3600; // ISR: revalidate every hour

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const caseStudies = await getCaseStudies();
    return caseStudies.map((caseStudy) => ({
      slug: caseStudy.attributes.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.attributes.title} | Case Study | NOCKO`,
    description: caseStudy.attributes.testimonial || `Case study: ${caseStudy.attributes.title}`,
    keywords: `${caseStudy.attributes.title}, case study, IT success story UAE, ${caseStudy.attributes.industry}`,
    openGraph: {
      title: `${caseStudy.attributes.title} | NOCKO`,
      description: caseStudy.attributes.testimonial || `Case study: ${caseStudy.attributes.title}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={caseStudy.attributes.title}
          subtitle={`${caseStudy.attributes.client} - ${caseStudy.attributes.industry}`}
        />
        <section className="section">
          <div className="container">
            {caseStudy.attributes.challenge && (
              <div className="case-study__section">
                <h2>Challenge</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.attributes.challenge,
                  }}
                />
              </div>
            )}
            {caseStudy.attributes.solution && (
              <div className="case-study__section">
                <h2>Solution</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.attributes.solution,
                  }}
                />
              </div>
            )}
            {caseStudy.attributes.results && (
              <div className="case-study__section">
                <h2>Results</h2>
                <pre>{JSON.stringify(caseStudy.attributes.results, null, 2)}</pre>
              </div>
            )}
            {caseStudy.attributes.testimonial && (
              <div className="case-study__testimonial">
                <blockquote>{caseStudy.attributes.testimonial}</blockquote>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

