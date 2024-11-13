const{test,expect}=require('@playwright/test');
const {HomePage} = require('../pages/home');
const{ResultPage} = require('../pages/results');
const{PlaylistPage} = require('../pages/playlist');

test('page object model in playwright',async({page})=>{
    // go to url
const homepage=new HomePage(page);
// console.log(typeof(homepage))
    await homepage.goto();
    // search by keywords
await homepage.searchKeywords('playwright by testers talk')
    // click on playlist
 const resultpage= new ResultPage(page);
 resultpage.clickOnPlaylist();
    // click on video
    await page.waitForTimeout(5000);
    const playlistpage=new PlaylistPage(page);
    playlistpage.clickOnVideo();

    await page.waitForTimeout(5000);
})