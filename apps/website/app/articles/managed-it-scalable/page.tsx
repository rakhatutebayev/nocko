import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Elastic Workforce Office Scaling | NOCKO UAE',
  description: 'NOCKO deploys zero-touch provisioning for UAE businesses using Microsoft Autopilot and Intune — onboarding 50 new employees simultaneously across Dubai, Abu Dhabi, or any GCC location without manual laptop configuration or on-site visits.',
  alternates: {
    canonical: '/articles/managed-it-scalable',
    languages: {
      'en-AE': '/articles/managed-it-scalable',
      'ru-RU': '/ru/articles/managed-it-scalable',
    },
  },
};

const articleData = {
  hero: {
    title: 'Elastic Workforce Office Scaling',
    subtitle: 'Expanding your IT instantaneously',
    description: 'Spin up 50 new laptops and licenses instantly as you acquire new talent.',
  },
  intro: 'When your company wins a massive contract and needs to hire rapidly, your IT should not be the bottleneck. Our scalable Managed IT platforms deploy zero-touch provisioning techniques, allowing us to onboard dozens of employees simultaneously anywhere in the GCC.',
  blocks: [
    {
      title: 'Zero-Touch Provisioning with Microsoft Autopilot',
      text: '<p>Microsoft Autopilot allows new laptops to be shipped directly from the distributor to the employee\'s home or new office. When the employee powers on the device and connects to any internet connection, Autopilot automatically enrolls the device into Intune, applies corporate policies, installs required applications (Teams, Office, VPN client, EDR agent), and joins the device to Entra ID — all without any IT intervention. The employee has a fully configured, policy-compliant work device within 45 minutes.</p><p>We pre-configure Autopilot deployment profiles for your organisation, including application installation packages, desktop configuration, and security baselines. When a new hire joins, HR adds their details in the Entra ID user provisioning workflow and we register the device serial number — no engineering time required per device.</p>',
      list: [
        'Autopilot zero-touch device enrolment — no manual imaging required',
        'Intune application deployment: Teams, Office, VPN, EDR in one provisioning pass',
        'Dynamic device groups for automatic policy assignment by department or location',
        'Onboarding new employees simultaneously across multiple UAE locations',
        'Off-boarding automation: device wipe and licence reclaim on user termination',
      ],
    },
    {
      title: 'SaaS Licence Management at Scale',
      text: '<p>Growing companies frequently over-purchase Microsoft 365 licences because nobody tracks assignment versus headcount. We manage your licence pool dynamically — assigning licences on user creation, reclaiming them immediately on termination, and right-sizing licence tiers quarterly. This typically saves 10–20% of the M365 licence budget for companies that have grown rapidly.</p><p>For companies expanding into new GCC markets, we provision new M365 tenants or extend existing tenants to cover new employees in KSA, Qatar, or Bahrain, coordinating local compliance requirements with your central IT policy.</p>',
    },
    {
      title: 'Network Scaling for Office Expansion',
      text: '<p>Physical office expansion requires network infrastructure to scale alongside headcount. We design and deploy new office networks using the same standards as your primary Dubai office — same VLAN structure, same firewall policy baseline, same Wi-Fi access point configuration — so that your IT environment is consistent and your security policies apply uniformly across all locations.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Can Autopilot provision devices for staff working remotely outside UAE?</strong><br/>A: Yes — Autopilot provisions over any internet connection. We configure the VPN client as part of the provisioning package so the device connects to your corporate network automatically after the initial setup.',
        '<strong>Q: What laptop models do you recommend for Autopilot provisioning?</strong><br/>A: Any Windows 11 Pro device from Dell, HP, or Lenovo supports Autopilot. We source hardware pre-registered with your Autopilot tenant from UAE distributors, eliminating the manual serial number registration step.',
        '<strong>Q: How do we handle employee off-boarding securely?</strong><br/>A: On termination, we disable the Entra ID account (blocking all access), initiate a remote wipe of the Intune-managed device, and reclaim the M365 licence — all within 30 minutes of receiving the off-boarding request.',
        '<strong>Q: Does zero-touch provisioning work for Mac devices used by creative teams?</strong><br/>A: Yes — we support Apple Business Manager combined with Jamf or Intune for macOS devices, providing the same automated provisioning experience for Mac fleets.',
      ],
    },
  ],
};

export default function ManageditscalablePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-10-28', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Managed IT' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
