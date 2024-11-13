// Step 1:-including the playwright module
const {test,expect}=require('@playwright/test');
// Step 2:-including the test with the name of the test,here we should use async and await function to write the test cases
test('Validate Youtube title',async({page})=>{
      // ! Step 3:-going to the url
    await page.goto('https://www.youtube.com/')

    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('playwright by testers talk');

    await expect(page.getByRole('button',{name:'Search',exact:true})).toBeEnabled();
    await page.getByRole('button',{name:'Search',exact:true}).click();
    // await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
    // await page.getByRole('link',{name:'playwright testers talk .Playlist'}).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle('Playwright Tutorial Full Course | Playwright Testing Tutorial - YouTube');

})