# Docker Setup Guide

## Быстрый старт

```bash
# 1. Установить зависимости
npm install

# 2. Запустить Docker контейнеры
make docker-up

# 3. Настроить Strapi
cd apps/cms
cp .env.example .env
# Сгенерировать секретные ключи (см. ниже)

# 4. Запустить Strapi
npm run develop

# 5. В другом терминале запустить Next.js
cd apps/website
npm run dev
```

## Docker Compose сервисы

### PostgreSQL
- **Порт:** 5432
- **База данных:** nocko_cms
- **Пользователь:** postgres
- **Пароль:** postgres
- **Volume:** postgres_dev_data (данные сохраняются)

### Redis
- **Порт:** 6379
- **Volume:** redis_dev_data (данные сохраняются)

## Полезные команды

```bash
# Запустить контейнеры
make docker-up
# или
docker-compose -f docker-compose.dev.yml up -d

# Остановить контейнеры
make docker-down
# или
docker-compose -f docker-compose.dev.yml down

# Просмотр логов
make docker-logs
# или
docker-compose -f docker-compose.dev.yml logs -f

# Остановить и удалить volumes (удалит все данные!)
make docker-clean
# или
docker-compose -f docker-compose.dev.yml down -v

# Показать статус
make docker-ps
# или
docker-compose -f docker-compose.dev.yml ps

# Подключиться к PostgreSQL
docker exec -it nocko-postgres-dev psql -U postgres -d nocko_cms

# Подключиться к Redis
docker exec -it nocko-redis-dev redis-cli
```

## Настройка переменных окружения для Docker

### Strapi CMS (.env)

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=nocko_cms
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_SSL=false
```

Если Strapi тоже запускается в Docker, используйте:
```env
DATABASE_HOST=postgres  # имя сервиса в docker-compose
```

## Генерация секретных ключей для Strapi

```bash
# APP_KEYS (нужно 4 ключа через запятую)
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32

# JWT_SECRET
openssl rand -base64 32

# ADMIN_JWT_SECRET
openssl rand -base64 32

# API_TOKEN_SALT
openssl rand -base64 32

# TRANSFER_TOKEN_SALT
openssl rand -base64 32
```

Вставьте сгенерированные ключи в `apps/cms/.env`:

```env
APP_KEYS=key1,key2,key3,key4
JWT_SECRET=your_jwt_secret
ADMIN_JWT_SECRET=your_admin_jwt_secret
API_TOKEN_SALT=your_api_token_salt
TRANSFER_TOKEN_SALT=your_transfer_token_salt
```

## Troubleshooting

### Порт уже занят

Если порт 5432 или 6379 уже занят:

1. Измените порты в `docker-compose.dev.yml`:
```yaml
ports:
  - "5433:5432"  # Внешний:Внутренний
```

2. Обновите `DATABASE_PORT` в `.env` файлах

### Контейнер не запускается

```bash
# Проверить логи
docker-compose -f docker-compose.dev.yml logs postgres

# Пересоздать контейнеры
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up -d
```

### База данных не создается

PostgreSQL автоматически создает базу данных при первом подключении. Если нужно создать вручную:

```bash
docker exec -it nocko-postgres-dev psql -U postgres -c "CREATE DATABASE nocko_cms;"
```

### Очистка данных

```bash
# Удалить все данные (осторожно!)
make docker-clean
```

## Production Docker Setup

Для продакшена используйте `docker-compose.yml` (без `.dev`):

```bash
docker-compose up -d
```

Убедитесь, что:
- Используются правильные пароли
- Настроены SSL сертификаты
- Настроены volumes для бэкапов
- Настроен мониторинг




