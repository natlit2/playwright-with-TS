//import { test, expect } from "@playwright/test";
import { test, expect } from "../base/pomFixture";
// import HomePage from "../pages/homePage";
// import LoginPage from "../pages/loginPage";
// import RegisterPage from "../pages/registrationPage";
// import SpecialHotPage from "../pages/specialHotPage";
import * as data from "../test-data/addToCart-test-data.json";

const email = "natan@natan2.natan";
const pass = "test1234";

// overide default chromium browser and define a browser for the specific tests in this file(this will run all tests in this file on the defined browser)

// test.use({
//   browserName: "firefox",
// });

test.describe("Page Object Model addToCart test", async () => {
  test("Register test_01", async ({ page, baseURL, registerPage }) => {
    // const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(data.firstName);
    await registerPage.enterEmail(data.email);
    await registerPage.enterLastName(data.lastName);
    await registerPage.enterTelephone(data.phone);
    await registerPage.enterPassword(pass);
    await registerPage.enterConfirmPassword(pass);

    //expect(registerPage.isSubscribeChecked()).toBeTruthy(); //need to fix
    await registerPage.agreeToPolicy();
    await registerPage.clickContinueToRegister();
  });

  test("Login with the newly created user test_02", async ({
    page,
    baseURL,
    loginPage,
  }) => {
    // const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(pass);
    await loginPage.clickLoginBtb();
    //expect(await login.title()).toBe("My Account"); //need to fix
  });

  test("add to cart test_3", async ({
    page,
    baseURL,
    loginPage,
    homePage,
    specialHotPage,
  }) => {
    // const login = new LoginPage(page);
    // const homePage = new HomePage(page);
    // const specialHotPage = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.login(email, pass);
    await homePage.clickOnSpecialHotMenu();
    await specialHotPage.addFirstProductToCart();
    // const isCartVisible = await specialHotPage.isToastVisible(); //need to fix
    // expect(isCartVisible).toBeVisible(); //need to fix
  });
});
