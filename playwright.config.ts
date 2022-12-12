import type { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import { env } from "process";
// import express from "express";

dotenv.config();

const { devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

const config: PlaywrightTestConfig = {
  testMatch: [
    "tests/login.test.ts",
    // "tests/recorded.test.ts",
    // "tests/basicInteractions.test.ts",
    // "tests/alerts.test.ts",
    //tests/dropdown.test.ts",
  ],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
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
