const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['list'], ['allure-playwright']],
  projects: [
    {
      name: 'default',
      use: {
        baseURL: process.env.BASE_URL || 'https://www.google.com',
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
      },
    },
    {
      name: 'headed',
      use: {
        baseURL: process.env.BASE_URL || 'https://www.google.com',
        browserName: 'chromium',
        headless: false,
        slowMo: 500,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
        viewport: null
      },
    }
  ]
});
