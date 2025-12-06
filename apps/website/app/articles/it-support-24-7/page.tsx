import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: '24/7 IT Support When You Need It Most | IT Support Services UAE | NOCKO',
  description:
    '24/7 IT support services available around the clock for businesses in UAE. Fast response times, on-site engineers, and immediate help when IT problems occur. Expert IT professionals available 24/7.',
  keywords:
    '24/7 IT support UAE, round the clock IT support Dubai, emergency IT support, IT support availability, 24/7 technical support',
  openGraph: {
    title: '24/7 IT Support When You Need It Most | IT Support Services UAE | NOCKO',
    description:
      '24/7 IT support services available around the clock for businesses in UAE. Fast response times, on-site engineers, and immediate help when IT problems occur.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-support-24-7',
  },
};

const articleData = {
  hero: {
    title: '24/7 IT Support When You Need It Most',
    subtitle: 'Round-the-Clock Technical Support for Businesses in UAE',
    description: '',
  },
  intro:
    'IT problems don\'t wait for business hours. When something breaks at 2 AM on a Sunday or during a holiday, you need help immediately. Our 24/7 IT support team is always available to resolve issues quickly, minimize downtime, and keep your business running smoothly around the clock.',
  blocks: [
    {
      title: 'Why 24/7 IT Support Is Essential',
      text: '<p>IT issues can occur at any time, and when they do, every minute of downtime costs money. Systems can fail at night, on weekends, or during holidays when your IT team might not be available. Without 24/7 support, you\'re left waiting until business hours, losing productivity and revenue.</p><p>Critical IT problems don\'t respect business hours. A server crash at midnight can stop your entire operation. Network failures on weekends can prevent customer access. Security breaches can happen at any time. 24/7 support ensures you have help whenever problems occur.</p>',
      list: [
        '<li>IT problems occur at any time, day or night</li>',
        '<li>Downtime costs money every minute</li>',
        '<li>Critical issues can\'t wait until business hours</li>',
        '<li>Weekend and holiday problems need immediate attention</li>',
        '<li>Security breaches can happen at any time</li>',
        '<li>Business operations can\'t stop for IT issues</li>',
      ],
    },
    {
      title: 'Fast Response Times Across All Emirates',
      text: '<p>Our 24/7 support team provides fast response times across all Emirates. In Dubai, we average 2-hour response times for most issues. Across all Emirates, we maintain 4-hour average response times. On-site engineers are available 24/7 when remote support isn\'t enough.</p><p>We understand that fast response is critical. Our support team is strategically located across UAE to ensure quick response times. Whether you\'re in Dubai, Abu Dhabi, Sharjah, or any other Emirate, help is nearby.</p>',
      list: [
        '<li>2-hour average response time in Dubai</li>',
        '<li>4-hour average response time across all Emirates</li>',
        '<li>On-site engineers available 24/7</li>',
        '<li>Strategic locations across UAE</li>',
        '<li>Remote support for immediate assistance</li>',
        '<li>Emergency response for critical issues</li>',
      ],
    },
    {
      title: 'Comprehensive Support Coverage',
      text: '<p>Our 24/7 support covers all your IT needs. Server issues, network problems, software errors, hardware failures, security incidents, and performance issues are all handled by our expert team. No matter what IT problem you face, we\'re available to help.</p><p>We provide support for all types of IT infrastructure: servers, networks, workstations, cloud services, security systems, and more. Our team has expertise across all major IT platforms and technologies used in UAE businesses.</p>',
      list: [
        '<li>Server and infrastructure support</li>',
        '<li>Network troubleshooting and repair</li>',
        '<li>Software error resolution</li>',
        '<li>Hardware failure diagnosis and repair</li>',
        '<li>Security incident response</li>',
        '<li>Performance optimization and tuning</li>',
      ],
    },
    {
      title: 'Expert IT Professionals Available 24/7',
      text: '<p>Our 24/7 support team consists of expert IT professionals with years of experience. They\'re trained to handle complex IT issues quickly and efficiently. Each team member has expertise in multiple IT areas, ensuring comprehensive support coverage.</p><p>Our support engineers are certified in major IT technologies and platforms. They stay current with the latest IT trends and best practices. When you call for support, you\'re talking to experienced professionals who can solve your problems quickly.</p>',
      list: [
        '<li>Expert IT professionals with 10+ years experience</li>',
        '<li>Certified in major IT technologies</li>',
        '<li>Multi-skilled engineers for comprehensive support</li>',
        '<li>Current with latest IT trends and practices</li>',
        '<li>Experienced in UAE business IT environments</li>',
        '<li>Quick problem diagnosis and resolution</li>',
      ],
    },
    {
      title: 'Peace of Mind with 24/7 Availability',
      text: '<p>Knowing that IT support is available 24/7 gives you peace of mind. You can focus on running your business without worrying about IT problems. Whether it\'s a critical system failure or a minor issue, help is always just a call away.</p><p>24/7 support means your business operations are protected around the clock. You don\'t have to worry about IT problems disrupting your business during off-hours. Our team is always ready to help, ensuring your IT infrastructure stays operational.</p>',
      list: [
        '<li>Peace of mind knowing help is always available</li>',
        '<li>Focus on business without IT worries</li>',
        '<li>Business operations protected 24/7</li>',
        '<li>No waiting for business hours</li>',
        '<li>Immediate help for critical issues</li>',
        '<li>Consistent support experience</li>',
      ],
    },
  ],
};

export default function ITSupport247Page() {
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



