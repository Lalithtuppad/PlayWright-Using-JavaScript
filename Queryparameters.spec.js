const{test,page}=require('@playwright/test')
const{stringFormat}=require('../utiles/common');
const json_file =require('../API-Testing/post-api-jsonfile-dynamic.json');
test('query parameters in playwright',async({request})=>{
    const dynamicrequest=stringFormat(JSON.stringify(json_file),"lalith","kumar","cups")
    const postapirespons= await request.post('/booking',{
        data:JSON.parse(dynamicrequest)
    })
    const postapiresponsbody=await postapirespons.json()
    console.log(postapiresponsbody);
    console.log("---------------------------------------------------")
    const bid=postapiresponsbody.bookingid;

    // !get api response
    const getapiresponse=await request.get(`/booking/${bid}`)
    const getapireponsebody=await getapiresponse.json();
    // console.log(getapireponsebody);
    // !Query parameters
    const queryparameters=await request.get('/booking',{
        params:{
            "firstname": "lalith"
        }
    })
    console.log(await queryparameters.json())
})