import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/llllMgr/');
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Card List' })
    .getByRole('button')
    .click();
  await page.locator('[data-card-id="kh_045"]').click();
  // await page.getByRole('button', { name: '+' }).nth(1).click();
  // await page.getByRole('button', { name: '+' }).nth(1).click();
  // await page.getByRole('button', { name: '-' }).nth(1).click();
  // await page.getByRole('button', { name: '-' }).nth(1).click();
  // await page.getByRole('button', { name: 'MAX' }).first().click();
  // await page.getByRole('button', { name: 'MIN' }).first().click();
  // await page.getByRole('button', { name: '+' }).nth(2).click();
  // await page.getByRole('button', { name: '+' }).nth(2).click();
  // await page.getByRole('button', { name: '-' }).nth(2).click();
  // await page.getByRole('button', { name: '-' }).nth(2).click();
  // await page.getByRole('button', { name: 'MAX' }).nth(1).click();
  // await page.getByRole('button', { name: 'MIN' }).nth(1).click();
  // await page.getByRole('button', { name: '+' }).nth(3).click();
  // await page.getByRole('button', { name: '+' }).nth(3).click();
  // await page.getByRole('button', { name: '-' }).nth(3).click();
  // await page.getByRole('button', { name: '-' }).nth(3).click();
  // await page.getByRole('button', { name: 'MAX' }).nth(2).click();
  // await page.getByRole('button', { name: 'MIN' }).nth(2).click();
  // await page.getByRole('button', { name: '+' }).first().click();
  // await page.getByRole('button', { name: '+' }).first().click();
  // await page.getByRole('button', { name: 'MAX' }).first().click();
  // await page.getByRole('button', { name: '-' }).first().click();
  // await page.getByRole('button', { name: '-' }).first().click();
  // await page.getByRole('button', { name: 'MIN' }).first().click();
  await page.locator('[data-button="modalClose"]').click();
});
