import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT-решения для здравоохранения | NOCKO ОАЭ',
  description:
    'Безопасные IT-решения для медицинских учреждений в ОАЭ. Системы EMR/EHR, сетевая инфраструктура для клиник, соответствие HIPAA, защита данных и поддержка 24/7 для клиник и больниц.',
  keywords:
    'IT-решения для здравоохранения ОАЭ, медицинские IT-услуги Дубай, сетевая инфраструктура для клиник, системы EMR EHR ОАЭ, кибербезопасность в здравоохранении',
  openGraph: {
    title: 'IT-решения для здравоохранения | NOCKO ОАЭ',
    description:
      'Безопасные IT-решения для медицинских учреждений в ОАЭ. Системы EMR/EHR, сетевая инфраструктура, соответствие требованиям и поддержка 24/7.',
    type: 'article',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/industries/healthcare',
    languages: {
      'en-AE': '/industries/healthcare',
      'ru-RU': '/ru/industries/healthcare',
      'x-default': '/industries/healthcare',
    },
  },
};

const industryData = {
  hero: {
    title: 'IT-решения для здравоохранения',
    subtitle: 'Безопасные, надёжные и соответствующие требованиям технологии для медицинских учреждений',
    description: '',
  },
  intro:
    'Медицинским учреждениям необходимы безопасные и надёжные IT-системы для защиты данных пациентов, обеспечения непрерывной доступности и соответствия нормативным требованиям. Наши решения обеспечивают инфраструктуру медицинского уровня, интеграцию с системами EMR/EHR и поддержку 24/7 для клиник, больниц и медицинских центров.',
  blocks: [
    {
      title: 'Безопасность данных пациентов и соответствие требованиям',
      text: '<p>Медицинские учреждения работают с конфиденциальными данными пациентов, которые должны быть защищены и обрабатываться в соответствии с нормативными требованиями. Мы внедряем меры безопасности, средства контроля доступа и шифрование для защиты электронных медицинских карт и обеспечения соответствия требованиям регуляторов.</p><p>Наши решения включают резервное копирование данных, аварийное восстановление и ведение журналов аудита для защиты информации о пациентах и поддержания непрерывности работы.</p>',
      list: [
        '<li>Поддержка соответствия HIPAA и местным требованиям в сфере здравоохранения</li>',
        '<li>Шифрование данных и безопасное хранение</li>',
        '<li>Ролевое управление доступом (RBAC)</li>',
        '<li>Журналы аудита и регистрация активности</li>',
        '<li>Интеграция защищённого портала для пациентов</li>',
        '<li>Регулярная оценка соответствия требованиям</li>',
      ],
    },
    {
      title: 'Системы EMR/EHR и интеграция',
      text: '<p>Электронные медицинские карты — основа современного здравоохранения. Мы внедряем, интегрируем и поддерживаем системы EMR/EHR, обеспечивая бесперебойный обмен данными между отделениями, медицинским оборудованием и внешними системами.</p><p>Наши услуги интеграции объединяют лабораторные системы, оборудование для визуализации, платформы биллинга и запись на приём в единую IT-среду медицинского учреждения.</p>',
      list: [
        '<li>Внедрение и миграция систем EMR/EHR</li>',
        '<li>Стандарты интеграции HL7 и FHIR</li>',
        '<li>Подключение медицинского оборудования (PACS, лабораторные системы)</li>',
        '<li>Интеграция аптечных и биллинговых систем</li>',
        '<li>Настройка платформы телемедицины</li>',
        '<li>Мобильный доступ для медицинского персонала</li>',
      ],
    },
    {
      title: 'Отказоустойчивые медицинские сети',
      text: '<p>Медицинские учреждения не могут допустить простоев. Мы проектируем и разворачиваем резервированную сетевую инфраструктуру с механизмами аварийного переключения, резервным питанием и мониторингом 24/7 для обеспечения непрерывной доступности.</p><p>Наши сети медицинского уровня надёжно и производительно поддерживают критически важные приложения, визуализацию в реальном времени, видеоконсультации и электронные рецепты.</p>',
      list: [
        '<li>Проектирование резервированной сети с аварийным переключением</li>',
        '<li>Интеграция источников бесперебойного питания (ИБП)</li>',
        '<li>SLA с доступностью 99.9%+ для критически важных систем</li>',
        '<li>Мониторинг и поддержка сети 24/7</li>',
        '<li>Беспроводные сети для медицинского оборудования</li>',
        '<li>Защищённый гостевой Wi-Fi для пациентов и посетителей</li>',
      ],
    },
  ],
};

export default function HealthcarePage() {
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
          { label: 'Здравоохранение' },
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
