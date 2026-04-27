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
  title: 'Кибербезопасность в Дубае | Защита Данных ОАЭ | NOCKO',
  description:
    'Передовые услуги кибербезопасности в Дубае и ОАЭ. Управление межсетевыми экранами, обнаружение угроз, шифрование данных и соответствие стандартам безопасности для бизнеса.',
  keywords:
    'кибербезопасность Дубай, защита данных ОАЭ, услуги ИТ-безопасности Дубай, сетевая безопасность ОАЭ, соответствие безопасности Дубай, обнаружение угроз ОАЭ',
  openGraph: {
    title: 'Кибербезопасность в Дубае | Защита Данных ОАЭ | NOCKO',
    description:
      'Корпоративная кибербезопасность и защита данных для бизнеса в Дубае и по всему ОАЭ. Передовое обнаружение угроз и соответствие стандартам.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/cybersecurity',
  },
};

const cybersecurityContent = {
  hero: {
    title: 'Корпоративная Кибербезопасность и SOC в Дубае',
    subtitle: 'Архитектура Zero-Trust, активный поиск угроз и соответствие NESA',
    description:
      'Защитите свой корпоративный периметр. Мы предоставляем круглосуточный мониторинг SOC, управление межсетевыми экранами нового поколения и передовую защиту конечных точек, адаптированную специально для предприятий в ОАЭ.',
    serviceType: 'Кибербезопасность',
  },
  firstSection: [
    {
      title: 'Архитектура Zero-Trust и IAM',
      text: 'Исключите неявное доверие из своей сети. Мы разрабатываем бескомпромиссные решения для управления идентификацией и доступом (IAM), где каждый пользователь непрерывно аутентифицируется с использованием контекстной многофакторной аутентификации (MFA).',
      link: '/ru/articles/cybersecurity-data-protection',
      linkText: 'Изучить политики Zero-Trust',
      image: '/images/services/cybersecurity-protection.png',
      imageAlt: 'Интеграция Архитектуры Zero-Trust',
    },
    {
      title: 'Круглосуточный Центр управления безопасностью (SOC) 24/7',
      text: 'Автоматизированные триггеры вредоносного ПО не ждут рабочих часов. Наш выделенный SOC постоянно анализирует логи Microsoft 365, телеметрию брандмауэра и поведение конечных точек. Используя SIEM с ИИ, мы физически блокируем атаки программ-вымогателей в реальном времени.',
      link: '/ru/articles/cybersecurity-monitoring',
      linkText: 'Узнать об активном поиске угроз',
    },
    {
      title: 'Управление межсетевыми экранами (NGFW)',
      text: 'Устаревшие маршрутизаторы не могут остановить современные атаки прикладного уровня. Мы внедряем и управляем NGFW (Fortinet, Palo Alto, Cisco Meraki) с использованием глубокой инспекции пакетов (DPI).',
      link: '/ru/articles/cybersecurity-firewall',
      linkText: 'Обновите ваш периметр',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Архитектура Zero-Trust и строгая контекстная MFA',
    },
    {
      icon: 'icon2',
      title: 'Круглосуточный локализованный мониторинг событий SOC в Дубае',
    },
    {
      icon: 'icon3',
      title: 'Обнаружение и реагирование на конечных точках (EDR / XDR)',
    },
    {
      icon: 'icon4',
      title: 'Строгое соблюдение стандартов NESA и DESC в ОАЭ',
    },
    {
      icon: 'icon5',
      title: 'Ежеквартальное тестирование на проникновение и аудит уязвимостей',
    },
  ],
  secondSection: [
    {
      title: 'Интеграция соответствия NESA и DESC',
      text: 'Для государственных подрядчиков ОАЭ, поставщиков медицинских услуг и финансовых учреждений DIFC соблюдение нормативных требований не подлежит обсуждению. NOCKO приводит вашу ИТ-инфраструктуру в соответствие со стандартами SIA/NESA.',
      link: '/ru/articles/cybersecurity-compliance',
      linkText: 'Обеспечить соответствие',
      image: '/images/services/cybersecurity-firewall.png',
      imageAlt: 'Соответствие безопасности и аудит NESA',
    },
    {
      title: 'Защита от программ-вымогателей (EDR)',
      text: 'Стандартный антивирус математически устарел против бесфайловых вредоносных программ нулевого дня. Мы развертываем поведенческие агенты EDR (такие как CrowdStrike или SentinelOne) по всему вашему парку устройств.',
      link: '/ru/articles/cybersecurity-protection',
      linkText: 'Победить синдикаты вымогателей',
    },
    {
      title: 'Реагирование на инциденты и цифровая криминалистика',
      text: 'Когда происходит взлом, время — ваш самый ценный актив. Наша элитная команда реагирования на инциденты действует как цифровые парамедики. Мы следуем строгим протоколам для изоляции скомпрометированного оборудования и устранения угрозы.',
      link: '/ru/articles/cybersecurity-incident-response',
      linkText: 'Создать план реагирования',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Сертифицированные этичные <br> хакеры и аналитики',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Сортировка угроз <br> менее чем за 15 минут',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Обязательная стандартизация <br> NESA в ОАЭ',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Проактивная безопасность <br> с фиксированной стоимостью',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Панели мониторинга рисков <br> для руководителей',
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
    terms: ['SOC Дубай', 'Соответствие NESA ОАЭ', 'Защита от программ-вымогателей Middle East', 'Zero Trust IAM'],
  },
  cta: {
    title: 'Скомпрометирована ли ваша сеть прямо сейчас?',
    text: "Свяжитесь с нашими аналитиками по безопасности в ОАЭ для немедленного тестирования на проникновение и аудита инфраструктуры.",
    ctaText: 'Запросить аудит безопасности',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Стратегический ИТ Консалтинг',
      url: '/ru/services/it-consulting',
      description: 'Аудит вашей текущей архитектуры и лицензирования.',
    },
    {
      title: 'Управляемые ИТ Услуги',
      url: '/ru/services/managed-it',
      description: 'Комплексное круглосуточное управление ИТ и Helpdesk.',
    },
    {
      title: 'СКС и Сети',
      url: '/ru/services/structured-cabling',
      description: 'Безопасность физического уровня и системы контроля доступа.',
    },
  ],
};

export default function CybersecurityPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={cybersecurityContent.hero.title}
          subtitle={cybersecurityContent.hero.subtitle}
          description={cybersecurityContent.hero.description}
        />

        <ServiceContentEnhanced blocks={cybersecurityContent.firstSection} />
        <ServiceFeatures features={cybersecurityContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={cybersecurityContent.secondSection} />
        <ServiceBenefits benefits={cybersecurityContent.benefits} />
        
        <ServiceGeo 
          title="Обеспечение безопасности бизнеса по всему ОАЭ"
          description="От финансов с высокими ставками в DIFC до транснациональных штаб-квартир в Business Bay, NOCKO защищает цифровые активы корпоративного сектора ОАЭ."
          emirates={cybersecurityContent.geoContent.emirates}
          terms={cybersecurityContent.geoContent.terms}
          footerNote="Безопасность Корпоративного Уровня"
        />

        <ServiceCTA
          title={cybersecurityContent.cta.title}
          text={cybersecurityContent.cta.text}
          ctaText={cybersecurityContent.cta.ctaText}
          ctaUrl={cybersecurityContent.cta.ctaUrl}
        />
        <RelatedServices services={cybersecurityContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}
