const fs = require('fs');
const path = require('path');

const basePath = '/Users/rakhat/Documents/webhosting/nocko-platform/apps/website';
const services = ['it-amc', 'cloud', 'cybersecurity', 'it-consulting', 'it-support', 'managed-it', 'structured-cabling'];

const articleMap = {};

// Parse service files
services.forEach(service => {
  const filePath = path.join(basePath, `app/services/${service}/page.tsx`);
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Very simplistic regex to capture block objects
  const blockRegex = /{\s*title:\s*['"](.*?)['"],\s*text:\s*["'](.*?)["'],[\s\S]*?link:\s*['"]\/articles\/(.*?)['"]/g;
  
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    const title = match[1];
    const text = match[2];
    const slug = match[3];
    
    // Some blocks might have escaped quotes
    articleMap[slug] = {
      title: title.replace(/\\'/g, "'").replace(/\\"/g, '"'),
      text: text.replace(/\\'/g, "'").replace(/\\"/g, '"')
    };
  }
});

console.log(`Found ${Object.keys(articleMap).length} unique articles from service pages.`);

// Update staticArticles.json
const jsonPath = path.join(basePath, 'lib/data/staticArticles.json');
let staticArticles = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

let updatedCount = 0;
staticArticles.forEach(article => {
  if (articleMap[article.slug]) {
    article.title = articleMap[article.slug].title;
    article.excerpt = articleMap[article.slug].text;
    updatedCount++;
  }
});

fs.writeFileSync(jsonPath, JSON.stringify(staticArticles, null, 2));
console.log(`Updated ${updatedCount} articles in staticArticles.json`);

// Update page.tsx files
Object.keys(articleMap).forEach(slug => {
  const articlePath = path.join(basePath, `app/articles/${slug}/page.tsx`);
  if (!fs.existsSync(articlePath)) return;

  let content = fs.readFileSync(articlePath, 'utf8');
  
  const { title, text } = articleMap[slug];
  const safeTitle = title.replace(/'/g, "\\'");
  const safeText = text.replace(/'/g, "\\'");
  
  // Replace metadata title
  content = content.replace(/title:\s*['"].*?['"](,\s*\/\/\s*|,\s*|(?=\s+description:))/s, `title: '${safeTitle} | NOCKO UAE',$1`);
  
  // Replace metadata description
  content = content.replace(/description:\s*['"].*?['"](,\s*\/\/\s*|,\s*|(?=\s+alternates:))/s, `description: '${safeText}',$1`);
  
  // Replace hero title
  content = content.replace(/title:\s*['"].*?['"](,\s*\/\/\s*|,\s*|(?=\s+subtitle:))/s, `title: '${safeTitle}',$1`);
  
  // Replace hero description
  content = content.replace(/description:\s*['"].*?['"](,\s*\/\/\s*|,\s*|(?=\s+},))/s, `description: '${safeText}',$1`);
  
  fs.writeFileSync(articlePath, content);
});

console.log('Finished updating article page components.');
