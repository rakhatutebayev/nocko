import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'ИТ Компания в Шардже | ИТ Поддержка Шарджа',
  description:
    'Профессиональные ИТ услуги в Шардже — ИТ поддержка, сетевая инфраструктура, облачные решения, кибербезопасность и управляемые ИТ услуги. NOCKO обслуживает SAIF Zone, Al Majaz, Промышленный район и весь бизнес Шарджи с поддержкой 24/7.',
  keywords: [
    'ИТ компания Шарджа',
    'ИТ поддержка Шарджа',
    'ИТ услуги Шарджа',
    'управляемые ИТ услуги Шарджа',
    'ИТ консалтинг Шарджа',
    'сетевая инфраструктура Шарджа',
    'облачные решения Шарджа',
    'кибербезопасность Шарджа',
    'SAIF Zone ИТ поддержка',
    'ИТ компания ОАЭ',
  ],
  openGraph: {
    title: 'ИТ Компания в Шардже | ИТ Поддержка',
    description:
      'Профессиональные ИТ услуги в Шардже — сети, облако, кибербезопасность и управляемая ИТ поддержка 24/7 для бизнеса в SAIF Zone, Al Majaz и Промышленном районе.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/locations/sharjah',
    languages: {
      'en-AE': '/locations/sharjah',
      'ru-RU': '/ru/locations/sharjah',
      'x-default': '/locations/sharjah',
    },
  },
};

const sharjahContent = {
  hero: {
    title: 'ИТ Компания в Шардже | ИТ Поддержка и Решения',
    subtitle: 'Профессиональные ИТ Услуги для Бизнеса в Шардже — SAIF Zone, Промышленный Район и Al Majaz',
    description:
      'NOCKO предоставляет профессиональную ИТ поддержку, сетевую инфраструктуру, облачные решения и кибербезопасность для бизнеса по всей Шардже. Близость к Дубаю обеспечивает быстрый выезд на объект, конкурентные цены и инженеров с квалификацией ОАЭ.',
  },
  intro: {
    title: 'ИТ Услуги, Адаптированные к Деловой Среде Шарджи',
    text: 'Шарджа — один из наиболее разнообразных деловых экосистем ОАЭ: от логистических и производственных компаний SAIF Zone до профессиональных компаний Al Majaz и творческого бизнеса Sharjah Media City (Shams). У каждого сектора есть особые потребности в ИТ-инфраструктуре. Опыт NOCKO в промышленных, фризонных и коммерческих районах Шарджи означает, что мы понимаем специфические требования к подключению, соответствию нормативам и операционной деятельности вашего бизнеса. База в Дубае позволяет нам достичь любого объекта в Шардже со средним временем реакции 2-3 часа.',
  },
  services: {
    title: 'ИТ Услуги для Бизнеса в Шардже',
    text: 'От логистических компаний SAIF Zone, которым нужна сетевая избыточность, до малого и среднего бизнеса Шарджи, ищущего экономичные управляемые ИТ — NOCKO предоставляет корпоративные ИТ услуги по прозрачным ценам.',
    items: [
      {
        title: 'ИТ Поддержка и Хелпдеск',
        description:
          'Круглосуточная удалённая ИТ поддержка для бизнеса в Шардже. Немедленное удалённое решение программных и сетевых проблем. Выезд инженера со средним временем прибытия 2-3 часа из нашей базы в Дубае.',
        link: '/ru/services/it-support',
      },
      {
        title: 'ИТ AMC Контракты',
        description:
          'Годовые контракты на техническое обслуживание, популярные среди малого и среднего бизнеса Шарджи, стремящегося к предсказуемым ИТ расходам. Фиксированная ежемесячная плата включает обслуживание оборудования, поддержку хелпдеска и плановые профилактические визиты.',
        link: '/ru/services/it-amc',
      },
      {
        title: 'Сетевая Инфраструктура',
        description:
          'Структурированный кабелинг, Wi-Fi и проектирование сетей для складов, офисов и многоплощадочных операций в Шардже. Сертифицированный монтаж Cat6A и оптоволокна для объектов SAIF Zone и Промышленного района.',
        link: '/ru/services/structured-cabling',
      },
      {
        title: 'Облачные Решения',
        description:
          'Облачная миграция и управление для бизнеса в Шардже. Развёртывание AWS и Azure с соответствием требованиям хранения данных ОАЭ. Оптимизированные по стоимости облачные архитектуры для малого, среднего и крупного бизнеса Шарджи.',
        link: '/ru/services/cloud',
      },
      {
        title: 'Кибербезопасность',
        description:
          'Кибербезопасность для бизнеса в Шардже: обнаружение угроз, управление межсетевым экраном и обучение сотрудников. Решения с готовностью к соответствию для фризонного бизнеса и компаний, работающих с государственным сектором.',
        link: '/ru/services/cybersecurity',
      },
      {
        title: 'Управляемые ИТ Услуги',
        description:
          'Полный аутсорсинг ИТ для бизнеса в Шардже, желающего сосредоточиться на операциях. Предсказуемая ежемесячная стоимость, проактивный мониторинг NOC и стратегическое ИТ-планирование от команды vCIO компании NOCKO.',
        link: '/ru/services/managed-it',
      },
    ],
  },
  zones: {
    title: 'Районы Обслуживания в Шардже',
    items: [
      { name: 'SAIF Zone', desc: 'Логистические, производственные и торговые компании, требующие надёжной сетевой инфраструктуры и ИТ поддержки.' },
      { name: 'Промышленный район Шарджи', desc: 'Промышленные и производственные предприятия, нуждающиеся в обслуживании оборудования и выездной ИТ поддержке.' },
      { name: 'Al Majaz и Al Nahda', desc: 'Коммерческие и профессиональные компании, требующие хелпдеска, облака и управляемых ИТ.' },
      { name: 'Sharjah Media City (Shams)', desc: 'Творческие и медиакомпании, нуждающиеся в облачной инфраструктуре и быстрой удалённой поддержке.' },
      { name: 'Hamriyah Free Zone', desc: 'Компании, работающие в портовой зоне, нуждающиеся в надёжных ИТ и сетевом подключении для круглосуточных операций.' },
      { name: 'University City', desc: 'Образовательные и исследовательские учреждения со специфическими ИТ и нормативными требованиями.' },
    ],
  },
  cta: {
    title: 'Нужна ИТ Поддержка в Шардже?',
    text: 'Свяжитесь с NOCKO для бесплатной ИТ-консультации. Наши инженеры обслуживают бизнес в Шардже из нашей базы в Дубае с быстрым временем реакции и прозрачными ценами.',
  },
};

