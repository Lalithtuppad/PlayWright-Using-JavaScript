import { test, expect } from '@playwright/test';
// !here we are checking the vusiblity of the element in particular web page
test('test', async ({ page }) => {
  await page.goto('https://github.com/Lalithtuppad');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('123335456');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('bhdbvhjbvhjbv');
 await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});