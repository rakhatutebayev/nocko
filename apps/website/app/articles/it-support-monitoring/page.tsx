import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Endpoint Management & MDM Solutions UAE | NOCKO',
  description: 'Secure corporate laptops and hybrid-work mobile devices with endpoint management (MDM/MAM) using Microsoft Intune and robust Zero-Trust policies.',
  alternates: {
    canonical: '/articles/it-support-monitoring',
  },
};

const articleData = {
  hero: {
    title: 'Proactive Endpoint Management (MDM)',
    subtitle: 'Securing the Hybrid Workforce Across Every Device',
    description: 'Enforce corporate compliance, automate patches, and completely secure remote laptops and smartphones seamlessly.',
  },
  intro: 'The concept of the "traditional office perimeter" is dead. Today, your corporate data lives on laptops connecting from coffee shops in Dubai Marina, and on personal smartphones syncing company emails abroad. Managing these endpoints proactively is the only defense against severe data leaks and ransomware. NOCKO architects comprehensive Mobile Device Management (MDM) and Mobile Application Management (MAM) solutions to secure the modern hybrid workforce.',
  blocks: [
    {
      title: 'Microsoft Intune & Device Compliance',
      text: '<p>Using industry-leading MDM platforms like Microsoft Intune and Apple Business Manager, we transform standard hardware into forcefully compliant corporate tools:</p>',
      list: [
        '<strong>Automated Patching:</strong> Operating systems and third-party software (like Chrome or Adobe) are automatically pushed and updated in the background without user intervention.',
        '<strong>Hardened Configurations:</strong> We mathematically enforce settings: BitLocker drive encryption is permanently enabled, local USB mass-storage is disabled for data-theft prevention, and the local administrator password is rotated uniquely per machine automatically (LAPS).'
      ]
    },
    {
      title: 'BYOD (Bring Your Own Device) Segregation',
      text: '<p>Many companies in the UAE allow staff to use personal smartphones for work emails. We implement Mobile Application Management (MAM) to create a secure, encrypted "vault" exclusively for corporate apps. If an employee resigns, we can instantly delete the corporate email vault and company contacts from their iPhone remotely, entirely without touching or seeing their personal photos or private messages.</p>'
    },
    {
      title: 'Zero-Touch Deployment (Autopilot)',
      text: '<p>Traditionally, preparing a laptop for a new hire requires an IT technician to spend hours manually installing software and drivers. With modern Endpoint Management like Windows Autopilot, we ship a brand-new, sealed laptop directly to your remote employee. The moment they connect to Wi-Fi and log in with their corporate email, the laptop automatically morphs into a fully secure, software-loaded corporate workstation within minutes.</p>'
    }
  ],
};

export default function ITSupportMonitoringPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'Endpoint Management' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
