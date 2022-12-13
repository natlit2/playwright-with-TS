import { expect, Page, test } from "@playwright/test";

test("Interface with multiple tabswindows/popups", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  console.log(page.url());

  //first we need to handle promiss and setup an event listener
  //using destructuring [newWindow]
  const [newindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'"),
  ]);

  console.log(newindow.url());

  await page.waitForTimeout(3000);
});

let facebookPage: Page; //comments below to why this is here
test("handling multiple windows/popups", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  const [multipleWindows] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth"),
  ]);

  //wait untill all pages are loaded
  await page.waitForLoadState();
  //how mant popups do we get when clicking on follow twitter & facebook
  const pages = multipleWindows.context().pages();
  console.log("number of tabs: " + pages.length);

  pages.forEach((tab) => {
    console.log(tab.url());
  });
  // this let facebookPage: Page; used to be here but moved to the top of the page to solve ts config compiler issue
  for (let index = 0; index < pages.length; index++) {
    const url = pages[index].url();
    if (url == "https://www.facebook.com/lambdatest/") {
      facebookPage = pages[index];
    }
  }
  const text = await facebookPage.textContent("//h1");
  console.log(text);

  ////by index
  //await pages[1].fill('target Locator','value');
  ////by specs i.e. facebook

  await page.waitForTimeout(3000);
});
