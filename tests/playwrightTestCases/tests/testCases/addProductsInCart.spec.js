const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test('Adding the products in cart',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:'Products'}).click();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div').scrollIntoViewIfNeeded();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center').hover();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a').click()
    await page.getByRole('button').filter({hasText:'Continue Shopping'}).click();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center').hover();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.product-overlay > div > a').click();
    await page.locator('#cartModal > div > div > div.modal-body > p:nth-child(2) > a').click();
   const g= await page.locator('table tbody tr').count();
   expect(g).toBe(2);
   // Select all product rows and loop through them to extract data
   const productElements = await page.$$('tr[id^="product-"]');
   for (const productElement of productElements) {
    // Extract product ID from the row's ID attribute
    const productId = await productElement.getAttribute('id');

    // Extract product name
    const productName = await productElement.$eval('.cart_description h4 a', el => el.innerText);

    // Extract product category
    const productCategory = await productElement.$eval('.cart_description p', el => el.innerText);

    // Extract price
    const productPrice = await productElement.$eval('.cart_price p', el => el.innerText);

    // Extract quantity
    const productQuantity = await productElement.$eval('.cart_quantity button', el => el.innerText);

    // Extract total price
    const productTotal = await productElement.$eval('.cart_total .cart_total_price', el => el.innerText);

    console.log(`Product ID: ${productId}`);
    console.log(`Name: ${productName}`);
    console.log(`Category: ${productCategory}`);
    console.log(`Price: ${productPrice}`);
    console.log(`Quantity: ${productQuantity}`);
    console.log(`Total: ${productTotal}`);
    console.log('----------------------');
  }

})