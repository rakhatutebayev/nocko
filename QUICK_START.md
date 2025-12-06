# Быстрый старт

## Шаг 1: Запустить Docker

**Важно:** Убедитесь, что Docker Desktop запущен на вашем Mac.

```bash
# Проверить, что Docker работает
docker ps

# Если ошибка "Cannot connect to Docker daemon", запустите Docker Desktop
```

## Шаг 2: Запустить контейнеры

```bash
cd /Users/rakhat/Documents/webhosting/nocko-platform

# Запустить PostgreSQL и Redis
make docker-up

# Или вручную:
docker-compose -f docker-compose.dev.yml up -d
```

## Шаг 3: Проверить статус

```bash
# Проверить, что контейнеры запущены
make docker-ps

# Проверить логи
make docker-logs
```

## Шаг 4: Настроить Strapi

```bash
cd apps/cms

# Скопировать .env.example
cp .env.example .env

# Сгенерировать секретные ключи
# APP_KEYS (4 ключа через запятую):
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32

# JWT_SECRET:
openssl rand -base64 32

# ADMIN_JWT_SECRET:
openssl rand -base64 32

# API_TOKEN_SALT:
openssl rand -base64 32

# TRANSFER_TOKEN_SALT:
openssl rand -base64 32
```

Вставьте сгенерированные ключи в `apps/cms/.env`.

## Шаг 5: Запустить Strapi

```bash
cd apps/cms
npm run develop
```

Откройте `http://localhost:1337/admin` и создайте администратора.

## Шаг 6: Запустить Next.js

В новом терминале:

```bash
cd apps/website
npm run dev
```

Откройте `http://localhost:3000`

## Полезные команды

```bash
# Остановить контейнеры
make docker-down

# Показать логи
make docker-logs

# Очистить все (удалит данные!)
make docker-clean
```

## Troubleshooting

### Docker не запускается

1. Убедитесь, что Docker Desktop установлен и запущен
2. Проверьте: `docker ps` должен работать без ошибок

### Порт занят

Если порт 5432 или 6379 занят, измените в `docker-compose.dev.yml`:

```yaml
ports:
  - "5433:5432"  # Внешний:Внутренний
```

### База данных не создается

PostgreSQL создаст базу автоматически. Если нужно вручную:

```bash
docker exec -it nocko-postgres-dev psql -U postgres -c "CREATE DATABASE nocko_cms;"
```





