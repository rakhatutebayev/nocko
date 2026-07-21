import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ServiceGeo from '@/components/services/ServiceGeo';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Контракты IT AMC в Дубае | Абонентское обслуживание | NOCKO',
  description:
    'Надежные контракты на годовое ИТ-обслуживание (AMC) в Дубае и ОАЭ. Фиксированные затраты на обслуживание серверов и круглосуточную поддержку. Экспертный провайдер для бизнеса в DIFC и Business Bay.',
  keywords:
    'IT AMC Дубай, годовой контракт на обслуживание ОАЭ, контракт на ИТ-обслуживание Дубай, услуги AMC ОАЭ, поддержка ИТ Дубай, лучшие IT AMC Дубай',
  openGraph: {
    title: 'Контракты IT AMC в Дубае | Абонентское обслуживание | NOCKO',
    description: 'Предсказуемое ИТ-обслуживание с годовым контрактом (AMC) в Дубае и ОАЭ.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/ru/services/it-amc' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Корпоративные Контракты IT AMC в Дубае',
    subtitle: 'Строгие SLA, предсказуемые бюджеты и высокая доступность',
    description:
      'Избавьтесь от простоев ИТ с помощью надежного годового контракта на обслуживание (AMC). Мы обеспечиваем круглосуточный проактивный мониторинг, гарантированное время прибытия по Дубаю в течение 2 часов и полное управление жизненным циклом оборудования.',
  },
  firstSection: [
    {
      title: 'Предсказуемые CAPEX через контракты с фиксированной стоимостью',
      text: 'Традиционная модель «сломалось-починим» разрушает финансовую предсказуемость. Годовой контракт (AMC) превращает ваши ИТ из нестабильного центра затрат в фиксированную, предсказуемую услугу. Один комплексный контракт покрывает всю поддержку уровней L1-L3.',
      link: '/ru/articles/it-amc-guide',
      linkText: 'Понять структуру AMC',
      image: '/images/services/it-amc-costs.png',
      imageAlt: 'Услуги годового ИТ-обслуживания AMC',
    },
    {
      title: 'Гарантированный SLA (2 часа) в деловых центрах Дубая',
      text: 'Простой во время торговых часов в ОАЭ катастрофичен. Стандартные контракты AMC обещают «быстрый ответ», но мы гарантируем его математически. В основных деловых кластерах Дубая (DIFC, DMCC, Business Bay) мы гарантируем 15-минутный удаленный ответ и максимальное время прибытия 2 часа.',
      link: '/ru/articles/it-amc-guide',
      linkText: 'Просмотреть наши матрицы SLA',
    },
    {
      title: 'Жизненный цикл оборудования и гарантийные возвраты (RMA)',
      text: 'Мы полностью снимаем бремя управления устаревающим оборудованием. Если вентилятор сервера Dell выйдет из строя, ваши сотрудники не должны тратить часы на общение с производителями. Наш AMC включает полное управление возвратами (RMA).',
      link: '/ru/articles/it-amc-hardware-lifecycle',
      linkText: 'Возможности управления оборудованием',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Строго определенные SLA: 15 минут удаленно, 2 часа с выездом' },
    { icon: 'icon2', title: 'Фиксированные счета, исключающие непредсказуемые расходы' },
    { icon: 'icon3', title: 'Полное управление жизненным циклом оборудования (от закупки до RMA)' },
    { icon: 'icon4', title: 'Плановое профилактическое обслуживание стоек (охлаждение/пыль)' },
    { icon: 'icon5', title: 'Неограниченный удаленный Helpdesk уровней L1/L2' },
  ],
  secondSection: [
    {
      title: 'Проактивное обслуживание против реактивного ремонта',
      text: 'Зачем ждать, пока сервер выйдет из строя? По нашему контракту AMC вся ваша инфраструктура оснащается агентами удаленного мониторинга и управления (RMM). Если диск сервера заполняется до 98% в 3 часа ночи в воскресенье, наши инженеры получают уведомление и расширяют том еще до открытия офиса.',
      link: '/ru/articles/it-amc-guide',
      linkText: 'Узнать о проактивном RMM',
      image: '/images/services/it-amc-maintenance.png',
      imageAlt: 'Регулярные визиты для обслуживания ИТ и проверки систем',
    },
    {
      title: 'Автоматизированный процесс установки патчей',
      text: 'Подавляющее большинство проникновений программ-вымогателей на Ближнем Востоке используют уязвимости в непропатченном ПО. Мы внедряем строгое автоматическое обновление. Все обновления тестируются в нашей песочнице и развертываются в выходные дни.',
      link: '/ru/articles/it-amc-guide',
      linkText: 'Наш SLA по обновлениям',
    },
    {
      title: 'Включен стратегический консалтинг vCIO',
      text: 'AMC должен задавать направление, а не только предоставлять технические руки. Повышение уровня вашего AMC открывает доступ к услугам виртуального ИТ-директора (vCIO). Мы проводим ежеквартальные архитектурные проверки для соответствия инфраструктуры вашим бизнес-целям.',
      link: '/ru/articles/it-amc-guide',
      linkText: 'Изучить преимущества vCIO',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Инженерный центр в Дубае' },
    { icon: '/images/benefits/time.png', text: 'Юридически обязывающие SLA восстановления' },
    { icon: '/images/benefits/team.png', text: 'Сертифицированные специалисты Microsoft' },
    { icon: '/images/benefits/pricing.png', text: 'Отсутствие скрытых затрат (Комплексное покрытие)' },
    { icon: '/images/benefits/communication.png', text: 'Выделенное управление аккаунтом' },
  ],
  resources: [],
  cta: {
    title: 'Перестаньте платить за простои.',
    text: 'Свяжитесь с нашей коммерческой командой сегодня для получения прозрачного коммерческого предложения на IT AMC, адаптированного для вашего офиса.',
    ctaText: 'Запросить предложение AMC',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Удаленная поддержка (Helpdesk)', url: '/ru/services/it-support', description: 'Мгновенное решение заявок для пользователей.' },
    { title: 'Монтаж СКС и Сетей', url: '/ru/services/structured-cabling', description: 'Физическая архитектура сети и сертификация Fluke.' },
    { title: 'Кибербезопасность', url: '/ru/services/cybersecurity', description: 'Архитектура Zero Trust и защита от шифровальщиков.' },
  ],
};

const geoData = {
  emirates: [
    { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'DMCC (JLT)', 'DSO', 'JAFZA'] },
    { name: 'Абу-Даби', hubs: ['ADGM', 'Mussafah Industrial', 'KIZAD'] },
    { name: 'Шарджа', hubs: ['SAIF Zone', 'Hamriyah Free Zone'] },
  ],
  terms: ['Контракты AMC Дубай', 'ИТ-поддержка по SLA', 'Управление RMA оборудования', 'Обслуживание корпоративных дата-центров'],
};

export default async function ItAmcPage() {
  const service = await getService('it-amc', 'ru');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://nocko.com/ru' },
            { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://nocko.com/ru/services' },
            { '@type': 'ListItem', position: 3, name: 'IT AMC', item: 'https://nocko.com/ru/services/it-amc' },
          ],
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Услуги', url: '/ru/services' }, { name: 'IT AMC' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
        geoSection={
          <ServiceGeo
            title="Ведущий провайдер IT AMC в ОАЭ"
            description="От финансовых офисов DIFC до предприятий в Business Bay, наши контракты на ИТ-обслуживание обеспечивают надежную поддержку в Дубае, Абу-Даби и Северных Эмиратах."
            emirates={geoData.emirates}
            terms={geoData.terms}
            footerNote="Корпоративное ИТ Превосходство"
          />
        }
      />
      <Footer />
    </>
  );
}
