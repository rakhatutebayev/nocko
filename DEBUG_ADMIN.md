# Debug Information for Strapi Admin Panel

## Current Issue

Error: `The requested module '/admin/src/admin/app.js' does not provide an export named 'default'`

## Debug Commands

Run these commands to diagnose the issue:

```bash
cd nocko-platform

# 1. Check if app.js exists
docker compose exec cms ls -la /opt/app/src/admin/

# 2. Check compiled files
docker compose exec cms find /opt/app/.strapi -name "app.js" -type f

# 3. View compiled app.js
docker compose exec cms cat /opt/app/.strapi/client/app.js | head -30

# 4. Check Strapi logs
docker compose logs cms --tail 100 | grep -E "(error|app\.js|vite)"

# 5. Check HTML output
curl -s http://localhost:1337/admin | grep -E "(app\.js|script)"

# 6. Full restart with cache clear
docker compose stop cms
docker compose exec cms rm -rf /opt/app/.strapi /opt/app/.cache
docker compose start cms
```

## Expected Behavior

1. **Source file:** Only `app.tsx` should exist in `src/admin/`
2. **Compiled file:** Strapi should compile `app.tsx` to `.strapi/client/app.js`
3. **Export:** The compiled file should export `default`

## Browser Console Debug

Open browser console (F12) and check:

1. **Network tab:**
   - Look for failed requests to `/admin/src/admin/app.js`
   - Check if file exists at that path

2. **Console tab:**
   - Look for the exact error message
   - Check stack trace

3. **Sources tab:**
   - Navigate to `/admin/src/admin/app.js`
   - Check if file exists and what it exports

## Solution Steps

1. **Clear all caches:**
   ```bash
   docker compose stop cms
   docker compose exec cms rm -rf /opt/app/.strapi /opt/app/.cache /opt/app/build
   docker compose start cms
   ```

2. **Wait for full compilation (60+ seconds)**

3. **Clear browser cache:**
   - Ctrl+Shift+Delete → Clear cached images
   - Or use incognito mode

4. **Check if admin panel loads:**
   ```bash
   curl -I http://localhost:1337/admin
   # Should return: HTTP/1.1 200 OK
   ```

## If Problem Persists

The issue might be that Strapi is trying to load source files directly instead of compiled files. This can happen if:

1. Vite dev server is not running properly
2. Build process didn't complete
3. Cache is corrupted

**Workaround:** Use production build mode:

```bash
# In docker-compose.yml, change:
NODE_ENV: production

# Then rebuild:
docker compose up -d --build cms
```



