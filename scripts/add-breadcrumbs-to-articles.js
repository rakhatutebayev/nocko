#!/usr/bin/env node

/**
 * Script to add Breadcrumbs component to all article pages
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
    
    // Skip if already has Breadcrumbs
    if (content.includes('Breadcrumbs')) {
      console.log(`⏭️  Skipped (already has Breadcrumbs): ${relativePath}`);
      skipped++;
      continue;
    }
    
    // Add import if not present
    if (!content.includes("import Breadcrumbs from '@/components/common/Breadcrumbs'")) {
      content = content.replace(
        /import StructuredData from '@\/components\/seo\/StructuredData';/,
        `import StructuredData from '@/components/seo/StructuredData';\nimport Breadcrumbs from '@/components/common/Breadcrumbs';`
      );
    }
    
    // Extract article title from metadata
    const titleMatch = content.match(/title:\s*[`'"]([^`'"|]+)/);
    let title = titleMatch ? titleMatch[1] : '';
    
    // Clean up title (remove " | NOCKO" suffix if present)
    title = title.replace(/\s*\|\s*.*$/, '');
    
    // Add Breadcrumbs after Hero and before article content
    const breadcrumbsCode = `        />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: '${title}' },
            ]}
          />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />`;
    
    // Replace pattern: after Hero and before <div className="article">
    content = content.replace(
      /\s*\/>\s*<div className="container">\s*<div className="article">\s*<ArticleContent intro={articleData\.intro} blocks={articleData\.blocks} \/>/,
      breadcrumbsCode
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
