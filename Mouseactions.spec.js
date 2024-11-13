const { test,expect } = require("@playwright/test");

test('Mouse actions in playwright',async({page})=>{
    await page.goto('https://www.google.com/search?q=testers+talk');

    //single click
    // await page.getByRole('link',{name:'Testers Talk'}).first().click();
    // double click
    // await page.getByRole('link',{name:'Testers Talk'}).first().dblclick();
    // mouse right click
    // await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'right'});
    // mouse middle click
    // await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'middle'});

    // mouse left click
    // await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'left'});

    // mouse hover
    // await page.locator("[aria-label='Search by voice']").hover();

})