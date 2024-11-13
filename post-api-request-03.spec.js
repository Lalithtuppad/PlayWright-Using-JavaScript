// load the playwright module
const {test,expect}=require('@playwright/test');
import{ faker } from '@faker-js/faker';
const { Datetime, DateTime } =require('luxon');
test('validating the api request using dynamic method',async({request})=>{
    const First_name=faker.person.firstName();
    const Last_name=faker.person.lastName();
    const number_=faker.number.int(100);
    const check_in_date=DateTime.now().toFormat('yyyy-MM-dd');
    const check_out_date=DateTime.now().plus({days:5}).toFormat('yyyy-MM-dd');


    const postApiresponse=await request.post('/booking',{
        data:{
                "firstname": First_name,
                "lastname": Last_name,
                "totalprice": number_,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": check_in_date,
                    "checkout": check_out_date
                },
                "additionalneeds": "super bowls"
            }
    })
    // !sending the post request in playwright
    const postapiresponsebody= await postApiresponse.json();
    console.log(postapiresponsebody)
    // !validating the status code
    expect(postApiresponse.ok()).toBeTruthy();
    expect(postApiresponse.status()).toBe(200);

    // const postapiresponsebody= await postApiresponse.json();
    // console.log(postapiresponsebody)
    // ! validating the api responses
    expect(postapiresponsebody.booking).toHaveProperty("firstname", First_name);
    expect(postapiresponsebody.booking).toHaveProperty("lastname", Last_name);
    // !validating the nested json objects
    expect(postapiresponsebody.booking.bookingdates).toHaveProperty("checkin", check_in_date);
    expect(postapiresponsebody.booking.bookingdates).toHaveProperty("checkout", check_out_date);


})

