const {test,except, expect}=require('@playwright/test');
test('Handle dropdown list in playwright',async({page})=>{
    await page.goto('https://www.facebook.com/');
    await page.getByText('Create new account').click();
    const Dropdownlist=await page.locator('#month');
    // Dropdownlist.selectOption('6');
    // Dropdownlist.selectOption('Aug');
    await expect(Dropdownlist).toHaveValue('11');
    // Dropdownlist.selectOption('10');
    await page.waitForTimeout(5000);
})