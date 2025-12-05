# Pre-Deployment Checklist

Complete checklist before deploying to production.

## 🔧 Infrastructure

- [ ] All Docker services running correctly
- [ ] PostgreSQL database accessible
- [ ] Redis accessible (if used)
- [ ] Strapi CMS accessible at `/admin`
- [ ] Next.js website accessible
- [ ] All environment variables set

## 📝 Strapi CMS Setup

- [ ] Admin account created
- [ ] API token generated
- [ ] API permissions configured (Public role)
- [ ] Content Types created:
  - [ ] Page
  - [ ] Service
  - [ ] Case Study
  - [ ] Article
  - [ ] Industry
- [ ] Sample content migrated (or real content added)
- [ ] Media library accessible
- [ ] CORS configured for frontend domain

## 🎨 Next.js Frontend

- [ ] All pages load correctly:
  - [ ] Home page (`/`)
  - [ ] About page (`/about`)
  - [ ] Services listing (`/services`)
  - [ ] Service detail pages (`/services/[slug]`)
  - [ ] Case studies listing (`/case-studies`)
  - [ ] Case study detail pages (`/case-studies/[slug]`)
  - [ ] Contact page (`/contact`)
- [ ] Navigation works correctly
- [ ] Mobile menu works
- [ ] Footer links work
- [ ] Images load correctly
- [ ] Forms work (if any)
- [ ] API connection to Strapi works

## 📱 Mobile Optimization

- [ ] Responsive design works on:
  - [ ] Mobile (320px - 767px)
  - [ ] Tablet (768px - 1199px)
  - [ ] Desktop (1200px+)
- [ ] Touch targets are at least 44x44px
- [ ] Mobile menu works correctly
- [ ] Images are optimized for mobile
- [ ] Text is readable on mobile
- [ ] Forms are mobile-friendly

## 🔍 SEO & GEO

- [ ] Meta tags present on all pages
- [ ] Open Graph tags configured
- [ ] Twitter Cards configured
- [ ] Structured Data (Schema.org) present
- [ ] Sitemap.xml accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] Canonical URLs set correctly
- [ ] GEO metadata configured (if needed)

## ⚡ Performance

- [ ] Page load time < 3 seconds
- [ ] Images optimized (WebP/AVIF)
- [ ] Code splitting working
- [ ] Caching configured
- [ ] Lighthouse score > 90:
  - [ ] Performance
  - [ ] Accessibility
  - [ ] Best Practices
  - [ ] SEO
- [ ] Core Web Vitals:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

## 🔐 Security

- [ ] Security headers configured:
  - [ ] HSTS
  - [ ] X-Frame-Options
  - [ ] X-XSS-Protection
  - [ ] X-Content-Type-Options
  - [ ] Referrer-Policy
- [ ] API tokens secured
- [ ] Environment variables not exposed
- [ ] CORS properly configured
- [ ] No sensitive data in client-side code

## 📊 Content

- [ ] All content added to Strapi
- [ ] Content published (not draft)
- [ ] Images uploaded to Strapi
- [ ] Alt text for all images
- [ ] Links work correctly
- [ ] No broken links
- [ ] Content is up-to-date

## 🧪 Testing

- [ ] Manual testing completed:
  - [ ] All pages tested
  - [ ] All forms tested
  - [ ] All links tested
  - [ ] Mobile devices tested
  - [ ] Different browsers tested
- [ ] Lighthouse CI passed (if configured)
- [ ] No console errors
- [ ] No 404 errors
- [ ] No broken images

## 🚀 Deployment

- [ ] Production environment variables set
- [ ] Database backup configured
- [ ] Monitoring set up
- [ ] Error tracking configured (optional)
- [ ] Analytics configured (optional)
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] DNS records configured
- [ ] CDN configured (if used)

## 📚 Documentation

- [ ] README.md updated
- [ ] SETUP_GUIDE.md reviewed
- [ ] DEPLOYMENT.md reviewed
- [ ] CMS_GUIDE.md reviewed
- [ ] Architecture docs reviewed

## ✅ Final Checks

- [ ] All services running
- [ ] No critical errors in logs
- [ ] Backup strategy in place
- [ ] Rollback plan ready
- [ ] Team notified of deployment

---

## Quick Test Commands

```bash
# Check services
docker compose ps

# Check Next.js
curl http://localhost:3000

# Check Strapi
curl http://localhost:1337/api/services

# Check logs
docker compose logs website
docker compose logs cms
```

---

**Last Updated:** $(date)
**Status:** Ready for Production ✅



