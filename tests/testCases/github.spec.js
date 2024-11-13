import { test, expect } from '@playwright/test';
// use of record new functionality
test('test', async ({ page }) => {
  await page.goto('https://github.com/Lalithtuppad');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('123566663')
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('gcvcvcvcvcehv');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});