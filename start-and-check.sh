#!/bin/bash

cd "$(dirname "$0")"

echo "🚀 Запуск и проверка сервисов"
echo "=============================="
echo ""

# Остановить старые
echo "1. Очистка старых процессов..."
pkill -f "strapi develop" 2>/dev/null
pkill -f "next dev" 2>/dev/null
sleep 2

# Запуск Strapi
echo "2. Запуск Strapi..."
cd apps/cms
npm run develop > ../../strapi-output.log 2>&1 &
STRAPI_PID=$!
echo "   PID: $STRAPI_PID"
cd ../..

# Запуск Next.js  
echo "3. Запуск Next.js..."
cd apps/website
npm run dev > ../../nextjs-output.log 2>&1 &
NEXTJS_PID=$!
echo "   PID: $NEXTJS_PID"
cd ../..

echo ""
echo "4. Ожидание 35 секунд..."
for i in {35..1}; do
    echo -ne "\r   Осталось: ${i} секунд"
    sleep 1
done
echo -e "\r   Готово!              "

echo ""
echo "5. Проверка процессов:"
ps aux | grep -E "[s]trapi develop|[n]ext dev" | awk '{print "   PID", $2, "|", $11, $12, $13}'

echo ""
echo "6. Проверка портов:"
if lsof -i :1337 | grep LISTEN > /dev/null 2>&1; then
    echo "   ✅ Порт 1337 занят (Strapi)"
else
    echo "   ❌ Порт 1337 свободен"
fi

if lsof -i :3000 | grep LISTEN > /dev/null 2>&1; then
    echo "   ✅ Порт 3000 занят (Next.js)"
else
    echo "   ❌ Порт 3000 свободен"
fi

echo ""
echo "7. HTTP проверка:"
STRAPI_HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api 2>/dev/null)
NEXTJS_HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)

if [ "$STRAPI_HTTP" = "200" ] || [ "$STRAPI_HTTP" = "403" ] || [ "$STRAPI_HTTP" = "404" ]; then
    echo "   ✅ Strapi отвечает (HTTP $STRAPI_HTTP)"
    echo "      🌐 http://localhost:1337/admin"
else
    echo "   ❌ Strapi не отвечает (HTTP $STRAPI_HTTP)"
    echo "      Лог: tail -20 strapi-output.log"
fi

if [ "$NEXTJS_HTTP" = "200" ]; then
    echo "   ✅ Next.js отвечает (HTTP $NEXTJS_HTTP)"
    echo "      🌐 http://localhost:3000"
else
    echo "   ❌ Next.js не отвечает (HTTP $NEXTJS_HTTP)"
    echo "      Лог: tail -20 nextjs-output.log"
fi

echo ""
echo "8. Открываю ссылки..."
open http://localhost:1337/admin 2>/dev/null
sleep 1
open http://localhost:3000 2>/dev/null

echo ""
echo "✅ Проверка завершена!"
echo ""
echo "Если ссылки не открылись, скопируйте в браузер:"
echo "  http://localhost:1337/admin"
echo "  http://localhost:3000"
echo ""
echo "Логи:"
echo "  tail -f strapi-output.log"
echo "  tail -f nextjs-output.log"





