/**
 * Скрипт для проверки и настройки прав доступа для Menu в Strapi
 * Запуск: node scripts/check-menu-permissions.js
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const ADMIN_JWT = process.env.STRAPI_ADMIN_JWT || '';

async function checkMenuAPI() {
  console.log('🔍 Проверка API меню...\n');
  
  try {
    const response = await fetch(`${STRAPI_URL}/api/menu`);
    const data = await response.json();
    
    console.log(`HTTP Status: ${response.status}`);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (response.status === 404) {
      console.log('\n❌ Меню не найдено (404)');
      console.log('Возможные причины:');
      console.log('1. Меню не создано в Content Manager');
      console.log('2. Меню не опубликовано (только Draft)');
      console.log('3. Права доступа не настроены');
    } else if (response.status === 403) {
      console.log('\n❌ Доступ запрещен (403)');
      console.log('Проблема с правами доступа!');
      console.log('Настройте права: Settings → Roles → Public → Single Types → Main Menu');
    } else if (response.status === 200) {
      console.log('\n✅ Меню доступно!');
      if (data.data) {
        console.log(`Количество пунктов меню: ${data.data.attributes?.items?.length || 0}`);
      }
    }
  } catch (error) {
    console.error('Ошибка при проверке API:', error.message);
  }
}

async function checkPermissions() {
  if (!ADMIN_JWT) {
    console.log('\n⚠️  ADMIN_JWT не установлен, пропускаю проверку прав');
    return;
  }
  
  console.log('\n🔍 Проверка прав доступа...\n');
  
  try {
    const response = await fetch(`${STRAPI_URL}/api/users-permissions/roles`, {
      headers: {
        'Authorization': `Bearer ${ADMIN_JWT}`,
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    const publicRole = data.find(role => role.type === 'public');
    
    if (publicRole) {
      console.log('Public Role найден');
      const menuPermissions = publicRole.permissions?.filter(p => 
        p.action.includes('menu') || p.action.includes('api::menu')
      );
      
      if (menuPermissions && menuPermissions.length > 0) {
        console.log('Права для Menu:', menuPermissions);
      } else {
        console.log('❌ Права для Menu не найдены!');
      }
    }
  } catch (error) {
    console.error('Ошибка при проверке прав:', error.message);
  }
}

async function main() {
  console.log('📋 Проверка настроек Menu в Strapi\n');
  console.log(`Strapi URL: ${STRAPI_URL}\n`);
  
  await checkMenuAPI();
  await checkPermissions();
  
  console.log('\n📝 Инструкция по настройке:');
  console.log('1. Откройте: http://localhost:1337/admin');
  console.log('2. Settings → Users & Permissions → Roles → Public');
  console.log('3. Найдите раздел "Single Types"');
  console.log('4. Включите все опции для "Main Menu"');
  console.log('5. Нажмите "Save"');
}

main();



