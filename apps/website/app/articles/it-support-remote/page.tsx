import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Remote Support for Instant Problem Solving | IT Support UAE | NOCKO',
  description:
    'Remote IT support services for businesses in UAE. Secure remote access, fast problem resolution, and convenient support without on-site visits. Expert remote support team available 24/7.',
  keywords:
    'remote IT support UAE, remote desktop support Dubai, remote IT assistance, secure remote access, remote technical support',
  openGraph: {
    title: 'Remote Support for Instant Problem Solving | IT Support UAE | NOCKO',
    description:
      'Remote IT support services for businesses in UAE. Secure remote access, fast problem resolution, and convenient support without on-site visits.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-support-remote',
  },
};

const articleData = {
  hero: {
    title: 'Remote Support for Instant Problem Solving',
    subtitle: 'Fast and Convenient IT Support Without On-Site Visits',
    description: '',
  },
  intro:
    'Many IT issues can be resolved remotely, saving time and reducing costs. Our remote support team can access your systems securely, diagnose problems quickly, and fix issues without needing to visit your office. Fast, efficient, and convenient support that gets you back to work quickly.',
  blocks: [
    {
      title: 'Why Remote Support Is Efficient',
      text: '<p>Remote support allows IT engineers to access your systems directly, diagnose problems quickly, and fix issues without traveling to your office. This saves time, reduces costs, and provides faster resolution. Most IT issues can be resolved remotely in minutes rather than hours.</p><p>Remote support is especially valuable for software issues, configuration problems, and troubleshooting. Engineers can see your screen, access your systems, and fix problems in real-time. This immediate access speeds up resolution significantly.</p>',
      list: [
        '<li>Faster problem resolution</li>',
        '<li>No travel time or costs</li>',
        '<li>Immediate access to systems</li>',
        '<li>Real-time problem solving</li>',
        '<li>Convenient for both parties</li>',
        '<li>Cost-effective support option</li>',
      ],
    },
    {
      title: 'Secure Remote Access',
      text: '<p>Security is paramount when providing remote support. We use secure, encrypted connections to access your systems. All remote sessions are logged and monitored. You maintain full control and can terminate sessions at any time.</p><p>Our remote support tools use industry-standard encryption and security protocols. We follow best practices for remote access security, ensuring your systems and data remain protected during support sessions.</p>',
      list: [
        '<li>Encrypted remote connections</li>',
        '<li>Secure authentication required</li>',
        '<li>All sessions logged and monitored</li>',
        '<li>Full control over remote access</li>',
        '<li>Industry-standard security protocols</li>',
        '<li>Compliance with security best practices</li>',
      ],
    },
    {
      title: 'Fast Problem Diagnosis and Resolution',
      text: '<p>Remote support enables fast problem diagnosis. Engineers can see your screen, check system logs, run diagnostics, and identify issues quickly. This immediate visibility speeds up troubleshooting and resolution significantly.</p><p>Once problems are identified, engineers can fix them remotely in real-time. Software updates, configuration changes, and troubleshooting can all be done remotely. This eliminates the need for on-site visits for most issues.</p>',
      list: [
        '<li>Real-time screen sharing</li>',
        '<li>Immediate access to system logs</li>',
        '<li>Quick diagnostic tools</li>',
        '<li>Fast problem identification</li>',
        '<li>Real-time issue resolution</li>',
        '<li>Remote software and configuration changes</li>',
      ],
    },
    {
      title: 'Convenient Support Experience',
      text: '<p>Remote support is convenient for both you and our engineers. You don\'t need to wait for an engineer to arrive at your office. Support can begin immediately when you call. Engineers can work on multiple issues simultaneously, improving efficiency.</p><p>Remote support works from anywhere. Whether you\'re in the office, working from home, or traveling, support is available. This flexibility ensures you can get help whenever and wherever you need it.</p>',
      list: [
        '<li>No waiting for on-site visits</li>',
        '<li>Support begins immediately</li>',
        '<li>Work from anywhere capability</li>',
        '<li>Flexible support scheduling</li>',
        '<li>Multiple issues handled simultaneously</li>',
        '<li>Convenient for all parties</li>',
      ],
    },
    {
      title: 'When Remote Support Is Best',
      text: '<p>Remote support is ideal for most IT issues. Software problems, configuration issues, troubleshooting, updates, and maintenance can all be handled remotely. However, some issues require on-site attention, and we provide that when needed.</p><p>We assess each issue to determine the best support method. If remote support can resolve the problem quickly, we use it. If on-site support is needed, we dispatch engineers immediately. This flexible approach ensures the best support for each situation.</p>',
      list: [
        '<li>Software issues and errors</li>',
        '<li>Configuration and setup problems</li>',
        '<li>Troubleshooting and diagnostics</li>',
        '<li>Software updates and patches</li>',
        '<li>System maintenance tasks</li>',
        '<li>Performance optimization</li>',
      ],
    },
  ],
};

export default function ITSupportRemotePage() {
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



