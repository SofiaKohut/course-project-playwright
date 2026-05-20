import { test, expect } from '../fixtures/app.fixtures';
import { SortOption } from '../pages/home.pages';

const sortCases = [
  { name: 'Name A-Z', option: SortOption.NameAsc, order: 'asc' },
  { name: 'Name Z-A', option: SortOption.NameDesc, order: 'desc' },
  { name: 'Price Low-High', option: SortOption.PriceAsc, order: 'asc' },
  { name: 'Price High-Low', option: SortOption.PriceDesc, order: 'desc' },
];

for (const { name, option, order } of sortCases) {
  test(`Verify sorting by ${name}`, async ({ app }) => {
    await app.homePage.navigate();
    await app.homePage.sortBy(option);

    const names = await app.homePage.getProductNames();
    const sorted = [...names].sort((a, b) =>
      order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    );

    expect(names).toEqual(sorted);
  });
}