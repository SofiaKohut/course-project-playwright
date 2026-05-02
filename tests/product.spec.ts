import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.pages';
import { ProductPage } from '../pages/product.pages';

test('Verify user can view product details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.navigate();
  await page.getByText('Combination Pliers').click();

  await expect(page).toHaveURL(/product/);
  await expect(productPage.productName).toHaveText('Combination Pliers');
  await expect(productPage.unitPrice).toHaveText('14.15');
  await expect(productPage.addToCart).toBeVisible();
  await expect(productPage.addToFavorites).toBeVisible();
});