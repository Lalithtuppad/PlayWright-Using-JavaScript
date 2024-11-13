// !include playwright module
const {expect}=require('@playwright/test');
const { time } = require('console');

// !create class
exports.ResultPage=class ResultPage{
    /**
     * 
     * @param {import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page;
        this.playlistlink=page.getByRole('link',{name:'Playwright by Testers Talk'});
    }
   
    async clickOnPlaylist(){
        await expect(this.playlistlink.first()).toBeEnabled();
        await this.playlistlink.first().click();
        
    }
}

