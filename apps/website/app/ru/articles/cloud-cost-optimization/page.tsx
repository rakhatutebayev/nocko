import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cloud FinOps и оптимизация облачных расходов | NOCKO ОАЭ',
  description: 'NOCKO сокращает расходы на AWS и Azure для бизнеса в ОАЭ на 30–50% за счёт Reserved Instances, устранения брошенных ресурсов и внедрения FinOps-политик тегирования — без потери производительности.',
  alternates: {
    canonical: '/ru/articles/cloud-cost-optimization',
    languages: {
      'en-AE': '/articles/cloud-cost-optimization',
      'ru-RU': '/ru/articles/cloud-cost-optimization',
    },
  },
  openGraph: {
    locale: 'ru_RU',
  },
  robots: { index: false, follow: true },
};

const articleData = {
  hero: {
    title: 'Cloud FinOps и оптимизация облачных расходов',
    subtitle: 'Прекратите переплачивать за простаивающие AWS-серверы',
    description: 'Сокращение операционных затрат на вычисления на 30–50% с помощью Reserved Instances и автоматического масштабирования.',
  },
  intro: 'Главный риск перехода на Azure или AWS — «шок от счёта»: разработчики поднимают мощные серверы и забывают их выключить. Мы внедряем строгие правила Cloud FinOps: автоматически выявляем брошенные EBS-тома, оптимизируем раздутые виртуальные машины и агрессивно фиксируем скидки через 3-летние Reserved Instances.',
  blocks: [
    {
      title: 'Оптимизация размеров и устранение расточительства',
      text: '<p>Мы проводим автоматические инвентаризационные сканирования с помощью AWS Cost Explorer и Azure Advisor, выявляя инстансы с загрузкой CPU ниже 10% на протяжении более 14 дней подряд. Они переводятся на более компактные SKU или конвертируются в Spot Instances для непродуктивных рабочих нагрузок — это снижает затраты на вычисления в средах разработки на 60–70%.</p><p>Брошенные EBS-тома, неиспользуемые Elastic IP и забытые балансировщики нагрузки каталогизируются еженедельно и выводятся из эксплуатации после 5-дневного окна согласования с владельцами. В большинстве компаний ОАЭ, которые мы аудируем, такие простаивающие ресурсы составляют 15–25% ежемесячного облачного счёта.</p>',
      list: [
        'Анализ загрузки CPU и памяти по всем типам инстансов',
        'Обнаружение брошенных ресурсов: EBS-тома, Elastic IP, неиспользуемые балансировщики',
        'Перевод dev/test-окружений на Spot или Preemptible инстансы',
        'Еженедельный отчёт о потерях с указанием ответственных и рабочим процессом согласования',
      ],
    },
    {
      title: 'Стратегия Reserved Instances и Savings Plans',
      text: '<p>Тарифы On-Demand рассчитаны на эксперименты, а не на продуктивную среду. Для базовых нагрузок, работающих круглосуточно, 1- или 3-летние Reserved Instances обеспечивают скидку 40–72%. Перед рекомендацией уровня обязательств мы анализируем данные об использовании за 90 дней, чтобы избежать избыточных покупок.</p><p>AWS Savings Plans дают гибкость для контейнеризированных нагрузок, где типы инстансов меняются. Мы моделируем оба варианта и формируем рекомендации по фиксации, которые окупаются в течение 8 месяцев для компании из 50 человек с продуктивным окружением.</p>',
      list: [
        '90-дневный анализ базовых нагрузок перед любой покупкой Reserved Instances',
        'Комбинированная стратегия: RI для стабильных нагрузок, Spot для переменных пиков',
        'Активация Azure Hybrid Benefit для Windows Server и SQL-нагрузок',
        'Ежегодный пересмотр обязательств с корректировкой размеров инстансов',
      ],
    },
    {
      title: 'Управление тегами и отчётность по подразделениям',
      text: '<p>Без обязательного тегирования ресурсов финансовые команды не понимают, какое подразделение генерирует облачные расходы. Мы применяем политики тегирования через AWS Service Control Policies (SCP) и Azure Policy, блокируя создание ресурсов без тегов CostCentre, Owner, Environment и Project.</p><p>На основе этих тегов формируются ежемесячные дашборды с разбивкой расходов по подразделениям — финансовый директор видит реальную картину. Для компаний с несколькими юридическими лицами в свободных зонах ОАЭ (JAFZA, DAFZA, DMCC) мы сегментируем биллинг по каждому юрлицу для корректного распределения P&L.</p>',
    },
    {
      title: 'Часто задаваемые вопросы',
      text: '',
      list: [
        '<strong>В: Как быстро мы увидим снижение расходов после начала работы?</strong><br/>О: Устранение потерь даёт результат уже в первом расчётном периоде. Экономия от Reserved Instances начинается со второго месяца — AWS и Azure применяют скидки с даты фиксации обязательства.',
        '<strong>В: Нужно ли менять архитектуру приложений, чтобы сэкономить?</strong><br/>О: Не обязательно. Большинство экономии достигается за счёт оптимизации размеров, покупки RI и устранения потерь — это исключительно инфраструктурные изменения, не требующие правок кода приложений.',
        '<strong>В: Каков реалистичный процент снижения расходов?</strong><br/>О: Для компаний, которые никогда не занимались FinOps, 30–50% достижимо в течение 90 дней. Компании, уже использующие RI, как правило, получают дополнительно 10–20% экономии через Savings Plans.',
        '<strong>В: Можете ли вы работать с многоаккаунтовыми AWS-организациями с отдельными юрлицами в ОАЭ?</strong><br/>О: Да — мы настраиваем AWS Organizations с консолидированным биллингом и разделением расходов по аккаунтам, напрямую соответствующим структуре свободных зон ОАЭ.',
      ],
    },
  ],
};

export default function CloudcostoptimizationPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-03-05', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Главная', href: '/ru' }, { label: 'Услуги', href: '/ru/services' }, { label: 'Облачные Решения', href: '/ru/services/cloud' }, { label: 'Статья' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
