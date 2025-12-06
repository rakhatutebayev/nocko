#!/bin/bash

cd "$(dirname "$0")"

echo "🧪 Тестирование и открытие страниц"
echo "==================================="
echo ""

# Остановить старые
pkill -f "strapi develop" 2>/dev/null
pkill -f "next dev" 2>/dev/null
sleep 2

# Запуск Strapi
echo "1. Запуск Strapi..."
cd apps/cms
npm run develop > ../../strapi-test.log 2>&1 &
STRAPI_PID=$!
cd ../..
echo "   PID: $STRAPI_PID"
sleep 25

# Проверка Strapi
echo ""
echo "2. Проверка Strapi..."
STRAPI_HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api 2>/dev/null)
if [ "$STRAPI_HTTP" = "200" ] || [ "$STRAPI_HTTP" = "403" ] || [ "$STRAPI_HTTP" = "404" ]; then
    echo "   ✅ Strapi работает (HTTP $STRAPI_HTTP)"
    STRAPI_HTML=$(curl -s http://localhost:1337/admin 2>/dev/null)
    if echo "$STRAPI_HTML" | grep -i "strapi\|admin" > /dev/null; then
        echo "   ✅ Страница /admin доступна"
        open http://localhost:1337/admin
        echo "   ✅ Ссылка открыта"
    else
        echo "   ⚠️ Страница /admin не загружается"
    fi
else
    echo "   ❌ Strapi не работает (HTTP $STRAPI_HTTP)"
    echo "   Лог: tail -20 strapi-test.log"
fi

# Запуск Next.js
echo ""
echo "3. Запуск Next.js..."
cd apps/website
npm run dev > ../../nextjs-test.log 2>&1 &
NEXTJS_PID=$!
cd ../..
echo "   PID: $NEXTJS_PID"
sleep 30

# Проверка Next.js
echo ""
echo "4. Проверка Next.js..."
NEXTJS_HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)
if [ "$NEXTJS_HTTP" = "200" ]; then
    echo "   ✅ Next.js работает (HTTP $NEXTJS_HTTP)"
    NEXTJS_HTML=$(curl -s http://localhost:3000 2>/dev/null)
    if echo "$NEXTJS_HTML" | grep -i "nocko\|next" > /dev/null; then
        echo "   ✅ Главная страница доступна"
        TITLE=$(echo "$NEXTJS_HTML" | grep -o "<title>.*</title>" | head -1)
        echo "   Заголовок: $TITLE"
        open http://localhost:3000
        echo "   ✅ Ссылка открыта"
    else
        echo "   ⚠️ Страница не содержит контент"
    fi
else
    echo "   ❌ Next.js не работает (HTTP $NEXTJS_HTTP)"
    echo "   Лог: tail -20 nextjs-test.log"
fi

echo ""
echo "✅ Тестирование завершено!"
echo ""
echo "Процессы запущены в фоне."
echo "Остановить: pkill -f 'strapi develop' && pkill -f 'next dev'"





