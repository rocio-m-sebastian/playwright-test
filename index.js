const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    await page.goto('https://web.gencat.cat/ca/inici');

    await page.focus('//input[@id="cercadorOcultGoogle"]');
    await page.click('//input[@id="cercadorOcultGoogle"]');
    await page.fill('//input[@id="cercadorOcultGoogle"]', 'agenda cultural');

    await page.focus('//div[@class="cercador-gencat"]//input[@aria-label="Cercar"]');
    await page.click('//div[@class="cercador-gencat"]//input[@aria-label="Cercar"]');

    // await browser.close();
})();