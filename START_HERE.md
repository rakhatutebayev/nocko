# 🚀 Быстрый старт с локальным PostgreSQL

## ✅ Что уже сделано:

1. ✅ PostgreSQL запущен
2. ✅ База данных `nocko_cms` создана
3. ✅ Файлы `.env` созданы

## 📝 Следующие шаги:

### 1. Сгенерировать секретные ключи для Strapi

```bash
cd apps/cms

# Сгенерировать 4 ключа для APP_KEYS
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32

# Сгенерировать остальные ключи
openssl rand -base64 32  # JWT_SECRET
openssl rand -base64 32  # ADMIN_JWT_SECRET
openssl rand -base64 32  # API_TOKEN_SALT
openssl rand -base64 32  # TRANSFER_TOKEN_SALT
```

### 2. Обновить apps/cms/.env

Откройте `apps/cms/.env` и замените:
- `APP_KEYS=key1,key2,key3,key4` (4 ключа через запятую)
- `JWT_SECRET=your_generated_key`
- `ADMIN_JWT_SECRET=your_generated_key`
- `API_TOKEN_SALT=your_generated_key`
- `TRANSFER_TOKEN_SALT=your_generated_key`

### 3. Запустить Strapi

```bash
cd apps/cms
npm run develop
```

Откройте `http://localhost:1337/admin` и создайте администратора.

### 4. Запустить Next.js (в новом терминале)

```bash
cd apps/website
npm run dev
```

Откройте `http://localhost:3000`

## 🔧 Полезные команды

```bash
# Проверить статус PostgreSQL
brew services list | grep postgres

# Остановить PostgreSQL
brew services stop postgresql@14

# Запустить PostgreSQL
brew services start postgresql@14

# Подключиться к базе данных
psql -U postgres -d nocko_cms
```

## 📚 Дополнительная документация

- `SETUP_LOCAL.md` - Подробная инструкция по настройке
- `TESTING.md` - Инструкции по тестированию
- `DOCKER.md` - Если захотите использовать Docker




