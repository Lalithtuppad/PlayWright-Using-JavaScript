const {test,page, expect}=require('@playwright/test');
test('Add review on product',async({page})=>{
await page.goto('/');
await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click();
await expect(page.getByText('All Products')).toBeVisible();
await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items').scrollIntoViewIfNeeded();
await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a').click();
await page.locator('body > section > div > div > div.col-sm-9.padding-right > div.category-tab.shop-details-tab > div.col-sm-12').scrollIntoViewIfNeeded();
await expect(page.getByText('Write Your Review')).toBeVisible();
await page.locator('#name').click();
await page.locator('#name').fill('sam');
await page.locator('#email').click();
await page.locator('#email').fill('aman@gmail.com');
await page.locator('#review').click();
await page.locator('#review').fill('sndfbnx');
await page.locator('#button-review').click();
await expect(page.getByText('Thank you for your review.')).toBeVisible();

})