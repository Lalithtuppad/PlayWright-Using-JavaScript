const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test(' View Category Products',async({page})=>{
    await page.goto('/');
    // await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a').click();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items').scrollIntoViewIfNeeded();
    await expect(page.getByText('Category')).toBeVisible();
    await page.locator('#accordian > div:nth-child(1) > div.panel-heading > h4 > a').click();
    // await page.getByRole('listitem',{name:'Dress '}).click();
    await page.locator('#Women > div > ul > li:nth-child(1) > a').click();
    await expect(page.getByText('Category')).toBeVisible();
    await expect(page.locator('body > section > div > div.row > div.col-sm-9.padding-right > div')).toBeVisible();
    await page.locator('#accordian > div:nth-child(2) > div.panel-heading > h4 > a').click();
    await page.locator('#Men > div > ul > li:nth-child(2) > a').click();
    await expect(page.getByText('Men - Jeans Products')).toBeVisible();
    

})
    