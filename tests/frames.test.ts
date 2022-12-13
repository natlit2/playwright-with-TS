import { expect, test } from "@playwright/test";

test("Interactions with frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  //get  all frames in an array
  const allframes = page.frames();
  console.log("number of freames: " + allframes.length);

  const firstname = "natan";
  const lastname = "natlit";
  //find using frameLocator
  const myFrame = page.frameLocator("#firstFr");
  await myFrame.locator("input[name='fname']").fill(firstname);
  await myFrame.locator("input[name='lname']").fill(lastname);

  ////another way to find the iframe
  // const firstFrame = await page.frame("firstFr");

  // //  frame object

  // await firstFrame?.fill("input[name='fname']", firstname);
  // await firstFrame?.fill("input[name='lname']", lastname);
  // // ?. checks for null
  // // same as
  // // if (firstFrame !=null){
  // //   await firstFrame.fill ("locator","value");
  // // }

  // expect(await firstFrame?.locator("p.has-text-info").textContent()).toContain(
  //   "You have entered"
  // );

  await page.waitForTimeout(3000);
});

//// interacting with a nested frame

test("interacting with t anested/inner frame", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  //get  all frames in an array
  const allframes = page.frames();
  console.log("number of freames: " + allframes.length);

  const eMail = "thats_so_cool@whatever.test";
  // get main frame
  const myFrame = page.frameLocator("#firstFr");
  //get the nested frame
  const nestedFrame = myFrame.frameLocator("iframe[src='innerFrame']");
  await nestedFrame.locator("input[name='email']").fill(eMail);

  await page.waitForTimeout(3000);
});
