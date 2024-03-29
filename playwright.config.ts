import { devices, PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

//const { devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

const config: PlaywrightTestConfig = {
  //set browsers to run tests on
  projects: [
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  testMatch: [
    //"tests/login.test.ts",
    //"recorded_login.test.ts",
    // "tests/basicInteractions.test.ts",
    //"tests/alerts.test.ts",
    //"tests/dropdown.test.ts",
    //"tests/frames.test.ts",
    //"tests/windows.test.ts",
    //"tests/datepickers.test.ts",
    //"tests/uploadDownload.test.ts",
    //"pomtest/addToCart.test.ts",
    //"fixture/fixtureTest.test.ts",
    "pomtest/addToCartUsingFixture.test.ts",
  ],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // launchOptions: {
    //   slowMo: 1000,
  },

  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
};

module.exports = config;
