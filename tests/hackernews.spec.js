const { test, expect } = require('@playwright/test');

test('Hacker News page title', async ({ page }) => {
  // Navigate to Hacker News
  await page.goto('https://news.ycombinator.com/');
  
  // Assert that the page title is correct
  await expect(page).toHaveTitle('Hacker News');
});
//const { test, expect } = require('@playwright/test');

test('Hacker News "newest" page has 30 items', async ({ page }) => {
  // Navigate to the Hacker News "newest" page
  await page.goto('https://news.ycombinator.com/newest');

  // Select all elements that represent a news item
  const titles = await page.locator('.athing').all();

  // Assert that there are 30 items on the page
  expect(titles.length).toBe(30);
});
