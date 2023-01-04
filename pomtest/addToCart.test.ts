import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registrationPage";
import SpecialHotPage from "../pages/specialHotPage";

const email = "natan@natan2.natan";
const pass = "test1234";
test.describe("Page Object Model addToCart test", async () => {
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

  test("Login with the newly created user test_02", async ({
    page,
    baseURL,
  }) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmail(email);
    await login.enterPassword(pass);
    await login.clickLoginBtb();
    expect(await page.title()).toBe("My Account");
  });

  test("add to cart test_3", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const specialHotPage = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.login(email, pass);
    await homePage.clickOnSpecialHotMenu();
    await specialHotPage.addFirstProductToCart();
    const isCartVisible = await specialHotPage.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
