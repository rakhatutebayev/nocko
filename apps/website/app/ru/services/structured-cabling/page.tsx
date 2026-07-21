import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ServiceGeo from '@/components/services/ServiceGeo';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'СКС и Монтаж Сетей в Дубае | Инфраструктура ОАЭ',
  description:
    'Профессиональный монтаж структурированных кабельных систем (СКС) в Дубае, ОАЭ. Установка, тестирование и сертификация сетей Cat6, Cat6A и оптоволокна. Надежная сетевая инфраструктура для бизнеса.',
  keywords:
    'монтаж СКС Дубай, прокладка кабеля ОАЭ, установка Cat6 Дубай, оптоволоконный кабель ОАЭ, сетевая инфраструктура Дубай, монтаж сетей Дубай',
  openGraph: {
    title: 'СКС и Монтаж Сетей в Дубае | Инфраструктура ОАЭ',
    description: 'Профессиональные решения по СКС и сетевой инфраструктуре в Дубае и ОАЭ.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/structured-cabling',
    languages: {
      'en-AE': '/services/structured-cabling',
      'ru-RU': '/ru/services/structured-cabling',
      'x-default': '/services/structured-cabling',
    },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'СКС и Монтаж Сетей в Дубае | Инфраструктура ОАЭ',
    subtitle: 'Профессиональная прокладка Cat6, Cat6A и оптоволокна для бизнеса',
    description:
      'Получите надежные решения по структурированным кабельным системам (СКС) и сетевой инфраструктуре для вашего офиса в Дубае и по всему ОАЭ. Мы обеспечиваем сертифицированный монтаж и тестирование.',
  },
  firstSection: [
    {
      title: 'Сертифицированная инженерия Cat6A и Оптоволокна',
      text: 'Физический кабель — это абсолютный фундамент вашей корпоративной сети. Наши сертифицированные инженеры проектируют и прокладывают оптоволоконную инфраструктуру Cat6, Cat6A и OM3/OM4.',
      link: '/ru/articles/structured-cabling-fiber-optic',
      linkText: 'Наше руководство по инфраструктуре',
      image: '/images/services/cabling-deploy.png',
      imageAlt: 'Монтаж кабельных систем в ОАЭ',
    },
    {
      title: 'Тестирование Fluke и 25-летняя гарантия',
      text: 'Мы не гадаем о целостности кабеля. Каждый разъем тщательно тестируется с помощью Fluke DSX CableAnalyzers. Эта эмпирическая проверка гарантирует, что сеть выдержит пропускную способность 10 Гбит/с.',
      link: '/ru/articles/structured-cabling-fluke-testing',
      linkText: 'Узнать о сертификации Fluke',
    },
    {
      title: 'Модернизация серверных комнат',
      text: 'Унаследовали дезорганизованную серверную в новом офисе? Мы специализируемся на модернизации стоек и очистке «спагетти» из проводов без простоя сети.',
      link: '/ru/articles/structured-cabling-retrofitting',
      linkText: 'Изучить модернизацию серверов',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Сертифицированное тестирование и документация Fluke Networks' },
    { icon: 'icon2', title: 'Монтаж Cat6, Cat6A и одномодового/многомодового оптоволокна' },
    { icon: 'icon3', title: 'Модернизация серверных стоек без простоя бизнеса' },
    { icon: 'icon4', title: 'Прогнозное тепловое картирование Wi-Fi 6/7 (Ekahau)' },
    { icon: 'icon5', title: '25-летняя гарантия от производителя на инфраструктуру' },
  ],
  secondSection: [
    {
      title: 'От логистических складов до корпоративных офисов',
      text: 'Крупный логистический центр в JAFZA требует совершенно иного физического уровня, чем офис со стеклянными стенами в DIFC. Мы проектируем индивидуальные среды: от бронированного оптоволокна для промышленных цехов до скрытой прокладки для конференц-залов.',
      link: '/ru/articles/structured-cabling-industrial',
      linkText: 'Промышленная и корпоративная СКС',
      image: '/images/services/cabling-performance.png',
      imageAlt: 'Промышленный монтаж оптоволокна ОАЭ',
    },
    {
      title: 'Тепловое картирование корпоративного Wi-Fi',
      text: 'Хватит гадать, где разместить точки доступа. Используя ПО Ekahau, мы проводим прогнозное тепловое картирование радиочастот вашего плана этажа.',
      link: '/ru/articles/structured-cabling-wifi-heatmapping',
      linkText: 'Изучить решения Wi-Fi',
    },
    {
      title: 'Контроль доступа и физическая безопасность',
      text: 'Структурированная кабельная система (СКС) выходит за рамки компьютеров. Мы развертываем единый физический уровень, прокладывая PoE инфраструктуру для IP-камер видеонаблюдения и биометрических систем.',
      link: '/ru/articles/structured-cabling-physical-security',
      linkText: 'Защитите физический периметр',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Сертифицированное тестирование Fluke' },
    { icon: '/images/benefits/time.png', text: 'Очистка стоек без простоя' },
    { icon: '/images/benefits/team.png', text: 'Сварка оптоволокна' },
    { icon: '/images/benefits/pricing.png', text: '25-летняя гарантия на оборудование' },
    { icon: '/images/benefits/communication.png', text: 'Исчерпывающая документация' },
  ],
  resources: [
    {
      type: 'Кейс',
      title: 'Сегментация сети и FortiGate для группы в Дубае',
      description: 'Как мы перестроили плоскую сеть в сегментированные VLAN с FortiGate на периметре и ядром Cisco — изолировав POS, гостевой и офисный трафик.',
      url: '/ru/case-studies/network-segmentation',
      ctaText: 'Читать кейс',
    },
  ],
  cta: {
    title: 'Готовы обновить сетевую инфраструктуру?',
    text: 'Свяжитесь с нами для бесплатной консультации, и мы обсудим ваши потребности в СКС.',
    ctaText: 'Получить бесплатную консультацию',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Управляемые ИТ-услуги', url: '/ru/services/managed-it', description: 'Мы можем управлять сетевыми коммутаторами вашей новой кабельной системы.' },
    { title: 'ИТ Поддержка (Helpdesk)', url: '/ru/services/it-support', description: 'Мгновенная удаленная поддержка конечных пользователей вашей сети.' },
    { title: 'Стратегический ИТ-консалтинг', url: '/ru/services/it-consulting', description: 'Комплексный переезд офиса и разработка технологической дорожной карты.' },
  ],
};

const geoData = {
  emirates: [
    { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'JAFZA', 'DSO', 'DMCC'] },
    { name: 'Абу-Даби', hubs: ['ADGM', 'Mussafah Industrial', 'KIZAD'] },
    { name: 'Шарджа', hubs: ['SAIF Zone', 'Hamriyah Free Zone'] },
    { name: 'Аджман', hubs: [] },
    { name: 'Фуджейра', hubs: [] },
    { name: 'Рас-эль-Хайма', hubs: [] },
    { name: 'Умм-эль-Кайвайн', hubs: [] },
  ],
  terms: ['Монтаж СКС Дубай', 'Сертификация Cat6A ОАЭ', 'Очистка серверных стоек Дубай', 'Ekahau Wi-Fi Heatmapping'],
};

export default async function StructuredCablingPage() {
  const service = await getService('structured-cabling', 'ru');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Structured Cabling',
          name: 'Structured Cabling Services in Dubai & UAE',
          description: 'Cat6A and fiber optic structured cabling design, installation, and Fluke-certified testing for UAE offices.',
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Услуги', url: '/ru/services' }, { name: 'СКС и Монтаж Сетей' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
        geoSection={
          <ServiceGeo
            title="Профессиональный монтаж сетей по всему ОАЭ"
            description="NOCKO предоставляет сертифицированные услуги по монтажу СКС для корпоративных офисов и дата-центров в Дубае, Абу-Даби, Шардже и всех Эмиратах."
            emirates={geoData.emirates}
            terms={geoData.terms}
            footerNote="Сертифицированная Инфраструктура"
          />
        }
      />
      <Footer />
    </>
  );
}
