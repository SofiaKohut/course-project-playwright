import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.pages';

const sortCases = [
  { name: 'Name A-Z', option: 'name,asc', order: 'asc' },
  { name: 'Name Z-A', option: 'name,desc', order: 'desc' },
  { name: 'Price Low-High', option: 'price,asc', order: 'asc'},
  { name: 'Price High-Low', option: 'price,desc', order: 'desc'}
];

for (const { name, option, order } of sortCases) {
  test(`Verify sorting by ${name}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.sortBy(option);

    const names = await homePage.getProductNames();
    const sorted = [...names].sort((a, b) =>
      order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    );

    expect(names).toEqual(sorted);
  });
}