class PlaywrightHomePage {
    constructor(page) {
        this.page = page;
        this.getStartedBtn = page.locator('.getStarted_Sjon');
        this.searchBtn = page.locator('button[aria-label="Search"]');
        this.searchInput = page.locator('.DocSearch-Input');
        this.searchFirstElement = page.locator('#docsearch-item-0');
    }
  
    async goto() {
        await this.page.goto('https://playwright.dev');
    }
  
    async searchFor(term) {
        await this.searchBtn.click();
        await this.searchInput.fill(term);
        await this.searchFirstElement.click();
    }
  
    async navigateToGettingStarted() {
        await this.getStartedBtn.click();
    }
}
  
module.exports = { PlaywrightHomePage };