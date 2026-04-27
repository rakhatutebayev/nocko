import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Defending Your Cloud with Zero Trust | NOCKO UAE',
  description: 'Understand the shared responsibility model and why IAM security is critical for your Azure deployment. Do not leave your cloud endpoints exposed.',
  alternates: {
    canonical: '/articles/cloud-zero-trust',
  },
};

const articleData = {
  hero: {
    title: 'Defending Your Cloud with Zero Trust',
    subtitle: 'Understand the shared responsibility model',
    description: 'Understand the shared responsibility model and why IAM security is critical for your Azure deployment. Do not leave your cloud endpoints exposed.',
  },
  intro: `Migrating your corporate infrastructure to the AWS Middle East Region or Azure UAE Central does not automatically make your data secure. One of the most dangerous and costly misconceptions among UAE business leaders is that public clouds are inherently immune to ransomware and data breaches. In reality, cloud security strictly follows the <strong>Shared Responsibility Model</strong>. Assuming your cloud provider handles everything is a rapid path to a catastrophic compliance failure.`,
  blocks: [
    {
      title: `The Shared Responsibility Trap`,
      text: `<p>To secure a cloud environment, you must first understand where Amazon or Microsoft\'s responsibility ends and yours begins. While the cloud provider is responsible for the physical security of the datacenter, the hypervisor, and the global network (the "Security OF the Cloud"), <strong>you</strong> are entirely responsible for who has access to the data inside it, how that data is encrypted, and the configuration of your virtual firewalls (the "Security IN the Cloud").</p><p>If an employee\'s credentials are compromised via a phishing email, the cloud provider will not stop the attacker from logging in and downloading your entire highly-sensitive SharePoint directory. This is why Identity and Access Management (IAM) has replaced the traditional corporate firewall as the new security perimeter.</p>`,
    },
    {
      title: `The Fundamentals of Zero Trust Architecture`,
      text: `<p>For decades, IT security operated on a "castle-and-moat" methodology: if you were inside the corporate network (or connected via VPN), you were inherently trusted. This model is completely broken in the era of remote work and cloud computing. <strong>Zero Trust</strong> operates on a simple, uncompromising premise: <em>"Never trust, always verify."</em></p><p>Under a Zero Trust architecture, simply possessing the correct username and password is no longer enough to access corporate data. Every single access request is treated as though it originates from an open, hostile network.</p>`,
    },
    {
      title: `Context-Aware Access and Continuous Verification`,
      text: `<p>We implement continuous, dynamic verification protocols that evaluate the context of every login attempt in real-time:</p><ul><li><strong>Geographic and Time Fencing:</strong> The system evaluates the user\'s location. An attempt to log in from outside the GCC or at 3:00 AM will automatically trigger a block or request higher-tier authentication.</li><li><strong>Device Health and Posture:</strong> Is the laptop attempting access fully patched? Is its Antivirus active? If an employee tries to access Azure from a personal, unmanaged iPad, access is denied.</li><li><strong>Strict MFA Enforcement:</strong> We deploy un-phishable hardware tokens (like FIDO2/YubiKeys) or strict Microsoft Authenticator number-matching policies across the entire organization to neutralize credential theft.</li></ul>`,
    },
    {
      title: `Micro-Segmentation and Lateral Movement Prevention`,
      text: `<p>If a breach does occur, the goal of Zero Trust is to contain the "blast radius." In traditional networks, once a hacker breaches a single workstation, they can easily move laterally to access the domain controller or payment gateways. We utilize <strong>Micro-segmentation</strong> within your AWS or Azure environments to create software-defined secure zones. By enforcing strict Principle of Least Privilege (PoLP), a compromised marketing server has absolutely zero network path to the HR database.</p>`,
    },
    {
      title: `NESA Compliance in the UAE Cloud`,
      text: `<p>For government contractors, healthcare providers, and financial institutions operating in the DIFC or ADGM, failing a National Electronic Security Authority (NESA/SIA) audit is disastrous. We architect your cloud IAM policies to directly map to NESA regulatory controls. We ensure highly privileged admin accounts are vaulted using Privileged Identity Management (PIM/PAM), and every single access attempt is logged immutably into a SIEM for flawless compliance auditing.</p>`,
    }
  ],
};

export default function CloudZeroTrustPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cloud', href: '/services/cloud' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
