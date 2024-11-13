// load the playwright module
const {test,expect}=require('@playwright/test');
test('validating the api request using static body',async({request})=>{
    const postApiresponse=await request.post('/booking',{
        data:{
                "firstname": "abc",
                "lastname": "cvb",
                "totalprice": 1000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "super bowls"
            }
    })
    // !sending the post request in playwright
    // const postapiresponsebody= await postApiresponse.json();
    // console.log(postapiresponsebody)
    // !validating the status code
    // expect(postApiresponse.ok()).toBeTruthy();
    // expect(postApiresponse.status()).toBe(200);

    // const postapiresponsebody= await postApiresponse.json();
    // console.log(postapiresponsebody)
    // ! validating the api responses
    // expect(postapiresponsebody.booking).toHaveProperty("firstname", "abc");
    // expect(postapiresponsebody.booking).toHaveProperty("lastname", "cvb");
    // !validating the nested json objects
    // expect(postapiresponsebody.booking.bookingdates).toHaveProperty("checkin", "2018-01-01");
    // expect(postapiresponsebody.booking.bookingdates).toHaveProperty("checkout", "2019-01-01");


})

