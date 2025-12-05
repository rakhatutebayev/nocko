# Troubleshooting Guide

## Common Issues and Solutions

### WebSocket Connection Errors (Port 5173)

**Symptoms:**
```
WebSocket connection to 'ws://localhost:5173/admin/?token=...' failed
Failed to load resource: net::ERR_CONNECTION_REFUSED
```

**Explanation:**
Strapi в режиме разработки (`develop`) пытается подключиться к Vite dev server на порту 5173 для Hot Module Replacement (HMR). Эти ошибки **не критичны** и не мешают работе админ-панели.

**Solutions:**

1. **Игнорируйте ошибки** - админ-панель должна работать нормально
2. **Очистите кэш браузера:**
   - Chrome/Edge: Ctrl+Shift+Delete (Windows) или Cmd+Shift+Delete (Mac)
   - Firefox: Ctrl+Shift+Delete
3. **Используйте режим инкогнито** для проверки
4. **Перезагрузите страницу** после полной загрузки Strapi (30-60 секунд)

### Admin Panel Not Loading

**Symptoms:**
- Белый экран
- Ошибки в консоли браузера
- HTTP 500 ошибки

**Solutions:**

1. **Проверьте, что Strapi запущен:**
   ```bash
   docker compose ps
   docker compose logs cms
   ```

2. **Очистите кэш Strapi:**
   ```bash
   docker compose exec cms rm -rf /opt/app/.cache /opt/app/.strapi
   docker compose restart cms
   ```

3. **Проверьте файл app.tsx:**
   - Убедитесь, что существует только `src/admin/app.tsx`
   - Удалите `src/admin/app.js` если он существует

4. **Пересоберите админ-панель:**
   ```bash
   docker compose exec cms npm run build
   docker compose restart cms
   ```

### "default is not exported" Error

**Symptoms:**
```
The requested module '/admin/src/admin/app.js' does not provide an export named 'default'
```

**Solution:**

1. **Удалите app.js:**
   ```bash
   rm apps/cms/src/admin/app.js
   ```

2. **Оставьте только app.tsx:**
   - Убедитесь, что `apps/cms/src/admin/app.tsx` существует
   - Он должен экспортировать `export default { ... }`

3. **Очистите кэш и перезапустите:**
   ```bash
   docker compose exec cms rm -rf /opt/app/.cache /opt/app/.strapi
   docker compose restart cms
   ```

### Database Connection Issues

**Symptoms:**
- Strapi не запускается
- Ошибки подключения к PostgreSQL

**Solutions:**

1. **Проверьте, что PostgreSQL запущен:**
   ```bash
   docker compose ps postgres
   ```

2. **Проверьте переменные окружения:**
   ```bash
   docker compose exec cms env | grep DATABASE
   ```

3. **Проверьте логи:**
   ```bash
   docker compose logs postgres
   docker compose logs cms
   ```

### Port Already in Use

**Symptoms:**
- Ошибка "port already in use"
- Сервис не запускается

**Solutions:**

1. **Найдите процесс, использующий порт:**
   ```bash
   # Для порта 1337 (Strapi)
   lsof -i :1337
   
   # Для порта 3000 (Next.js)
   lsof -i :3000
   ```

2. **Остановите процесс или измените порт в docker-compose.yml**

### Images Not Loading

**Symptoms:**
- Изображения не отображаются
- 404 ошибки для изображений

**Solutions:**

1. **Проверьте, что изображения в правильной директории:**
   ```bash
   ls -la apps/website/public/images/
   ```

2. **Проверьте пути в компонентах:**
   - Должны начинаться с `/images/...`

3. **Перезапустите Next.js:**
   ```bash
   docker compose restart website
   ```

### API Not Responding

**Symptoms:**
- 404 ошибки при запросах к API
- Контент не загружается

**Solutions:**

1. **Проверьте API permissions:**
   - Откройте Strapi Admin
   - Settings → Users & Permissions → Roles → Public
   - Убедитесь, что `find` и `findOne` включены для всех content types

2. **Проверьте, что контент опубликован:**
   - В Strapi Admin убедитесь, что контент имеет статус "Published"

3. **Проверьте API URL:**
   ```bash
   curl http://localhost:1337/api/services
   ```

## Getting Help

1. **Проверьте логи:**
   ```bash
   docker compose logs -f
   ```

2. **Запустите health check:**
   ```bash
   make health-check
   ```

3. **Проверьте документацию:**
   - [SETUP_GUIDE.md](./SETUP_GUIDE.md)
   - [DEPLOYMENT.md](./DEPLOYMENT.md)
