import { test, expect } from "@playwright/test";

test("Login success", async ({ page }) => {
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

  await expect(page.getByText('My wallet')).toBeVisible();
});

test("Login failed", async ({ page }) => {
  await test.step("Go to page", async () => {
    await page.goto("https://personal.stg.dtcpayment.net/login");
  });
  await test.step("Input email", async () => {
    const email = "ext.tuyetlt11+4@dtcpay.com";
    await page.locator('//input[@id="usename"]').fill(email);
  });
  await test.step("Input password", async() => {
    const password = 'Qa1234567'
    await page.locator('//input[@id="password"]').fill(password)
  })
  await test.step("Click Login", async() => {
    await page.click('//button[text()="Login"]')
  })

  const errorMessage = page.getByText('Email or password is invalid');
  await expect(errorMessage).toBeVisible();
});




