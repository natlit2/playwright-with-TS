import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const myTestUser = process.env.USER!;
const MyTestPass = process.env.PASSWORD!;

test("test", async ({ page }) => {
  // go to main page

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  //
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("E-Mail Address").click();
  await page.getByPlaceholder("E-Mail Address").fill(myTestUser);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(MyTestPass);
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .getByRole("link", { name: " Edit your account information" })
    .click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Anton2");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
  await page
    .locator('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[6]/a/div/span')
    .click();
  //  await page.getByRole("link", { name: "Logout" }).click();

  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"
  );
});
