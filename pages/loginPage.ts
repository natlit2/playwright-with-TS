import { Page } from "@playwright/test";
export default class LoginPage {
  constructor(public page: Page) {}

  async login(email: string, pass: string) {
    await this.enterEmail(email);
    await this.enterPassword(pass);
    await this.clickLoginBtb();
  }

  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }
  async enterPassword(pass: string) {
    await this.page.locator("#input-password").type(pass);
  }
  async clickLoginBtb() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.locator("//input[@type='submit']").click(),
    ]);
  }
}
