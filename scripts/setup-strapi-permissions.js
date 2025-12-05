/**
 * Script to setup Strapi API permissions for public access
 * 
 * Usage:
 *   node scripts/setup-strapi-permissions.js
 * 
 * Prerequisites:
 *   - Strapi must be running
 *   - Admin account must be created
 *   - API token must be set in STRAPI_API_TOKEN env variable
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!API_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN environment variable is required');
  process.exit(1);
}

// Content types that need public read access
const CONTENT_TYPES = [
  'page',
  'service',
  'case-study',
  'article',
  'industry',
];

// Actions to enable
const ACTIONS = ['find', 'findOne'];

/**
 * Setup permissions for a content type
 */
async function setupPermissions(contentType) {
  console.log(`📝 Setting up permissions for ${contentType}...`);

  try {
    // Get current permissions
    const response = await fetch(`${STRAPI_URL}/api/users-permissions/permissions`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch permissions: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Find public role
    const publicRole = data.roles?.find(role => role.type === 'public');
    if (!publicRole) {
      console.error(`  ❌ Public role not found`);
      return;
    }

    // Update permissions
    const permissions = {};
    
    CONTENT_TYPES.forEach(ct => {
      const apiName = ct.replace('-', '');
      ACTIONS.forEach(action => {
        const key = `api::${apiName}.${apiName}.${action}`;
        permissions[key] = {
          enabled: true,
          policy: '',
        };
      });
    });

    // Also enable upload permissions
    permissions['plugin::upload.read'] = { enabled: true, policy: '' };

    const updateResponse = await fetch(`${STRAPI_URL}/api/users-permissions/permissions`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        permissions,
      }),
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.text();
      throw new Error(`Failed to update permissions: ${error}`);
    }

    console.log(`  ✅ Permissions updated for ${contentType}`);
  } catch (error) {
    console.error(`  ❌ Error setting permissions for ${contentType}:`, error.message);
  }
}

/**
 * Main setup function
 */
async function setup() {
  console.log('🔐 Setting up Strapi API permissions...\n');
  console.log(`📍 Strapi URL: ${STRAPI_URL}\n`);

  try {
    // Test connection
    const testResponse = await fetch(`${STRAPI_URL}/api/users-permissions/permissions`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });

    if (!testResponse.ok) {
      throw new Error(`Cannot connect to Strapi: ${testResponse.statusText}`);
    }

    console.log('✅ Connected to Strapi API\n');

    // Setup permissions for all content types
    for (const contentType of CONTENT_TYPES) {
      await setupPermissions(contentType);
    }

    console.log('\n✅ Permissions setup completed!');
    console.log('\n📋 Next steps:');
    console.log('   1. Go to Strapi Admin: http://localhost:1337/admin');
    console.log('   2. Settings → Users & Permissions → Roles → Public');
    console.log('   3. Verify that "find" and "findOne" are enabled for all content types');
    console.log('   4. Save the changes');
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.error('\n💡 Manual setup:');
    console.error('   1. Go to Strapi Admin: http://localhost:1337/admin');
    console.error('   2. Settings → Users & Permissions → Roles → Public');
    console.error('   3. Enable "find" and "findOne" for:');
    CONTENT_TYPES.forEach(ct => {
      console.error(`      - ${ct}`);
    });
    process.exit(1);
  }
}

// Run setup
setup();



