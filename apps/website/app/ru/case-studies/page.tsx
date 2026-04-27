import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import CaseStudies from '@/components/sections/CaseStudies';
import { getCaseStudies } from '@/lib/api/strapi';

export const metadata: Metadata = {
  title: 'Кейсы | Успешные ИТ Проекты в ОАЭ | NOCKO',
  description:
    'Реальные результаты реальных компаний в ОАЭ. Узнайте, как компании преобразовали свою ИТ-инфраструктуру с помощью решений NOCKO. Модернизация сетей, миграция в облако и успешные кейсы ИТ-поддержки.',
  keywords:
    'ИТ кейсы ОАЭ, истории успеха Дубай, ИТ трансформация ОАЭ, кейсы сетевая инфраструктура, успешная миграция в облако',
  openGraph: {
    title: 'Кейсы | Успешные ИТ Проекты в ОАЭ | NOCKO',
    description: 'Реальные результаты реальных компаний в ОАЭ.',
    type: 'website',
  },
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
              : undefined // The component has English defaults if undefined, but we'll accept that for now
          }
        />
      </main>
      <Footer />
    </>
  );
}
