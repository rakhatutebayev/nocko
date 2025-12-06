'use client';

import StructuredData from '@/components/seo/StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  items: FAQItem[];
}

export default function ServiceFAQ({ 
  title = 'Frequently Asked Questions',
  items,
}: ServiceFAQProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  // Генерируем FAQ schema для Google
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={{
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        ],
      }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section section--light service-faq">
        <div className="container">
          <div className="section__content">
            <h2 className="section__title">{title}</h2>
            <div className="faq-list" style={{ marginTop: '2rem' }}>
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="faq-item" 
                  style={{ 
                    marginBottom: '1.5rem', 
                    paddingBottom: '1.5rem', 
                    borderBottom: '1px solid #e0e0e0' 
                  }}
                >
                  <h3 
                    className="faq-question" 
                    style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600', 
                      marginBottom: '0.5rem',
                      color: '#1a1a1a',
                    }}
                  >
                    {item.question}
                  </h3>
                  <p 
                    className="faq-answer" 
                    style={{ 
                      color: '#666', 
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

