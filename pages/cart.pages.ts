import { Locator, Page } from '@playwright/test';

export class CartPage {
  page: Page;
  cartIcon: Locator;
  cartQuantity: Locator;
  cartRows: Locator;
  productTitle: Locator;
  proceedToCheckout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('[data-test="nav-cart"]');
    this.cartQuantity = page.locator('[data-test="cart-quantity"]');
    this.cartRows = page.locator('tbody tr');
    this.productTitle = page.locator('[data-test="product-title"]');
    this.proceedToCheckout = page.locator('[data-test="proceed-1"]');
  }
}