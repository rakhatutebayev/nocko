# Настройка поддомена cms.nocko.com для Strapi

## Шаг 1: Узнать IP адрес сервера со Strapi

Выполните на сервере со Strapi:

```bash
# Если Strapi на том же сервере, что и домен
curl -4 ifconfig.me

# Или
hostname -I
```

Сохраните этот IP адрес - он понадобится для DNS настройки.

## Шаг 2: Добавить DNS запись для поддомена

Зайдите в панель управления DNS вашего регистратора домена и добавьте A-запись:

```
Type: A
Host: cms
Value: <IP-адрес-сервера-со-Strapi>
TTL: 3600 (или Auto)
```

Или, если хотите направить на Vercel (не рекомендуется для Strapi):
```
Type: CNAME
Host: cms
Value: cname.vercel-dns.com
TTL: 3600
```

**Важно:** Используйте A-запись на IP сервера, где развернут Docker контейнер с Strapi.

## Шаг 3: Обновить переменные окружения в Vercel

```bash
cd /Users/rakhat/Documents/webhosting/nocko-platform/apps/website

# Удалить старые
npx vercel env rm NEXT_PUBLIC_STRAPI_URL production --yes
npx vercel env rm NEXT_PUBLIC_STRAPI_URL preview --yes
npx vercel env rm NEXT_PUBLIC_STRAPI_URL development --yes

# Добавить новые
echo -e "n\nhttps://cms.nocko.com" | npx vercel env add NEXT_PUBLIC_STRAPI_URL production
echo -e "n\nhttps://cms.nocko.com" | npx vercel env add NEXT_PUBLIC_STRAPI_URL preview
echo -e "n\nhttp://localhost:1337" | npx vercel env add NEXT_PUBLIC_STRAPI_URL development
```

## Шаг 4: Обновить CORS в Strapi

Откройте файл `/Users/rakhat/Documents/webhosting/nocko-platform/apps/cms/config/middlewares.js`:

```javascript
module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'market-assets.strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'market-assets.strapi.io',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://nocko.com',
        'https://www.nocko.com',
        'https://cms.nocko.com', // Добавить это
        process.env.FRONTEND_URL || 'http://localhost:3000',
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

## Шаг 5: Настроить nginx на сервере (если используется)

Создайте конфигурацию для `cms.nocko.com`:

```nginx
# /etc/nginx/sites-available/cms.nocko.com

server {
    listen 80;
    listen [::]:80;
    server_name cms.nocko.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name cms.nocko.com;

    # SSL сертификаты (получить через Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/cms.nocko.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cms.nocko.com/privkey.pem;

    # SSL настройки
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Proxy к Strapi
    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Увеличить таймауты для загрузки файлов
        proxy_read_timeout 600s;
        proxy_connect_timeout 600s;
        proxy_send_timeout 600s;
        
        # Увеличить размер загружаемых файлов
        client_max_body_size 100M;
    }
}
```

Включите конфигурацию:

```bash
sudo ln -s /etc/nginx/sites-available/cms.nocko.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Шаг 6: Получить SSL сертификат

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx -y

# Остановить nginx на время получения сертификата
sudo systemctl stop nginx

# Получить сертификат
sudo certbot certonly --standalone -d cms.nocko.com

# Запустить nginx
sudo systemctl start nginx

# Или автоматически с nginx
sudo certbot --nginx -d cms.nocko.com
```

## Шаг 7: Обновить Strapi server.js (опционально)

Если нужно, обновите `/Users/rakhat/Documents/webhosting/nocko-platform/apps/cms/config/server.js`:

```javascript
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://cms.nocko.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
```

## Шаг 8: Задеплоить изменения

```bash
# На сервере со Strapi
cd /path/to/nocko-platform
docker-compose restart cms

# Для Next.js на Vercel
cd apps/website
npx vercel --prod --yes
```

## Шаг 9: Проверка

```bash
# Проверить DNS
nslookup cms.nocko.com

# Проверить доступность
curl -I https://cms.nocko.com

# Проверить API
curl https://cms.nocko.com/api/contacts

# Проверить админку
# Откройте в браузере: https://cms.nocko.com/admin
```

## Шаг 10: Тестирование контактной формы

1. Откройте https://nocko.com
2. Откройте форму контакта
3. Заполните и отправьте
4. Проверьте в консоли браузера (F12 -> Network) запрос к `https://cms.nocko.com/api/contacts`

## Troubleshooting

### DNS не резолвится
```bash
# Проверить распространение DNS
nslookup cms.nocko.com 8.8.8.8
# Может занять до 24-48 часов
```

### SSL ошибки
```bash
# Проверить сертификат
sudo certbot certificates

# Обновить сертификат
sudo certbot renew
```

### Strapi не доступен
```bash
# Проверить Docker контейнер
docker ps | grep cms

# Проверить логи
docker logs nocko-cms -f

# Перезапустить
docker-compose restart cms
```

### CORS ошибки
- Убедитесь, что в `middlewares.js` добавлены домены `nocko.com` и `cms.nocko.com`
- Перезапустите Strapi после изменений

