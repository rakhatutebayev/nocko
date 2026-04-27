const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Test production
    await page.goto('https://nocko.com', { waitUntil: 'networkidle2' });
    
    const elementStyles = await page.evaluate(() => {
      const el = document.querySelector('.header__lang');
      if (!el) return 'Element not found';
      
      const styles = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      
      return {
        text: el.textContent,
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        color: styles.color,
        fontSize: styles.fontSize,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
        zIndex: styles.zIndex
      };
    });
    
    console.log(JSON.stringify(elementStyles, null, 2));
    
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
