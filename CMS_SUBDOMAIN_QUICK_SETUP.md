# Быстрая настройка cms.nocko.com

## ✅ Что уже сделано:

1. Обновлен CORS в Strapi (`apps/cms/config/middlewares.js`)
2. Обновлены переменные окружения в Vercel:
   - Production: `https://cms.nocko.com`
   - Preview: `https://cms.nocko.com`  
   - Development: `http://localhost:1337`

## 📋 Что нужно сделать:

### 1. Добавить DNS запись

Зайдите в панель управления DNS вашего регистратора домена и добавьте:

```
Type: A
Host: cms
Value: 216.198.79.1
TTL: 3600 (или Auto)
```

**Где найти настройки DNS:**
- Зависит от вашего регистратора (GoDaddy, Namecheap, Cloudflare, etc.)
- Обычно раздел "DNS Management" или "DNS Settings"

### 2. Настроить nginx на сервере (216.198.79.1)

Подключитесь к серверу:

```bash
ssh user@216.198.79.1
```

Создайте конфигурацию nginx:

```bash
sudo nano /etc/nginx/sites-available/cms.nocko.com
```

Вставьте конфигурацию:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name cms.nocko.com;

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

### 3. Установить SSL сертификат

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx -y
sudo certbot --nginx -d cms.nocko.com
```

Следуйте инструкциям certbot.

### 4. Перезапустить Strapi (если в Docker)

```bash
cd /path/to/nocko-platform
docker-compose restart cms
```

### 5. Задеплоить Next.js на Vercel

```bash
cd /Users/rakhat/Documents/webhosting/nocko-platform/apps/website
npx vercel --prod --yes
```

## 🧪 Проверка

После завершения всех шагов (подождите 5-10 минут для распространения DNS):

```bash
# 1. Проверить DNS
nslookup cms.nocko.com

# 2. Проверить HTTP
curl -I http://cms.nocko.com

# 3. Проверить HTTPS
curl -I https://cms.nocko.com

# 4. Проверить API
curl https://cms.nocko.com/api/contacts

# 5. Проверить админку
# Откройте в браузере: https://cms.nocko.com/admin
```

## 📝 Тестирование формы

1. Откройте https://nocko.com
2. Нажмите "Contact Us" или откройте модальное окно
3. Заполните форму и отправьте
4. Откройте DevTools (F12) -> Network
5. Найдите запрос к `cms.nocko.com/api/contacts`
6. Проверьте статус: должен быть `201 Created`

## 🔧 Troubleshooting

### DNS не работает
- Подождите до 24 часов для полного распространения
- Проверьте: `nslookup cms.nocko.com 8.8.8.8`

### 502 Bad Gateway
- Strapi не запущен: `docker ps | grep cms`
- Перезапустите: `docker-compose restart cms`

### SSL ошибки
- Проверьте сертификат: `sudo certbot certificates`
- Обновите: `sudo certbot renew`

### CORS ошибки в браузере
- Проверьте логи Strapi: `docker logs nocko-cms -f`
- Убедитесь, что `middlewares.js` содержит `https://nocko.com` в origin

## 📞 Следующий шаг

После настройки DNS и nginx запустите:

```bash
cd /Users/rakhat/Documents/webhosting/nocko-platform/apps/website
npx vercel --prod --yes
```

Это финальный deploy, который применит все изменения.

