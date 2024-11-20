const{test,page, expect}=require('@playwright/test');
test('Verifying the subscription in the cart page',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:' Cart'}).click();
    await page.locator('#footer').scrollIntoViewIfNeeded();
    await expect(page.getByText('Subscription')).toBeVisible();
    await page.locator('#susbscribe_email').click();
    await page.locator('#susbscribe_email').fill('allen23@gmail.com');
    await page.locator('#subscribe').click();
    await expect(page.getByText( 'You have been successfully subscribed!')).toBeVisible();
    


})