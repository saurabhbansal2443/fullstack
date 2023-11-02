import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.wikipedia.org/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('#searchInput', 'BlockChain');

//   // Wait and click on first result
//   const searchResultSelector = '.search-box__link';
//   await page.waitForSelector(searchResultSelector);
   await page.click(".pure-button");
// console.log(page);
//   // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    "#cite_ref-cryptocurrencytech_4-0"
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
})();