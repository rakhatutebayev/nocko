#!/bin/bash
echo "📊 Статус сервисов NOCKO Platform"
echo "================================="
echo ""

# Проверка процессов
echo "Запущенные процессы:"
ps aux | grep -E "[n]ext dev|[s]trapi develop" | awk '{print "  PID:", $2, "|", $11, $12, $13, $14}' || echo "  Нет запущенных процессов"
echo ""

# Проверка портов
echo "Порты:"
if lsof -i :1337 | grep LISTEN > /dev/null 2>&1; then
    echo "  ✅ Порт 1337 (Strapi) - занят"
else
    echo "  ❌ Порт 1337 (Strapi) - свободен"
fi

if lsof -i :3000 | grep LISTEN > /dev/null 2>&1; then
    echo "  ✅ Порт 3000 (Next.js) - занят"
else
    echo "  ❌ Порт 3000 (Next.js) - свободен"
fi
echo ""

# Проверка HTTP
echo "HTTP доступность:"
STRAPI_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api 2>/dev/null)
if [ "$STRAPI_CODE" = "200" ] || [ "$STRAPI_CODE" = "403" ] || [ "$STRAPI_CODE" = "404" ]; then
    echo "  ✅ Strapi отвечает (HTTP $STRAPI_CODE)"
    echo "     🌐 http://localhost:1337/admin"
else
    echo "  ❌ Strapi не отвечает (HTTP $STRAPI_CODE)"
fi

NEXTJS_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)
if [ "$NEXTJS_CODE" = "200" ]; then
    echo "  ✅ Next.js отвечает (HTTP $NEXTJS_CODE)"
    echo "     🌐 http://localhost:3000"
else
    echo "  ❌ Next.js не отвечает (HTTP $NEXTJS_CODE)"
fi
echo ""

# Логи
echo "Последние логи:"
echo "  Strapi: tail -f /tmp/strapi.log"
echo "  Next.js: tail -f /tmp/nextjs.log"
echo ""

# Команды управления
echo "Управление:"
echo "  Остановить все: pkill -f 'strapi develop' && pkill -f 'next dev'"
echo "  Открыть ссылки: ./open-links.sh"
echo "  Перезапустить: ./quick-start.sh"




