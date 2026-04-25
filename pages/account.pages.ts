import { Page } from '@playwright/test';
import { HeaderFragment } from './header.pages';

export class AccountPage {
  page: Page;
  header: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
  }
}