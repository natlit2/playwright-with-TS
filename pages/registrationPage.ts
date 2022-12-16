import { Page } from "@playwright/test";

export default class RegisterPage {
  constructor(public page: Page) {}
  async enterFirstName(firstname: string) {
    await this.page.locator("#input-firstname").type(firstname);
  }
  async enterLastName(lastname: string) {
    await this.page.locator("#input-lastname").type(lastname);
  }
  async enterEmail(email: string) {
    await this.page.locator("//input[@type='email']").type(email);
  }
  async enterTelephone(telephone: string) {
    await this.page.locator("//input[@type='tel']").type(telephone);
  }
  async enterPassword(pass: string) {
    await this.page.locator("#input-password").type(pass);
  }
  async enterConfirmPassword(confPass: string) {
    await this.page.locator("#input-confirm").type(confPass);
  }

  async isSubscribeChecked() {
    return this.page.locator("input-newsletter-no");
  }
  async agreeToPolicy() {
    await (
      await this.page.waitForSelector(
        "//div[contains(@class,'custom-control custom-checkbox')]"
      )
    ).click();
  }

  async clickContinueToRegister() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click("//input[@type='submit']"),
    ]);
  }
}
