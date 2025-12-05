# Setup Guide - First Time Configuration

Complete guide for setting up the NOCKO platform for the first time.

## 🚀 Quick Start

### 1. Start All Services

```bash
cd nocko-platform
docker compose up -d
```

Wait for all services to start (about 1-2 minutes).

### 2. Verify Services

```bash
# Check status
docker compose ps

# Check logs
docker compose logs -f
```

**Expected services:**
- ✅ nocko-postgres (PostgreSQL)
- ✅ nocko-redis (Redis)
- ✅ nocko-cms (Strapi)
- ✅ nocko-website (Next.js)

### 3. Access Services

- **Next.js Website:** http://localhost:3000
- **Strapi Admin:** http://localhost:1337/admin
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379

## 📝 Initial Strapi Setup

### Step 1: Create Admin Account

1. Open http://localhost:1337/admin
2. Fill in the registration form:
   - First name
   - Last name
   - Email
   - Password
3. Click "Let's start"

### Step 2: Generate API Token

1. In Strapi Admin, go to **Settings → API Tokens**
2. Click **Create new API Token**
3. Configure:
   - **Name:** `Frontend API Token`
   - **Token duration:** Unlimited
   - **Token type:** Full access
4. Click **Save**
5. **Copy the token** (you'll need it later)

### Step 3: Setup API Permissions

**Option A: Using Script (Recommended)**

```bash
export STRAPI_URL=http://localhost:1337
export STRAPI_API_TOKEN=your_token_here
node scripts/setup-strapi-permissions.js
```

**Option B: Manual Setup**

1. Go to **Settings → Users & Permissions → Roles → Public**
2. Enable permissions for each content type:
   - **Page:** ✅ find, ✅ findOne
   - **Service:** ✅ find, ✅ findOne
   - **Case Study:** ✅ find, ✅ findOne
   - **Article:** ✅ find, ✅ findOne
   - **Industry:** ✅ find, ✅ findOne
3. Enable **Upload → read**
4. Click **Save**

### Step 4: Migrate Sample Content

```bash
export STRAPI_URL=http://localhost:1337
export STRAPI_API_TOKEN=your_token_here
node scripts/migrate-content-to-strapi.js
```

This will create:
- 7 services (Structured Cabling, IT Support, etc.)
- 7 industries (Enterprise, Healthcare, etc.)
- Sample case studies

## 🔧 Configure Next.js

### Environment Variables

Create `apps/website/.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
```

**Note:** For Docker, these are already set in `docker-compose.yml`.

### Restart Next.js

```bash
docker compose restart website
```

## ✅ Verification

### 1. Test Strapi API

```bash
# Test services endpoint
curl http://localhost:1337/api/services

# Should return JSON with services
```

### 2. Test Next.js Website

1. Open http://localhost:3000
2. Check that pages load correctly
3. Verify images load
4. Test navigation

### 3. Test Content from Strapi

1. Go to Strapi Admin
2. Create a test page or service
3. Publish it
4. Check if it appears on the website (may take up to 1 hour due to ISR)

## 📚 Next Steps

### Add Real Content

1. **Via Strapi Admin:**
   - Go to Content Manager
   - Create new entries
   - Fill in content
   - Publish

2. **Via Migration Script:**
   - Modify `scripts/migrate-content-to-strapi.js`
   - Add your content data
   - Run the script

### Customize Content Types

1. Go to Strapi Admin
2. **Content-Type Builder**
3. Modify existing types or create new ones
4. Update TypeScript types in `packages/shared/src/types/`

### Deploy to Production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment instructions.

## 🐛 Troubleshooting

### Strapi won't start

```bash
# Check logs
docker compose logs cms

# Common issues:
# - Database connection failed → Check PostgreSQL is running
# - Port 1337 already in use → Change port in docker-compose.yml
```

### Next.js can't connect to Strapi

1. Check `NEXT_PUBLIC_STRAPI_URL` is correct
2. Verify Strapi is running: http://localhost:1337/admin
3. Check API permissions are set
4. Verify API token is correct

### Content not appearing

1. Check content is published in Strapi
2. Wait for ISR revalidation (up to 1 hour)
3. Clear Next.js cache: `docker compose restart website`
4. Check API response: `curl http://localhost:1337/api/services`

### Images not loading

1. Verify images are in `apps/website/public/images/`
2. Check image paths in components
3. Verify Next.js Image configuration

## 📞 Support

For issues or questions:
1. Check documentation in `docs/` folder
2. Review logs: `docker compose logs`
3. Check GitHub issues (if applicable)



