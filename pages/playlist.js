// !include playwright module
const {expect}=require('@playwright/test');
const { time } = require('console');

// !create class
exports.PlaylistPage=class PlaylistPage{
    /**
     * 
     * @param {import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page;
        this.videolink=page.locator('#container > #thumbnail');
    }
   
    async clickOnVideo(){
        await expect(this.videolink.first()).toBeEnabled();
        await this.videolink.first().click();
        
    }
}

