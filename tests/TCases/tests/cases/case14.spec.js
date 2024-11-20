const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test('Place Order: Register while Checkout',async({page})=>{
    await page.goto('/');
    await expect(page.getByText('Category')).toBeVisible();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items').scrollIntoViewIfNeeded();
    await page.locator('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.choose > ul > li > a').click();
    await page.getByRole('button',{name:' Add to cart'}).click();
    await page.getByRole('button',{name:"Continue Shopping"}).click();
    await page.getByRole('listitem').filter({hasText:' Cart'}).click();
    await expect(page.locator('#do_action > div.container > div > div > a')).toBeVisible();
    await page.locator('#do_action > div.container > div > div > a').click();
    await page.locator('#checkoutModal > div > div > div.modal-body > p:nth-child(2) > a').click();
    await page.locator('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').click();
    await page.locator('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').fill('Aman');
    await page.locator('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').click();
    await page.locator('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').fill('allen9@gmail.com');
    await page.getByRole('button',{name:'Signup'}).click();
    await page.getByRole('radio',{name:"Mr."}).check();
    await page.locator('#password').click();
    await page.locator('#password').fill('csnjn');
    await page.locator('#days').click();
    await page.selectOption('#days','5')
    await page.locator('#months').click();
    await page.selectOption('#months','5')
    await page.locator('#years').click();
    await page.selectOption('#years','1994')
    await page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).check();
    // await page.locator('#newsletter').click();
    await page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).check();
    // await page.locator('#optin').click();
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
    await expect(page.getByText(' Logged in as ')).toBeVisible();
    await page.getByRole('listitem').filter({hasText:' Cart'}).click();
    await expect(page.locator('#do_action > div.container > div > div > a')).toBeVisible();
    await page.locator('#do_action > div.container > div > div > a').click();
    await expect(page.locator('#cart_items > div')).toBeVisible();
    await page.locator('#ordermsg > textarea').click();
    await page.locator('#ordermsg > textarea').fill('csabjdvia nds');
    await page.locator('#cart_items > div > div:nth-child(7) > a').click();
    await expect(page.locator('#cart_items > div > div.step-one > h2')).toBeVisible();
    await page.locator('#payment-form > div:nth-child(2) > div > input').click();
    await page.locator('#payment-form > div:nth-child(2) > div > input').fill('najasnkakn');
    await page.locator('#payment-form > div:nth-child(3) > div > input').click();
    await page.locator('#payment-form > div:nth-child(3) > div > input').fill('cdn');
    await page.locator('#payment-form > div:nth-child(4) > div.col-sm-4.form-group.cvc > input').click();
    await page.locator('#payment-form > div:nth-child(4) > div.col-sm-4.form-group.cvc > input').fill('311');
    await page.locator('#payment-form > div:nth-child(4) > div:nth-child(2) > input').click();
    await page.locator('#payment-form > div:nth-child(4) > div:nth-child(2) > input').fill('05');
    await page.locator('#payment-form > div:nth-child(4) > div:nth-child(3) > input').click();
    await page.locator('#payment-form > div:nth-child(4) > div:nth-child(3) > input').fill('2025');
    await page.getByRole('button',{name:'Pay and Confirm Order'}).click();
    await expect(page.getByText('Order Placed!')).toBeVisible();
    await page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click();
    await expect(page.locator('#form > div > div > div > h2 > b')).toBeVisible();
    await page.locator('#form > div > div > div > div > a').click();


})

