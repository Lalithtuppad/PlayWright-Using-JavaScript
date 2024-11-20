const{test,page, expect}=require('@playwright/test');
test('user login with correct username and password using the playwright',async({page})=>{
await page.goto('/');
await expect(page.locator('#slider')).toBeVisible();
await page.getByText(' Signup / Login').click();
await expect(page.getByText('Login to your account')).toBeVisible();
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').click();
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').fill('allen23@gmail.com');
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').click();
await page.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').fill('abc@123456');
await page.getByRole('button',{name:'Login'}).click();
await expect(page.getByText(' Logged in as ')).toBeVisible();
await page.getByText(' Delete Account').click();
await expect(page.getByText('Account Deleted!')).toBeVisible();
await page.waitForTimeout(5000);



})