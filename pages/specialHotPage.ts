import { Page } from "@playwright/test";

export default class SpecialHotPage {
  constructor(public page: Page) {}

  async addFirstProductToCart() {
    await this.page.hover("//div[@class='image']", {
      strict: false,
    });
    await this.page.locator("(//button[@title='Add to Cart']//i)[1]").click();
  }
  async isToastVisible() {
    const toast = this.page.locator("'View Cart'");
    await toast.waitFor({ state: "visible" });
    return toast;
  }
}
