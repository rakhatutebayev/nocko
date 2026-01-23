import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'On-Site Support When Remote Is Not Enough | IT Support UAE | NOCKO',
  description:
    'On-site IT support services available 24/7 across all Emirates. Hardware installation, network troubleshooting, emergency repairs, and hands-on IT support when remote assistance isn\'t enough.',
  keywords:
    'on-site IT support UAE, on-site IT engineers Dubai, IT support visits, hardware installation UAE, on-site IT repairs',
  openGraph: {
    title: 'On-Site Support When Remote Is Not Enough | IT Support UAE | NOCKO',
    description:
      'On-site IT support services available 24/7 across all Emirates. Hardware installation, network troubleshooting, emergency repairs, and hands-on IT support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-support-onsite',
  },
};

const articleData = {
  hero: {
    title: 'On-Site Support When Remote Isn\'t Enough',
    subtitle: '24/7 On-Site IT Engineers Across All Emirates',
    description: '',
  },
  intro:
    'Some IT issues require hands-on attention. Hardware installation, network troubleshooting, cable management, and emergency repairs often need on-site engineers. Our on-site support team is available 24/7 across all Emirates, ready to help when remote support isn\'t enough.',
  blocks: [
    {
      title: 'When On-Site Support Is Needed',
      text: '<p>While many IT issues can be resolved remotely, some problems require physical access to your equipment. Hardware installation, network cabling, server maintenance, and physical repairs all need on-site engineers. When remote support can\'t solve the problem, on-site support is essential.</p><p>We assess each issue to determine the best support method. If remote support can resolve the problem, we use it. If on-site support is needed, we dispatch engineers immediately. This flexible approach ensures the best support for each situation.</p>',
      list: [
        '<li>Hardware installation and setup</li>',
        '<li>Network cabling and infrastructure</li>',
        '<li>Server and equipment maintenance</li>',
        '<li>Physical repairs and replacements</li>',
        '<li>Complex troubleshooting requiring physical access</li>',
        '<li>Emergency repairs and critical issues</li>',
      ],
    },
    {
      title: '24/7 On-Site Availability',
      text: '<p>Our on-site engineers are available 24/7 across all Emirates. Whether you need help at 2 AM on a Sunday or during a holiday, we can dispatch engineers to your location. Fast response times ensure help arrives quickly when you need it most.</p><p>We maintain engineers in strategic locations across UAE to ensure quick response times. In Dubai, we average 2-hour response times. Across all Emirates, we maintain 4-hour average response times for on-site support.</p>',
      list: [
        '<li>24/7 on-site engineer availability</li>',
        '<li>Fast response times across all Emirates</li>',
        '<li>Strategic locations for quick access</li>',
        '<li>2-hour average in Dubai</li>',
        '<li>4-hour average across all Emirates</li>',
        '<li>Emergency response for critical issues</li>',
      ],
    },
    {
      title: 'Expert On-Site Engineers',
      text: '<p>Our on-site engineers are expert IT professionals with years of experience. They\'re trained to handle complex IT issues, install hardware, troubleshoot networks, and perform repairs. Each engineer is certified in major IT technologies and platforms.</p><p>Our engineers come equipped with the tools and parts needed for most repairs. They\'re experienced in UAE business IT environments and understand local requirements. When they arrive, they\'re ready to solve your problems quickly.</p>',
      list: [
        '<li>Expert IT professionals</li>',
        '<li>Certified in major IT technologies</li>',
        '<li>Equipped with tools and parts</li>',
        '<li>Experienced in UAE IT environments</li>',
        '<li>Quick problem diagnosis and resolution</li>',
        '<li>Comprehensive technical expertise</li>',
      ],
    },
    {
      title: 'Comprehensive On-Site Services',
      text: '<p>Our on-site engineers provide comprehensive IT services. Hardware installation, network setup, server maintenance, equipment repairs, cable management, and infrastructure upgrades are all handled by our team. Whatever IT work you need done on-site, we can handle it.</p><p>We coordinate on-site work to minimize disruption to your business. Engineers arrive prepared with the right tools and parts. Work is completed efficiently, and you\'re kept informed throughout the process.</p>',
      list: [
        '<li>Hardware installation and setup</li>',
        '<li>Network infrastructure installation</li>',
        '<li>Server and equipment maintenance</li>',
        '<li>Hardware repairs and replacements</li>',
        '<li>Cable management and organization</li>',
        '<li>Infrastructure upgrades and expansion</li>',
      ],
    },
    {
      title: 'Seamless Integration with Remote Support',
      text: '<p>On-site and remote support work together seamlessly. Often, remote engineers diagnose problems and prepare solutions before on-site engineers arrive. This coordination speeds up resolution and ensures on-site work is efficient.</p><p>On-site engineers can also work with remote support teams for complex issues. This collaborative approach ensures the best solutions for your IT problems, whether they require remote or on-site attention.</p>',
      list: [
        '<li>Coordinated remote and on-site support</li>',
        '<li>Remote diagnosis before on-site visits</li>',
        '<li>Efficient on-site work preparation</li>',
        '<li>Collaborative problem solving</li>',
        '<li>Faster overall resolution</li>',
        '<li>Best of both support methods</li>',
      ],
    },
  ],
};

export default function ITSupportOnsitePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || 'On-Site Support When Remote Is Not Enough | IT Support UAE | NOCKO',
          description: 'On-site IT support services available 24/7 across all Emirates. Hardware installation, network troubleshooting, emergency repairs, and hands-on IT sup',
          datePublished: '2026-01-20',
          dateModified: '2026-01-23',
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-white.svg`,
            },
          },
        }}
      />
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





