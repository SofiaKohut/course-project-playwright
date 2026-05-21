import { test, expect } from '../fixtures/loggedInApp';

test('Logged in user can complete checkout', async ({ loggedInApp, page }) => {

  // 1. Open product
  await loggedInApp.homePage.navigate();

  const product = await loggedInApp.homePage
    .getProductByName('Slip Joint Pliers');

  const productName = await product.textContent();

  await product.click();

  // 2. Add to cart
  await loggedInApp.productPage.addToCart.click();

  // 3. Open cart
  await loggedInApp.cartPage.cartIcon.click();

  await expect(loggedInApp.cartPage.cartRows).toHaveCount(1);

  await expect(loggedInApp.cartPage.productTitle)
    .toHaveText(productName!);

  // 4. Checkout
  await loggedInApp.cartPage.proceedToCheckout.click();
  await loggedInApp.cartPage.proceedToCheckout2.click();
  
  // 5. Billing 
  await loggedInApp.billingPage.fillBillingAddress();
  await loggedInApp.billingPage.proceedToPayment.click();

  // verify not redirected to login
  await expect(page).not.toHaveURL(/login/);

  // 6. Payment
  await loggedInApp.paymentPage.fillCardData();
  await loggedInApp.paymentPage.confirmPayment();

  // 7. Success check
  await loggedInApp.paymentPage.verifySuccess();
});