import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT-решения для финансов и банкинга | NOCKO ОАЭ',
  description:
    'Безопасные IT-решения для финансовых организаций в ОАЭ. Сетевая инфраструктура, кибербезопасность, соответствие требованиям, защита данных и поддержка 24/7 для банков и финансовых компаний.',
  keywords:
    'IT-решения для финансов ОАЭ, банковские IT-услуги Дубай, финансовая кибербезопасность, сетевая инфраструктура для банков, IT-соответствие требованиям в финансах',
  openGraph: {
    title: 'IT-решения для финансов и банкинга | NOCKO ОАЭ',
    description:
      'Безопасные IT-решения для финансовых организаций в ОАЭ. Сетевая инфраструктура, кибербезопасность, соответствие требованиям и поддержка 24/7.',
    type: 'article',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/industries/finance-banking',
    languages: {
      'en-AE': '/industries/finance-banking',
      'ru-RU': '/ru/industries/finance-banking',
      'x-default': '/industries/finance-banking',
    },
  },
};

const industryData = {
  hero: {
    title: 'IT-решения для финансов и банкинга',
    subtitle: 'Безопасные, соответствующие требованиям и надёжные технологии для финансовых организаций',
    description: '',
  },
  intro:
    'Финансовым организациям необходимы самые высокие стандарты безопасности, надёжности и соответствия требованиям. Наши IT-решения для финансов и банкинга обеспечивают защищённую инфраструктуру, защиту данных, соблюдение нормативных требований и поддержку 24/7, чтобы ваши операции выполнялись бесперебойно.',
  blocks: [
    {
      title: 'Безопасность и соответствие требованиям прежде всего',
      text: '<p>Финансовые компании сталкиваются со строгими требованиями к безопасности и нормативному регулированию. Наши решения обеспечивают соответствие местным и международным стандартам, одновременно защищая конфиденциальные данные клиентов и транзакции.</p><p>Мы внедряем многоуровневую защиту, шифрование, контроль доступа и непрерывный мониторинг, чтобы предотвращать нарушения и обеспечивать готовность к аудиту.</p>',
      list: [
        '<li>Поддержка соответствия стандарту PCI DSS</li>',
        '<li>Шифрование данных при хранении и передаче</li>',
        '<li>Многофакторная аутентификация (MFA)</li>',
        '<li>Сегментация сети и межсетевые экраны</li>',
        '<li>Регулярные аудиты безопасности и тестирование на проникновение</li>',
        '<li>Документирование и отчётность по соответствию требованиям</li>',
      ],
    },
    {
      title: 'Инфраструктура высокой доступности',
      text: '<p>Банковские системы должны работать круглосуточно и без перебоев. Наши инфраструктурные решения обеспечивают резервирование, механизмы отказоустойчивости и аварийное восстановление для непрерывной доступности.</p><p>Мы проектируем и внедряем отказоустойчивые сети, системы резервного копирования и планы обеспечения непрерывности бизнеса, которые минимизируют простои и защищают от потери данных.</p>',
      list: [
        '<li>Резервированная архитектура сети с механизмом отказоустойчивости</li>',
        '<li>Решения для резервного копирования и аварийного восстановления</li>',
        '<li>SLA с гарантией доступности 99,9%+</li>',
        '<li>Мониторинг систем в реальном времени</li>',
        '<li>Автоматизированное тестирование резервного копирования и восстановления</li>',
        '<li>Планирование непрерывности бизнеса</li>',
      ],
    },
    {
      title: 'Цифровая трансформация и облачные сервисы',
      text: '<p>Современным финансовым организациям необходимы гибкость и масштабируемость. Мы помогаем банкам и финансовым компаниям переходить в защищённые облачные среды, внедрять платформы цифрового банкинга и интегрировать новые технологии.</p><p>Наши облачные решения сочетают безопасность, соответствие требованиям и инновации, позволяя вам улучшать клиентский опыт, сохраняя контроль над конфиденциальными данными.</p>',
      list: [
        '<li>Безопасная миграция в облако и гибридные решения</li>',
        '<li>Интеграция с основной банковской системой (core banking)</li>',
        '<li>Разработка и интеграция API</li>',
        '<li>Платформы мобильного и онлайн-банкинга</li>',
        '<li>Интеграция платёжных шлюзов</li>',
        '<li>Модернизация устаревших систем</li>',
      ],
    },
  ],
};

export default function FinanceBankingPage() {
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
          { label: 'Главная', href: '/ru' },
          { label: 'Отрасли', href: '#' },
          { label: 'Финансы и банкинг' },
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
