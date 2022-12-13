import { expect, test } from "@playwright/test";

test("Handling bootstrap date picker", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let date = "1988-02-08";

  await page.fill("id=birthday", date);

  //await page.waitForTimeout(3000);
});

test("handling datepickers using moment ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await page.click("//input[@placeholder='Start date']");

  const mmYY = page.locator(
    "(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]"
  );
  const prev = page.locator(
    "(//table[@class='table-condensed']//th[@class='datepicker-prev'])[1]"
  );
  const next = page.locator(
    "(//table[@class='table-condensed']//th[@class='datepicker-next'])[1]"
  );
});
