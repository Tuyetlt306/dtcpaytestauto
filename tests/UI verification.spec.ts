import { test, expect } from "@playwright/test";
test.describe('Check details transaction', () => {
test.beforeEach(async ({ page }) => {
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

test('Verify UI of transaction details', async({page}) => {
    await page.click('//p[@class = "menu-item-text" and text()= "Transactions"]')
      
    //Check names of columns in table
    const expectedColumns = ['Status', 'Detail', 'Amount', 'Network', 'Time'];
    for (const column of expectedColumns) {
      await expect(page.getByText(column)).toBeVisible();
}})

})