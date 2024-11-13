const {test,expect}= require('@playwright/test');
test('keyboard actions in playwright',async({page})=>{
    await page.goto('https://www.google.com/');
    await page.locator("#APjFqb").first().click();
    // await page.locator("#APjFqb").first().fill('playwright by testers talk');
    // await page.locator("#APjFqb").first().press('Enter');
    // await page.locator("#APjFqb").first().click();
    // await page.locator("#APjFqb").first().press('Control+a');
    // await page.locator("#APjFqb").first().press('Delete');
// !how to press tab
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    



})