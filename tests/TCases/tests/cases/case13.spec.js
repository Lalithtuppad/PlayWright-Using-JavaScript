const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test('Adding the products in cart',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items').scrollIntoViewIfNeeded();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.choose > ul > li > a').click();
    await expect(page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details')).toBeVisible();
    await page.locator('#quantity').click()
    await page.locator('#quantity').press('Backspace')
    await page.locator('#quantity').fill('4');
    await page.getByRole('button',{name:" Add to cart"}).click();
    await page.locator('#cartModal > div > div > div.modal-body > p:nth-child(2) > a').click();
    const productElement=await page.$$('tr[id^="product-"]')
    for (const element of productElement) {
        const product_id = await element.getAttribute('id');
        const productQuantity = await element.$eval('.cart_quantity button', el => el.innerText); 
        console.log(`${productQuantity}`);
        if(`${productQuantity}`==4){
            console.log('Sucess');
        }
    }
    
})