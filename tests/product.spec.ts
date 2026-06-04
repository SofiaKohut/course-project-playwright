import { test, expect } from '../fixtures/app.fixtures';

test('@smoke Verify user can view product details', async ({ app }) => {

  await test.step('Open product details page', async () => {
  await app.homePage.navigate();
  await app.homePage.getProductByName('Combination Pliers').click();
  });

  await test.step('Verify product details are displayed correctly', async () => {
  await expect(app.homePage.page).toHaveURL(/product/);
  await expect(app.productPage.productName).toHaveText('Combination Pliers');
  await expect(app.productPage.unitPrice).toHaveText('14.15');
  });
  
  await test.step('Verify product actions are available', async () => {
  await expect(app.productPage.addToCart).toBeVisible();
  await expect(app.productPage.addToFavorites).toBeVisible();
 });
});