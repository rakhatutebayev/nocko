import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Why Microsoft 365 Onboarding takes Too Long | NOCKO UAE',
  description: 'Discover how integrating Windows Autopilot with Azure AD completely eliminates manual laptop configuration within your IT department.',
  alternates: {
    canonical: '/articles/it-support-onboarding',
  },
};

const articleData = {
  hero: {
    title: 'Why Microsoft 365 Onboarding takes Too Long',
    subtitle: 'Automate laptop provisioning with Autopilot',
    description: 'Discover how integrating Windows Autopilot with Azure AD completely eliminates manual laptop configuration within your IT department.',
  },
  intro: `When a new employee joins a growing UAE enterprise, the IT onboarding process is traditionally a massive bottleneck. IT engineers waste countless hours unboxing laptops, manually installing Windows images from USB drives, downloading Office applications, configuring VPN clients, and mapping network drives. This manual "break/fix" deployment methodology is not only incredibly expensive in terms of labor, but it is highly susceptible to configuration errors and security oversights.`,
  blocks: [
    {
      title: `The Flaws of Traditional IT Imaging`,
      text: `<p>Historically, IT departments relied on "Golden Images"—a massive file containing the operating system and all software, which was cloned onto every new hard drive. This approach is obsolete. Golden images require constant updating every time a new Windows patch or software version is released. Furthermore, maintaining different images for different hardware models (e.g., Dell vs. Lenovo vs. Surface) is an administrative nightmare.</p>`,
    },
    {
      title: `The "Zero-Touch" Provisioning Revolution`,
      text: `<p>NOCKO transforms this entire workflow by implementing <strong>Microsoft Windows Autopilot</strong>, deeply integrated with Microsoft Intune (Endpoint Management) and Azure Active Directory. This technology completely eliminates the manual IT imaging process. We configure your corporate deployment profiles directly in the cloud.</p><p>When you purchase new hardware, your certified distributor registers the device\'s hardware hashes directly into your Microsoft tenant before the box is even opened. The hardware belongs to your cloud the moment it leaves the warehouse.</p>`,
    },
    {
      title: `The Seamless Employee Experience`,
      text: `<p>The process is incredibly seamless, particularly for remote workers or branch offices:</p><ol><li>The new, factory-sealed laptop is shipped directly from the distributor straight to the employee\'s desk in Dubai, or their home office anywhere in the GCC.</li><li>The employee unboxes the device, turns it on, and connects to their local Wi-Fi.</li><li>The laptop automatically contacts Microsoft, recognizes it belongs to your specific organization, and replaces the standard Windows setup screen with your corporate branding, prompting for their M365 email and password.</li><li>Upon login, Autopilot automatically locks down the device, installs corporate security policies (EDR, BitLocker encryption), maps SharePoint drives, and downloads all required software in the background—without an IT engineer ever touching the keyboard.</li></ol>`,
    },
    {
      title: `Enforcing Security and Compliance from Day One`,
      text: `<p>Beyond unprecedented deployment speed, Autopilot guarantees total consistency. Every single machine is enrolled in your Mobile Device Management (MDM) framework instantly. USB ports are restricted, hard drives are encrypted, and local administrative rights are revoked by default. If a laptop is stolen during transit, it is entirely useless to the thief because it will aggressively force the corporate login screen the moment it connects to the internet.</p>`,
    },
    {
      title: `Lifecycle Management and Remote Wiping`,
      text: `<p>Autopilot doesn\'t just solve onboarding; it solves offboarding. When an employee leaves the company, IT can issue an "Autopilot Reset" command remotely. This completely wipes the user\'s data and applications, resetting the machine back to a pristine, business-ready state for the next employee, dramatically extending the lifespan of your hardware assets.</p>`,
    }
  ],
};

export default function ItSupportOnboardingPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support & Helpdesk', href: '/services/it-support' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
