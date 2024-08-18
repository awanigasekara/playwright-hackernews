const { test, expect } = require('@playwright/test');

test('First article on "newest" page is the most recent', async ({ page }) => {
  // Navigate to the Hacker News "newest" page
  await page.goto('https://news.ycombinator.com/newest');

  // Extract the timestamps of all articles on the page
  const articleTimes = await page.$$eval('.age a', links =>
    links.map(link => new Date(link.getAttribute('title')).getTime())
  );

  // Get the time of the first article
  const firstArticleTime = articleTimes[0];

  // Assert that the first article is the most recent
  for (let i = 1; i < articleTimes.length; i++) {
    expect(firstArticleTime).toBeGreaterThanOrEqual(articleTimes[i]);
  }
});
