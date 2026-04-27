const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot.png' });
  
  // also get html
  const html = await page.content();
  const fs = require('fs');
  fs.writeFileSync('output.html', html);
  
  await browser.close();
})();
