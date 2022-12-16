import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}
  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }
  async enterPassword(pass: string) {
    await this.page.locator("#input-password").type(pass);
  }
  async clickLoginBtb() {
    await this.page.locator("//input[@type='submit']").click();
  }
}
