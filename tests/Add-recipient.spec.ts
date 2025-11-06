import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://personal.stg.dtcpayment.net/login');
  await page.getByRole('textbox', { name: 'Email to access your personal' }).click();
  await page.getByRole('textbox', { name: 'Email to access your personal' }).fill('ext.tuyetlt11+4@dtcpay.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Qa123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('//p[@class = "menu-item-text" and text()="Recipients"]').click();
  await page.getByText('Fiat').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('div').filter({ hasText: /^PayNow$/ }).first().click();
  await page.getByText('NRIC/FIN').click();
  await page.getByRole('textbox', { name: 'NRIC/FIN *' }).click();
  await page.getByRole('textbox', { name: 'NRIC/FIN *' }).fill('A1234567l');
  await page.locator('div').filter({ hasText: /^Choose MethodMobileNRIC\/FINUENVPANRIC\/FIN\*Name$/ }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('A1234567L')).toBeVisible();
  await page.getByRole('row', { name: 'DTC Mock PayNow PayNow A1234567L SGD favorite send detail' }).getByLabel('detail').click();
  await page.getByRole('button', { name: 'Remove Recipient' }).click();
  await page.getByRole('button', { name: 'Remove' }).click();
});