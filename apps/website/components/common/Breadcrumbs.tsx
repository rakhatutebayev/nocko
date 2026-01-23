import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
  
  // Generate structured data for BreadcrumbList
  const breadcrumbListItems = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    ...(item.href && { item: `${baseUrl}${item.href}` }),
  }));

  return (
    <StructuredData
      type="BreadcrumbList"
      data={{
        itemListElement: breadcrumbListItems,
      }}
    />
  );
}
