import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'ИТ Поддержка в Дубае | Управляемые ИТ Услуги Дубай',
  description:
    'NOCKO предоставляет ИТ поддержку, сетевую инфраструктуру, облачные решения и кибербезопасность для бизнеса в Дубае — DIFC, Business Bay, DMCC, JAFZA и по всему ОАЭ.',
  keywords: [
    'ИТ поддержка Дубай',
    'управляемые ИТ услуги Дубай',
    'ИТ услуги Дубай',
    'ИТ консалтинг Дубай',
    'сетевая инфраструктура Дубай',
    'облачные решения Дубай',
    'кибербезопасность Дубай',
    'ИТ компания Дубай',
    'ИТ поддержка DIFC',
    'ИТ поддержка Business Bay',
  ],
  openGraph: {
    title: 'ИТ Поддержка в Дубае | Управляемые ИТ Услуги',
    description:
      'NOCKO предоставляет ИТ поддержку, сетевую инфраструктуру, облачные решения и кибербезопасность для бизнеса в Дубае и ОАЭ.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/locations/dubai',
    languages: {
      'en-AE': '/locations/dubai',
      'ru-RU': '/ru/locations/dubai',
      'x-default': '/locations/dubai',
    },
  },
};

const dubaiContent = {
  hero: {
    title: 'ИТ Поддержка и Управляемые Услуги в Дубае',
    subtitle: 'Надёжные ИТ решения для финансов, логистики, недвижимости и гостиничного бизнеса',
    description:
      'NOCKO предоставляет профессиональную ИТ поддержку, сетевую инфраструктуру, облачные решения и кибербезопасность для предприятий Дубая — от DIFC и Business Bay до JAFZA и Expo City.',
  },
  intro: {
    title: 'Профессиональные ИТ Услуги для Бизнеса в Дубае',
    text: 'В Дубае простой ИТ-систем — это не мелкое неудобство, а финансовые потери. Финансовые компании в DIFC работают в условиях регуляторных требований, которые предполагают аудируемые системы с постоянной доступностью. Логистические операторы в JAFZA и Джебель Али ведут круглосуточные складские операции, которые не могут остановиться из-за отказа сервера. Гостиничный бизнес на JBR и в Downtown зависит от программного обеспечения управления объектами, платёжных систем и гостевого Wi-Fi, которые должны работать без сбоев. NOCKO создана именно для таких сред: предприятий, где профессиональное и ответственное управление ИТ является функциональным требованием, а не роскошью.',
  },
  services: {
    title: 'ИТ Услуги для Бизнеса в Дубае',
    text: 'Мы охватываем полный спектр корпоративных ИТ — от первоначального проектирования инфраструктуры до текущего ежедневного управления. Открываете ли вы новый офис в Business Bay или консолидируете ИТ на нескольких площадках по ОАЭ — наша команда берёт на себя техническую сложность, чтобы ваши сотрудники могли сосредоточиться на работе.',
    items: [
      {
        title: 'ИТ Поддержка и Хелпдеск',
        description:
          'Гарантированное время реакции на каждый тикет с решением от L1 до L3 местными инженерами. Среднее время выезда на объект в Дубае — менее двух часов, удалённый триаж критических инцидентов начинается менее чем за 15 минут.',
        link: '/ru/services/it-support',
      },
      {
        title: 'Сетевая Инфраструктура',
        description:
          'Структурированный кабелинг, проектирование Wi-Fi, развёртывание межсетевых экранов и сегментация VLAN для офисов и коммерческих помещений по всему Дубаю. Проектируем с учётом производительности, резервирования и физических особенностей плотных коммерческих пространств Дубая.',
        link: '/ru/services/structured-cabling',
      },
      {
        title: 'Облачные Решения',
        description:
          'Развёртывание Microsoft 365, Azure и AWS под полным управлением. Планирование миграции, соответствие требованиям хранения данных по UAE PDPL и управление лицензиями — платите только за то, что реально используете.',
        link: '/ru/services/cloud',
      },
      {
        title: 'Кибербезопасность',
        description:
          'Защита конечных точек, управление политиками межсетевого экрана, симуляция фишинга и оценка уязвимостей. Для регулируемых организаций в DIFC помогаем с требованиями DFSA по технологическим рискам и соответствием ISO 27001.',
        link: '/ru/services/cybersecurity',
      },
      {
        title: 'Управляемые ИТ Услуги',
        description:
          'Фиксированный ежемесячный AMC, включающий проактивный мониторинг, управление патчами, поддержку оборудования и доступ к хелпдеску. Предсказуемые расходы и чётко определённый объём — никаких неожиданных счетов при поломке.',
        link: '/ru/services/managed-it',
      },
      {
        title: 'ИТ Консалтинг',
        description:
          'Планирование технологической дорожной карты, выбор поставщиков, проверка ИТ-бюджетов и аудит инфраструктуры. Полезно для растущего бизнеса, которому нужна чёткая картина текущего состояния ИТ и плана на 12 месяцев.',
        link: '/ru/services/it-consulting',
      },
    ],
  },
  whyChoose: {
    title: 'Почему Бизнес в Дубае Выбирает NOCKO',
    items: [
      {
        title: 'Присутствие в Ключевых Районах',
        description:
          'Обслуживаем клиентов в DIFC, Business Bay, DMCC, Media City, JAFZA, Deira и Северных Эмиратах. Наши инженеры знают здания, процедуры доступа и местную логистику.',
      },
      {
        title: 'Мониторинг и Реагирование 24/7',
        description:
          'Мониторинг уровня NOC работает непрерывно. При критических инцидентах среднее время выезда в Дубае — менее двух часов, по ОАЭ — менее четырёх. Работаем в режиме торговых часов DIFC, логистических смен и требований гостиничного бизнеса.',
      },
      {
        title: 'Опытные Инженеры',
        description:
          'Каждый инженер нашей команды имеет более десяти лет опыта в корпоративных ИТ. Работаем с Microsoft, Cisco, Fortinet и ведущими облачными платформами.',
      },
      {
        title: 'Более 50 Активных Клиентов в ОАЭ',
        description:
          'Наша клиентская база охватывает финансы, недвижимость, логистику, гостиничный бизнес, здравоохранение и профессиональные услуги. Долгосрочные партнёрства, а не разовые сервисные контракты.',
      },
      {
        title: 'Единая Точка Ответственности',
        description:
          'Инфраструктура, облако, безопасность и хелпдеск — всё в рамках одного контракта. Когда что-то идёт не так в 23:00, один звонок достигает команды, ответственной за весь стек.',
      },
      {
        title: 'Прозрачные Контракты с Фиксированной Стоимостью',
        description:
          'Цены AMC формируются на основе реальной инвентаризации ваших активов. Никаких размытых ретейнеров, никаких скрытых сборов за выезд для стандартных проблем в рамках договора.',
      },
    ],
  },
  localBenefits: {
    title: 'Охват по Дубаю и ОАЭ',
    text: 'Хотя штаб-квартира NOCKO находится в Дубае, мы обеспечиваем одинаковый уровень сервиса для бизнеса в Абу-Даби, Шардже, Аджмане, Рас-эль-Хайме, Фуджейре и Умм-эль-Кувейне. Для многоплощадочных организаций, работающих по всем Эмиратам, мы выступаем единым ИТ-партнёром, а не отдельным поставщиком в каждом месте. Один контракт, один номер хелпдеска, инженеры, которые могут добраться до любого объекта в ОАЭ.',
  },
};

