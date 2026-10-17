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
  
  // Generate structured data for BreadcrumbList. Intermediate items need a real
  // `item` URL (Google flags missing ones as errors), so drop placeholders like
  // href '#' or no href unless they are the last crumb.
  const linkable = items.filter(
    (item, index) => (item.href && item.href !== '#') || index === items.length - 1,
  );
  const breadcrumbListItems = linkable.map((item, index) => ({
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
