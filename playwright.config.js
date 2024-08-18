// playwright.config.js
module.exports = {
    timeout: 30000, // 30 seconds timeout for each test
    retries: 1, // Retry once on failure
    use: {
      headless: true, // Run tests in headless mode
      viewport: { width: 1280, height: 720 }, // Set default viewport size
      ignoreHTTPSErrors: true, // Ignore HTTPS errors
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' },
      },
      {
        name: 'firefox',
        use: { browserName: 'firefox' },
      },
      {
        name: 'webkit',
        use: { browserName: 'webkit' },
      },
    ],
  };
  