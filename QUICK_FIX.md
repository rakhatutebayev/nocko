# Quick Fix for Strapi Admin Panel Issues

## Problem: WebSocket and app.js errors

If you see errors like:
- `WebSocket connection to 'ws://localhost:5173/admin/?token=...' failed`
- `The requested module '/admin/src/admin/app.js' does not provide an export named 'default'`

## Quick Solution

Run these commands:

```bash
cd nocko-platform

# 1. Stop Strapi
docker compose stop cms

# 2. Remove app.js if it exists
rm -f apps/cms/src/admin/app.js

# 3. Ensure app.tsx exists
ls -la apps/cms/src/admin/app.tsx

# 4. Clear all caches
docker compose exec cms rm -rf /opt/app/.cache /opt/app/.strapi /opt/app/build 2>/dev/null || true

# 5. Restart Strapi
docker compose start cms

# 6. Wait 30-60 seconds for Strapi to fully start
sleep 45

# 7. Check status
curl -I http://localhost:1337/admin
```

## Browser Fix

1. **Clear browser cache:**
   - Chrome/Edge: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
   - Select "Cached images and files"
   - Click "Clear data"

2. **Open in incognito mode:**
   - `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (Mac)
   - Navigate to http://localhost:1337/admin

3. **Hard refresh:**
   - `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

## Important Notes

- **WebSocket errors are NOT critical** - they're just HMR (Hot Module Replacement) warnings
- The admin panel should work despite these errors
- If the page loads but shows errors in console, you can ignore them
- The admin panel functionality is not affected by WebSocket connection failures

## Verification

After running the fix, verify:

```bash
# Check HTTP status
curl -I http://localhost:1337/admin
# Should return: HTTP/1.1 200 OK

# Check logs
docker compose logs cms --tail 20
# Should show: "Create your first administrator"
```

If HTTP 200, the admin panel is working correctly!
