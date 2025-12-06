#!/bin/bash

echo "🧪 Тестирование сервисов NOCKO Platform"
echo "========================================"
echo ""

# Тест Strapi
echo "1. Тестирование Strapi..."
cd apps/cms
npm run develop > /tmp/strapi-test.log 2>&1 &
STRAPI_PID=$!
sleep 15

if curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api | grep -E "200|403|404" > /dev/null; then
    echo "   ✅ Strapi работает!"
    echo "   🌐 http://localhost:1337/admin"
    curl -s http://localhost:1337/api | head -3
else
    echo "   ❌ Strapi не отвечает"
    tail -10 /tmp/strapi-test.log
fi

kill $STRAPI_PID 2>/dev/null
wait $STRAPI_PID 2>/dev/null
echo ""

# Тест Next.js
echo "2. Тестирование Next.js..."
cd ../website
npm run dev > /tmp/nextjs-test.log 2>&1 &
NEXTJS_PID=$!
sleep 20

if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep "200" > /dev/null; then
    echo "   ✅ Next.js работает!"
    echo "   🌐 http://localhost:3000"
    curl -s http://localhost:3000 | grep -o "<title>.*</title>" | head -1
else
    echo "   ❌ Next.js не отвечает"
    tail -10 /tmp/nextjs-test.log
fi

kill $NEXTJS_PID 2>/dev/null
wait $NEXTJS_PID 2>/dev/null
echo ""

echo "✅ Тестирование завершено!"
echo ""
echo "Для запуска сервисов:"
echo "  Терминал 1: cd apps/cms && npm run develop"
echo "  Терминал 2: cd apps/website && npm run dev"





