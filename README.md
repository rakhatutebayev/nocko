# NOCKO Platform

Modern IT solutions website built with Next.js and Strapi CMS.

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 20+
- npm or yarn

### Local Development

1. **Start all services with Docker:**

```bash
cd nocko-platform
docker compose up -d
```

2. **Access services:**

- Next.js Website: http://localhost:3000
- Strapi CMS: http://localhost:1337/admin
- PostgreSQL: localhost:5432
- Redis: localhost:6379

3. **First-time Strapi setup:**

- Open http://localhost:1337/admin
- Create admin account
- Configure API permissions (Settings → Users & Permissions → Roles → Public)

### Manual Start (without Docker)

```bash
# Install dependencies
npm install

# Start PostgreSQL and Redis (if not running)
# Then start services:

# Terminal 1: Strapi
cd apps/cms
npm run develop

# Terminal 2: Next.js
cd apps/website
npm run dev
```

## 📁 Project Structure

```
nocko-platform/
├── apps/
│   ├── website/          # Next.js frontend
│   │   ├── app/          # App Router pages
│   │   ├── components/  # React components
│   │   └── lib/          # Utilities and API client
│   └── cms/              # Strapi CMS
│       ├── src/api/      # Content Types
│       └── config/       # Strapi configuration
├── packages/
│   └── shared/           # Shared TypeScript types
├── docker-compose.yml    # Docker orchestration
└── docs/                 # Documentation
```

## 🛠️ Development

### Available Scripts

**Root:**
- `npm run dev` - Start all services
- `npm run build` - Build all apps
- `npm run lint` - Lint all code

**Next.js (apps/website):**
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server

**Strapi (apps/cms):**
- `npm run develop` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🐳 Docker Commands

```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f

# Restart specific service
docker compose restart website
docker compose restart cms

# Clean up
docker compose down -v
```

## 📚 Documentation

- [Architecture](./docs/ARCHITECTURE.md) - System architecture
- [Deployment](./DEPLOYMENT.md) - Deployment guide
- [CMS Guide](./docs/CMS_GUIDE.md) - Strapi CMS user guide
- [Docker Setup](./DOCKER_SETUP.md) - Docker configuration
- [Strapi Setup](./STRAPI_SETUP.md) - Strapi configuration

## 🔧 Configuration

### Environment Variables

**Next.js (.env.local):**
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
```

**Strapi (.env):**
```
DATABASE_CLIENT=postgres
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=nocko_cms
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
HOST=0.0.0.0
PORT=1337
```

## 🧪 Testing

### Lighthouse CI

```bash
npm run lighthouse
```

### Manual Testing

1. Test all pages load correctly
2. Verify API connectivity
3. Test form submissions
4. Check mobile responsiveness
5. Verify SEO meta tags

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

**Vercel (Next.js):**
```bash
cd apps/website
vercel --prod
```

**Railway/Render (Strapi):**
- Connect GitHub repository
- Set root directory to `apps/cms`
- Configure environment variables
- Deploy

## 📊 Performance

- **ISR**: Pages regenerated every hour
- **Caching**: In-memory cache for API responses
- **Image Optimization**: Automatic AVIF/WebP conversion
- **Code Splitting**: Automatic route-based splitting

## 🔐 Security

- Security headers configured
- API token authentication
- CORS configured
- Input validation

## 📝 License

Private project - All rights reserved

## 👥 Support

For questions or issues, contact the development team.
