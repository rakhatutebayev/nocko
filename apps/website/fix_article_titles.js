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
  
  const blockRegex = /{\s*title:\s*['"](.*?)['"],\s*text:\s*["'](.*?)["'],[\s\S]*?link:\s*['"]\/articles\/(.*?)['"]/g;
  
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    const title = match[1];
    const text = match[2];
    const slug = match[3];
    
    articleMap[slug] = {
      title: title.replace(/\\'/g, "'").replace(/\\"/g, '"'),
      text: text.replace(/\\'/g, "'").replace(/\\"/g, '"')
    };
  }
});

Object.keys(articleMap).forEach(slug => {
  const articlePath = path.join(basePath, `app/articles/${slug}/page.tsx`);
  if (!fs.existsSync(articlePath)) return;

  let lines = fs.readFileSync(articlePath, 'utf8').split('\\n');
  
  const { title, text } = articleMap[slug];
  const safeTitle = title.replace(/'/g, "\\'");
  const safeText = text.replace(/'/g, "\\'");

  let inMetadata = false;
  let inHero = false;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('export const metadata: Metadata = {')) {
      inMetadata = true;
    }
    if (inMetadata && lines[i].trim().startsWith('alternates:')) {
      inMetadata = false;
    }
    
    if (lines[i].includes('hero: {')) {
      inHero = true;
    }
    if (inHero && lines[i].trim() === '},') {
      inHero = false;
    }

    if (inMetadata && lines[i].trim().startsWith('title:')) {
      lines[i] = `  title: '${safeTitle} | NOCKO UAE',`;
    }
    if (inMetadata && lines[i].trim().startsWith('description:')) {
      lines[i] = `  description: '${safeText}',`;
    }

    if (inHero && lines[i].trim().startsWith('title:')) {
      lines[i] = `    title: '${safeTitle}',`;
    }
    if (inHero && lines[i].trim().startsWith('description:')) {
      lines[i] = `    description: '${safeText}',`;
    }
  }

  fs.writeFileSync(articlePath, lines.join('\\n'));
});

console.log('Finished fixing article page components.');
