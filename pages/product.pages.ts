import { Locator, Page } from '@playwright/test';

export class ProductPage {
  page: Page;
  productName: Locator;
  unitPrice: Locator;
  addToCart: Locator;
  addToFavorites: Locator;
  alertMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = this.page.locator('[data-test="product-name"]');
    this.unitPrice = this.page.locator('[data-test="unit-price"]');
    this.addToCart = this.page.locator('[data-test="add-to-cart"]');
    this.addToFavorites = this.page.locator('[data-test="add-to-favorites"]');
    this.alertMessage = page.locator('#toast-container');
  }
}