const {test,expect}=require('@playwright/test');
const {stringFormat}=require('../tests/utiles/common');
const filejson=require('../tests/API-Testing/post-api-jsonfile-dynamic.json');


test('validating the api request using dynamic json-file',async({request})=>{
    const dynamicrequestbody=stringFormat(JSON.stringify(filejson),"Lalith","Tuppad","Silver")

    const postApiresponse=await request.post('/booking',{
        data:JSON.parse(dynamicrequestbody)
    })
    expect(postApiresponse.status()).toBe(200);
    const re= await postApiresponse.json();
    
    console.log(re);
    // !validating the status
    
})