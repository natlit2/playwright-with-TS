import { test as myTest } from "@playwright/test";

// type user = {
//   age: number;
//   email: string;
// };

const myFixtureTest = myTest.extend<{
  age: number;
  email: string;
}>({
  age: 37,
  email: "user@user.com",
});

export const test = myFixtureTest;
