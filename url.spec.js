const {test,expect}=require('@playwright/test');

test('Assertions in playwright',async({page})=>{
    await page.goto('https://www.google.com/search?q=testers+talk');

// hard assertion
    // !validating the url using the assertion
    await expect(page).toHaveURL('https://www.google.com/search?q=testers+talk');
    await page.waitForTimeout(5000);
    // validating the title using the assertion
    await expect(page).toHaveTitle('testers talk - Google Search');
    await page.waitForTimeout(5000);
    // !validating the text using the assertion
    // await expect(page.locator("[aria-label='Search']").first()).toHaveText('testers talk');
    // !validating the enable visible editable using the assertion
    // await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();
    // await expect(page.locator("[aria-label='Search']").first()).toBeVisible();
    // await expect(page.locator("[aria-label='Search']").first()).toBeEditable();
    // !
    // await expect(page.locator("[aria-label='Search']").first()).toHaveText('testers talk');
    // !validating the diableed,empty,count
    // await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();

    // await expect(page.locator("[aria-label='Search']").first()).toBeEmpty();

    // await expect(page.locator("[aria-label='Search']")).toHaveCount(3);
    // await page.waitForTimeout(5000);

})