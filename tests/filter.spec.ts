import { test, expect } from '../fixtures/app.fixtures';
import { PowerTools } from '../pages/home.pages';

test('@regression Verify user can filter products by category', async ({ app }) => {
  await test.step('Open home page', async () => {
  await app.homePage.navigate();
  });

  await test.step('Filter products by category', async () => {
  await app.homePage.filterByCategory(PowerTools.Sander);
  await app.homePage.page.waitForLoadState('networkidle');
  });

  await test.step('Verify only Sander products are displayed', async () => {
  const products = await app.homePage.getProductNames();
  products.forEach(product => {
    expect(product).toContain('Sander');
  });
 });
});