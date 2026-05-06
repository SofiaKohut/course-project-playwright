import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.pages';
import { ProductPage } from '../pages/product.pages';
import { CartPage } from '../pages/cart.pages';




test('Verify user can add product to cart', async ({ page }) => {
const homePage = new HomePage(page);
const productPage = new ProductPage(page);
const cartPage = new CartPage(page);

await homePage.navigate();
await homePage.getProductByName('Slip Joint Pliers').click();
await expect(page).toHaveURL(/product/);

await expect(productPage.productName).toHaveText('Slip Joint Pliers');
await expect(productPage.unitPrice).toHaveText('9.17');

await productPage.addToCart.click();
await expect(productPage.alertMessage).toBeVisible();
await expect(productPage.alertMessage).toHaveText('Product added to shopping cart.');
await expect(productPage.alertMessage).not.toBeVisible({ timeout: 8000 });
await expect(cartPage.cartQuantity).toHaveText('1');

await cartPage.cartIcon.click();
await expect(page).toHaveURL('/checkout');
await expect(cartPage.cartRows).toHaveCount(1);
await expect(cartPage.productTitle).toHaveText('Slip Joint Pliers');
await expect(cartPage.proceedToCheckout).toBeVisible();


});