import { Metadata } from 'next';
import HeaderWrapperRu from '@/components/layout/HeaderWrapperRu';
import FooterRu from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import staticArticlesRu from '@/lib/data/staticArticlesRu.json';

export const metadata: Metadata = {
  title: 'Блог | ИТ-статьи и руководства для бизнеса в ОАЭ',
  description:
    'Экспертные ИТ-статьи и руководства от NOCKO: сетевая инфраструктура, облачные решения, кибербезопасность, ИТ-поддержка и лучшие практики для бизнеса в ОАЭ.',
  alternates: {
    canonical: '/ru/articles',
    languages: {
      'en-AE': '/articles',
      'ru-RU': '/ru/articles',
      'x-default': '/articles',
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Блог | ИТ-статьи и руководства для бизнеса в ОАЭ',
    description: 'Экспертные ИТ-статьи и руководства для бизнеса в ОАЭ.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export const revalidate = 3600;

export default function ArticlesPageRu() {
  return (
    <>
      <HeaderWrapperRu />
      <main role="main">
        <Hero
          title="Блог"
          subtitle="ИТ-инсайты и экспертные руководства"
          description="Последние ИТ-тренды, лучшие практики и экспертные материалы: сетевая инфраструктура, облачные решения, кибербезопасность и стратегии ИТ-поддержки для бизнеса в ОАЭ."
        />

        <section className="section">
          <div className="container">
            <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              {staticArticlesRu.map((article) => (
                <article key={article.id} className="article-card" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                  <Link href={`/ru/articles/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p style={{ color: '#666', marginBottom: '1rem' }}>
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterRu />
    </>
  );
}
