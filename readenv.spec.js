const {test,page}=require('@playwright/test')
test('Read Env file',async({page})=>{
    await page.goto(process.env.URL);
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill('it companies in hubli')
    await page.locator('#APjFqb').press('Enter');
    await page.waitForTimeout(5000)
    console.log('username',process.env.USERNAME);
    console.log('password',process.env.PASSWORD);


})