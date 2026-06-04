import { test, expect } from '../fixtures/loggedInApp';

test('@smoke Logged in user can complete checkout', async ({ loggedInApp, page }) => {

  let productName: string | null;

  await test.step('Open product page', async () => {
    await loggedInApp.homePage.navigate();

    const product = await loggedInApp.homePage
      .getProductByName('Slip Joint Pliers');

    productName = await product.textContent();

    await product.click();
  });

  await test.step('Add product to cart', async () => {
    await loggedInApp.productPage.addToCart.click();
  });

  await test.step('Open cart and verify product', async () => {
    await loggedInApp.cartPage.cartIcon.click();

    await expect(loggedInApp.cartPage.cartRows).toHaveCount(1);

    await expect(loggedInApp.cartPage.productTitle)
      .toHaveText(productName!);
  });

  await test.step('Proceed to checkout', async () => {
    await loggedInApp.cartPage.proceedToCheckout.click();
    await loggedInApp.cartPage.proceedToCheckout2.click();
  });

  await test.step('Fill billing address', async () => {
    await loggedInApp.billingPage.fillBillingAddress();
    await loggedInApp.billingPage.proceedToPayment.click();
  });

  await test.step('Verify user is not redirected to login', async () => {
    await expect(page).not.toHaveURL(/login/);
  });

  await test.step('Fill payment details', async () => {
    await loggedInApp.paymentPage.fillCardData();
    await loggedInApp.paymentPage.confirmPayment();
  });

  await test.step('Verify successful order placement', async () => {
    await loggedInApp.paymentPage.verifySuccess();
  });
});