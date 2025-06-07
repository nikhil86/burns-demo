const selectors = require('../selectors/google.selectors');

class GoogleHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator(selectors.searchInput);
    this.searchResult = page.locator(selectors.searchResult);
  }

  async goto() {
    await this.page.goto('/');
  }

  async search(query) {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }
}

module.exports = { GoogleHomePage };
