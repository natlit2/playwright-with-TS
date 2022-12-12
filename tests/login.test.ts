import { chromium, test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const myTestUser = process.env.USER!;
const MyTestPass = process.env.PASSWORD!;

test(" E2E Login test demo", async () => {
  const browser = await chromium.launch({
    //Open browser to view the testprogress
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  //Open main landing page
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  //Find MyAccount button and hover to open DD list
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
  // find the login button in the DD List above and click
  await page.click("text=Login");
  // fill in an email adress in the email filed
  await page.fill("input[name='email']", myTestUser);

  // fill in the password
  await page.fill("input[name='password']", MyTestPass);
  // Click on the login button
  await page.click("input[value='Login']");
  // set timeout for no action
  await page.waitForTimeout(5000);

  //// checking for session persistance //uncomment the required

  //// opening a new browser (tab)page expecting to be loggedin

  const page1 = await context.newPage();
  await page1.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );

  ////opening a new browser and expecting to not be logged in
  // const newContext = await browser.newContext();
  // const newPage = await newContext.newPage();
  // await newPage.goto(
  //   "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"

  //   );

  await page.waitForTimeout(5000);
});
