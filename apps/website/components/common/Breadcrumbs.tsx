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
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: breadcrumbListItems,
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs__list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumbs__item">
              {item.href && index < items.length - 1 ? (
                <>
                  <Link href={item.href} className="breadcrumbs__link">
                    {item.label}
                  </Link>
                  <span className="breadcrumbs__separator" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
