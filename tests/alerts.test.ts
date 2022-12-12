import { expect, test } from "@playwright/test";
//Alert Box
test("Handling alerts JS", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  // the Alert element has to be handled before its appearance
  // event listener
  page.on("dialog", async (alert) => {
    // get the alert message
    const alertText = alert.message();
    console.log(alertText);
    //the message in the alert box should be: I am an alert box!
    expect(alertText).toEqual("I am an alert box!");
    //Click on the OK button to accept the alert  and close it
    await alert.accept();
  });

  //Get the first Click me button with XPath
  await page
    .locator('//*[@id="__next"]/section[4]/div/div/div[2]/div[1]/button')
    .click();
  //Get the first Click me button with PW locator
  await page.locator("button:has-text('CLick Me')").nth(0).click();
});

//Confirm Box
test("Handling Confirm Box accept scenario JS", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  // the Alert element has to be handled before its appearance
  // event listener
  page.on("dialog", async (alert) => {
    // get the alert message
    const alertText = alert.message();
    console.log(alertText);
    //the message in the alert box should be: Press a button!
    expect(alertText).toEqual("Press a button!");
    //Click on the OK button to accept the alert  and close it
    await alert.accept();
  });

  //Get the second Click me button with PW locator
  await page.locator("button:has-text('Click Me')").nth(1).click();
  const confirmationLable = page.locator("#confirm-demo");
  expect(confirmationLable).toContainText("You pressed OK!");
});

test("Handeling confirmation box cancel scenario", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  //validate cancelled scenario
  // the Alert element has to be handled before its appearance
  // event listener
  page.on("dialog", async (alert) => {
    // get the alert message
    const alertText = alert.message();
    console.log(alertText);
    //the message in the alert box should be: Press a button!
    expect(alertText).toEqual("Press a button!");
    //Click on the OK button to accept the alert  and close it
    await alert.dismiss();
  });

  //Get the second Click me button with PW locator
  await page.locator("button:has-text('Click Me')").nth(1).click();
  const confirmationLable = page.locator("#confirm-demo");
  expect(confirmationLable).toHaveText("You pressed Cancel!");
});

test("Handling prompt box", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  // the Alert element has to be handled before its appearance
  // event listener
  page.on("dialog", async (alert) => {
    // get the alert message
    const alertText = alert.message();
    console.log(alertText);
    //the message in the alert box should be: Please Enter your name!
    expect(alertText).toEqual("Please enter your name");
    //validate the default placeholder text
    const placeholderText = alert.defaultValue();
    console.log(placeholderText);
    //type into the prompt box within the accept
    //Click on the OK button to accept the alert  and close it
    await alert.accept("natan");
  });

  //Get the 3rd Click me button with PW locator
  await page.locator("button:has-text('Click Me')").nth(2).click();

  const confirmationLable = page.locator("#prompt-demo");
  expect(confirmationLable).toContainText("You have entered 'natan' !");
});

test("handling boostrap Modal alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"
  );

  await page.click('//*[@id="__next"]/section[4]/div/div/div[2]/div[1]/button');
  await page.click('//*[@id="myModal"]/div/div/div[3]/button[2]');
});
