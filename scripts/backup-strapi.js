/**
 * Backup script for Strapi database and uploads
 * 
 * Usage:
 *   node scripts/backup-strapi.js [output-dir]
 * 
 * Prerequisites:
 *   - PostgreSQL client tools (pg_dump)
 *   - Access to database
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5432';
const DB_NAME = process.env.DB_NAME || 'nocko_cms';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';

const UPLOADS_DIR = process.env.UPLOADS_DIR || './apps/cms/public/uploads';
const OUTPUT_DIR = process.argv[2] || './backups';

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const dbBackupFile = path.join(OUTPUT_DIR, `strapi-db-${timestamp}.sql`);
const uploadsBackupFile = path.join(OUTPUT_DIR, `strapi-uploads-${timestamp}.tar.gz`);

console.log('📦 Starting Strapi backup...\n');

// Backup database
console.log('💾 Backing up database...');
try {
  const pgDumpCmd = `PGPASSWORD=${DB_PASSWORD} pg_dump -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} -d ${DB_NAME} -F c -f ${dbBackupFile}`;
  execSync(pgDumpCmd, { stdio: 'inherit' });
  console.log(`✅ Database backup created: ${dbBackupFile}\n`);
} catch (error) {
  console.error('❌ Database backup failed:', error.message);
  process.exit(1);
}

// Backup uploads
console.log('📁 Backing up uploads...');
try {
  if (fs.existsSync(UPLOADS_DIR)) {
    const tarCmd = `tar -czf ${uploadsBackupFile} -C ${path.dirname(UPLOADS_DIR)} ${path.basename(UPLOADS_DIR)}`;
    execSync(tarCmd, { stdio: 'inherit' });
    console.log(`✅ Uploads backup created: ${uploadsBackupFile}\n`);
  } else {
    console.log(`⚠️  Uploads directory not found: ${UPLOADS_DIR}\n`);
  }
} catch (error) {
  console.error('❌ Uploads backup failed:', error.message);
  process.exit(1);
}

console.log('✅ Backup completed successfully!');
console.log(`\n📂 Backup location: ${OUTPUT_DIR}`);
console.log(`   - Database: ${path.basename(dbBackupFile)}`);
console.log(`   - Uploads: ${path.basename(uploadsBackupFile)}`);



