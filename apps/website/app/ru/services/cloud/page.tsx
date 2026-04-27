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
import ServiceFAQ from '@/components/services/ServiceFAQ';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Облачные Услуги в Дубае | Миграция и Управление | NOCKO',
  description:
    'Профессиональные облачные услуги в Дубае и ОАЭ. Миграция в облако, настройка инфраструктуры, управление данными и решения для резервного копирования для бизнеса.',
  keywords:
    'облачные услуги Дубай, миграция в облако ОАЭ, облачный хостинг Дубай, управление данными ОАЭ, облачное резервное копирование Дубай, управляемые облачные услуги Дубай, облачная инфраструктура ОАЭ',
  openGraph: {
    title: 'Облачные Услуги в Дубае | Миграция и Управление | NOCKO',
    description:
      'Надежные и масштабируемые облачные решения для бизнеса в Дубае и по всему ОАЭ. Экспертная миграция в облако и управление инфраструктурой.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/cloud',
  },
};

const cloudContent = {
  hero: {
    title: 'Корпоративные Облачные Услуги и Миграция в Дубае',
    subtitle: 'Оптимизированные решения AWS, Azure и частные облака для бизнеса в ОАЭ',
    description:
      'Безопасно сократите свои капитальные ИТ-затраты. Мы предоставляем экспертную облачную архитектуру, миграцию без простоев и хостинг с соблюдением требований локализации данных, адаптированный для предприятий в Дубае, Абу-Даби и по всему региону GCC.',
    serviceType: 'Облачные и ИТ Сервисы',
  },
  firstSection: [
    {
      title: 'Миграция в облако без простоев',
      text: "Плавно эвакуируйте свою устаревшую серверную. Наши сертифицированные облачные архитекторы тщательно планируют и выполняют миграции в AWS Middle East (ОАЭ) и Azure UAE Central. Используя безопасную параллельную валидацию, мы гарантируем отсутствие потери данных и абсолютно минимальное время простоя.",
      link: '/ru/articles/cloud-migration',
      linkText: 'Руководство по интеграции',
      image: '/images/services/cloud-migration-v2.png',
      imageAlt: 'Услуги по миграции в облако в ОАЭ',
    },
    {
      title: 'Настройка инфраструктуры и Cloud FinOps',
      text: 'Переход в облако должен снижать затраты. Мы проектируем строго оптимизированные среды с использованием автоматического масштабирования и зарезервированных инстансов для существенного снижения ваших ежемесячных операционных расходов.',
      link: '/ru/articles/cloud-cost-optimization',
      linkText: 'Узнать больше о FinOps',
    },
    {
      title: 'Резервное копирование и DRaaS',
      text: 'Готова ли ваша компания к масштабной атаке программ-вымогателей? Мы внедряем надежное аварийное восстановление как услугу (DRaaS). Внедряя неизменяемые резервные копии и строгое шифрование AES-256, мы гарантируем, что ваши данные переживут любую катастрофу.',
      link: '/ru/articles/cloud-data-management',
      linkText: 'Стратегии защиты данных',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Рабочие процессы миграции без простоев в AWS и Azure',
    },
    {
      icon: 'icon2',
      title: 'Гарантированное соблюдение требований TRA ОАЭ по локализации данных',
    },
    {
      icon: 'icon3',
      title: 'Проактивный Cloud FinOps для максимального снижения затрат',
    },
    {
      icon: 'icon4',
      title: 'Шифрование военного уровня и автоматизированное аварийное восстановление',
    },
    {
      icon: 'icon5',
      title: 'Круглосуточный локальный мониторинг SOC из нашей штаб-квартиры в Дубае',
    },
  ],
  secondSection: [
    {
      title: 'Гибридное облако: Лучшее из двух миров',
      text: 'Не все данные должны находиться на публичном сервере. Мы проектируем сложные архитектуры гибридного облака, которые хранят ваши высокочувствительные базы данных на безопасных локальных частных серверах в дата-центрах ОАЭ (таких как Khazna или Equinix DX1).',
      link: '/ru/articles/cloud-multi-hybrid',
      linkText: 'Изучить Гибридные Облака',
      image: '/images/services/cloud-hybrid-v2.png',
      imageAlt: 'Гибридные облачные решения в Дубае',
    },
    {
      title: 'Облачная безопасность и соответствие NESA',
      text: 'В облаке безопасность опирается на модель разделенной ответственности. Мы берем на себя полное управление IAM, развертывая протоколы Zero-Trust и защищая конечные точки, обеспечивая соответствие архитектуры строгим стандартам NESA.',
      link: '/ru/articles/cloud-security-compliance',
      linkText: 'Обеспечить Безопасность Облака',
    },
    {
      title: 'Интеграция Microsoft 365 и Google Workspace',
      text: "Модернизируйте вашу удаленную работу. Мы проводим полные корпоративные миграции с устаревших локальных серверов Exchange напрямую в Microsoft 365 или Google Workspace.",
      link: '/ru/articles/cloud-infrastructure',
      linkText: 'Модернизируйте вашу работу',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Сертифицированные облачные архитекторы в Дубае',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Миграция без простоев',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Соответствие данным TRA / NESA',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Агрессивная оптимизация затрат',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Прозрачные метрики в дашборде',
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
    terms: ['Миграция AWS Дубай', 'Интегратор Azure ОАЭ', 'Cloud FinOps Middle East', 'Хостинг частного дата-центра'],
  },
  cta: {
    title: 'Готовы Эвакуировать Свою Серверную?',
    text: "Свяжитесь с нашими старшими облачными архитекторами для бесплатного анализа совокупной стоимости владения (TCO).",
    ctaText: 'Запросить Анализ TCO',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Кибербезопасность',
      url: '/ru/services/cybersecurity',
      description: 'Архитектура Zero Trust и защита облачных конечных точек.',
    },
    {
      title: 'Стратегический ИТ Консалтинг',
      url: '/ru/services/it-consulting',
      description: 'Выбор вендоров и дорожные карты цифровой трансформации.',
    },
    {
      title: 'Управляемые ИТ Услуги',
      url: '/ru/services/managed-it',
      description: 'Круглосуточный NOC мониторинг вашей новой облачной среды.',
    },
  ],
  faq: {
    title: 'Часто Задаваемые Вопросы о Миграции в Облако',
    items: [
      {
        question: 'Соответствуют ли AWS/Azure законам ОАЭ о локализации данных?',
        answer:
          'Да. Как AWS, так и Microsoft Azure теперь имеют выделенные локальные регионы в ОАЭ (AWS Middle East Region, Azure UAE Central).',
      },
      {
        question: 'Сколько времени занимает корпоративная миграция в облако в Дубае?',
        answer:
          'В зависимости от сложности проекта, стандартные корпоративные миграции занимают от 4 до 12 недель. Наша команда разворачивает параллельные среды для обеспечения нулевого простоя.',
      },
      {
        question: 'Можете ли вы снизить наши текущие счета за AWS или Azure?',
        answer:
          'Абсолютно. Используя стратегии Cloud FinOps, мы обычно сокращаем ежемесячные счета наших клиентов за вычисления на 30–50%.',
      },
      {
        question: 'Что такое гибридное облако и нужно ли оно нам?',
        answer:
          'Гибридное облако объединяет ваши физические локальные серверы с публичными облаками, такими как AWS. Это критически важно для банков или подрядчиков, которым необходимо хранить данные локально.',
      },
    ],
  },
};

export default function CloudPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Услуги', url: '/ru/services' },
            { name: 'Облачные Решения' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={cloudContent.hero.title}
          subtitle={cloudContent.hero.subtitle}
          description={cloudContent.hero.description}
        />

        <ServiceContentEnhanced blocks={cloudContent.firstSection} />
        <ServiceFeatures features={cloudContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={cloudContent.secondSection} />
        <ServiceBenefits benefits={cloudContent.benefits} />
        
        <ServiceGeo 
          title="Облачная инфраструктура для бизнеса в ОАЭ"
          description="От миграции в облако в DIFC до гибридных решений в Абу-Даби, NOCKO способствует цифровой трансформации предприятий в ОАЭ."
          emirates={cloudContent.geoContent.emirates}
          terms={cloudContent.geoContent.terms}
          footerNote="Масштабируйтесь с NOCKO"
        />

        <ServiceFAQ
          title={cloudContent.faq.title}
          items={cloudContent.faq.items}
        />
        <ServiceCTA
          title={cloudContent.cta.title}
          text={cloudContent.cta.text}
          ctaText={cloudContent.cta.ctaText}
          ctaUrl={cloudContent.cta.ctaUrl}
        />
        <RelatedServices services={cloudContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}