export default function DubaiRuPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NOCKO Information Technology',
    image: `${baseUrl}/images/logo-white.svg`,
    description: 'Управляемые ИТ услуги, ИТ поддержка, облачные решения и кибербезопасность для бизнеса в Дубае и по всему ОАЭ.',
    url: `${baseUrl}/ru/locations/dubai`,
    telephone: '+971542448888',
    email: 'info@nocko.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2048',
      longitude: '55.2708',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <>
      <StructuredData type="LocalBusiness" data={structuredData} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Локации', url: '/ru/locations' },
            { name: 'Дубай' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={dubaiContent.hero.title}
          subtitle={dubaiContent.hero.subtitle}
          description={dubaiContent.hero.description}
        />

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.intro.title}</h2>
              <p className="section__text">{dubaiContent.intro.text}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.services.title}</h2>
              <p className="section__text">{dubaiContent.services.text}</p>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {dubaiContent.services.items.map((service, index) => (
                  <div key={index} className="service-card">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <a href={service.link} className="btn btn--primary btn--sm">
                      Подробнее
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.whyChoose.title}</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {dubaiContent.whyChoose.items.map((item, index) => (
                  <div key={index} className="feature-card">
                    <h3 className="feature-card__title">{item.title}</h3>
                    <p className="feature-card__description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{dubaiContent.localBenefits.title}</h2>
              <p className="section__text">{dubaiContent.localBenefits.text}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
