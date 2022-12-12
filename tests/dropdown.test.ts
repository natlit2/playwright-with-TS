import { expect, test } from "@playwright/test";

test("Handling Dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#select-demo", {
    //label: "Tuesday",
    //value: "Tuesday",
    index: 5,
  });
  await page.waitForTimeout(3000);

  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    { value: "California" },
    { index: 4 },
  ]);

  await page.click("#printAll");
  let results = page.locator(
    '//*[@id="__next"]/div/section[3]/div/div/div[2]/div[2]/div[2]/div/div[2]/p[2]/span'
  );
  console.log(await results.textContent());

  //Assertion for the results of all selections
});