export default function SharjahRuPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          '@id': 'https://nocko.com/#localbusiness',
          name: 'NOCKO Information Technology',
          image: `${baseUrl}/og-image.jpg`,
          description: 'ИТ компания, предоставляющая ИТ поддержку, сетевую инфраструктуру, облако и кибербезопасность в Шардже, ОАЭ.',
          url: `${baseUrl}/ru/locations/sharjah`,
          telephone: '+971542448888',
          email: 'info@nocko.com',
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.07850',
          longitude: '55.27080',
          areaServed: [
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
          ],
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Локации', url: '/ru/locations' },
            { name: 'Шарджа' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={sharjahContent.hero.title}
          subtitle={sharjahContent.hero.subtitle}
          description={sharjahContent.hero.description}
        />

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{sharjahContent.intro.title}</h2>
              <p className="section__text">{sharjahContent.intro.text}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{sharjahContent.services.title}</h2>
              <p className="section__text">{sharjahContent.services.text}</p>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {sharjahContent.services.items.map((service, index) => (
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
              <h2 className="section__title">{sharjahContent.zones.title}</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {sharjahContent.zones.items.map((zone, index) => (
                  <div key={index} className="feature-card">
                    <h3 className="feature-card__title">{zone.name}</h3>
                    <p className="feature-card__description">{zone.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="section__title">{sharjahContent.cta.title}</h2>
              <p className="section__text">{sharjahContent.cta.text}</p>
              <a href="/ru/contact" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Запросить Бесплатную Консультацию
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
