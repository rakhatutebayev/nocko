'use client';

import { useState } from 'react';
import StructuredData from '@/components/seo/StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  title = 'Frequently Asked Questions',
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <StructuredData type="FAQPage" data={faqSchema} />
      <section className="section section--light faq-accordion">
        <div className="container">
          <div className="section__content">
            <h2 className="section__title">{title}</h2>
            <div className="faq-accordion__list">
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`faq-accordion__item ${isOpen ? 'faq-accordion__item--open' : ''}`}
                  >
                    <button
                      className="faq-accordion__button"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="faq-accordion__icon">
                        {isOpen ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 5V19M5 12H19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="faq-accordion__question">{item.question}</span>
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      className={`faq-accordion__answer ${isOpen ? 'faq-accordion__answer--open' : ''}`}
                      aria-hidden={!isOpen}
                    >
                      <p className="faq-accordion__answer-text">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

