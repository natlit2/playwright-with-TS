import type { PlaywrightTestConfig } from "@playwright/test";

const { devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const config: PlaywrightTestConfig = {
  testMatch: ["tests/Login.test.ts"],
};

module.exports = config;
