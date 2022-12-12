import { expect, test } from "@playwright/test";

test("interactions with inputs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  // defining the selector
  const userMessageInput = page.locator("input#user-message");
  // scroll if needed
  await userMessageInput.scrollIntoViewIfNeeded();

  console.log(
    "Before typing in the value: " +
      (await userMessageInput.getAttribute("placeholder"))
  );
  //asserting
  expect(userMessageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  console.log(
    "After typing in the value: " + (await userMessageInput.inputValue())
  );

  //type the user message in the user message input field

  await userMessageInput.type("Hi Natan");
});

test("Validating SUM", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  const sum1Input = page.locator("#sum1");
  const sum2Input = page.locator("#sum2");

  const getValuesBtn = page.locator("#gettotal > button");

  let num1 = 225;
  let num2 = 226;

  await sum1Input.type("" + num1);
  await sum2Input.type("" + num2);

  await getValuesBtn.click();

  let result = page.locator("#addmessage");
  console.log("actual result: " + (await result.textContent()));
  let expectedResult = num1 + num2;
  expect(result).toHaveText("" + expectedResult);
  console.log("expected result: " + expectedResult);
});

test("handling check box", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  const isAgeSelectedCheckbox = page.locator("#isAgeSelected");
  expect(isAgeSelectedCheckbox).not.toBeChecked();
  await isAgeSelectedCheckbox.check();
  expect(isAgeSelectedCheckbox).toBeChecked();
});
