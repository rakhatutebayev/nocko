import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import { getArticles } from '@/lib/api/strapi';
import Link from 'next/link';
import staticArticlesData from '@/lib/data/staticArticles.json';

export const metadata: Metadata = {
  title: 'Блог | ИТ Статьи и Обзоры | NOCKO',
  description:
    'Экспертные ИТ статьи, руководства и обзоры от NOCKO. Узнайте больше о сетевой инфраструктуре, облачных решениях, кибербезопасности, ИТ поддержке и лучших практиках для бизнеса в ОАЭ.',
  keywords:
    'ИТ блог ОАЭ, ИТ статьи Дубай, сетевая инфраструктура, облачные решения, кибербезопасность ОАЭ',
  openGraph: {
    title: 'Блог | ИТ Статьи и Обзоры | NOCKO',
    description: 'Экспертные ИТ обзоры и руководства для бизнеса в ОАЭ.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ArticlesPageRu() {
  let articles: any[] = [];
  try {
    articles = await getArticles(50); // Get up to 50 articles
  } catch (error) {
    console.error('Error fetching articles:', error);
    articles = [];
  }

  // Combine with static articles to prevent them from being orphaned
  const combinedArticles = [
    ...articles,
    ...staticArticlesData.map((article: any) => ({
      id: article.id,
      attributes: {
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        publishedAt: null, // Static articles don't have this in JSON
      }
    }))
  ];

  return (
    <>
      <HeaderWrapper />
      <main role="main">
        <Hero
          title="Блог"
          subtitle="ИТ Обзоры и Экспертные Руководства"
          description="Оставайтесь в курсе последних ИТ-трендов, лучших практик и экспертных мнений. Читайте о сетевой инфраструктуре, облачных решениях, кибербезопасности и стратегиях ИТ-поддержки для бизнеса в ОАЭ."
        />
        
        <section className="section">
          <div className="container">
            {combinedArticles.length > 0 ? (
              <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {combinedArticles.map((article) => (
                  <article key={article.id} className="article-card" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                    <Link href={`/ru/articles/${article.attributes.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                        {/* If translating all JSON is not done yet, this will render the English title, which is fine for now as a fallback */}
                        {article.attributes.title}
                      </h3>
                      {article.attributes.excerpt && (
                        <p style={{ color: '#666', marginBottom: '1rem' }}>
                          {article.attributes.excerpt}
                        </p>
                      )}
                      {article.attributes.publishedAt && (
                        <time style={{ fontSize: '0.875rem', color: '#999' }}>
                          {new Date(article.attributes.publishedAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <p style={{ fontSize: '1.125rem', color: '#666' }}>
                  Статьи скоро будут опубликованы. Загляните позже!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
