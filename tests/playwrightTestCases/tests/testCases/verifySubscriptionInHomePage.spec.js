const {page,test, expect}=require('@playwright/test');
test('Verifying all the products and product detail page',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.locator('#footer').scrollIntoViewIfNeeded();
    await expect(page.getByText('Subscription')).toBeVisible();
    await page.locator('#susbscribe_email').fill('allen23@gmail.com');
    await page.locator('#subscribe').click();
    expect(page.getByText('You have been successfully subscribed!')).not.toBeNull();

})