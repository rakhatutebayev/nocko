import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: '24/7 IT Remote Helpdesk Services UAE | NOCKO',
  description: 'Instant remote IT diagnostics and resolution. Our centralized Dubai-based NOC resolves 85% of end-user issues within 15 minutes.',
  alternates: {
    canonical: '/articles/it-support-remote',
  },
};

const articleData = {
  hero: {
    title: '24/7 Centralized Remote Helpdesk',
    subtitle: 'Lightning-Fast Resolution for End-User IT Issues',
    description: 'Stop waiting for physical technicians. Our Network Operations Center resolves 85% of standard IT tickets remotely within 15 minutes.',
  },
  intro: 'In the modern enterprise, employee downtime directly translates to lost revenue. When an executive is locked out of Microsoft 365 before a critical board meeting, or a remote worker in JLT loses VPN access, waiting until the next business day for technical support is unacceptable. NOCKO operates a robust, 24/7/365 Centralized Network Operations Center (NOC) based in the UAE to provide immediate, multi-lingual remote diagnostics.',
  blocks: [
    {
      title: 'The Value of Immediate Remote Triage',
      text: '<p>Traditional IT support models rely on dispatching a technician to a physical desk, a process that inherently causes delays. Our remote helpdesk is built on the philosophy of Instant Triage.</p>',
      list: [
        '<strong>15-Minute Resolution Target:</strong> Using secure enterprise remote desktop tools (like TeamViewer Enterprise or AnyDesk), our Level 1 and Level 2 engineers take over the problematic session and fix the configuration error immediately.',
        '<strong>Multi-Cloud Administration:</strong> We don\'t just fix laptops. Our team manages user access across AWS, Azure, Google Workspace, and Microsoft 365, instantly resetting passwords, unlocking accounts, and provisioning new software licenses on demand.'
      ]
    },
    {
      title: 'Security-First Remote Access',
      text: '<p>Allowing an external IT team to remotely access your endpoints requires absolute trust and rigorous security guardrails. Our remote support infrastructure operates entirely under Zero-Trust principles. Every remote session requires explicit user consent, is fully encrypted end-to-end, and is permanently logged with an audit trail for compliance purposes in the UAE.</p>'
    },
    {
      title: 'Eliminating the "IT Guy" Bottleneck',
      text: '<p>Relying on a single internal IT manager creates a dangerous single point of failure when they go on leave. Our Helpdesk provides you with an entire department of certified professionals—ready at any hour of the day or night to ensure your operations never stop.</p>'
    }
  ],
};

export default function ITSupportRemotePage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'Remote Helpdesk' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
