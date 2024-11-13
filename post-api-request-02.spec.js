const {test,expect}=require('@playwright/test');
const json_file=require('../test-data-json-api-file-testing/post-api-jsonfile.json');
const { json } = require('stream/consumers');
test('validating the api request using static json-file',async({request})=>{
    const postApiresponse=await request.post('/booking',{
        headers:{
            'Content-Type':'application/json'
        },
        data:json_file,
    })
    expect(postApiresponse.status()).toBe(200);
    const re= await postApiresponse.json();
    
    // console.log(re);
    // !validating the status
    
})