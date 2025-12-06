import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Comprehensive IT Maintenance and Support Services | IT AMC Coverage UAE | NOCKO',
  description:
    'Complete IT maintenance and support services covered under IT Annual Maintenance Contract. Regular system checks, software updates, hardware maintenance, troubleshooting, and technical support for businesses in Dubai, UAE.',
  keywords:
    'IT maintenance services UAE, comprehensive IT support Dubai, IT AMC coverage, complete IT maintenance, IT support contract UAE',
  openGraph: {
    title: 'Comprehensive IT Maintenance and Support Services | IT AMC Coverage UAE | NOCKO',
    description:
      'Complete IT maintenance and support services covered under IT Annual Maintenance Contract. Regular system checks, software updates, hardware maintenance, troubleshooting, and technical support for businesses in Dubai, UAE.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-amc-comprehensive',
  },
};

const articleData = {
  hero: {
    title: 'Comprehensive IT Maintenance and Support',
    subtitle: 'Complete IT Maintenance and Support Services Under One Annual Contract',
    description: '',
  },
  intro:
    'Your IT infrastructure needs regular maintenance to stay reliable, secure, and efficient. Without proper maintenance, systems slow down, security vulnerabilities appear, hardware fails, and downtime increases. IT AMC provides comprehensive maintenance and support services that keep your IT infrastructure running smoothly all year long.',
  blocks: [
    {
      title: 'Why Comprehensive IT Maintenance Matters',
      text: '<p>IT systems require ongoing maintenance to perform well. Without regular maintenance, systems accumulate problems: software becomes outdated and vulnerable, hardware collects dust and overheats, configurations drift from best practices, and performance degrades over time.</p><p>These problems lead to slow systems, security breaches, unexpected failures, and costly downtime. Comprehensive maintenance prevents these issues by keeping everything updated, clean, optimized, and properly configured.</p>',
      list: [
        '<li>Software becomes outdated and vulnerable</li>',
        '<li>Hardware collects dust and overheats</li>',
        '<li>System configurations drift from best practices</li>',
        '<li>Performance degrades over time</li>',
        '<li>Security vulnerabilities appear</li>',
        '<li>Unexpected failures and downtime increase</li>',
      ],
    },
    {
      title: "What's Covered in Comprehensive IT AMC",
      text: '<p>Your IT AMC includes all essential maintenance and support services. Regular system checks to identify issues early, software updates and security patches to keep systems current, hardware maintenance and cleaning to prevent failures, troubleshooting and technical support when problems occur, performance optimization to maintain speed, and complete documentation of all work performed.</p><p>Everything needed to keep your IT infrastructure reliable, secure, and efficient is covered under your annual contract.</p>',
      list: [
        '<li>Regular system checks and health monitoring</li>',
        '<li>Software updates and security patches</li>',
        '<li>Hardware maintenance and cleaning</li>',
        '<li>Troubleshooting and technical support</li>',
        '<li>Performance optimization and tuning</li>',
        '<li>Complete documentation and reporting</li>',
      ],
    },
    {
      title: 'Regular System Checks and Monitoring',
      text: '<p>Regular system checks identify problems before they cause downtime. Our technicians visit your office regularly to check server health, monitor network performance, review security logs, test backup systems, verify software functionality, and inspect hardware condition.</p><p>These proactive checks catch issues early when they\'re easy and inexpensive to fix, preventing costly emergency repairs and unexpected downtime.</p>',
      list: [
        '<li>Server health and performance monitoring</li>',
        '<li>Network performance and connectivity checks</li>',
        '<li>Security log reviews and threat detection</li>',
        '<li>Backup system testing and verification</li>',
        '<li>Software functionality testing</li>',
        '<li>Hardware condition inspection</li>',
      ],
    },
    {
      title: 'Software Updates and Security Management',
      text: '<p>Keeping software updated is critical for security and performance. We handle all software updates as part of your AMC: operating system updates, application updates, security patches, antivirus updates, firmware updates, and driver updates.</p><p>All updates are tested before deployment, scheduled during low-usage hours, and documented for your records. Your systems stay current, secure, and protected without disrupting your business operations.</p>',
      list: [
        '<li>Operating system updates</li>',
        '<li>Application and software updates</li>',
        '<li>Security patches and vulnerability fixes</li>',
        '<li>Antivirus and security software updates</li>',
        '<li>Firmware and driver updates</li>',
        '<li>Tested and scheduled deployments</li>',
      ],
    },
    {
      title: 'Hardware Maintenance and Lifecycle Management',
      text: '<p>Hardware requires regular maintenance to prevent failures and extend lifespan. We clean equipment to remove dust, check components for wear, replace failing parts before they break, optimize cooling systems, verify power supplies, and maintain proper cable management.</p><p>Regular hardware maintenance prevents unexpected failures, extends equipment lifespan, maintains performance, and reduces total cost of ownership. We also help plan hardware upgrades and replacements as part of lifecycle management.</p>',
      list: [
        '<li>Equipment cleaning and dust removal</li>',
        '<li>Component wear and failure detection</li>',
        '<li>Proactive part replacement</li>',
        '<li>Cooling system optimization</li>',
        '<li>Power supply verification</li>',
        '<li>Hardware lifecycle planning</li>',
      ],
    },
  ],
};

export default function ITAMCComprehensivePage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
      </main>
      <Footer />
    </>
  );
}



