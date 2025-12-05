#!/bin/bash

echo "🚀 Запуск всех сервисов NOCKO Platform"
echo "======================================"
echo ""

# Проверка PostgreSQL
echo "1. Проверка PostgreSQL..."
if psql -U postgres -d nocko_cms -c "SELECT 1;" > /dev/null 2>&1; then
    echo "   ✅ PostgreSQL работает"
else
    echo "   ❌ PostgreSQL не доступен"
    echo "   Запустите: brew services start postgresql@14"
    exit 1
fi
echo ""

# Проверка Strapi
echo "2. Проверка Strapi..."
if lsof -i :1337 | grep LISTEN > /dev/null 2>&1; then
    echo "   ✅ Strapi уже запущен"
    STRAPI_RUNNING=true
else
    echo "   ⚠️  Strapi не запущен, запускаю..."
    cd apps/cms
    npm run develop > /tmp/strapi.log 2>&1 &
    STRAPI_PID=$!
    echo "   Strapi запускается (PID: $STRAPI_PID)"
    STRAPI_RUNNING=false
    cd ../..
fi
echo ""

# Проверка Next.js
echo "3. Проверка Next.js..."
if lsof -i :3000 | grep LISTEN > /dev/null 2>&1; then
    echo "   ✅ Next.js уже запущен"
    NEXTJS_RUNNING=true
else
    echo "   ⚠️  Next.js не запущен, запускаю..."
    cd apps/website
    npm run dev > /tmp/nextjs.log 2>&1 &
    NEXTJS_PID=$!
    echo "   Next.js запускается (PID: $NEXTJS_PID)"
    NEXTJS_RUNNING=false
    cd ../..
fi
echo ""

# Ожидание запуска
if [ "$STRAPI_RUNNING" = false ] || [ "$NEXTJS_RUNNING" = false ]; then
    echo "4. Ожидание запуска сервисов..."
    sleep 15
fi
echo ""

# Проверка доступности
echo "5. Проверка доступности..."
STRAPI_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api 2>/dev/null)
NEXTJS_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)

if echo "$STRAPI_CODE" | grep -E "200|403|404" > /dev/null; then
    echo "   ✅ Strapi работает (HTTP $STRAPI_CODE)"
    echo "   🌐 http://localhost:1337/admin"
else
    echo "   ❌ Strapi не отвечает (HTTP $STRAPI_CODE)"
fi

if [ "$NEXTJS_CODE" = "200" ]; then
    echo "   ✅ Next.js работает (HTTP $NEXTJS_CODE)"
    echo "   🌐 http://localhost:3000"
else
    echo "   ❌ Next.js не отвечает (HTTP $NEXTJS_CODE)"
fi
echo ""

# Открытие ссылок
echo "6. Открываю ссылки в браузере..."
sleep 2
open http://localhost:1337/admin 2>/dev/null
sleep 1
open http://localhost:3000 2>/dev/null
echo "   ✅ Ссылки открыты"
echo ""

echo "✅ Готово!"
echo ""
echo "Сервисы запущены в фоне."
echo "Логи:"
echo "  Strapi: tail -f /tmp/strapi.log"
echo "  Next.js: tail -f /tmp/nextjs.log"
echo ""
echo "Остановить сервисы:"
echo "  pkill -f 'strapi develop'"
echo "  pkill -f 'next dev'"




