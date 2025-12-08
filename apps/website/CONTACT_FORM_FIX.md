# Исправление проблемы с контактной формой

## Проблема
При отправке формы возникает ошибка `failed to fetch`, потому что Next.js на Vercel перехватывает путь `/api/contacts` и не может найти соответствующий route.

## Текущее состояние
- Strapi CMS доступен на `nocko.com/admin`
- API endpoint: `/api/contacts`
- Next.js пытается отправить запрос на `/api/contacts`, но получает 405 (Method Not Allowed)

## Решение 1: Настроить rewrites в Next.js (Рекомендуется)

Добавьте в `next.config.ts`:

```typescript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: process.env.STRAPI_API_URL || 'http://localhost:1337/api/:path*',
    },
    {
      source: '/admin/:path*',
      destination: process.env.STRAPI_API_URL?.replace('/api', '/admin/:path*') || 'http://localhost:1337/admin/:path*',
    },
    {
      source: '/uploads/:path*',
      destination: process.env.STRAPI_API_URL?.replace('/api', '/uploads/:path*') || 'http://localhost:1337/uploads/:path*',
    },
  ];
},
```

Затем добавьте переменную окружения в Vercel:
```bash
npx vercel env add STRAPI_API_URL production
# Введите: http://<strapi-server-ip>:1337/api
```

## Решение 2: Использовать поддомен для Strapi (Лучше для production)

1. Настройте поддомен `api.nocko.com` или `cms.nocko.com`
2. Направьте его на сервер со Strapi
3. Обновите переменную окружения:

```bash
# Удалите старую
npx vercel env rm NEXT_PUBLIC_STRAPI_URL production --yes

# Добавьте новую
npx vercel env add NEXT_PUBLIC_STRAPI_URL production
# Введите: https://api.nocko.com
```

## Решение 3: Настроить nginx на сервере

Если Strapi и Next.js на одном сервере, настройте nginx для проксирования:

```nginx
# В конфигурации nginx для nocko.com

# API routes -> Strapi
location /api/ {
    proxy_pass http://localhost:1337/api/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

# Admin panel -> Strapi
location /admin {
    proxy_pass http://localhost:1337/admin;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

# Uploads -> Strapi
location /uploads/ {
    proxy_pass http://localhost:1337/uploads/;
}

# All other routes -> Next.js
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

## Проверка

После применения одного из решений:

1. Проверьте API endpoint:
```bash
curl -X POST https://nocko.com/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"data":{"name":"Test","email":"test@test.com","message":"Test message"}}'
```

2. Если вернулся статус 200 или 201 - все работает
3. Перезапустите deployment:
```bash
cd apps/website
npx vercel --prod --yes
```

## Текущие переменные окружения

Проверьте переменные окружения:
```bash
cd apps/website
npx vercel env ls
```

Должны быть установлены:
- `NEXT_PUBLIC_STRAPI_URL` (для всех environments)

## Дополнительно

Для локальной разработки убедитесь, что в `.env.local` установлено:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

