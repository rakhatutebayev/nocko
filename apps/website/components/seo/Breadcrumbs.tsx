'use client';

import Link from 'next/link';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  hidden?: boolean; // Опция для скрытия визуально
  className?: string;
}

export default function Breadcrumbs({ 
  items, 
  hidden = false, 
  className = '' 
}: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
  
  // Всегда начинаем с Home
  const allItems = [
    { name: 'Home', url: '/' },
    ...items,
  ];

  // Генерируем Schema.org структуру для Google
  const getCurrentPath = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  };

  const breadcrumbSchema = {
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${baseUrl}${item.url}` : `${baseUrl}${getCurrentPath()}`,
    })),
  };

  const breadcrumbClasses = [
    'breadcrumbs',
    hidden && 'breadcrumbs--hidden',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Schema.org разметка для Google - всегда видна поисковикам */}
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      
      {/* HTML breadcrumbs - скрыты визуально, но в DOM для Google */}
      <nav 
        className={breadcrumbClasses}
        aria-label="Breadcrumb" 
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="container">
          <ol className="breadcrumbs__list">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1;
              const position = index + 1;
              
              return (
                <li
                  key={index}
                  className="breadcrumbs__item"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  {!isLast && item.url ? (
                    <Link href={item.url} className="breadcrumbs__link" itemProp="item">
                      <span itemProp="name">{item.name}</span>
                    </Link>
                  ) : (
                    <span className="breadcrumbs__current" itemProp="name">
                      {item.name}
                    </span>
                  )}
                  <meta itemProp="position" content={position.toString()} />
                  {!isLast && <span className="breadcrumbs__separator" aria-hidden="true">/</span>}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

