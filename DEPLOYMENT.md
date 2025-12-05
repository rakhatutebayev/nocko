# Deployment Guide

## 🚀 Deployment Overview

This guide covers deployment of the NOCKO platform to production environments.

## 📋 Prerequisites

- Vercel account (for Next.js frontend)
- Railway/Render account (for Strapi CMS)
- PostgreSQL database (managed service or self-hosted)
- Domain name configured

## 🌐 Frontend Deployment (Vercel)

### Step 1: Prepare Vercel Project

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Link project:
```bash
cd apps/website
vercel link
```

### Step 2: Configure Environment Variables

In Vercel dashboard, add the following environment variables:

```
NEXT_PUBLIC_SITE_URL=https://nocko.com
NEXT_PUBLIC_STRAPI_URL=https://cms.nocko.com
STRAPI_API_TOKEN=your_strapi_api_token
```

### Step 3: Deploy

```bash
vercel --prod
```

Or use Vercel dashboard for automatic deployments from Git.

### Step 4: Configure Custom Domain

1. Go to Vercel project settings
2. Add custom domain: `nocko.com`
3. Configure DNS records as instructed

## 🗄️ Backend Deployment (Strapi on Railway/Render)

### Option A: Railway

1. Create new Railway project
2. Connect GitHub repository
3. Select `apps/cms` as root directory
4. Add PostgreSQL service
5. Configure environment variables (see below)
6. Deploy

### Option B: Render

1. Create new Web Service
2. Connect GitHub repository
3. Set root directory to `apps/cms`
4. Build command: `npm install && npm run build`
5. Start command: `npm start`
6. Add PostgreSQL database
7. Configure environment variables

### Environment Variables for Strapi

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=your_postgres_host
DATABASE_PORT=5432
DATABASE_NAME=nocko_cms
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=true

HOST=0.0.0.0
PORT=1337
NODE_ENV=production

APP_KEYS=your_app_keys_comma_separated
JWT_SECRET=your_jwt_secret
ADMIN_JWT_SECRET=your_admin_jwt_secret
API_TOKEN_SALT=your_api_token_salt
TRANSFER_TOKEN_SALT=your_transfer_token_salt

FRONTEND_URL=https://nocko.com
```

## 🐳 Docker Deployment (Alternative)

### Build and Push Images

```bash
# Build Next.js image
docker build -t nocko-website:latest -f apps/website/Dockerfile apps/website/

# Build Strapi image
docker build -t nocko-cms:latest -f apps/cms/Dockerfile apps/cms/

# Tag and push to registry
docker tag nocko-website:latest your-registry/nocko-website:latest
docker tag nocko-cms:latest your-registry/nocko-cms:latest
docker push your-registry/nocko-website:latest
docker push your-registry/nocko-cms:latest
```

### Deploy with Docker Compose

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📊 Monitoring

### Vercel Analytics

- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals
- Track performance metrics

### Strapi Monitoring

- Monitor API response times
- Check database connections
- Monitor upload directory size

## 🔄 CI/CD Pipeline

GitHub Actions workflow is configured for:
- Lighthouse CI checks
- Automated testing
- Deployment on merge to main

## 📝 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check API connectivity between Next.js and Strapi
- [ ] Test form submissions
- [ ] Verify images load correctly
- [ ] Check sitemap.xml and robots.txt
- [ ] Test mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Check structured data with Google Rich Results Test
- [ ] Monitor error logs
- [ ] Set up uptime monitoring

## 🔧 Troubleshooting

### Next.js Build Errors

- Check environment variables
- Verify Strapi URL is accessible
- Check Node.js version (20+)

### Strapi Connection Issues

- Verify database credentials
- Check network connectivity
- Review Strapi logs

### Image Loading Issues

- Verify image paths
- Check Next.js Image configuration
- Ensure images are in public folder



