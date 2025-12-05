# Обновления плана согласно статье о SEO в Next.js

## Ключевые изменения для реализации

### 1. Metadata API (Next.js 13+ App Router)

**Важно:** Использовать встроенный Metadata API вместо библиотеки next-seo или ручных мета-тегов.

#### Обновления в разделе 3.1 и 5.1:

- ✅ Использовать `export const metadata` в `app/layout.tsx` для базовых метаданных
- ✅ Использовать `generateMetadata()` для динамических страниц
- ✅ Настроить `title.template` для единообразных заголовков
- ✅ Мигрировать существующие мета-теги из `head.html` в Metadata API
- ✅ Сохранить Structured Data (Schema.org) - перенести в отдельный компонент

**Пример базовой конфигурации:**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'NOCKO IT Support UAE',
    template: '%s | NOCKO Information Technology',
  },
  description: 'Professional IT support and infrastructure services in UAE',
  metadataBase: new URL('https://nocko.com'),
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOCKO IT Support UAE',
    description: 'Professional IT services in Dubai, Abu Dhabi, Sharjah',
    images: ['/twitter-image.jpg'],
  },
}
```

### 2. Стратегии рендеринга для SEO

**Важно:** Выбор стратегии напрямую влияет на индексацию. SSG и ISR идеальны для SEO, CSR - плохо для публичных страниц.

#### Обновления в разделе 3.4:

**Статические страницы (SSG):**
- `app/page.tsx` - SSG (главная)
- `app/about/page.tsx` - SSG
- `app/services/page.tsx` - SSG (список)
- `app/case-studies/page.tsx` - SSG (список)
- `app/contact/page.tsx` - SSG

**Динамические страницы с ISR:**
- `app/services/[slug]/page.tsx` - ISR с `revalidate: 3600` (1 час)
- `app/case-studies/[slug]/page.tsx` - ISR с `revalidate: 3600`
- `app/articles/[slug]/page.tsx` - ISR с `revalidate: 1800` (30 минут)

**Пример ISR:**
```typescript
// app/services/[slug]/page.tsx
export const revalidate = 3600;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const service = await getService(params.slug);
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.heroImage],
    },
  };
}
```

### 3. Sitemap и Robots.txt

**Важно:** Использовать специальные файлы Next.js для динамической генерации.

#### Обновления в разделе 5.3:

**Файл `app/sitemap.ts`:**
```typescript
import { MetadataRoute } from 'next';
import { getServices, getCaseStudies, getArticles } from '@/lib/api/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nocko.com';
  
  const services = await getServices();
  const caseStudies = await getCaseStudies();
  const articles = await getArticles();
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: service.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/case-studies/${caseStudy.slug}`,
      lastModified: caseStudy.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
```

**Файл `app/robots.ts`:**
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://nocko.com/sitemap.xml',
  };
}
```

### 4. Кэширование для SEO

**Важно:** Правильное кэширование улучшает Core Web Vitals и скорость индексации.

#### Обновления в разделе 7.1:

**Использовать Next.js встроенное кэширование:**
```typescript
// lib/api/strapi.ts
export async function getService(slug: string) {
  const res = await fetch(`${STRAPI_URL}/api/services?filters[slug][$eq]=${slug}`, {
    next: { revalidate: 3600 }, // ISR кэширование на 1 час
  });
  return res.json();
}
```

## Чеклист реализации

- [ ] Обновить `app/layout.tsx` с Metadata API
- [ ] Создать `generateMetadata()` для всех динамических страниц
- [ ] Настроить SSG для статических страниц
- [ ] Настроить ISR для динамических страниц с правильными revalidate значениями
- [ ] Создать `app/sitemap.ts` с динамической генерацией
- [ ] Создать `app/robots.ts`
- [ ] Обновить API клиент с кэшированием через `next: { revalidate }`
- [ ] Перенести Structured Data в компонент `components/seo/StructuredData.tsx`
- [ ] Протестировать все метаданные через инструменты валидации
- [ ] Проверить индексацию через Google Search Console

## Приоритеты

1. **Высокий приоритет:** Metadata API, стратегии рендеринга (SSG/ISR)
2. **Средний приоритет:** Sitemap, robots.txt
3. **Низкий приоритет:** Оптимизация кэширования (можно улучшить позже)




