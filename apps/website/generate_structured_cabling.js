const fs = require('fs');
const path = require('path');

const articles = [
  {
    slug: 'structured-cabling-fiber-optic',
    title: 'Certified Cat6A & Fiber Optic Engineering',
    subtitle: 'Physical cabling is the absolute foundation of your corporate network',
    description: 'Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
    intro: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
  },
  {
    slug: 'structured-cabling-fluke-testing',
    title: 'Fluke Testing and 25-Year Warranties',
    subtitle: 'We do not guess on cable integrity.',
    description: 'Every single node we deploy is rigorously tested and validated using Fluke DSX CableAnalyzers.',
    intro: 'We do not guess on cable integrity. Every single node we deploy is rigorously tested and validated using Fluke DSX CableAnalyzers. This empirical verification guarantees that your internal network can handle 10Gbps throughput without packet loss, allowing us to provide manufacturer-backed 25-year performance warranties on our corporate installations.',
  },
  {
    slug: 'structured-cabling-retrofitting',
    title: 'Server Room & IDFs Retrofitting',
    subtitle: 'Inherited a disastrous, disorganized server room in your new office?',
    description: 'We specialize in live cabinet retrofitting and spaghetti cleanups. We trace, label, and re-patch your entire server rack.',
    intro: 'Inherited a disastrous, disorganized server room in your new office? We specialize in live cabinet retrofitting and spaghetti cleanups. We trace, label, and re-patch your entire server rack with precise cable management channels, restoring airflow to your switches and transforming a fire hazard into an organized, maintainable IT environment.',
  },
  {
    slug: 'structured-cabling-industrial',
    title: 'Logistics Warehouses to Corporate Hubs',
    subtitle: 'Tailored infrastructure environments across all industries.',
    description: 'We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
    intro: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
  },
  {
    slug: 'structured-cabling-wifi-heatmapping',
    title: 'Enterprise Wi-Fi Heatmapping Solutions',
    subtitle: 'Stop guessing where to place access points.',
    description: 'Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan.',
    intro: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
  },
  {
    slug: 'structured-cabling-physical-security',
    title: 'Access Control and Physical Security',
    subtitle: 'Structured cabling extends beyond computers.',
    description: 'We deploy the Unified Physical Layer for your office, running dedicated PoE infrastructure for high-resolution CCTV IP cameras.',
    intro: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  }
];

const basePath = '/Users/rakhat/Documents/webhosting/nocko-platform/apps/website';

// Create pages
articles.forEach(article => {
  const dirPath = path.join(basePath, 'app/articles', article.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const content = `import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: '${article.title.replace(/'/g, "\\'")} | NOCKO UAE',
  description: '${article.description.replace(/'/g, "\\'")}',
  alternates: {
    canonical: '/articles/${article.slug}',
  },
};

const articleData = {
  hero: {
    title: '${article.title.replace(/'/g, "\\'")}',
    subtitle: '${article.subtitle.replace(/'/g, "\\'")}',
    description: '${article.description.replace(/'/g, "\\'")}',
  },
  intro: '${article.intro.replace(/'/g, "\\'")}',
  blocks: [
    {
      title: 'Expert Implementation and Strategy',
      text: '<p>Our dedicated architects in Dubai deploy this framework rigorously, ensuring that your enterprise operates with maximum efficiency, reduced risk, and strict adherence to UAE governmental regulations.</p>',
    },
    {
      title: 'Long-Term Impact',
      text: '<p>By addressing these critical bottlenecks preemptively, we shift your organization away from reactive disaster mitigation precisely toward proactive, strategic growth.</p>'
    }
  ],
};

export default function ${article.slug.replace(/-/g, '').replace(/^\w/, c => c.toUpperCase())}Page() {
  const currDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: currDate }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Structured Cabling', href: '/services/structured-cabling' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

// Update staticArticles.json
const jsonPath = path.join(basePath, 'lib/data/staticArticles.json');
let existingJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

articles.forEach(article => {
  if (!existingJson.find(a => a.slug === article.slug)) {
    existingJson.push({
      id: `static-${article.slug}`,
      slug: article.slug,
      title: article.title,
      excerpt: article.description
    });
  }
});
fs.writeFileSync(jsonPath, JSON.stringify(existingJson, null, 2));

// Update app/sitemap.ts
const sitemapPath = path.join(basePath, 'app/sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapInsertionString = articles.map(a => `    '${a.slug}',`).join('\\n');
sitemapContent = sitemapContent.replace(
  /(\s+'it-support-24-7',)/,
  `$1\n${sitemapInsertionString}`
);

fs.writeFileSync(sitemapPath, sitemapContent);

console.log('Finished generating articles, updating staticArticles.json and app/sitemap.ts');
