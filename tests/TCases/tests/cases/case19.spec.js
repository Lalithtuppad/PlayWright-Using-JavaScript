const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test('View & Cart Brand Products',async({page})=>{
    await page.goto('/');
    await page.getByRole('listitem').filter({hasText:' Products'}).click();
    await expect(page.getByText('Brands')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:'Polo'}).click();
    await expect(page.getByText('Brand - Polo Products')).toBeVisible();
    await expect(page.locator('body > section > div > div.row > div.col-sm-9.padding-right > div')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:'H&M'}).click();
    await expect(page.getByText('Brand - H&M Products')).toBeVisible();

})