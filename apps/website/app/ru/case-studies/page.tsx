import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import CaseStudies from '@/components/sections/CaseStudies';
import { defaultCaseStudiesRu } from '@/lib/data/caseStudies';
import { getCaseStudies } from '@/lib/api/strapi';

export const metadata: Metadata = {
  title: 'Кейсы и успешные ИТ проекты для бизнеса в ОАЭ',
  description:
    'Реальные результаты реальных компаний в ОАЭ. Успешные ИТ проекты по модернизации сетей, миграции в облако и ИТ-поддержке, которые выполнила наша команда.',
  keywords:
    'ИТ кейсы ОАЭ, истории успеха Дубай, ИТ трансформация ОАЭ, кейсы сетевая инфраструктура, успешная миграция в облако',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    title: 'Кейсы и успешные ИТ проекты для бизнеса в ОАЭ',
    description: 'Реальные результаты реальных компаний в ОАЭ.',
    type: 'website',
  },
  alternates: {
    canonical: '/ru/case-studies',
    languages: { 'en-AE': '/case-studies', 'ru-RU': '/ru/case-studies', 'x-default': '/case-studies' },
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function CaseStudiesPageRu() {
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
          variant="article"
          title="Кейсы"
          subtitle="Реальные Результаты для Бизнеса в ОАЭ"
          description="Узнайте, как компании по всему ОАЭ модернизировали свою ИТ-инфраструктуру с помощью наших решений. От обновления сетей до миграции в облако — ознакомьтесь с измеримыми результатами, которых мы достигли."
        />
        <CaseStudies
          title="Изучите эти материалы, чтобы узнать больше"
          caseStudies={
            caseStudies.length > 0
              ? caseStudies.map((cs) => ({
                  id: cs.attributes.slug,
                  title: cs.attributes.title,
                  type: cs.attributes.industry || 'Кейс',
                  image: cs.attributes.images?.data?.[0]?.attributes?.url || '/images/cases/structured.svg',
                  alt: cs.attributes.title,
                  href: `/ru/case-studies/${cs.attributes.slug}`,
                  color: 'blue' as const,
                }))
              : defaultCaseStudiesRu
          }
        />
      </main>
      <Footer />
    </>
  );
}
