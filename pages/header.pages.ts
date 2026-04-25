import { Locator, Page } from '@playwright/test';

export class HeaderFragment {
  pageTitle: Locator;
  navMenu: Locator;

  constructor(page: Page) {
    this.pageTitle = page.locator('[data-test="page-title"]');
    this.navMenu = page.locator('[data-test="nav-menu"]');
  }
}