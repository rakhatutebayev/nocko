const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'apps/website/app/articles');
const files = fs.readdirSync(articlesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let staticArticles = [];
let startDate = new Date('2025-06-01').getTime();
let endDate = new Date('2026-03-01').getTime();

files.forEach((slug, index) => {
  const filePath = path.join(articlesDir, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Extract title
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  const descMatch = content.match(/description:\s*'([^']+)'/);
  
  if (titleMatch) {
    staticArticles.push({
      id: `static-${slug}`,
      slug,
      title: titleMatch[1],
      excerpt: descMatch ? descMatch[1] : ''
    });
  }

  // Calculate a unique date
  const randomTime = startDate + ((endDate - startDate) / files.length) * index;
  const uniqueDate = new Date(randomTime).toISOString().split('T')[0];

  // Replace datePublished
  content = content.replace(/datePublished:\s*'[^']+',/g, `datePublished: '${uniqueDate}',`);
  content = content.replace(/dateModified:\s*'[^']+',/g, `dateModified: '${uniqueDate}',`);

  fs.writeFileSync(filePath, content);
});

// Output the array to use in page.tsx
fs.writeFileSync('staticArticles.json', JSON.stringify(staticArticles, null, 2));
console.log(`Processed ${files.length} articles.`);
