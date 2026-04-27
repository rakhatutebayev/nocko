import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import AboutStats from '@/components/sections/AboutStats';
import AboutVisionMission from '@/components/sections/AboutVisionMission';
import AboutStory from '@/components/sections/AboutStory';
import FAQAccordion from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
  title: 'О нас | Поставщик ИТ-решений в Дубае, ОАЭ | NOCKO',
  description:
    'NOCKO Information Technology - Экспертный поставщик ИТ-решений в Дубае, ОАЭ. Работаем с 2025 года, обслуживаем бизнес в более чем 8 отраслях с командой, имеющей более 10 лет опыта.',
  keywords: 'о нас NOCKO, ИТ компания Дубай, ИТ услуги ОАЭ, технологические решения Дубай',
  openGraph: {
    title: 'О нас | Поставщик ИТ-решений в Дубае, ОАЭ | NOCKO',
    description: 'NOCKO Information Technology - Экспертный поставщик ИТ-решений в Дубае, ОАЭ.',
    type: 'website',
  },
};

const aboutFAQ = {
  title: 'Часто задаваемые вопросы о NOCKO',
  items: [
    {
      question: 'Какие услуги предоставляет NOCKO?',
      answer:
        'NOCKO предоставляет комплексные ИТ-услуги, включая ИТ-поддержку, сетевую инфраструктуру, облачные решения, кибербезопасность, управляемые ИТ-услуги и ИТ-консалтинг. Мы предлагаем круглосуточную поддержку и экспертные решения для бизнеса по всей территории ОАЭ.',
    },
    {
      question: 'Почему стоит выбрать NOCKO?',
      answer:
        'NOCKO — надежный поставщик ИТ-решений с глубокой локальной экспертизой, круглосуточной поддержкой, командой профессионалов с более чем 10-летним опытом, подтвержденным опытом обслуживания более 50 клиентов, комплексными решениями и выгодными ценами. Мы обслуживаем бизнес во всех Эмиратах.',
    },
    {
      question: 'Предоставляет ли NOCKO круглосуточную поддержку 24/7?',
      answer:
        'Да, NOCKO предоставляет круглосуточную ИТ-поддержку с быстрым временем отклика. В среднем 2 часа в Дубае и 4 часа во всех остальных Эмиратах. Удаленная поддержка доступна немедленно, а выезд инженеров на место возможен в режиме 24/7 при необходимости.',
    },
    {
      question: 'Какие отрасли обслуживает NOCKO?',
      answer:
        'NOCKO обслуживает множество отраслей, включая здравоохранение, финансы, розничную торговлю, образование, логистику, производство, недвижимость, а также корпоративный и крупный бизнес в Дубае, Абу-Даби, Шардже и всех остальных Эмиратах.',
    },
    {
      question: 'Как быстро NOCKO реагирует на ИТ-проблемы?',
      answer:
        'NOCKO обеспечивает быстрое время отклика: в среднем 2 часа в Дубае и 4 часа во всех остальных Эмиратах. Удаленная поддержка доступна немедленно, а выезды на место планируются исходя из срочности проблемы.',
    },
  ],
};

export default function AboutPageRu() {
  return (
    <>
      <HeaderWrapper />
      <main role="main">
        <Hero
          variant="about"
          title="О нас"
          description="Мы присутствуем везде, где работает ваш бизнес — в каждой сети, каждом офисе, каждом процессе. Независимо от того, где вы находитесь и как быстро растете. Мы делаем ИТ-инфраструктуру предсказуемой и безопасной. Мы упрощаем сложные системы, наводим порядок и создаем основу, на которой компании могут работать быстрее, стабильнее и безопаснее."
        />
        {/* Placeholder translations for components can be implemented within the components or passed as props if designed for it */}
        <AboutStats />
        <AboutVisionMission />
        <AboutStory />
        <FAQAccordion title={aboutFAQ.title} items={aboutFAQ.items} />
      </main>
      <Footer />
    </>
  );
}
