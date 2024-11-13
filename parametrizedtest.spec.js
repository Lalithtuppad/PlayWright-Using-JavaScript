const {test,expect,page}=require('@playwright/test');

const testparameter=['playwright tutorials','cypress tutorials','javascript tutorials'];
for (const para of testparameter) {
    test(`Parametrized Testing ${para}`,async({page})=>{
        await page.goto('https://www.youtube.com/');
        await page.getByPlaceholder('Search').click();
        await page.getByPlaceholder('Search').fill(para);
        await page.getByRole('button',{name:'Search',exact:true}).click();
        await page.getByText('Playwright Beginner Tutorials').click();
        
    })
}

