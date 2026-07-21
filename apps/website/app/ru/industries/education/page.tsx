import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT-решения для образования | NOCKO ОАЭ',
  description:
    'Современные IT-решения для образовательных учреждений в ОАЭ. Умные классы, системы управления учащимися, кампусные сети, платформы электронного обучения и поддержка 24/7 для школ и университетов.',
  keywords:
    'IT-решения для образования ОАЭ, IT-услуги для школ Дубай, сетевая инфраструктура университета, платформы электронного обучения ОАЭ, образовательные технологии',
  openGraph: {
    title: 'IT-решения для образования | NOCKO ОАЭ',
    description:
      'Современные IT-решения для образовательных учреждений в ОАЭ. Умные классы, кампусные сети, платформы электронного обучения и поддержка 24/7.',
    type: 'article',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/industries/education',
    languages: {
      'en-AE': '/industries/education',
      'ru-RU': '/ru/industries/education',
      'x-default': '/industries/education',
    },
  },
};

const industryData = {
  hero: {
    title: 'IT-решения для образования',
    subtitle: 'Технологическая инфраструктура для школ, университетов и учебных центров',
    description: '',
  },
  intro:
    'Образовательным учреждениям необходима надёжная IT-инфраструктура для поддержки цифрового обучения, управления учащимися и работы кампуса. Наши решения включают умные классы, защищённые сети, платформы электронного обучения и поддержку 24/7 для школ и университетов.',
  blocks: [
    {
      title: 'Умные классы и цифровое обучение',
      text: '<p>Современное образование требует оснащённых технологиями классов с интерактивными дисплеями, видеоконференцсвязью и доставкой цифрового контента. Мы внедряем решения для умных классов с надёжной инфраструктурой, обеспечивающей увлекательный процесс обучения.</p><p>Наши решения включают проекторы, интерактивные доски, документ-камеры, звуковые системы и сетевое подключение для бесперебойного цифрового преподавания и обучения.</p>',
      list: [
        '<li>Установка интерактивных дисплеев и проекторов</li>',
        '<li>Видеоконференцсвязь для дистанционного обучения</li>',
        '<li>Системы управления цифровым контентом</li>',
        '<li>Аудиовизуальные системы для аудиторий</li>',
        '<li>Беспроводные презентации и совместный доступ к экрану</li>',
        '<li>Единые платформы управления классом</li>',
      ],
    },
    {
      title: 'Сетевая инфраструктура кампуса',
      text: '<p>Школам и университетам требуется комплексное сетевое покрытие в аудиториях, библиотеках, общежитиях и на открытых территориях. Мы проектируем и разворачиваем сети в масштабах всего кампуса с высокоплотным Wi-Fi, безопасностью и надёжной производительностью.</p><p>Наши сети поддерживают тысячи одновременных пользователей, приоритизируют образовательный трафик и обеспечивают безопасный гостевой доступ для посетителей и мероприятий.</p>',
      list: [
        '<li>Высокоплотный Wi-Fi для крупных кампусов</li>',
        '<li>Интеграция проводных и беспроводных сетей</li>',
        '<li>Сегментация сети для учащихся, персонала и гостей</li>',
        '<li>Управление пропускной способностью и качество обслуживания (QoS)</li>',
        '<li>Фильтрация интернет-контента и веб-безопасность</li>',
        '<li>Интеграция IP-видеонаблюдения по всему кампусу</li>',
      ],
    },
    {
      title: 'Системы управления учащимися и обучением',
      text: '<p>Образовательные учреждения полагаются на информационные системы для учащихся (SIS), системы управления обучением (LMS) и административные платформы. Мы внедряем, интегрируем и поддерживаем эти системы для упрощения зачисления, выставления оценок, учёта посещаемости и коммуникации.</p><p>Облачные платформы обеспечивают дистанционное обучение, мобильный доступ и родительские порталы для повышения вовлечённости и прозрачности.</p>',
      list: [
        '<li>Внедрение информационной системы для учащихся (SIS)</li>',
        '<li>Интеграция системы управления обучением (LMS)</li>',
        '<li>Платформы онлайн-экзаменов и оценивания</li>',
        '<li>Интеграция системы управления библиотекой</li>',
        '<li>Настройка порталов для родителей и учащихся</li>',
        '<li>Microsoft 365 для образования или Google Workspace</li>',
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
          { label: 'Главная', href: '/ru' },
          { label: 'Отрасли', href: '#' },
          { label: 'Образование' },
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
