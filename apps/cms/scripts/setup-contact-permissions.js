/**
 * Скрипт для настройки прав доступа для Contact
 * Запустить: node scripts/setup-contact-permissions.js
 */

const Strapi = require('@strapi/strapi');

async function setupContactPermissions() {
  const app = await Strapi().load();
  
  try {
    // Получаем публичную роль
    const publicRole = await app
      .query('plugin::users-permissions.role')
      .findOne({
        where: { type: 'public' },
      });

    if (!publicRole) {
      console.error('❌ Публичная роль не найдена');
      process.exit(1);
    }

    console.log('✅ Найдена публичная роль:', publicRole.id);

    // Проверяем существующие права для Contact
    const existingPermissions = await app
      .query('plugin::users-permissions.permission')
      .findMany({
        where: {
          role: publicRole.id,
          action: {
            $contains: 'api::contact.contact',
          },
        },
      });

    console.log('📋 Найдено прав для Contact:', existingPermissions.length);

    // Проверяем право на create
    const createPermission = existingPermissions.find(
      p => p.action === 'api::contact.contact.create'
    );

    if (createPermission) {
      if (createPermission.enabled) {
        console.log('✅ Право "create" уже включено');
      } else {
        // Включаем право
        await app
          .query('plugin::users-permissions.permission')
          .update({
            where: { id: createPermission.id },
            data: { enabled: true },
          });
        console.log('✅ Право "create" включено');
      }
    } else {
      // Создаем новое право
      await app
        .query('plugin::users-permissions.permission')
        .create({
          data: {
            action: 'api::contact.contact.create',
            role: publicRole.id,
            enabled: true,
          },
        });
      console.log('✅ Право "create" создано и включено');
    }

    console.log('\n✅ Права доступа для Contact настроены успешно!');
    await app.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Ошибка при настройке прав:', error);
    await app.destroy();
    process.exit(1);
  }
}

setupContactPermissions();


