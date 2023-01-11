import { test as baseTest } from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registrationPage";
import SpecialHotPage from "../pages/specialHotPage";

//allows using created page (class) objects instead of recreating them each time

type pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  homePage: HomePage;
  specialHotPage: SpecialHotPage;
};

const testPages = baseTest.extend<pages>({
  //test.use  ({}) to override the  value

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  specialHotPage: async ({ page }, use) => {
    await use(new SpecialHotPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export const test = testPages;
export const expect = testPages.extend;
