const {test,page, expect}=require('@playwright/test')
test('Visual comparision testing',async({page})=>{
    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot('githubsreenshot.png');
    await page.locator('#login_field').click()
    await page.locator('#login_field').fill('123456789');
    await expect(page).toHaveScreenshot('githubsreenshot.png')

})