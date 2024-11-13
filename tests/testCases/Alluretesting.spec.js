const {test,expect,page}=require('@playwright/test');

    test('Allure testing 1-Playwright search on youtube',async({page})=>{
        await page.goto('https://www.youtube.com');
        await page.locator('#search-icon-legacy').press('Enter');
        await page.getByPlaceholder('Search').fill('playwright by testers talk');
        await page.getByRole('button',{name:'Search',exact:true}).click();
        await page.getByText('Playwright by Testers Talk☑️').click();
        await expect(page).toHaveTitle('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial - YouTube');
        await page.waitForTimeout(5000)
    });
    test('Allure-testing-sample-2',async({page})=>{
            await page.goto('https://www.youtube.com');
            await page.getByPlaceholder('Search').press('Enter');
            await page.getByPlaceholder('Search').fill('playwright by testers talk');
            await page.getByRole('button',{name:'Search',exact:true}).click();
            await page.getByText('Playwright by Testers Talk☑️').click();
            await expect(page).toHaveTitle('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial - YouTube');
    });

    test('Allure-sample-3',async({page})=>{
            await page.goto('https://www.youtube.com');
            await page.getByPlaceholder('Search').press('Enter');
            await page.getByPlaceholder('Search').fill('playwright by testers talk');
            await page.getByRole('button',{name:'Search',exact:true}).click();
            await page.getByText('Playwright by Testers Talk☑️').click();
            await expect(page).toHaveTitle('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial -  ');
    });