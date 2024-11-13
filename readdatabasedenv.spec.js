const {test,page}=require('@playwright/test');
import {QaTestData} from '../test-data/qa/google.json';
import {StageTestData} from '../test-data/stage/google.json';

test.describe('Module1 Test',()=>{

    let testData=null;
    test.beforeAll('Running before all the test ',()=>{
        if(process.env.Env=='qa'){
          testData=  QaTestData;
        }
        else{
            testData= StageTestData;
        }
    })
    test('Read Test Data Based On Different Env in Playwright',async({page})=>{
        await page.goto(process.env.URL);
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(testData.skill1);
        await page.locator('#APjFqb').press('Enter');
        await page.waitForTimeout(5000);
    
    })
})


    
   


