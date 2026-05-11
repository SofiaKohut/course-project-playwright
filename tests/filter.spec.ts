import { test, expect } from '@playwright/test';
import { HomePage, PowerTools } from '../pages/home.pages';

test('Verify user can filter products by category', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  await homePage.filterByCategory(PowerTools.Sander);
  
  await page.waitForLoadState('networkidle');

  const products = await homePage.getProductNames();
  products.forEach(product => {
    expect(product).toContain('Sander');
  });
});