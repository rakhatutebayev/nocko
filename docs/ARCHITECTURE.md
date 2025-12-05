# Architecture Documentation

## 🏗️ System Architecture

### Overview

NOCKO Platform is a monorepo-based application consisting of:
- **Next.js Frontend** - Public website with App Router
- **Strapi CMS** - Headless content management system
- **PostgreSQL** - Database for Strapi
- **Redis** - Optional caching layer

### Monorepo Structure

```
nocko-platform/
├── apps/
│   ├── website/          # Next.js frontend
│   └── cms/              # Strapi CMS
├── packages/
│   └── shared/           # Shared TypeScript types
├── docker-compose.yml     # Docker orchestration
└── docs/                 # Documentation
```

## 🔄 Data Flow

### Content Management Flow

1. **Content Creation**: Admin creates content in Strapi CMS
2. **Content Storage**: Content saved to PostgreSQL
3. **API Exposure**: Strapi exposes content via REST API
4. **Content Fetching**: Next.js fetches content via API client
5. **Rendering**: Next.js renders pages with ISR (Incremental Static Regeneration)
6. **Caching**: Responses cached in-memory and via Next.js ISR

### Request Flow

```
User Request
    ↓
Next.js (Vercel)
    ↓
ISR Check (revalidate: 3600)
    ↓
Cache Hit? → Return cached HTML
    ↓
Cache Miss → Fetch from Strapi API
    ↓
Render Page → Cache & Return
```

## 🎨 Frontend Architecture

### Next.js App Router Structure

```
app/
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Home page
├── about/page.tsx        # About page
├── services/
│   ├── page.tsx          # Services listing
│   └── [slug]/page.tsx   # Dynamic service pages
├── case-studies/
│   ├── page.tsx          # Case studies listing
│   └── [slug]/page.tsx   # Dynamic case study pages
├── contact/page.tsx      # Contact page
├── sitemap.ts            # Dynamic sitemap
├── robots.ts             # Robots.txt
└── not-found.tsx         # 404 page
```

### Component Structure

```
components/
├── layout/
│   ├── Header.tsx        # Site header with navigation
│   └── Footer.tsx         # Site footer
├── sections/
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx       # Services section
│   ├── Industries.tsx    # Industries section
│   ├── CaseStudies.tsx   # Case studies section
│   ├── Clients.tsx       # Clients section
│   ├── ContactForm.tsx   # Contact form
│   └── ...               # Other sections
└── seo/
    └── StructuredData.tsx # Schema.org markup
```

## 🗄️ Backend Architecture

### Strapi Content Types

- **Page** - Website pages
- **Service** - IT services
- **CaseStudy** - Client case studies
- **Article** - Blog articles
- **Industry** - Industries served

### API Structure

```
/api
├── /pages                # Get all pages
├── /pages/:id            # Get single page
├── /services             # Get all services
├── /services/:id          # Get single service
├── /case-studies         # Get all case studies
├── /case-studies/:id      # Get single case study
├── /articles             # Get all articles
├── /articles/:id          # Get single article
└── /industries           # Get all industries
```

## 🔐 Security

### Authentication & Authorization

- Strapi Admin: JWT-based authentication
- API Access: Public read access, token-based write access
- Next.js: No authentication required (public site)

### Security Headers

- HSTS (Strict-Transport-Security)
- X-Frame-Options: DENY
- X-XSS-Protection
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## ⚡ Performance Optimizations

### Caching Strategy

1. **ISR (Incremental Static Regeneration)**: Pages regenerated every hour
2. **In-Memory Cache**: API responses cached with TTL
3. **Browser Cache**: Static assets cached for 30 days
4. **CDN Cache**: Vercel Edge Network

### Code Splitting

- Route-based code splitting (automatic)
- Component lazy loading for below-fold content
- Dynamic imports for heavy components

### Image Optimization

- Next.js Image component with automatic optimization
- AVIF and WebP formats
- Responsive image sizes
- Lazy loading by default

## 📱 Mobile Optimization

### Responsive Design

- Mobile-first approach
- Breakpoints: 767px (mobile), 768px (tablet), 1200px (desktop)
- Touch-friendly UI (44x44px minimum)
- Safe area support for iPhone X+

### PWA Features

- Web App Manifest
- Service Worker (optional)
- Offline support (optional)

## 🔍 SEO & GEO

### SEO Features

- Metadata API for all pages
- Structured Data (Schema.org)
- Dynamic sitemap.xml
- robots.txt
- Open Graph tags
- Twitter Cards

### GEO Features

- UAE city-specific metadata
- Geo-location utilities
- Middleware for geo headers
- LocalBusiness schema

## 🧪 Testing Strategy

### Lighthouse CI

- Automated performance testing
- Core Web Vitals monitoring
- SEO score checks

### E2E Testing

- Playwright for critical user flows
- Form submissions
- Navigation testing

## 📊 Monitoring

### Metrics to Monitor

- Page load times
- API response times
- Error rates
- Uptime
- Core Web Vitals

### Tools

- Vercel Analytics
- Strapi Admin Dashboard
- Database monitoring
- Error tracking (Sentry optional)



