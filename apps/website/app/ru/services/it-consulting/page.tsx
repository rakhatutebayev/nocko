import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceGeo from '@/components/services/ServiceGeo';

export const metadata: Metadata = {
  title: 'ИТ Консалтинг в Дубае | Технологическая Стратегия ОАЭ | NOCKO',
  description:
    'Стратегический ИТ-консалтинг в Дубае и ОАЭ. Оценка технологий, цифровая трансформация и планирование инфраструктуры для бизнеса. Эксперты-консультанты для DIFC и Business Bay.',
  keywords:
    'ИТ консалтинг Дубай, ИТ стратегия ОАЭ, технологический консалтинг Дубай, ИТ планирование ОАЭ, цифровая трансформация Дубай',
  openGraph: {
    title: 'ИТ Консалтинг в Дубае | Технологическая Стратегия ОАЭ | NOCKO',
    description:
      'Экспертная ИТ-стратегия и технологический консалтинг для бизнеса в Дубае и по всему ОАЭ. Стимулируйте рост с помощью цифровой трансформации.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/it-consulting',
  },
};

const itConsultingContent = {
  hero: {
    title: 'Стратегический ИТ-Консалтинг и услуги vCIO в Дубае',
    subtitle: 'Цифровая трансформация, дорожные карты ИТ и управление поставщиками',
    description:
      'Перестаньте делать слепые инвестиции в технологии. NOCKO предоставляет услуги виртуального ИТ-директора (vCIO), беспристрастные переговоры с вендорами и комплексные ИТ-аудиты для развивающихся предприятий ОАЭ.',
    serviceType: 'ИТ Консалтинг',
  },
  firstSection: [
    {
      title: 'Комплексные ИТ-аудиты и проверки RAG',
      text: 'Многие организации в Дубае работают со скрытым техническим долгом. Мы проводим комплексный аудит всей вашей инфраструктуры — от физической проводки в офисе до использования облачных лицензий. Мы предоставляем отчет Red/Amber/Green (RAG), выделяющий критические узкие места и уязвимости безопасности.',
      link: '/ru/articles/it-consulting-assessment',
      linkText: 'Узнать об ИТ-аудитах',
      image: '/images/services/it-consulting-strategy-v2.png',
      imageAlt: 'Услуги по ИТ-стратегии и планированию',
    },
    {
      title: 'Беспристрастные переговоры с поставщиками',
      text: 'Поставщики корпоративного программного обеспечения часто привязывают бизнес ОАЭ к жестким долгосрочным контрактам. Как ваш внештатный vCIO, NOCKO выступает на вашей стороне во время тендеров. Мы изучаем SLA и полностью устраняем риски зависимости от поставщика.',
      link: '/ru/articles/it-consulting-strategy',
      linkText: 'Изучить управление поставщиками',
    },
    {
      title: 'Многолетние ИТ-дорожные карты',
      text: 'Цифровая трансформация — это больше, чем покупка ПО. Мы создаем математически смоделированные ИТ-карты на 3-5 лет, строго согласованные с целями по доходам вашего совета директоров.',
      link: '/ru/articles/it-consulting-roadmap',
      linkText: 'Посмотреть примеры',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Отчеты о состоянии инфраструктуры Red/Amber/Green (RAG)',
    },
    {
      icon: 'icon2',
      title: 'Беспристрастные переговоры при проведении тендеров (RFP)',
    },
    {
      icon: 'icon3',
      title: 'Услуги внештатного vCIO для отчетности перед советом директоров',
    },
    {
      icon: 'icon4',
      title: 'Анализ затрат и выгод и моделирование окупаемости (ROI) для CAPEX',
    },
    {
      icon: 'icon5',
      title: 'Разработка планов непрерывности бизнеса (BCDR)',
    },
  ],
  secondSection: [
    {
      title: 'Технологическая интеграция при слияниях (M&A)',
      text: 'Слияния и поглощения (M&A) часто терпят неудачу из-за несовместимых ИТ-систем. При приобретении новой фирмы в ОАЭ наши архитекторы оценивают технический долг целевой компании и разрабатывают план интеграции.',
      link: '/ru/articles/it-consulting-infrastructure-design',
      linkText: 'Техническая интеграция M&A',
      image: '/images/services/it-consulting-architecture-v2.png',
      imageAlt: 'Проектирование и архитектура ИТ-инфраструктуры',
    },
    {
      title: 'Оптимизация лицензирования Microsoft 365',
      text: 'Мы часто обнаруживаем, что предприятия Дубая переплачивают до 40% за лицензии Microsoft 365 и Azure. Мы проводим глубокий аудит лицензирования, оптимизируя неиспользуемые лицензии.',
      link: '/ru/articles/it-consulting-roi',
      linkText: 'Оптимизировать лицензии',
    },
    {
      title: 'Непрерывность бизнеса (BCDR)',
      text: 'Полагаться на резервную копию локального диска — это не план аварийного восстановления. Мы определяем точные метрики RTO и RPO с вашими руководителями и проектируем облачное аварийное переключение (DRaaS).',
      link: '/ru/articles/it-consulting-digital-transformation',
      linkText: 'Обеспечить непрерывность бизнеса',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Опытные технологические <br> архитекторы в GCC',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Независимые советы, <br> не привязанные к вендорам',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Отчетность KPI <br> для руководителей',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Мгновенный ROI за счет <br> сокращения лицензий',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Прямое общение <br> на уровне руководства',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'JLT', 'Silicon Oasis', 'Media City'] },
      { name: 'Абу-Даби', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Шарджа', hubs: ['SAIF Zone'] },
      { name: 'Аджман', hubs: [] },
      { name: 'Фуджейра', hubs: [] },
      { name: 'Рас-эль-Хайма', hubs: [] },
      { name: 'Умм-эль-Кайвайн', hubs: [] }
    ],
    terms: ['Virtual CIO Дубай', 'ИТ Аудит ОАЭ', 'Консалтинг по интеграции ERP', 'Аудит лицензий Microsoft 365'],
  },
  cta: {
    title: 'Хватит тратить ИТ-бюджет впустую.',
    text: "Запишитесь на ознакомительный звонок с главным архитектором NOCKO для обсуждения вашей дорожной карты цифровой трансформации.",
    ctaText: 'Заказать звонок',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Миграция в облако',
      url: '/ru/services/cloud',
      description: 'Выполнение дорожной карты с нашими облачными архитекторами.',
    },
    {
      title: 'Управляемые ИТ-услуги',
      url: '/ru/services/managed-it',
      description: 'Комплексное управление ИТ-инфраструктурой.',
    },
    {
      title: 'Кибербезопасность',
      url: '/ru/services/cybersecurity',
      description: 'Архитектура Zero Trust и соответствие требованиям NESA.',
    },
  ],
};

export default function ITConsultingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={itConsultingContent.hero.title}
          subtitle={itConsultingContent.hero.subtitle}
          description={itConsultingContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itConsultingContent.firstSection} />
        <ServiceFeatures features={itConsultingContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itConsultingContent.secondSection} />
        <ServiceBenefits benefits={itConsultingContent.benefits} />
        
        <ServiceGeo 
          title="Стратегическое ИТ-руководство по всем Эмиратам"
          description="От финансовых стратегий DIFC до цифровых трансформаций в Business Bay, NOCKO является надежным ИТ-консультантом для бизнеса в ОАЭ."
          emirates={itConsultingContent.geoContent.emirates}
          terms={itConsultingContent.geoContent.terms}
          footerNote="Экспертные Стратегические Советы"
        />

        <ServiceCTA
          title={itConsultingContent.cta.title}
          text={itConsultingContent.cta.text}
          ctaText={itConsultingContent.cta.ctaText}
          ctaUrl={itConsultingContent.cta.ctaUrl}
        />
        <RelatedServices services={itConsultingContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}
