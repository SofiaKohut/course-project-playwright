import { test, expect } from '../fixtures/test.fixtures';

test('Verify user can view product details', async ({ app }) => {
  await app.homePage.navigate();
  await app.homePage.getProductByName('Combination Pliers').click();

  await expect(app.homePage.page).toHaveURL(/product/);
  await expect(app.productPage.productName).toHaveText('Combination Pliers');
  await expect(app.productPage.unitPrice).toHaveText('14.15');
  await expect(app.productPage.addToCart).toBeVisible();
  await expect(app.productPage.addToFavorites).toBeVisible();
});