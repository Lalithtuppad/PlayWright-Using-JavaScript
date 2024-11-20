const{test,page, expect}=require('@playwright/test');
test('user login with correct username and password using the playwright',async({page})=>{
await page.goto('/');
await expect(page.locator('#slider')).toBeVisible();
await page.getByText('Contact us').click();
await expect(page.getByText('Get In Touch')).toBeVisible();
await page.getByPlaceholder('Name').click();
await page.getByPlaceholder('Name').fill('john');
await page.locator('#contact-us-form > div:nth-child(3) > input').click();
await page.locator('#contact-us-form > div:nth-child(3) > input').fill('allen23@gmail.com');
await page.getByPlaceholder('Subject').click();
await page.getByPlaceholder('Subject').fill('automation execises');
await page.getByPlaceholder('Your Message Here').click();
await page.getByPlaceholder('Your Message Here').fill('bhcbbcebceiukbcwi');
// await page.locator('#contact-us-form > div:nth-child(6) > input').click();
await page.setInputFiles('input[type="file"]', 'C:/Users/lalit/Downloads/Lalithkumar B T (1).pdf');
await page.waitForTimeout(10000);
page.on('dialog', dialog => dialog.accept());
// await page.getByRole('button').click();
await page.locator('#contact-us-form > div:nth-child(7) > input').click();
await page.waitForTimeout(10000);
await expect(page.locator('#contact-page > div.row > div.col-sm-8 > div > div.status.alert.alert-success')).toBeVisible();
await page.getByRole('listitem').filter({hasText:' Home'}).click();
await expect(page.locator('#slider')).toBeVisible();

})