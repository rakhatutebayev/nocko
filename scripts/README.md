# Migration Scripts

Scripts for setting up and migrating content to Strapi CMS.

## Prerequisites

1. **Strapi must be running:**
   ```bash
   docker compose up -d cms
   # or
   cd apps/cms && npm run develop
   ```

2. **Create admin account:**
   - Open http://localhost:1337/admin
   - Create your admin account

3. **Generate API token:**
   - Go to Settings → API Tokens
   - Create new token with "Full access"
   - Copy the token

4. **Set environment variables:**
   ```bash
   export STRAPI_URL=http://localhost:1337
   export STRAPI_API_TOKEN=your_token_here
   ```

## Scripts

### 1. Setup API Permissions

Configures public read access for all content types.

```bash
node scripts/setup-strapi-permissions.js
```

**What it does:**
- Enables public read access (find, findOne) for:
  - Pages
  - Services
  - Case Studies
  - Articles
  - Industries
- Enables upload read access

**Note:** You may need to manually verify permissions in Strapi Admin.

### 2. Migrate Content

Imports sample content (services, industries, case studies) to Strapi.

```bash
node scripts/migrate-content-to-strapi.js
```

**What it does:**
- Creates 7 services (Structured Cabling, IT Support, etc.)
- Creates 7 industries (Enterprise, Healthcare, etc.)
- Creates sample case studies
- Links case studies to services

**Note:** This script creates sample data. You can modify it to import your actual content.

## Manual Setup

If scripts don't work, you can set up permissions manually:

1. **Go to Strapi Admin:** http://localhost:1337/admin
2. **Settings → Users & Permissions → Roles → Public**
3. **Enable permissions:**
   - For each content type (Page, Service, Case Study, Article, Industry):
     - ✅ find
     - ✅ findOne
   - For Upload:
     - ✅ read
4. **Save**

## Troubleshooting

### "Cannot connect to Strapi API"
- Make sure Strapi is running
- Check STRAPI_URL is correct
- Verify API token is valid

### "Permission denied"
- Check API token has full access
- Verify admin account is created

### "Content already exists"
- This is normal if you run the script multiple times
- Script will skip existing content

## Next Steps

After running scripts:

1. **Verify content in Strapi Admin:**
   - Check Content Manager → Services
   - Check Content Manager → Industries
   - Check Content Manager → Case Studies

2. **Test API access:**
   ```bash
   curl http://localhost:1337/api/services
   ```

3. **Add more content:**
   - Use Strapi Admin to add/edit content
   - Or modify migration script to import more data



