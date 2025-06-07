const { test, expect } = require('@playwright/test');
const { GoogleHomePage } = require('../pages/GoogleHomePage');
require('../utils/envLoader');

test('Google search using POM', async ({ page }) => {
  const home = new GoogleHomePage(page);
  await home.goto();

  // Validate page title
  await expect(page).toHaveTitle(/Google/);

  // Validate that the search input is visible
  await expect(home.searchInput).toBeVisible();
});
