const {test,page}=require('@playwright/test')

import { log } from 'console';
import {Module1TestData} from '../test-data/qa/google.json';

for (const [key,value] of Object.entries(Module1TestData)) {
    console.log(key,value);
    test(`Data Driven Testing Using Json File in Playwright ${value}`,async({page})=>{
        await page.goto(process.env.URL);
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(Module1TestData.skill1)
        await page.locator('#APjFqb').press('Enter');
        await page.waitForTimeout(5000);
        console.log('username',process.env.USERNAME);
        console.log('password',process.env.PASSWORD);
    
    
    })
   
}

