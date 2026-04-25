import { Page } from '@playwright/test';
import { HeaderFragment } from './header.pages';

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
}