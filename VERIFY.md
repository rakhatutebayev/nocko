# ✅ Проверка доступности страниц

## Автоматическая проверка

Выполните скрипт для полной проверки:

```bash
cd /Users/rakhat/Documents/webhosting/nocko-platform
./test-and-open.sh
```

Скрипт:
1. Запустит оба сервиса
2. Подождет их запуска
3. Проверит HTTP доступность
4. Проверит содержимое страниц
5. Откроет ссылки в браузере

## Ручная проверка

### 1. Проверить процессы

```bash
ps aux | grep -E "strapi|next" | grep -v grep
```

### 2. Проверить порты

```bash
lsof -i :1337
lsof -i :3000
```

### 3. Проверить HTTP

```bash
# Strapi
curl -v http://localhost:1337/api

# Next.js
curl -v http://localhost:3000
```

### 4. Проверить содержимое

```bash
# Strapi Admin
curl http://localhost:1337/admin | grep -i "strapi\|admin"

# Next.js Home
curl http://localhost:3000 | grep -i "nocko\|next"
```

### 5. Открыть в браузере

```bash
open http://localhost:1337/admin
open http://localhost:3000
```

## Ожидаемый результат

- ✅ Процессы запущены
- ✅ Порты 1337 и 3000 заняты
- ✅ HTTP запросы возвращают 200/403/404
- ✅ Страницы содержат HTML контент
- ✅ Ссылки открываются в браузере

## Если не работает

1. Проверьте логи: `tail -f strapi-test.log` и `tail -f nextjs-test.log`
2. Убедитесь, что PostgreSQL запущен
3. Проверьте файлы `.env` на наличие всех ключей
4. Попробуйте перезапустить сервисы




