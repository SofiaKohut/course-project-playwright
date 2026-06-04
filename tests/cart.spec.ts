import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.pages';
import { ProductPage } from '../pages/product.pages';
import { CartPage } from '../pages/cart.pages';




test('@smoke Verify user can add product to cart', async ({ page }) => {
const homePage = new HomePage(page);
const productPage = new ProductPage(page);
const cartPage = new CartPage(page);

await test.step('Navigate to home page and select product', async () => {
await homePage.navigate();
await homePage.getProductByName('Slip Joint Pliers').click();
await expect(page).toHaveURL(/product/);
});

await test.step('Verify product details', async () => {
await expect(productPage.productName).toHaveText('Slip Joint Pliers');
await expect(productPage.unitPrice).toHaveText('9.17');
});

await test.step('Add product to cart', async () => {
await productPage.addToCart.click();
await expect(productPage.alertMessage).toBeVisible();
await expect(productPage.alertMessage).toHaveText('Product added to shopping cart.');
await expect(productPage.alertMessage).not.toBeVisible({ timeout: 8000 });
});


await test.step('Verify cart contents', async () => {
await expect(cartPage.cartQuantity).toHaveText('1');
await cartPage.cartIcon.click();
await expect(page).toHaveURL('/checkout');
await expect(cartPage.cartRows).toHaveCount(1);
await expect(cartPage.productTitle).toHaveText('Slip Joint Pliers');
await expect(cartPage.proceedToCheckout).toBeVisible();
});
});