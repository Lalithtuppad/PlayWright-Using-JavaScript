const { test,expect } = require("@playwright/test");

test('Handle iframes in playwright &drg and drop',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    const iframeselement=page.frameLocator('.demo-frame')
    const dragelement=iframeselement.locator("[id='draggable']");
    const dropelement=iframeselement.locator("[id='droppable']");

    await dragelement.dragTo(dropelement);

    await page.waitForTimeout(5000);

})