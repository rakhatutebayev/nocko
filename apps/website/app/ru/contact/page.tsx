import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Контакты | ИТ Поддержка в ОАЭ | NOCKO',
  description:
    'Свяжитесь с NOCKO для ИТ поддержки и решений в ОАЭ. Обращайтесь к нам по вопросам настройки сети, миграции в облако, кибербезопасности и круглосуточной технической поддержки 24/7.',
  keywords: 'контакты NOCKO, ИТ поддержка ОАЭ, Дубай, Абу-Даби, Шарджа',
  openGraph: {
    title: 'Контакты | ИТ Поддержка в ОАЭ | NOCKO',
    description: 'Свяжитесь с NOCKO для ИТ поддержки и решений в ОАЭ.',
    type: 'website',
  },
};

export default function ContactPageRu() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service"
          title="Контакты"
          subtitle="Свяжитесь с NOCKO для получения ИТ-поддержки и консультаций в ОАЭ"
        />
        {/* ContactForm handles the actual form, we can just render the existing one */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
