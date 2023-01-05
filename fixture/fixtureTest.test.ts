import { test } from "./ecomSiteFixture";

test("fixture", async ({ age, email }) => {
  console.log(`age: ${age + 1},email: ${email.toUpperCase()} `);
});
