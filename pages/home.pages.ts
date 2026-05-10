import { Page } from '@playwright/test';
import { HeaderFragment } from './header.pages';

export enum HandTools {
  Hammer = 'Hammer',
  Screwdriver = 'Screwdriver',
  Pliers = 'Pliers',
}

export enum PowerTools {
  Sander = 'Sander',
  Saw = 'Saw',
  Drill = 'Drill',
}

export enum Other {
  Workbench = 'Workbench',
  ToolBelts = 'Tool Belts',
}

export enum SortOption {
  NameAsc = 'name,asc',
  NameDesc = 'name,desc',
  PriceAsc = 'price,asc',
  PriceDesc = 'price,desc',
}
export class HomePage {
  page: Page;
  header: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  getProductByName(name: string) {
    return this.page.getByText(name);
  }

  async sortBy(value: SortOption) {
  await this.page.getByTestId('sort').selectOption(value);
}

  async getProductNames() {
    return await this.page.getByTestId('product-name').allTextContents();
}
async getProductPrices() {
    const prices = await this.page.getByTestId('product-price').allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '').trim()));
}
async filterByCategory(category : string) {
    await this.page.getByRole('checkbox', { name: category }).check();
}
}