/**
 * Migration script to import content from HTML files to Strapi CMS
 * 
 * Usage:
 *   node scripts/migrate-content-to-strapi.js
 * 
 * Prerequisites:
 *   - Strapi must be running
 *   - Admin account must be created
 *   - API token must be set in STRAPI_API_TOKEN env variable
 */

const fs = require('fs');
const path = require('path');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!API_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN environment variable is required');
  process.exit(1);
}

// Helper function to fetch API
async function fetchAPI(endpoint, options = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Helper to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Sample services data (you can extend this to read from HTML files)
const servicesData = [
  {
    title: 'Structured Cabling',
    slug: 'structured-cabling',
    description: 'Professional structured cabling solutions for businesses across UAE. Certified installations, reliable infrastructure, and scalable network solutions.',
    features: [
      { title: 'Certified Installation', description: 'Industry-standard cabling with certified technicians' },
      { title: 'Scalable Solutions', description: 'Infrastructure that grows with your business' },
      { title: '24/7 Support', description: 'Round-the-clock technical support' },
    ],
  },
  {
    title: 'IT Support & Helpdesk',
    slug: 'it-support',
    description: 'Comprehensive IT support and helpdesk services for businesses in Dubai, Abu Dhabi, and across UAE.',
    features: [
      { title: 'Remote Support', description: 'Quick resolution via remote access' },
      { title: 'On-Site Support', description: 'Expert technicians when needed' },
      { title: 'Proactive Monitoring', description: 'Prevent issues before they occur' },
    ],
  },
  {
    title: 'Managed IT Services',
    slug: 'managed-it',
    description: 'Complete managed IT services to keep your business running smoothly. Proactive monitoring, maintenance, and support.',
    features: [
      { title: 'Proactive Management', description: 'Prevent issues before they impact business' },
      { title: 'Cost Predictability', description: 'Fixed monthly costs' },
      { title: 'Expert Team', description: 'Dedicated IT professionals' },
    ],
  },
  {
    title: 'IT AMC',
    slug: 'it-amc',
    description: 'Annual Maintenance Contracts for IT infrastructure. Comprehensive coverage, predictable costs, and peace of mind.',
    features: [
      { title: 'Comprehensive Coverage', description: 'All IT infrastructure included' },
      { title: 'Predictable Costs', description: 'Fixed annual pricing' },
      { title: 'Priority Support', description: 'Fast response times' },
    ],
  },
  {
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Advanced cybersecurity solutions to protect your business from threats. Firewalls, antivirus, and security monitoring.',
    features: [
      { title: 'Threat Protection', description: 'Multi-layered security approach' },
      { title: '24/7 Monitoring', description: 'Continuous threat detection' },
      { title: 'Compliance', description: 'Meet regulatory requirements' },
    ],
  },
  {
    title: 'Cloud & Data Services',
    slug: 'cloud',
    description: 'Cloud migration, data backup, and cloud infrastructure services. Secure, scalable, and reliable cloud solutions.',
    features: [
      { title: 'Cloud Migration', description: 'Seamless transition to cloud' },
      { title: 'Data Backup', description: 'Automated backup solutions' },
      { title: 'Scalability', description: 'Scale resources as needed' },
    ],
  },
  {
    title: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Strategic IT consulting to help your business make informed technology decisions. Architecture, planning, and implementation.',
    features: [
      { title: 'Strategic Planning', description: 'Long-term IT roadmap' },
      { title: 'Technology Assessment', description: 'Evaluate current infrastructure' },
      { title: 'Implementation Support', description: 'Expert guidance throughout' },
    ],
  },
];

// Sample industries data
const industriesData = [
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'IT solutions for large enterprises across UAE. Scalable infrastructure, enterprise-grade security, and dedicated support.',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Healthcare IT solutions with HIPAA compliance, secure patient data management, and 24/7 critical system support.',
  },
  {
    name: 'Finance & Banking',
    slug: 'finance',
    description: 'Secure IT infrastructure for financial institutions. Compliance, security, and high-availability systems.',
  },
  {
    name: 'Education',
    slug: 'education',
    description: 'Technology solutions for schools and universities. E-learning platforms, network infrastructure, and student management systems.',
  },
  {
    name: 'Retail & Hospitality',
    slug: 'retail',
    description: 'Point-of-sale systems, inventory management, and customer engagement solutions for retail and hospitality businesses.',
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    description: 'IT solutions for logistics and supply chain management. Warehouse management, tracking systems, and fleet management.',
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Industrial IT solutions for manufacturing. Automation, IoT integration, and production management systems.',
  },
];

