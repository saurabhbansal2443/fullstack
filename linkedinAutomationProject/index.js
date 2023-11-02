import puppeteer from 'puppeteer';

let input = process.argv;

let songName = input[2];

(async () => {

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();


  await page.goto('https://wynk.in/music/search');


  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForSelector('[placeholder="Search Songs"]');


  await page.click('[placeholder="Search Songs"]');

  await page.type('[placeholder="Search Songs"]', songName);

   await page.waitForSelector('[class="zapSearch_zapSearchList__TvGT1"]')

   await page.waitForSelector('[alt="search-item"]');

  await page.click('[alt="search-item"]');

})();