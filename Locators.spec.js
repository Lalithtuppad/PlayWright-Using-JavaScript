const{test,except}=require('@playwright/test');
const { link } = require('fs');
test('Locators functionaility testing',async({page})=>{
    // getting the element by role
    // await page.goto('https://www.google.com/search?q=cypress+by+testers+talk');
    // await page.getByRole('link',{name:'Images'}).click();
    // await page.waitForTimeout(7000);
    // !getting by the lable
    // await page.goto('https://www.google.com');
    // await page.getByLabel('Search',{exact:true}).fill('api testing by testers talk');
    // await page.getByLabel('Search',{exact:true}).press('Enter');
    // await page.waitForTimeout(7000);
    // !getting by text
    // await page.goto('https://www.carwale.com/new-cars/');
    // await page.getByAltText('Toyota Cars').click();
    // getting by testid
    // await page.goto('https://github.com/login');
    // await page.getByTestId('username').fill('testeratone');
    // await page.waitForTimeout(7000);
// !getting by text
// await page.goto('https://www.youtube.com/');
// await page.getByText('Infinity').click();
// !getting by title
// await page.getByTitle('Infinity | Creative CSS Animation Course').click();
// !by xpath
// await page.locator("xpath=//*[@name='search_query']").click();
// await page.locator("xpath=//*[@name='search_query']").fill('js tutorials');
// await page.locator("xpath=//*[@name='search_query']").press('Enter');
// !css selector
// await page.locator("[name='search_query']").click();

})