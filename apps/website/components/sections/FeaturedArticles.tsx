import Link from 'next/link';

const articles = [
  {
    slug: 'it-amc-guide',
    title: 'IT AMC in UAE: The Complete Guide',
    excerpt: 'What an Annual Maintenance Contract covers, AED pricing tiers, SLA levels, and how to choose an AMC provider in Dubai.',
    category: 'IT AMC',
  },
  {
    slug: 'cybersecurity-guide',
    title: 'Cybersecurity for UAE Business: Complete Guide',
    excerpt: 'Threats, firewalls, endpoint protection, NESA and PDPL compliance, and an incident-response checklist for UAE companies.',
    category: 'Cybersecurity',
  },
  {
    slug: 'managed-it-services-guide',
    title: 'Managed IT Services in UAE: Complete Guide',
    excerpt: 'What managed IT includes, per-user AED pricing, security and scaling, and how to choose an MSP in Dubai.',
    category: 'Managed IT',
  },
  {
    slug: 'it-support-guide',
    title: 'IT Support in UAE: Complete Guide',
    excerpt: 'Helpdesk, remote and on-site support models, 24/7 SLAs, and in-house vs outsourced economics for UAE businesses.',
    category: 'IT Support',
  },
  {
    slug: 'cloud-infrastructure-guide',
    title: 'Enterprise Cloud Infrastructure Guide',
    excerpt: 'Planning, securing, and optimizing cloud infrastructure for UAE businesses — data management, compliance, and FinOps.',
    category: 'Cloud',
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration for UAE Business',
    excerpt: 'Single vs multi-cloud vs hybrid, phased migration paths, secure connectivity, and common pitfalls to avoid.',
    category: 'Cloud',
  },
  {
    slug: 'it-consulting-strategy',
    title: 'IT Strategy, Assessment & Roadmap',
    excerpt: 'How an IT assessment, strategy, and phased roadmap cut waste and de-risk growth for UAE companies.',
    category: 'IT Consulting',
  },
  {
    slug: 'it-support-monitoring',
    title: '24/7 IT Monitoring Services in UAE',
    excerpt: 'NOC and SOC monitoring, endpoint thresholds, alert escalation, and the economics of proactive coverage.',
    category: 'IT Support',
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
