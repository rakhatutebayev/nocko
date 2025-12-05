import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | IT Support in UAE | NOCKO',
  description:
    'Get in touch with NOCKO for IT support and solutions in UAE. Contact us for network setup, cloud migration, cybersecurity, and 24/7 technical support.',
  keywords: 'contact NOCKO, IT support UAE, Dubai, Abu Dhabi, Sharjah',
  openGraph: {
    title: 'Contact Us | IT Support in UAE | NOCKO',
    description: 'Get in touch with NOCKO for IT support and solutions in UAE.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service"
          title="Contact Us"
          subtitle="Get in touch with NOCKO for IT support and solutions in UAE"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

