const { test,expect, page } = require("@playwright/test");
test.describe("sample1 testing", () => {
  test("test1", async ({ page }) => {
    await page.goto("https://github.com/Lalithtuppad");
    await page.getByRole("link", { name: "Sign in" }).click();
  });
  test("Assertions in playwright", async ({ page }) => {
    await page.goto("https://www.google.com/search?q=testers+talk");
    await expect(page).toHaveURL("https://www.google.com/search?q=testers+talk");
    await page.waitForTimeout(5000);
  });
});
test.describe("sample2 testing", () => {
    test("test1", async ({ page }) => {
      await page.goto("https://github.com/Lalithtuppad");
      await page.getByRole("link", { name: "Sign in" }).click();
    });
    test("Assertions in playwright", async ({ page }) => {
      await page.goto("https://www.google.com/search?q=testers+talk");
      await expect(page).toHaveURL("https://www.google.com/search?q=testers+talk");
      await page.waitForTimeout(5000);
    });
  });