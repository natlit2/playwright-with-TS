import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registrationPage";
import SpecialHotPage from "../pages/specialHotPage";

const email = "natan@natan.natan";
const pass = "test1234";

test("Register test_01", async ({ page, baseURL }) => {
  const register = new RegisterPage(page);
  await page.goto(`${baseURL}route=account/register`);
  await register.enterFirstName("natan");
  await register.enterEmail(email);
  await register.enterLastName("natan");
  await register.enterTelephone("011111111111");
  await register.enterPassword(pass);
  await register.enterConfirmPassword(pass);

  await expect(register.isSubscribeChecked()).toBeTruthy();
  await register.agreeToPolicy();
  await register.clickContinueToRegister();
});
