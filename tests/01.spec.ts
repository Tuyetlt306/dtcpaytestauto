import {test, expect} from '@playwright/test'

test('login', async ({ page }) => {
  await page.goto('https://personal.stg.dtcpayment.net/login')});