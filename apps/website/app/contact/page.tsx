import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Contact NOCKO | IT Support Dubai & UAE',
  description:
    'Get in touch with NOCKO for IT support and solutions in UAE. Contact us for network setup, cloud migration, cybersecurity, and 24/7 technical support.',
  keywords: 'contact NOCKO, IT support UAE, Dubai, Abu Dhabi, Sharjah',
  openGraph: {
    title: 'Contact NOCKO | IT Support Dubai & UAE',
    description: 'Get in touch with NOCKO for IT support and solutions in UAE.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact NOCKO — IT Support Dubai' }],
  },
  alternates: {
    canonical: '/contact',
    languages: {
      'en-AE': '/contact',
      'ru-RU': '/ru/contact',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://nocko.com/contact' },
          ],
        }}
      />
      <StructuredData
        type="ContactPage"
        data={{
          name: 'Contact NOCKO Information Technology',
          description: 'Get in touch with NOCKO for IT support and solutions in UAE.',
          url: 'https://nocko.com/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            telephone: '+971542448888',
            email: 'info@nocko.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
              addressLocality: 'Dubai',
              addressCountry: 'AE',
            },
          },
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service"
          title="Contact NOCKO — IT Support in Dubai & UAE"
          subtitle="Get in touch with NOCKO for IT support and solutions in UAE"
        />
        <ContactForm />
        <section className="contact-info section">
          <div className="container">
            <div className="contact-info__grid">
              <div className="contact-info__details">
                <h2 className="contact-info__heading">Our Office</h2>
                <address className="contact-info__address" itemScope itemType="https://schema.org/PostalAddress">
                  <p>
                    <strong>NOCKO Information Technology</strong>
                  </p>
                  <p itemProp="streetAddress">Office R20-42, Wavez Residence, Wadi Al Safa 2</p>
                  <p><span itemProp="addressLocality">Dubai</span>, <span itemProp="addressCountry">UAE</span></p>
                </address>
                <ul className="contact-info__list">
                  <li>
                    <a href="tel:+971542448888" className="contact-info__link">+971 54 244 8888</a>
                  </li>
                  <li>
                    <a href="https://wa.me/971542448888" className="contact-info__link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </li>
                  <li>
                    <a href="mailto:info@nocko.com" className="contact-info__link">info@nocko.com</a>
                  </li>
                </ul>
                <p className="contact-info__hours">Mon–Fri: 09:00–18:00 (GST)</p>
              </div>
              <div className="contact-info__map">
                <iframe
                  title="NOCKO Office — Wavez Residence, Dubai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.2708!3d25.0785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV2F2ZXogUmVzaWRlbmNlLCBXYWRpIEFsIFNhZmEgMiwgRHViYWk!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

