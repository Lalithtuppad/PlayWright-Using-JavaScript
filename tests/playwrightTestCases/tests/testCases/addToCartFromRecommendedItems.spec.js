const {test,page, expect}=require('@playwright/test');
test('Add to cart from Recommended items',async({page})=>{
await page.goto('/');
await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.recommended_items').scrollIntoViewIfNeeded();
await expect(page.getByText('RECOMMENDED ITEMS')).toBeVisible();
const firstProductTitleElement = await page.$('#recommended-item-carousel > div > div:nth-child(2) > div:nth-child(1) > div > div > div > p');
const firstProductTitle = await page.evaluate(el => el.innerText, firstProductTitleElement);
console.log(firstProductTitle);
await page.locator('#recommended-item-carousel > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
await page.locator('#cartModal > div > div > div.modal-footer > button').click();
await page.locator('#header > div > div > div').scrollIntoViewIfNeeded();
await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click();
// await expect(page.locator(firstProductTitle)).toBeVisible();
// const productElement=await page.$$('tr[id^="product-"]')
//     for (const element of productElement) {
//         const product_id = await element.getAttribute('id');
//         const productName = await element.$eval('.cart_description h4 a', el => el.innerText);
//         console.log(productName)
//         // if(productName == firstProductTitle){
//         //     console.log('Added to cart successfully');

//         // }
        
       
//     }
await expect(page.getByText(firstProductTitle)).toBeVisible()



})