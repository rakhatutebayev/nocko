import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'ИТ Компания в Абу-Даби | ИТ Поддержка Абу-Даби',
  description:
    'Профессиональные ИТ услуги в Абу-Даби — ИТ поддержка, сетевая инфраструктура, облачные решения, кибербезопасность и управляемые ИТ услуги. NOCKO обслуживает ADGM, Khalifa City, Mussafah и все районы Абу-Даби с поддержкой 24/7.',
  keywords: [
    'ИТ компания Абу-Даби',
    'ИТ поддержка Абу-Даби',
    'ИТ услуги Абу-Даби',
    'управляемые ИТ услуги Абу-Даби',
    'ИТ консалтинг Абу-Даби',
    'сетевая инфраструктура Абу-Даби',
    'облачные решения Абу-Даби',
    'кибербезопасность Абу-Даби',
    'ИТ компания ОАЭ',
    'ADGM ИТ поддержка',
  ],
  openGraph: {
    title: 'ИТ Компания в Абу-Даби | ИТ Поддержка',
    description:
      'Профессиональные ИТ услуги в Абу-Даби — сети, облако, кибербезопасность и управляемая ИТ поддержка 24/7 для бизнеса в ADGM, Khalifa City и Mussafah.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/locations/abu-dhabi',
    languages: {
      'en-AE': '/locations/abu-dhabi',
      'ru-RU': '/ru/locations/abu-dhabi',
      'x-default': '/locations/abu-dhabi',
    },
  },
};

