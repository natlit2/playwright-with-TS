import { expect, test } from "@playwright/test";
import moment from "moment";
// test("Handling bootstrap date picker", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
//   );
//   let date = "1988-02-08";

//   await page.fill("id=birthday", date);

//   //await page.waitForTimeout(3000);
// });

test("handling datepickers using moment ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  //find and define all the locators needed for toggling the calendar
  //past
  await selectDate(12, "March 2021");
  await page.reload();
  //future
  await selectDate(11, "July 2023");
  await page.reload();
  //present
  await selectDate(14, "December 2022");
  await page.reload();

  async function selectDate(date: number, dateToSelect: string) {
    await page.click("//input[@placeholder='Start date']");
    const mmYY = page.locator(
      "(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]"
    );
    const prev = page.locator(
      "//div[@class='datepicker-days']//table[@class='table-condensed']//th[@class='prev']"
    );
    const next = page.locator(
      "//div[@class='datepicker-days']//table[@class='table-condensed']//th[@class='next']"
    );

    //toggle to a pre-defined month and year
    // let dateToSelect: string = "March 2022";

    // check if the current month is before or after the predefined date using momentJS and toggle the calendar accordingly
    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log("this month?" + thisMonth);

    while ((await mmYY.textContent()) != dateToSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
    }
    //finally click on the desired day to select
    await page.click(`//td[@class='day'][text()='${date}']`);
  }
});
