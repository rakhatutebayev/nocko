# Настройка SMTP для отправки писем через Gmail

## Текущая ситуация

✅ **Работает:**
- Сообщения из контактной формы сохраняются в базе данных
- Контроллер использует `nodemailer` напрямую для отправки писем
- SMTP настройки уже настроены в контроллере

❌ **Проблема:**
- Strapi не запускается из-за ошибки email плагина (`provider.init is not a function`)
- Gmail блокирует отправку из-за отсутствия PTR записи для IP-адреса сервера

## Решение: Использование nodemailer напрямую

Контроллер `apps/cms/src/api/contact/controllers/contact.js` уже использует `nodemailer` напрямую, обходя email плагин Strapi.

### Текущие SMTP настройки (в контроллере):

```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'Nocko.it@gmail.com',
    pass: process.env.SMTP_PASS || 'vpuwzxeupxijxsss',
  },
});
```

### Переменные окружения (в `.env` и `docker-compose.yml`):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=Nocko.it@gmail.com
SMTP_PASS=vpuwzxeupxijxsss
SMTP_FROM=Nocko.it@gmail.com
SMTP_REPLY_TO=Nocko.it@gmail.com
CONTACT_EMAIL=Nocko.it@gmail.com
```

## Альтернативные решения для Gmail SMTP

### 1. Использование OAuth2 вместо пароля приложения

Более безопасный способ - использовать OAuth2 токены вместо пароля приложения:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.SMTP_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
});
```

### 2. Использование другого SMTP сервиса

Если Gmail блокирует отправку, можно использовать:

#### SendGrid:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

#### Mailgun:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILGUN_SMTP_USER,
    pass: process.env.MAILGUN_SMTP_PASS,
  },
});
```

#### AWS SES:
```javascript
const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 587,
  auth: {
    user: process.env.AWS_SES_ACCESS_KEY,
    pass: process.env.AWS_SES_SECRET_KEY,
  },
});
```

### 3. Настройка PTR записи для IP-адреса сервера

Для продакшена нужно настроить PTR запись для IP-адреса сервера у хостинг-провайдера. Это позволит Gmail принимать письма.

## Текущая реализация

Письма отправляются через `nodemailer` напрямую в контроллере `contact.js`:

1. **Уведомление администратору** - на `CONTACT_EMAIL` (по умолчанию `Nocko.it@gmail.com`)
2. **Подтверждение пользователю** - на email отправителя

## Что нужно сделать для запуска Strapi

1. **Вариант 1 (рекомендуется):** Исправить проблему с email плагином Strapi 5
2. **Вариант 2:** Полностью отключить email плагин (если это возможно в Strapi 5)
3. **Вариант 3:** Использовать только nodemailer в контроллере (текущий подход) и обойти проблему с плагином

## Проверка работы

После запуска Strapi, отправьте тестовое сообщение через форму и проверьте:

1. **База данных:** Сообщение должно сохраниться в таблице `contacts`
2. **Email:** Письма должны отправиться на указанные адреса (если SMTP настроен правильно)

```bash
# Проверка в БД
docker exec -i nocko-postgres psql -U postgres -d nocko_cms -c "SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5;"

# Проверка логов отправки
docker logs nocko-cms | grep -i "email\|smtp"
```