// Sample case studies data
const caseStudiesData = [
  {
    title: 'Scalini Restaurant - Network Infrastructure',
    slug: 'scalini',
    client: 'Scalini Restaurant',
    industry: 'Retail & Hospitality',
    service: 'Structured Cabling',
    challenge: 'Scalini Restaurant needed a reliable network infrastructure to support their POS systems, kitchen displays, and guest WiFi across multiple locations.',
    solution: 'We designed and installed a comprehensive structured cabling system with redundant connections, ensuring 99.9% uptime for critical operations.',
    results: {
      uptime: '99.9%',
      locations: '3',
      responseTime: '< 1 hour',
    },
    testimonial: 'NOCKO delivered exactly what we needed. Our network has been rock-solid since day one.',
  },
  {
    title: 'GSS - Managed IT Services',
    slug: 'gss',
    client: 'Global Service Solution',
    industry: 'Enterprise',
    service: 'Managed IT Services',
    challenge: 'GSS required comprehensive IT management across multiple offices in UAE.',
    solution: 'We implemented a complete managed IT solution with proactive monitoring, automated backups, and 24/7 support.',
    results: {
      offices: '5',
      users: '150+',
      responseTime: '< 30 minutes',
    },
    testimonial: 'Professional service and excellent support. Highly recommended.',
  },
];

/**
 * Migrate services to Strapi
 */
async function migrateServices() {
  console.log('📦 Migrating services...');
  
  for (const service of servicesData) {
    try {
      const data = {
        data: {
          title: service.title,
          slug: service.slug,
          description: service.description,
          features: service.features || [],
          publishedAt: new Date().toISOString(),
        },
      };

      const response = await fetchAPI('/services', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      console.log(`  ✅ Created service: ${service.title}`);
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('unique')) {
        console.log(`  ⚠️  Service already exists: ${service.title}`);
      } else {
        console.error(`  ❌ Error creating service ${service.title}:`, error.message);
      }
    }
  }
}

/**
 * Migrate industries to Strapi
 */
async function migrateIndustries() {
  console.log('🏭 Migrating industries...');
  
  for (const industry of industriesData) {
    try {
      const data = {
        data: {
          name: industry.name,
          slug: industry.slug,
          description: industry.description,
          publishedAt: new Date().toISOString(),
        },
      };

      const response = await fetchAPI('/industries', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      console.log(`  ✅ Created industry: ${industry.name}`);
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('unique')) {
        console.log(`  ⚠️  Industry already exists: ${industry.name}`);
      } else {
        console.error(`  ❌ Error creating industry ${industry.name}:`, error.message);
      }
    }
  }
}

/**
 * Migrate case studies to Strapi
 */
async function migrateCaseStudies() {
  console.log('📚 Migrating case studies...');
  
  // First, get service IDs
  const servicesResponse = await fetchAPI('/services');
  const services = servicesResponse.data || [];
  const serviceMap = {};
  services.forEach(s => {
    serviceMap[s.attributes.slug] = s.id;
  });

  for (const caseStudy of caseStudiesData) {
    try {
      const serviceId = serviceMap[caseStudy.service];
      
      const data = {
        data: {
          title: caseStudy.title,
          slug: caseStudy.slug,
          client: caseStudy.client,
          industry: caseStudy.industry,
          challenge: caseStudy.challenge,
          solution: caseStudy.solution,
          results: caseStudy.results,
          testimonial: caseStudy.testimonial,
          service: serviceId ? { id: serviceId } : null,
          publishedAt: new Date().toISOString(),
        },
      };

      const response = await fetchAPI('/case-studies', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      console.log(`  ✅ Created case study: ${caseStudy.title}`);
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('unique')) {
        console.log(`  ⚠️  Case study already exists: ${caseStudy.title}`);
      } else {
        console.error(`  ❌ Error creating case study ${caseStudy.title}:`, error.message);
      }
    }
  }
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🚀 Starting content migration to Strapi...\n');
  console.log(`📍 Strapi URL: ${STRAPI_URL}\n`);

  try {
    // Test connection
    await fetchAPI('/services');
    console.log('✅ Connected to Strapi API\n');
  } catch (error) {
    console.error('❌ Cannot connect to Strapi API:', error.message);
    console.error('   Make sure Strapi is running and API token is correct');
    process.exit(1);
  }

  try {
    await migrateServices();
    console.log('');
    await migrateIndustries();
    console.log('');
    await migrateCaseStudies();
    console.log('');
    console.log('✅ Migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();



