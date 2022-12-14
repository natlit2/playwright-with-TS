import { test } from "@playwright/test";
import { uptime } from "process";

test("Download files", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo"
  );

  await page.type("#textbox", "some text bla bla bla");
  await page.click("#create");
  //await page.click("#link-to-download"); ////this will not save the file anywhere because the promis needs to  be handled by an event listener
  const download = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download"),
  ]);

  const fileName = download[0].suggestedFilename();
  await download[0].saveAs(fileName);

  //   const path = await download.path();
  //   console.log("this is the downloaded file path: " + path);  //this saves the fie in the temp folder and it gets cleared when the browser is closed
});

test("Upload file", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  await page.setInputFiles("input[type='file']", [
    "items_to_upload/hellothere.png",
    "items_to_upload/thanks4digginginmyrepo.txt",
  ]);
  await page.waitForTimeout(5000);
});

//upload file with the file chooser
test("Upload files with file chooser", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("input[type='file']"),
  ]);
  const isMultiple = uploadFiles.isMultiple();

  uploadFiles.setFiles([
    "items_to_upload/hellothere.png",
    "items_to_upload/thanks4digginginmyrepo.txt",
  ]);
  await page.waitForTimeout(5000);
});
