const { test } = require('@playwright/test');

test('Scroll down and up automatically', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(async () => {
        const scrollToBottom = async () => {
            const distance = 100; // Scrolling by 100px
            while (window.scrollY + window.innerHeight < document.body.scrollHeight) {
                window.scrollBy(0, distance);
                await new Promise(resolve => setTimeout(resolve, 50)); 
            }
        };
        await scrollToBottom();
    });

    
    await page.waitForTimeout(1000);

    // Step 3: Scroll Up Automatically to the Top
    await page.evaluate(async () => {
        const scrollToTop = async () => {
            const distance = 100; 
            while (window.scrollY > 0) {
                window.scrollBy(0, -distance);
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        };
        await scrollToTop();
    });
});
