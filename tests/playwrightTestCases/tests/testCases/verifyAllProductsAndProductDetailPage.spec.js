const {page,test, expect}=require('@playwright/test');
test('Verifying all the products and product detail page',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:'View Product'}).first().click();
    await expect(page.getByRole('listitem').filter({hasText:'Write Your Review'})).toBeVisible();
    expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2')).not.toBeNull();
    expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(3)')).not.toBeNull();
    expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span')).not.toBeNull();
    expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(6) > b')).not.toBeNull();
    expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(7)')).not.toBeNull();
    expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(8)')).not.toBeNull();
})

// await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2')).tobeVisisble();
// await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(3)')).toBeVisible();
// await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span')).toBeVisible();
// await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(6) > b')).toBeVisible();
// await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(7)')).toBeVisible();
// await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(8)')).toBeVisible();