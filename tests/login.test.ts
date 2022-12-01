import { chromium } from "@playwright/test";
import { test } from "@playwright/test";
import { isContext } from "vm";
//import { dotenv } from "dotenv";

//const USER = process.env.USER;
//const PASS = process.env.PASSWORD;

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

  await page.fill("input[name='email']", "testkrig@gmail.com");
  await page.fill("input[name='password']", "Automation73571n9");

  await page.click("input[value='Login']");
});
