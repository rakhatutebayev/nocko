import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import { getArticles } from '@/lib/api/strapi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | IT Articles & Insights | NOCKO',
  description:
    'Expert IT insights, guides, and articles from NOCKO. Learn about network infrastructure, cloud solutions, cybersecurity, IT support, and best practices for businesses in UAE.',
  keywords:
    'IT blog UAE, IT articles Dubai, network infrastructure blog, cloud solutions articles, cybersecurity insights UAE',
  openGraph: {
    title: 'Blog | IT Articles & Insights | NOCKO',
    description: 'Expert IT insights and guides for businesses in UAE.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ArticlesPage() {
  // Try to fetch articles from Strapi, fallback to empty array if not available
  let articles: Awaited<ReturnType<typeof getArticles>> = [];
  try {
    articles = await getArticles(50); // Get up to 50 articles
  } catch (error) {
    console.error('Error fetching articles:', error);
    articles = [];
  }

  return (
    <>
      <HeaderWrapper />
      <main role="main">
        <Hero
          title="Blog"
          subtitle="IT Insights & Expert Guides"
          description="Stay updated with the latest IT trends, best practices, and expert insights. Learn about network infrastructure, cloud solutions, cybersecurity, and IT support strategies for businesses in UAE."
        />
        
        <section className="section">
          <div className="container">
            {articles.length > 0 ? (
              <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {articles.map((article) => (
                  <article key={article.id} className="article-card" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                    <Link href={`/articles/${article.attributes.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                        {article.attributes.title}
                      </h3>
                      {article.attributes.excerpt && (
                        <p style={{ color: '#666', marginBottom: '1rem' }}>
                          {article.attributes.excerpt}
                        </p>
                      )}
                      {article.attributes.publishedAt && (
                        <time style={{ fontSize: '0.875rem', color: '#999' }}>
                          {new Date(article.attributes.publishedAt).toLocaleDateString('en-US', {
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
                  Articles will be published here soon. Check back later!
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




