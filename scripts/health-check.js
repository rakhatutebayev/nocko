/**
 * Health check script for all services
 * 
 * Usage:
 *   node scripts/health-check.js
 */

const services = {
  website: process.env.WEBSITE_URL || 'http://localhost:3000',
  cms: process.env.CMS_URL || 'http://localhost:1337',
  cmsAdmin: process.env.CMS_ADMIN_URL || 'http://localhost:1337/admin',
  cmsAPI: process.env.CMS_API_URL || 'http://localhost:1337/api/services',
};

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

async function checkService(name, url, options = {}) {
  try {
    const startTime = Date.now();
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: options.headers || {},
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    if (response.ok || (options.expectedStatus && response.status === options.expectedStatus)) {
      console.log(`${colors.green}✅${colors.reset} ${name}: OK (${responseTime}ms) - ${response.status}`);
      return { success: true, responseTime, status: response.status };
    } else {
      console.log(`${colors.yellow}⚠️${colors.reset} ${name}: ${response.status} (${responseTime}ms)`);
      return { success: false, responseTime, status: response.status };
    }
  } catch (error) {
    console.log(`${colors.red}❌${colors.reset} ${name}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function checkDatabase() {
  try {
    // Check if PostgreSQL is accessible via Strapi API
    const response = await fetch(services.cmsAPI);
    if (response.ok) {
      console.log(`${colors.green}✅${colors.reset} Database: Connected (via Strapi API)`);
      return { success: true };
    } else {
      console.log(`${colors.yellow}⚠️${colors.reset} Database: Cannot verify (Strapi API returned ${response.status})`);
      return { success: false };
    }
  } catch (error) {
    console.log(`${colors.red}❌${colors.reset} Database: ${error.message}`);
    return { success: false };
  }
}

async function runHealthCheck() {
  console.log(`${colors.blue}🔍 Health Check - NOCKO Platform${colors.reset}\n`);
  console.log('Checking services...\n');

  const results = {
    website: await checkService('Next.js Website', services.website),
    cmsAdmin: await checkService('Strapi Admin', services.cmsAdmin),
    cmsAPI: await checkService('Strapi API', services.cmsAPI),
    database: await checkDatabase(),
  };

  console.log('\n' + '='.repeat(50));
  console.log(`${colors.blue}📊 Summary${colors.reset}\n`);

  const allHealthy = Object.values(results).every(r => r.success);
  
  if (allHealthy) {
    console.log(`${colors.green}✅ All services are healthy!${colors.reset}\n`);
  } else {
    console.log(`${colors.yellow}⚠️ Some services have issues${colors.reset}\n`);
    
    Object.entries(results).forEach(([name, result]) => {
      if (!result.success) {
        console.log(`${colors.red}❌${colors.reset} ${name}: ${result.error || 'Failed'}`);
      }
    });
  }

  console.log('\n' + '='.repeat(50));
  console.log('\n💡 Tips:');
  console.log('  - If services are down, run: docker compose up -d');
  console.log('  - Check logs: docker compose logs');
  console.log('  - Restart service: docker compose restart <service-name>');
  
  process.exit(allHealthy ? 0 : 1);
}

// Run health check
runHealthCheck();




