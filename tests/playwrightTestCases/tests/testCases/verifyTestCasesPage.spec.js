const{test,page, expect}=require('@playwright/test');
test('Verifying the Test cases page',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:" Test Cases"}).click();
    await expect(page.getByText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')).toBeVisible();
    await page.waitForTimeout(5000);
})