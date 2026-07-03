import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT-решения для ритейла и гостеприимства | NOCKO ОАЭ',
  description:
    'Надежные IT-решения для предприятий розничной торговли и гостеприимства в ОАЭ. POS-системы, гостевой Wi-Fi, сетевая инфраструктура, цифровые вывески и круглосуточная поддержка для магазинов, ресторанов и отелей.',
  keywords:
    'IT-решения для ритейла ОАЭ, IT-услуги для гостеприимства Дубай, POS-системы ОАЭ, IT-инфраструктура для ресторанов, сетевая инфраструктура для отелей',
  openGraph: {
    title: 'IT-решения для ритейла и гостеприимства | NOCKO ОАЭ',
    description:
      'Надежные IT-решения для предприятий розничной торговли и гостеприимства в ОАЭ. POS-системы, гостевой Wi-Fi и круглосуточная поддержка.',
    type: 'article',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/industries/retail-hospitality',
    languages: {
      'en-AE': '/industries/retail-hospitality',
      'ru-RU': '/ru/industries/retail-hospitality',
    },
  },
};

const industryData = {
  hero: {
    title: 'IT-решения для ритейла и гостеприимства',
    subtitle: 'Надежные технологии для магазинов, ресторанов, отелей и развлекательных заведений',
    description: '',
  },
  intro:
    'Предприятия розничной торговли и гостеприимства зависят от надежных IT-систем в вопросах обслуживания клиентов, операционной деятельности и выручки. Наши решения обеспечивают POS-инфраструктуру, гостевой Wi-Fi, цифровые вывески и круглосуточную поддержку, чтобы ваш бизнес работал бесперебойно.',
  blocks: [
    {
      title: 'POS-системы и платежные решения',
      text: '<p>POS-системы (точки продаж) являются основой работы предприятий розничной торговли и гостеприимства. Мы проектируем и внедряем надежную сетевую инфраструктуру для поддержки POS-терминалов, платежных шлюзов, кухонных дисплеев и систем управления запасами.</p><p>Наши сети обеспечивают быструю обработку транзакций, минимальные простои и безопасное проведение платежей во всех точках.</p>',
      list: [
        '<li>Проектирование сетевой инфраструктуры для POS</li>',
        '<li>Резервированное подключение для платежных терминалов</li>',
        '<li>Поддержка проводных и беспроводных POS</li>',
        '<li>Интеграция платежных шлюзов</li>',
        '<li>Подключение кухонных дисплеев (KDS)</li>',
        '<li>Интеграция систем управления запасами и заказами</li>',
      ],
    },
    {
      title: 'Гостевой Wi-Fi и цифровой опыт',
      text: '<p>Клиенты ожидают быстрый и надежный Wi-Fi в магазинах, ресторанах и отелях. Мы развертываем безопасные сети гостевого Wi-Fi с captive-порталами, управлением скоростью и фильтрацией контента, чтобы улучшить клиентский опыт и защитить корпоративную сеть.</p><p>Цифровые вывески, программы лояльности и мобильные заказы легко интегрируются с нашими сетевыми решениями, создавая привлекательный клиентский опыт.</p>',
      list: [
        '<li>Высокопроизводительные сети гостевого Wi-Fi</li>',
        '<li>Брендированный captive-портал с входом через соцсети</li>',
        '<li>Управление пропускной способностью и политики справедливого использования</li>',
        '<li>Сегментация сети (гостевая и корпоративная)</li>',
        '<li>Подключение цифровых вывесок и дисплеев</li>',
        '<li>Поддержка мобильных заказов и приложений лояльности</li>',
      ],
    },
    {
      title: 'Управление сетью филиалов',
      text: '<p>Розничным сетям, ресторанным группам и гостиничным операторам необходимо централизованное управление множеством локаций. Мы стандартизируем сетевую инфраструктуру, внедряем удаленный мониторинг и обеспечиваем единую поддержку для всех ваших объектов.</p><p>Облачные платформы управления обеспечивают контроль в реальном времени, ускоренное устранение неполадок и стабильное качество обслуживания по всей вашей сети.</p>',
      list: [
        '<li>Стандартизированное проектирование сети для всех локаций</li>',
        '<li>Централизованное управление и мониторинг сети</li>',
        '<li>Удаленная диагностика и поддержка</li>',
        '<li>Автоматические оповещения о сбоях систем</li>',
        '<li>Масштабируемая инфраструктура для расширения бизнеса</li>',
        '<li>Круглосуточная поддержка с быстрым временем реагирования</li>',
      ],
    },
  ],
};

export default function RetailHospitalityPage() {
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
          { label: 'Ритейл и гостеприимство' },
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
