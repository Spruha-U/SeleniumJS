const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
let driver;

Given('I open Google homepage', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');
});

When('I search for {string}', async function (searchTerm) {
  let input = await driver.findElement(By.name('q'));
  await input.sendKeys(searchTerm, Key.RETURN);
});

Then('the page title should contain {string}', async function (expectedTitle) {
  await driver.wait(until.titleContains(expectedTitle), 10000);
  let title = await driver.getTitle();
  expect(title).to.include(expectedTitle);
  await driver.quit();
});
