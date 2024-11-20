const{test,page, expect}=require('@playwright/test');
test('Verifying error Email Address already exist! is visible',async({page})=>{
await page.goto('/');
await expect(page.locator('#slider')).toBeVisible();
await page.getByText(' Signup / Login').click();
await expect(page.getByText('New User Signup!')).toBeVisible();
await page.getByPlaceholder('Name').fill('Allen');
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('allen23@gmail.com');
await page.getByRole('button',{name:'Signup'}).click();
await expect(page.getByText('Email Address already exist!')).toBeVisible()
})