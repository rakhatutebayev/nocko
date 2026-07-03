import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT-решения для недвижимости | NOCKO ОАЭ',
  description:
    'Современные IT-решения для компаний в сфере недвижимости в ОАЭ. Системы управления объектами, сетевая инфраструктура, облачные сервисы и круглосуточная поддержка для застройщиков и агентств.',
  keywords:
    'IT-решения для недвижимости ОАЭ, IT для управления недвижимостью Дубай, сетевая инфраструктура для недвижимости, технологии для недвижимости ОАЭ, IT-поддержка недвижимости',
  openGraph: {
    title: 'IT-решения для недвижимости | NOCKO ОАЭ',
    description:
      'Современные IT-решения для компаний в сфере недвижимости в ОАЭ. Системы управления объектами, сетевая инфраструктура и облачные сервисы.',
    type: 'article',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/industries/real-estate',
    languages: {
      'en-AE': '/industries/real-estate',
      'ru-RU': '/ru/industries/real-estate',
    },
  },
};

const industryData = {
  hero: {
    title: 'IT-решения для недвижимости',
    subtitle: 'Технологическая инфраструктура для застройщиков, агентств и управляющих компаний',
    description: '',
  },
  intro:
    'Компаниям в сфере недвижимости необходимы надёжные IT-системы для управления объектами, обслуживания клиентов и эффективной работы в нескольких локациях. Наши решения обеспечивают безопасную инфраструктуру, интеграцию систем управления недвижимостью и масштабируемые технологии для роста.',
  blocks: [
    {
      title: 'Управление недвижимостью и интеграция CRM',
      text: '<p>Современная работа в сфере недвижимости зависит от интегрированных систем для размещения объектов, управления клиентами и обработки сделок. Мы внедряем и поддерживаем платформы управления недвижимостью, CRM-системы и решения для документооборота.</p><p>Наши услуги интеграции связывают ваши существующие системы, автоматизируют рабочие процессы и обеспечивают бесперебойный обмен данными между отделами продаж, аренды и управления недвижимостью.</p>',
      list: [
        '<li>Интеграция систем управления недвижимостью</li>',
        '<li>CRM и платформы автоматизации продаж</li>',
        '<li>Документооборот и электронная подпись</li>',
        '<li>Поддержка виртуальных туров и 3D-визуализации</li>',
        '<li>Интеграция клиентского портала и мобильного приложения</li>',
        '<li>Синдикация объявлений и интеграция через API</li>',
      ],
    },
    {
      title: 'Сетевая инфраструктура для нескольких объектов',
      text: '<p>Компании в сфере недвижимости работают одновременно в нескольких офисах продаж, шоурумах и на строительных площадках. Мы проектируем и разворачиваем стандартизированную сетевую инфраструктуру, которая объединяет все локации с безопасным и надёжным подключением.</p><p>Централизованное управление, удалённый мониторинг и возможность быстрого развёртывания обеспечивают стабильную производительность и упрощают поддержку по всему вашему портфелю объектов.</p>',
      list: [
        '<li>Стандартизированное проектирование сети для всех локаций</li>',
        '<li>Безопасный VPN и соединение между площадками (site-to-site)</li>',
        '<li>Wi-Fi для шоурумов и центров продаж</li>',
        '<li>Видеоконференцсвязь и цифровые дисплеи</li>',
        '<li>Мобильное подключение для выездных сотрудников</li>',
        '<li>Временные сети для строительных площадок</li>',
      ],
    },
    {
      title: 'Облачные технологии и цифровая трансформация',
      text: '<p>Перенесите работу вашей компании в облако для более удобной совместной работы, мобильности и масштабируемости. Мы помогаем перейти на облачные платформы управления недвижимостью, хранения файлов и коммуникаций.</p><p>Облачные решения обеспечивают удалённую работу, мобильный доступ и бесперебойное взаимодействие между офисами, строительными площадками и внешними партнёрами.</p>',
      list: [
        '<li>Облачные системы управления недвижимостью</li>',
        '<li>Безопасный обмен файлами и совместная работа</li>',
        '<li>Настройка Microsoft 365 и Google Workspace</li>',
        '<li>Мобильные CRM и приложения для выездного обслуживания</li>',
        '<li>Автоматическое резервное копирование и аварийное восстановление</li>',
        '<li>Масштабируемая инфраструктура для роста бизнеса</li>',
      ],
    },
  ],
};

export default function RealEstatePage() {
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
          { label: 'Недвижимость' },
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
