const {page,test, expect}=require('@playwright/test');
test('Verifying all the products and product detail page',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.locator('#search_product').click();
    await page.locator('#search_product').fill('Tshirt');
    await page.locator('#submit_search').click();
    await expect(page.getByText('Searched Products')).toBeVisible();
    await expect(page.locator('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div')).toBeVisible();





})