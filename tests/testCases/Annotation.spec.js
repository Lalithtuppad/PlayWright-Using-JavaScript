import { test, expect } from '@playwright/test';
// !using the skip function to skip the test and only run which is needed
// test('test1', async ({ page }) => {
//   await page.goto('https://github.com/Lalithtuppad');
//   await page.getByRole('link', { name: 'Sign in' }).click();
// });
// // !
// test.skip('test2', async ({ page }) => {
//     await page.goto('https://github.com/Lalithtuppad');
//     await page.getByRole('link', { name: 'Sign in' }).click();
//   });
// //   !
// test.skip('test3', async ({ page }) => {
//     await page.goto('https://github.com/Lalithtuppad');
//     await page.getByRole('link', { name: 'Sign in' }).click();
//   });
// !using the only function to run only required test cases
test.only('test1', async ({ page }) => {
    await page.goto('https://github.com/Lalithtuppad');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });
  // !
  test('test2', async ({ page }) => {
      await page.goto('https://github.com/Lalithtuppad');
      await page.getByRole('link', { name: 'Sign in' }).click();
    });
  //   !
  test('test3', async ({ page }) => {
      await page.goto('https://github.com/Lalithtuppad');
      await page.getByRole('link', { name: 'Sign in' }).click();
    });