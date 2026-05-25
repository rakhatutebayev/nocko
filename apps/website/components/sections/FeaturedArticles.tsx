import Link from 'next/link';

const articles = [
  {
    slug: 'it-consulting-guide',
    title: 'Strategic IT Consulting & Digital Transformation',
    excerpt: 'How to build a technology roadmap, negotiate with vendors, and drive ROI-positive IT decisions in UAE organizations.',
    category: 'IT Consulting',
  },
  {
    slug: 'cloud-infrastructure-guide',
    title: 'Enterprise Cloud Infrastructure Guide',
    excerpt: 'Planning, executing, and optimizing cloud migrations for UAE businesses — from hybrid architectures to cost management.',
    category: 'Cloud',
  },
  {
    slug: 'structured-cabling-guide',
    title: 'Network Infrastructure & Structured Cabling',
    excerpt: 'Complete guide to Cat6A, fibre optic, and EIA/TIA 568-C certification for Dubai free zone and mainland offices.',
    category: 'Infrastructure',
  },
  {
    slug: 'it-consulting-assessment',
    title: 'Forensic IT Audits & RAG Health Checks',
    excerpt: 'How a Red/Amber/Green infrastructure audit exposes hidden tech debt, security gaps, and wasted licensing in UAE businesses.',
    category: 'IT Consulting',
  },
  {
    slug: 'it-support-monitoring',
    title: 'Proactive Endpoint Management (MDM)',
    excerpt: 'Using Microsoft Intune and MDM to enforce security policies across hybrid workforces in Dubai — and remotely wipe lost devices.',
    category: 'IT Support',
  },
  {
    slug: 'it-consulting-roi',
    title: 'Microsoft 365 Licensing Optimization',
    excerpt: 'Dubai enterprises routinely overpay by 40% on M365. Here is how a licensing audit recovers AED 30,000–80,000 annually.',
    category: 'IT Consulting',
  },
];

export default function FeaturedArticles() {
  return (
    <section className="section" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">IT Resources & Expert Guides</h2>
          <p className="services__subtitle">
            In-depth technical guides for IT managers and business owners across UAE. From cloud migrations to structured cabling — practical advice from our engineers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0057b8', marginBottom: '0.75rem', display: 'block' }}>
                  {article.category}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, flex: 1 }}>
                  {article.excerpt}
                </p>
                <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.875rem', color: '#0057b8', fontWeight: 500 }}>
                  Read guide →
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            href="/articles"
            style={{ display: 'inline-block', padding: '0.75rem 2rem', border: '2px solid #0057b8', color: '#0057b8', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
