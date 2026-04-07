import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceGeo from '@/components/services/ServiceGeo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Рускоговорящие ИТ Специалисты в Дубае | ИТ Компания NOCKO',
  description:
    'Профессиональные рускоговорящие ИТ специалисты в Дубае и ОАЭ. ИТ поддержка 24/7, обслуживание серверов, облачные решения и аутсорсинг для вашего бизнеса.',
  keywords:
    'рускоговорящие ит специалисты дубай, итт компания дубай, ит поддержка оаэ, обслуживание компьютеров дубай, системный администратор дубай',
  openGraph: {
    title: 'Рускоговорящие ИТ Специалисты в Дубае | ИТ Компания NOCKO',
    description:
      'Надежная ИТ поддержка и обслуживание для вашего бизнеса в Дубае. Русскоязычная команда экспертов доступна 24/7.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-support-ru',
    languages: {
      'en-AE': '/services/it-support',
      'ru-RU': '/services/it-support-ru',
    },
  },
};

const itSupportRuContent = {
  hero: {
    title: 'Рускоговорящие ИТ Специалисты в Дубае',
    subtitle: 'Ваша надежная ИТ компания в ОАЭ с русской поддержкой',
    description:
      'Обеспечьте стабильную работу вашего бизнеса с профессиональной командой ИТ экспертов. Мы говорим на вашем языке и понимаем специфику работы в Эмиратах. Поддержка 24/7, выезд инженера в течение 2 часов.',
    serviceType: 'ИТ Поддержка и Аутсорсинг',
  },
  firstSection: [
    {
      title: 'ИТ Поддержка 24/7 на русском языке',
      text: "Проблемы с ИТ не ждут начала рабочего дня. Наша команда готова помочь вам в любое время суток. Мы обеспечиваем быстрое решение инцидентов с гарантированным временем реагирования (SLA). Среднее время прибытия инженера — 2 часа по Дубаю.",
      link: '/articles/it-support-24-7',
      linkText: 'Подробнее',
      image: '/images/services/it-support-24-7.webp',
      imageAlt: 'ИТ поддержка 24/7 в ОАЭ',
    },
    {
      title: 'Профессиональный Helpdesk для вашего бизнеса',
      text: 'Наша служба поддержки эффективно обрабатывает все запросы — от сброса паролей до сложных технических сбоев. Прозрачная коммуникация и регулярные отчеты на русском языке позволяют вам всегда контролировать состояние вашей инфраструктуры.',
      link: '/articles/it-support-helpdesk',
      linkText: 'Подробнее',
    },
    {
      title: 'Удаленная поддержка и мониторинг',
      text: 'Многие задачи решаются мгновенно через удаленный доступ, что экономит ваше время. Мы используем безопасные инструменты и постоянно мониторим ваши системы, чтобы предотвратить сбои до того, как они станут критичными.',
      link: '/articles/it-support-remote',
      linkText: 'Подробнее',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Поддержка 24/7 с гарантированным SLA',
    },
    {
      icon: 'icon2',
      title: 'Русскоязычная команда экспертов',
    },
    {
      icon: 'icon3',
      title: 'Проактивный мониторинг серверов и сетей',
    },
    {
      icon: 'icon4',
      title: 'Более 10 лет опыта работы в ОАЭ',
    },
    {
      icon: 'icon5',
      title: 'Прозрачная отчетность и документация',
    },
  ],
  secondSection: [
    {
      title: 'ИТ Аутсорсинг и Обслуживание (AMC)',
      text: 'Мы предлагаем комплексные контракты на годовое обслуживание (AMC), которые включают плановые визиты, неограниченную поддержку и экстренные выезды. Забудьте о проблемах с техникой и сосредоточьтесь на развитии вашего бизнеса.',
      link: '/articles/it-amc-comprehensive',
      linkText: 'Подробнее',
      image: '/images/services/it-support-monitoring.webp',
      imageAlt: 'ИТ аутсорсинг в Дубае',
    },
    {
      title: "Выезд инженера в офис",
      text: "Если проблему нельзя решить удаленно, наш инженер приедет к вам в офис в любой точке ОАЭ. Мы обслуживаем районы DIFC, Business Bay, JLT, Silicon Oasis и другие.",
      link: '/articles/it-support-onsite',
      linkText: 'Подробнее',
    },
    {
      title: 'Настройка сетей и Wi-Fi',
      text: "Обеспечим стабильный и быстрый интернет в вашем офисе. Проектирование СКС, монтаж оборудования, настройка роутеров и систем безопасности.",
      link: '/services/structured-cabling',
      linkText: 'Узнать больше',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Локальная экспертиза <br> в Дубае',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Поддержка 24/7 <br> без выходных',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Русскоговорящие <br> ИТ специалисты',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Прозрачные цены <br> и тарифы',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Понятная <br> коммуникация',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'JLT', 'Silicon Oasis', 'Media City'] },
      { name: 'Абу Даби', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Шарджа', hubs: ['SAIF Zone', 'Al Majaz'] },
      { name: 'Аджман', hubs: [] },
      { name: 'Фуджера', hubs: [] },
      { name: 'Рас Аль Хайма', hubs: [] },
      { name: 'Умм Аль Кувейн', hubs: [] }
    ],
    terms: ['ИТ Поддержка Дубай', 'AMC Контракты', 'Системный администратор ОАЭ', 'Настройка серверов'],
  },
  faq: {
    title: 'Частые вопросы об ИТ услугах',
    items: [
      {
        question: 'Предоставляете ли вы рускоговорящих специалистов?',
        answer:
          'Да, наша компания специализируется на предоставлении русскоязычной ИТ поддержки в Дубае и ОАЭ. Все наши основные инженеры и менеджеры проектов говорят на русском языке.',
      },
      {
        question: 'Как быстро выездной инженер может приехать в офис?',
        answer:
          'Среднее время реагирования на критические инциденты составляет 2 часа в пределах Дубая и 4 часа в других Эмиратах. Удаленная поддержка оказывается мгновенно.',
      },
      {
        question: 'Работаете ли вы с небольшими компаниями?',
        answer:
          'Мы работаем с компаниями любого размера — от небольших стартапов до крупных предприятий. У нас есть гибкие пакеты услуг, подходящие под разный масштаб бизнеса.',
      },
      {
        question: 'Помогаете ли вы с закупкой оборудования?',
        answer:
          'Да, мы помогаем подобрать, закупить, доставить и настроить любое ИТ оборудование и лицензионное ПО в ОАЭ.',
      },
      {
        question: 'Где находится ваш офис?',
        answer:
          'Наш головной офис находится в Дубае, но мы оказываем поддержку компаниям по всем Эмиратам, включая Абу Даби и Шарджу.',
      },
    ],
  },
};

export default function ITSupportRuPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Услуги', url: '/services' },
            { name: 'ИТ Поддержка на русском' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={itSupportRuContent.hero.title}
          subtitle={itSupportRuContent.hero.subtitle}
          description={itSupportRuContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itSupportRuContent.firstSection} />
        <ServiceFeatures features={itSupportRuContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itSupportRuContent.secondSection} />
        <ServiceBenefits benefits={itSupportRuContent.benefits} />
        
        <ServiceGeo 
          title="Обслуживаем бизнес по всей территории ОАЭ"
          description="От технологичного DIFC до индустриальных зон — NOCKO обеспечивает надежную ИТ поддержку в любом уголке Эмиратов."
          emirates={itSupportRuContent.geoContent.emirates}
          terms={itSupportRuContent.geoContent.terms}
          footerNote="Экспертные ИТ решения"
        />

        <ServiceFAQ
          title={itSupportRuContent.faq.title}
          items={itSupportRuContent.faq.items}
        />
        <ServiceCTA
          title="Нужна надежная ИТ поддержка?"
          text="Свяжитесь с нами для бесплатной консультации, и мы обсудим ваши задачи."
          ctaText="Получить консультацию"
          ctaUrl="#contact"
        />
        <RelatedServices services={[
          {
            title: 'Облачные решения',
            url: '/services/cloud',
            description: 'Миграция и поддержка облачной инфраструктуры.',
          },
          {
            title: 'Кибербезопасность',
            url: '/services/cybersecurity',
            description: 'Защита ваших данных и бизнеса.',
          },
        ]} />
      </main>
      <Footer />
    </>
  );
}
