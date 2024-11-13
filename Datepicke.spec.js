const {test,expect}=require('@playwright/test');
const { defaultMaxListeners } = require('events');
test('Datepicker in playwright',async({page})=>{
    await page.goto('https://jqueryui.com/datepicker/');

    // !how to select the custom date
    // const frameelement=page.frameLocator('.demo-frame');
    // frameelement.locator('.hasDatepicker').fill('11/20/2024');
    // await page.waitForTimeout(5000);
    // !how to select todays date
    // const frameelement=page.frameLocator('.demo-frame');
    // frameelement.locator('.hasDatepicker').click();
    // await frameelement.locator('.ui-datepicker-today').click();
    // !method 2 of selecting the custom date
    // const frameelement=page.frameLocator('.demo-frame');
    // frameelement.locator('.hasDatepicker').click();

    // const defaultdate=frameelement.locator('.ui-datepicker-today > a')
    // let currentdatevalue = await defaultdate.getAttribute('data-date');

    // const customdate= (parseInt(currentdatevalue)-3);
    // let element="[data-date="+"'"+customdate.toString()+"'"+"]";
    // await frameelement.locator(element).click();
    // await page.waitForTimeout(5000);





})