// !include playwright module
const {expect}=require('@playwright/test');
const { time } = require('console');

// !create class
exports.HomePage=class HomePage{
    /**
     * 
     * @param {import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page;
        this.searchTextbox=page.locator('#APjFqb');
    }
    async goto(){
    await this.page.goto('https://www.google.com/');
    await this.page.setViewportSize({width:1366,height:728})
    }
    async searchKeywords(param1){
        await expect(this.searchTextbox).toBeEnabled();
        await this.searchTextbox.click();
        await this.searchTextbox.fill(param1);
        await this.searchTextbox.press('Enter');
    }
}

