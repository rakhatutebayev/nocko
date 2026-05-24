interface ArticleBlock {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  list?: string[];
}

interface ArticleFAQItem {
  question: string;
  answer: string;
}

interface RelatedArticle {
  href: string;
  title: string;
  description: string;
}

interface ArticleContentProps {
  intro: string;
  blocks: ArticleBlock[];
  faq?: ArticleFAQItem[];
  relatedArticles?: RelatedArticle[];
}

const DEFAULT_RELATED: RelatedArticle[] = [
  { href: '/services/it-support', title: 'IT Support Services', description: 'Comprehensive IT support for UAE businesses.' },
  { href: '/services/managed-it', title: 'Managed IT', description: 'Fully managed IT infrastructure and operations.' },
  { href: '/services/cybersecurity', title: 'Cybersecurity', description: 'Multi-layered defenses against cyber threats.' },
];

export default function ArticleContent({ intro, blocks, faq, relatedArticles }: ArticleContentProps) {
  const related = relatedArticles ?? DEFAULT_RELATED;
  return (
    <article className="article section" itemScope itemType="https://schema.org/Article" itemProp="articleBody">
      <div className="container">
        {intro && (
          <div className="article__intro">
            <p className="article__intro-text">{intro}</p>
          </div>
        )}

        {blocks.map((block, index) => (
          <div key={index} className="article__block">
            {block.title && (
              <h2 className="article__block-title">{block.title}</h2>
            )}
            {block.text && (
              <div
                className="article__block-text"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            )}
            {block.list && block.list.length > 0 && (
              <ul className="article__list">
                {block.list.map((item, itemIndex) => {
                  // Remove <li> tags if present, as we're already rendering <li> elements
                  const cleanItem = item.replace(/^<li>|<\/li>$/g, '').trim();
                  return (
                    <li
                      key={itemIndex}
                      dangerouslySetInnerHTML={{ __html: cleanItem }}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
      
      {faq && faq.length > 0 && (
        <div className="container">
          <div className="article__faq">
            <h2 className="article__faq-title">Frequently Asked Questions</h2>
            <dl className="article__faq-list">
              {faq.map((item, i) => (
                <div key={i} className="article__faq-item">
                  <dt className="article__faq-question">{item.question}</dt>
                  <dd className="article__faq-answer">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      {/* Related Articles for SEO Interlinking */}
      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related Services & Resources</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {related.map((item) => (
            <a key={item.href} href={item.href} style={{ display: 'block', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

