const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test('Remove Products From Cart',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a').click();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items').scrollIntoViewIfNeeded();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.choose > ul > li > a').click();
    await page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > button').click();
    // await page.getByRole('button',{name:' Add to cart'}).click();
    await page.getByRole('button',{name:"Continue Shopping"}).click();
    await page.getByRole('listitem').filter({hasText:' Cart'}).click();
    await expect(page.locator('#do_action > div.container > div > div > a')).toBeVisible();
    // verifying the product is deleted successfully

    const firstProductTitleElement = await page.$('.cart_description h4 a');
    const firstProductTitle = await page.evaluate(el => el.innerText, firstProductTitleElement);
    await page.locator('#product-1 > td.cart_delete > a > i').click();
    
    const productElement=await page.$$('tr[id^="product-"]')
    for (const element of productElement) {
        const product_id = await element.getAttribute('id');
        const productName = await element.$eval('.cart_description h4 a', el => el.innerText);
        if(productName== firstProductTitle){
            console.log(productName);
        }
        
       
    }
  

})