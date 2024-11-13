const {test,page, expect}=require('@playwright/test');
const {stringFormat}=require('../utiles/common')
const json_file= require('../API-Testing/post-api-jsonfile-dynamic.json');
const { get } = require('http');
test('getting the api response using playwright',async({request})=>{
    const dynamicrequest=stringFormat(JSON.stringify(json_file),"kumar","lalith","diamond");
    // !cerating the api post request
    const postapirespons= await request.post('/booking',{
        data:JSON.parse(dynamicrequest)
    })
    // !status checking
    expect(postapirespons.ok()).toBeTruthy();
    expect(postapirespons.status()).toBe(200);

    const postapiresponsbody=await postapirespons.json();
    console.log(postapiresponsbody.bookingid);

    // !validating the json api responses
    expect(postapiresponsbody.booking).toHaveProperty("firstname","kumar");
    expect(postapiresponsbody.booking).toHaveProperty("lastname","lalith");

    // validating the nested json objects
    expect(postapiresponsbody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
console.log("------------------------------------------------------------------------------------")

    // !! getting the api response
    const book_id=postapiresponsbody.bookingid;
    const getapireponsebody= await request.get(`/booking/${book_id} `)
   console.log(await getapireponsebody.json())

//!validating the status of the get api request
   expect(getapireponsebody.ok()).toBeTruthy();
   expect(getapireponsebody.status()).toBe(200);
})