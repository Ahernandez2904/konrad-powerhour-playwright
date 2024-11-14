const { test, expect } = require('@playwright/test');
const { PlaywrightHomePage } = require('../pages/playwrightHomePage');

import searchData from "../data/data.json";

let homePage;

test.beforeEach(async ({ page }) => {
  homePage = new PlaywrightHomePage(page);
  await homePage.goto();
});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Test "${testInfo.title}" finished with status: ${testInfo.status}`);
});

// Regular test
test('check page title contains Playwright', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

// Using page object model
test('navigate to getting started guide', async ({ page }) => {
  await homePage.navigateToGettingStarted();
  await expect(page).toHaveURL(/.*intro/);
});

// Using data from JSON
test('check search functionality', async ({ page }) => {
  await homePage.searchFor(searchData["value"]);
  await expect(page).toHaveURL(new RegExp(`.*${searchData.result}`));
});

