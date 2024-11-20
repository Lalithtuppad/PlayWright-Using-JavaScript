const{test,page, expect}=require('@playwright/test');
const { table } = require('console');
test(' Verify Scroll Up using Arrow button and Scroll Down functionality',async({page})=>{
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
    await page.locator('#footer > div.footer-widget').scrollIntoViewIfNeeded();
    await expect(page.getByText('Subscription')).toBeVisible();
    await page.locator('#scrollUp > i').click();
    await expect(page.locator('#slider-carousel > div > div:nth-child(2) > div:nth-child(1)')).toBeVisible();




})