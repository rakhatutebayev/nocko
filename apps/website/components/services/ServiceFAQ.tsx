'use client';

import FAQAccordion from '@/components/sections/FAQAccordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  items: FAQItem[];
}

export default function ServiceFAQ({ title, items }: ServiceFAQProps) {
  return <FAQAccordion title={title} items={items} />;
}
