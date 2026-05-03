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

interface ArticleContentProps {
  intro: string;
  blocks: ArticleBlock[];
  faq?: ArticleFAQItem[];
}

export default function ArticleContent({ intro, blocks, faq }: ArticleContentProps) {
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
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Explore Core IT Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <a href="/articles/it-support-24-7" style={{ display: 'block', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>24/7 IT Support</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Technical support around the clock for businesses across UAE.</p>
          </a>
          <a href="/articles/cloud-migration" style={{ display: 'block', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Cloud Migration</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Move to AWS, Azure, or Google Cloud with zero downtime.</p>
          </a>
          <a href="/articles/cybersecurity-protection" style={{ display: 'block', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Cybersecurity</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Multi-layered defenses against ransomware and cyber threats.</p>
          </a>
        </div>
      </div>
    </article>
  );
}

