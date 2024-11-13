const{page,test, expect}=require('@playwright/test')
const{stringFormat}=require('../utiles/common');
const json_file=require('../API-Testing/post-api-jsonfile-dynamic.json')
const Token=require('../API-Testing/Token-request-body.json')
const put_json_file=require('../API-Testing/put-api-request-body.json')
const patch_json_file=require('../API-Testing/patch-api-data.json')
test('put api request using playwright',async({request})=>{
 const dynamicfile=stringFormat(JSON.stringify(json_file),"white","field","glasses");
 const putresponse=await request.post('/booking',{
    data:JSON.parse(dynamicfile)
 })
 const postapiresponsbody=await putresponse.json();
 const bid=postapiresponsbody.bookingid;
 console.log("post api------------- ")
 console.log(postapiresponsbody)
// !get api request
const getapiresponse=await request.get(`/booking/${bid}`)
const getapiresponsebody=await getapiresponse.json();
console.log("get api--------")
console.log(getapiresponsebody)
//!TOKEN -generation
const tokenresponse=await request.post('/auth',{
    data:Token
})
const tokenapiresponsebody=await tokenresponse.json();
const tokennumber=tokenapiresponsebody.token
console.log(tokennumber)
// !put-api-request using playwright
const putapibody=await request.put(`booking/${bid}`,{
    headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${tokennumber}`
    },
    data:put_json_file
})
const putapioutput=await putapibody.json();
console.log("put api---------")
console.log(putapioutput);

// !patch api-request
const patchapibody=await request.patch(`/booking/${bid}`,{
    headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${tokennumber}`
    },
    data:patch_json_file
})
const patchapioutput=await patchapibody.json();
console.log("patch api---------")
console.log(patchapioutput);
// !Delete -api-request using playwright
const deleteresponse=await request.delete(`/booking/${bid}`,{
    headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${tokennumber}`
    }
})
await expect(deleteresponse.status()).toEqual(201);
await expect(deleteresponse.statusText()).toBe('Created');


})