const abuDhabiContent = {
  hero: {
    title: 'ИТ Компания в Абу-Даби | ИТ Поддержка и Решения',
    subtitle: 'Профессиональные ИТ Услуги для Бизнеса в Абу-Даби — ADGM, Khalifa City и Mussafah',
    description:
      'NOCKO предоставляет профессиональную ИТ поддержку, сетевую инфраструктуру, облачные решения и кибербезопасность для бизнеса по всему Абу-Даби. Быстрое время реакции, доступность 24/7 и инженеры с квалификацией ОАЭ.',
  },
  intro: {
    title: 'Почему Бизнес Абу-Даби Выбирает NOCKO',
    text: 'Деловая среда Абу-Даби — от финансовых компаний ADGM до промышленных предприятий Mussafah и корпораций Khalifa City — требует ИТ-инфраструктуры, которая надёжна, соответствует нормативным требованиям и масштабируема. NOCKO предоставляет управляемые ИТ услуги, адаптированные к регуляторным условиям Абу-Даби, включая требования к ИТ-управлению Центрального банка ОАЭ (CBUAE) и операционные стандарты ADGM. Наши инженеры знакомы со специфическими требованиями к подключению, лицензированию и хранению данных, с которыми сталкивается бизнес в Абу-Даби.',
  },
  services: {
    title: 'ИТ Услуги для Бизнеса в Абу-Даби',
    text: 'От финансовых институтов ADGM, требующих строгого соответствия в сфере кибербезопасности, до производственных предприятий Mussafah, нуждающихся в надёжной сетевой инфраструктуре — NOCKO предоставляет полный спектр ИТ услуг по всему Абу-Даби.',
    items: [
      {
        title: 'ИТ Поддержка и Хелпдеск',
        description:
          'Круглосуточная ИТ поддержка для бизнеса в Абу-Даби. Удалённое решение в течение нескольких минут, выезд на объект со средним временем прибытия 4 часа по Абу-Даби. Многоязычная поддержка на английском, русском и арабском языках.',
        link: '/ru/services/it-support',
      },
      {
        title: 'Сетевая Инфраструктура',
        description:
          'Корпоративное проектирование и монтаж сетей для офисов, складов и многоплощадочного бизнеса в Абу-Даби. Инфраструктура Cat6A, оптоволокно и беспроводные сети, построенные по стандартам ОАЭ.',
        link: '/ru/services/structured-cabling',
      },
      {
        title: 'Облачные Решения',
        description:
          'Облачная миграция и управление для предприятий Абу-Даби. AWS Middle East (UAE) Region, Microsoft Azure UAE North и гибридные облачные архитектуры в соответствии с требованиями хранения данных ОАЭ.',
        link: '/ru/services/cloud',
      },
      {
        title: 'Кибербезопасность',
        description:
          'Решения кибербезопасности в соответствии со стандартами UAE NESA (Национального органа по электронной безопасности) и требованиями к защите данных ADGM. Обнаружение угроз, оценка уязвимостей и реагирование на инциденты.',
        link: '/ru/services/cybersecurity',
      },
      {
        title: 'Управляемые ИТ Услуги',
        description:
          'Полностью управляемая ИТ-инфраструктура для бизнеса в Абу-Даби. Предсказуемая ежемесячная стоимость, проактивное обслуживание, мониторинг NOC 24/7 и выделенный менеджер по работе с клиентами, знакомый с рынком Абу-Даби.',
        link: '/ru/services/managed-it',
      },
      {
        title: 'ИТ AMC',
        description:
          'Годовые контракты на техническое обслуживание для бизнеса в Абу-Даби. Фиксированная стоимость ИТ поддержки, обслуживания оборудования и приоритетного реагирования — без неожиданных счетов.',
        link: '/ru/services/it-amc',
      },
    ],
  },
  zones: {
    title: 'Районы Обслуживания в Абу-Даби',
    items: [
      { name: 'ADGM (Abu Dhabi Global Market)', desc: 'Финансовые и финтех-компании, требующие ИТ-управления и кибербезопасности в соответствии с FSRA.' },
      { name: 'Khalifa City', desc: 'Корпоративные офисы и бизнес-центры с потребностями в корпоративных сетях и облаке.' },
      { name: 'Промышленный район Mussafah', desc: 'Производственные и логистические компании, требующие надёжной сетевой инфраструктуры и аппаратной поддержки.' },
      { name: 'Al Reem Island', desc: 'Финансовые и профессиональные компании в современном деловом районе Абу-Даби.' },
      { name: 'Центр Абу-Даби', desc: 'Бизнес, ориентированный на государственный сектор, и профессиональные услуги, требующие ИТ с готовностью к соответствию нормативам.' },
      { name: 'Аль-Айн (удалённая поддержка)', desc: 'Удалённая ИТ поддержка и плановые выезды для бизнеса в Аль-Айне.' },
    ],
  },
  cta: {
    title: 'Нужна ИТ Поддержка в Абу-Даби?',
    text: 'Свяжитесь с NOCKO для бесплатной ИТ-консультации. Наши инженеры с опытом работы в Абу-Даби оценят вашу текущую инфраструктуру и предложат индивидуальный план поддержки.',
  },
};

export default function AbuDhabiRuPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          '@id': 'https://nocko.com/#localbusiness',
          name: 'NOCKO Information Technology',
          image: `${baseUrl}/og-image.jpg`,
          description: 'ИТ компания, предоставляющая ИТ поддержку, сетевую инфраструктуру, облако и кибербезопасность в Абу-Даби, ОАЭ.',
          url: `${baseUrl}/ru/locations/abu-dhabi`,
          telephone: '+971542448888',
          email: 'info@nocko.com',
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.07850',
          longitude: '55.27080',
          areaServed: [
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Sharjah' },
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
            { name: 'Абу-Даби' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={abuDhabiContent.hero.title}
          subtitle={abuDhabiContent.hero.subtitle}
          description={abuDhabiContent.hero.description}
        />

        <section className="section section--light">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{abuDhabiContent.intro.title}</h2>
              <p className="section__text">{abuDhabiContent.intro.text}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__content">
              <h2 className="section__title">{abuDhabiContent.services.title}</h2>
              <p className="section__text">{abuDhabiContent.services.text}</p>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {abuDhabiContent.services.items.map((service, index) => (
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
              <h2 className="section__title">{abuDhabiContent.zones.title}</h2>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {abuDhabiContent.zones.items.map((zone, index) => (
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
              <h2 className="section__title">{abuDhabiContent.cta.title}</h2>
              <p className="section__text">{abuDhabiContent.cta.text}</p>
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
