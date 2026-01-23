import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Education | NOCKO UAE',
  description:
    'Modern IT solutions for educational institutions in UAE. Smart classrooms, student management systems, campus networks, e-learning platforms, and 24/7 support for schools and universities.',
  keywords:
    'IT solutions education UAE, school IT services Dubai, university network infrastructure, e-learning platforms UAE, educational technology',
  openGraph: {
    title: 'IT Solutions for Education | NOCKO UAE',
    description:
      'Modern IT solutions for educational institutions in UAE. Smart classrooms, campus networks, e-learning platforms, and 24/7 support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/education',
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Education',
    subtitle: 'Technology Infrastructure for Schools, Universities, and Training Centers',
    description: '',
  },
  intro:
    'Educational institutions need reliable IT infrastructure to support digital learning, student management, and campus operations. Our solutions deliver smart classrooms, secure networks, e-learning platforms, and 24/7 support for schools and universities.',
  blocks: [
    {
      title: 'Smart Classrooms & Digital Learning',
      text: '<p>Modern education requires technology-enabled classrooms with interactive displays, video conferencing, and digital content delivery. We implement smart classroom solutions with reliable infrastructure to support engaging learning experiences.</p><p>Our solutions include projectors, interactive whiteboards, document cameras, sound systems, and network connectivity to enable seamless digital teaching and learning.</p>',
      list: [
        '<li>Interactive display and projector installation</li>',
        '<li>Video conferencing for remote learning</li>',
        '<li>Digital content management systems</li>',
        '<li>Classroom audio-visual systems</li>',
        '<li>Wireless presentation and screen sharing</li>',
        '<li>Unified classroom management platforms</li>',
      ],
    },
    {
      title: 'Campus-Wide Network Infrastructure',
      text: '<p>Schools and universities need comprehensive network coverage across classrooms, libraries, dormitories, and outdoor spaces. We design and deploy campus-wide networks with high-density Wi-Fi, security, and reliable performance.</p><p>Our networks support thousands of concurrent users, prioritize educational traffic, and provide secure guest access for visitors and events.</p>',
      list: [
        '<li>High-density Wi-Fi for large campus environments</li>',
        '<li>Wired and wireless network integration</li>',
        '<li>Network segmentation for students, staff, and guests</li>',
        '<li>Bandwidth management and quality of service (QoS)</li>',
        '<li>Internet content filtering and web security</li>',
        '<li>Campus-wide IP surveillance integration</li>',
      ],
    },
    {
      title: 'Student & Learning Management Systems',
      text: '<p>Educational institutions rely on student information systems (SIS), learning management systems (LMS), and administrative platforms. We implement, integrate, and support these systems to streamline enrollment, grading, attendance, and communication.</p><p>Cloud-based platforms enable remote learning, mobile access, and parent portals for better engagement and transparency.</p>',
      list: [
        '<li>Student information system (SIS) implementation</li>',
        '<li>Learning management system (LMS) integration</li>',
        '<li>Online exam and assessment platforms</li>',
        '<li>Library management system integration</li>',
        '<li>Parent and student portal setup</li>',
        '<li>Microsoft 365 for Education or Google Workspace</li>',
      ],
    },
  ],
};

export default function EducationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: industryData.hero.title,
          description: metadata.description,
          datePublished: '2026-01-23',
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
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '#' },
          { label: 'Education' },
        ]}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={industryData.hero.title}
          subtitle={industryData.hero.subtitle}
          description={industryData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={industryData.intro} blocks={industryData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
