const {test,page, expect}=require('@playwright/test');
test('Search Products and Verify Cart After Login',async({page})=>{
await page.goto('/');
await page.getByRole('listitem').filter({hasText:' Products'}).click();
await expect(page.getByText('All Products')).toBeVisible();
await page.locator('#search_product').click();
await page.locator('#search_product').fill('Winter Top');
await page.locator('#submit_search').click();
await expect(page.getByText('Searched Products')).toBeVisible();
// await expect(page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div')).not.toBeEmpty();
await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div.col-sm-4 > div > div.single-products > div.productinfo.text-center').hover();
await page.getByRole('listitem').filter({hasText:'View Product'}).click();
await page.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > button').click();
await page.getByRole('button',{name:'Continue Shopping'}).click();
await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click();
// !!checking whether the cart table is empty or not
const cartTable = page.locator('#cart_info_table');

// await expect(cartTable.locator('*')).toBeVisible();
await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();
await expect(page.getByText('Login to your account')).toBeVisible();
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').click();
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').fill('allen23@gmail.com');
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').click();
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').fill('abc@123456');
await page.getByRole('button',{name:'Login'}).click();
//await expect(page.getByText(' Logged in as ')).toBeVisible();
await expect(page.getByText(' Logged in as ')).toBeVisible();
await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click();
// await expect(cartTable.locator('*')).toHaveCount(1);










})