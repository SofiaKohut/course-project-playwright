import { test, expect } from '../fixtures/app.fixtures';

interface MockProduct {
  id: number;
  name: string;
  price: number;
}

test('@regression Verify mocked products', async ({ page }) => {
  const mockedProducts: MockProduct[] = [];
  
  for (let i = 1; i <= 20; i++) {
    mockedProducts.push({
      id: i,
      name: `Mock Product ${i}`,
      price: i * 10,
    });
  }

  await page.route('**/api.practicesoftwaretesting.com/products**', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: mockedProducts,
        current_page: 1,
        from: 1,
        last_page: 1,
        per_page: 20,
        to: 20,
        total: 20,
      }),
    });
  });

  await page.goto('/');
  
  const productNames = page.getByTestId('product-name');
  await expect(productNames).toHaveCount(20);
});