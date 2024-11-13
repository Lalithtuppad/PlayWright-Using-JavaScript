const { test, page } = require("@playwright/test");
import { Module1TestData } from "../../test-data/qa/google.json";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const records = parse(
  fs.readFileSync(path.join(__dirname, "../test-data/qa/testdata.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  }
);
for (const record of records) {
  test(`Data Driven Testing using csv file in playwright ${record.TestCaseID} `, async ({page}) => {
    await page.goto(process.env.URL);
    await page.locator("#APjFqb").click();
    await page.locator("#APjFqb").fill(record.Skill1);
    await page.locator("#APjFqb").click();
  });
}
