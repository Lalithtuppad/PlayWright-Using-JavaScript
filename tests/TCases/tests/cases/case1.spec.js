const{test,page, expect}=require('@playwright/test');
test('user registering testcase using the playwright',async({page})=>{
await page.goto('/');
await expect(page.locator('#slider')).toBeVisible();
await page.getByText(' Signup / Login').click();
await expect(page.getByText('New User Signup!')).toBeVisible();
await page.getByPlaceholder('Name').fill('Allen');
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('allen23@gmail.com');
await page.getByRole('button',{name:'Signup'}).click();
await expect(page.getByText('Enter Account Information')).toBeVisible();
await page.waitForTimeout(5000);
await page.getByRole('checkbox',{name:'Mr.'}).check();
// await page.getByLabel('id_gender1').click();
await page.locator('#password').click();
await page.locator('#password').fill('abc@123456')
await page.locator('#days').click();
await page.selectOption('#days','5')
await page.locator('#months').click();
await page.selectOption('#months','5')
await page.locator('#years').click();
await page.selectOption('#years','1994')
await page.locator('#newsletter').click();
await page.locator('#optin').click();
await page.locator('#first_name').click();
await page.locator('#first_name').fill('John');
await page.locator('#last_name').click();
await page.locator('#last_name').fill('Smith');
await page.locator('#company').click();
await page.locator('#company').fill('abc.com');
await page.locator('#address1').click();
await page.locator('#address1').fill('street cafe day #100');
await page.locator('#country').click();
await page.locator('#country').selectOption({label:'India'});
await page.locator('#state').click();
await page.locator('#state').fill('punjab');
await page.locator('#city').click();
await page.locator('#city').fill('Amritsar');
await page.locator('#zipcode').click();
await page.locator('#zipcode').fill('143001');
await page.locator('#mobile_number').click();
await page.locator('#mobile_number').fill('1234567890');
await page.locator('#mobile_number').click();
await page.getByRole('button',{name:'Create Account'}).click();
await expect(page.getByText('Account Created!')).toBeVisible();
await page.locator('#form > div > div > div > div > a').click();
await page.getByText(' Delete Account').click();
await expect(page.getByText('Account Deleted!')).toBeVisible();
await page.waitForTimeout(5000);









})