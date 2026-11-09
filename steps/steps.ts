import { Given,When,Then } from "@cucumber/cucumber";
import { chromium,Browser,Page,expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('open browser', async()=> {
    browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    page =await context.newPage();
});

When('enter url', async()=> {
    await page.goto("https://ctcorphyd.com/SureshIT/login.php"); 
    await page.waitForTimeout(2000);
});

Then('close application', async()=> {
    await browser.close();
});

When('login into application', async()=> {
    await page.locator("//input[@name='txtUserName']").fill("sureshit");
    await page.locator("//input[@name='txtPassword']").fill("sureshit");
    await page.locator("//input[@value='Login']").click();
    console.log("Login Completed");
    await page.waitForTimeout(3000);
});

When('logout of application', async()=> {
    await page.locator("//a[text()='Logout']").click();
})