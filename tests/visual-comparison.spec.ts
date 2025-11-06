import { test, expect } from "@playwright/test";

test("Visual compare", async ({ page }) => {
  await test.step("Go to page", async () => {
    await page.goto("https://personal.stg.dtcpayment.net/login");
  });
  await test.step("Input email", async () => {
    const email = "ext.tuyetlt11+4@dtcpay.com";
    await page.locator('//input[@id="usename"]').fill(email);
  });
  await test.step("Input password", async() => {
    const password = 'Qa123456'
    await page.locator('//input[@id="password"]').fill(password)
  })
  await test.step("Click Login", async() => {
    await page.click('//button[text()="Login"]')
  })

  await test.step("Wait for dashboard to load", async () => {
    await page.waitForSelector('.over-mask', { state: 'hidden', timeout: 50000 }).catch(() => {});
    await page.waitForSelector('text=My Wallet', { state: 'visible', timeout: 50000 });
  })

  //await test.step("Take dashboard screenshot and compare with Figma", async () => {
    
    expect(await page.textContent(screenshot).toMatchSnapshot("dashboard-chromium-win32.png");
  });
});