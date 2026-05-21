import { test, expect } from '../fixtures/app.fixtures';
import { PowerTools } from '../pages/home.pages';

test('Verify user can filter products by category', async ({ app }) => {
  await app.homePage.navigate();
  await app.homePage.filterByCategory(PowerTools.Sander);

  await app.homePage.page.waitForLoadState('networkidle');

  const products = await app.homePage.getProductNames();
  products.forEach(product => {
    expect(product).toContain('Sander');
  });
});