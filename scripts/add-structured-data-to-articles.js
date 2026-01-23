#!/usr/bin/env node

/**
 * Script to add StructuredData component to all article pages
 * Adds JSON-LD Article schema for better SEO
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const articlesDir = path.join(__dirname, '../apps/website/app/articles');

async function main() {
  console.log('🔍 Finding article pages...');
  
  const articlePages = await glob('*/page.tsx', { cwd: articlesDir, absolute: true });
  
  console.log(`📄 Found ${articlePages.length} article pages`);
  
  let updated = 0;
  let skipped = 0;
  
  for (const filePath of articlePages) {
    const relativePath = path.relative(process.cwd(), filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has StructuredData
    if (content.includes('StructuredData')) {
      console.log(`⏭️  Skipped (already has StructuredData): ${relativePath}`);
      skipped++;
      continue;
    }
    
    // Add import if not present
    if (!content.includes("import StructuredData from '@/components/seo/StructuredData'")) {
      content = content.replace(
        /import ArticleContent from '@\/components\/articles\/ArticleContent';/,
        `import ArticleContent from '@/components/articles/ArticleContent';\nimport StructuredData from '@/components/seo/StructuredData';`
      );
    }
    
    // Extract metadata description for structured data
    const descMatch = content.match(/description:\s*[`'"]([^`'"]+)[`'"]/);
    const description = descMatch ? descMatch[1] : '';
    
    // Extract article title from metadata
    const titleMatch = content.match(/title:\s*[`'"]([^`'"]+)[`'"]/);
    const title = titleMatch ? titleMatch[1] : '';
    
    // Add StructuredData before HeaderWrapper
    const structuredDataCode = `  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || '${title}',
          description: '${description.substring(0, 150)}',
          datePublished: '2026-01-20',
          dateModified: '2026-01-23',
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: \`\${baseUrl}/images/logo-white.svg\`,
            },
          },
        }}
      />
      <HeaderWrapper />`;
    
    content = content.replace(
      /  return \(\s*<>\s*<HeaderWrapper \/>/,
      structuredDataCode
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${relativePath}`);
    updated++;
  }
  
  console.log('\n📊 Summary:');
  console.log(`   ✅ Updated: ${updated}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   📄 Total: ${articlePages.length}`);
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
