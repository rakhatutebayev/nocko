# Strapi CMS for NOCKO Platform

## Getting Started

### 1. Setup Environment

```bash
# Copy example env file
cp .env.example .env

# Generate APP_KEYS and JWT secrets
# You can use: openssl rand -base64 32
```

### 2. Setup Database

Make sure PostgreSQL is running and create database:

```bash
createdb nocko_cms
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Strapi

```bash
npm run develop
```

Visit `http://localhost:1337/admin` to create admin user.

## Content Types to Create

After first login, create these Content Types in Admin UI:

1. **Page** - Static pages
2. **Service** - Company services  
3. **CaseStudy** - Client case studies
4. **Article** - Blog articles
5. **Industry** - Industries served

See main README for detailed schema.

## API Access

After creating Content Types, configure API permissions:

1. Go to Settings > Users & Permissions plugin > Roles
2. Edit "Public" role
3. Enable "find" and "findOne" for all Content Types

## Development

```bash
# Development mode
npm run develop

# Production build
npm run build
npm run start
```




