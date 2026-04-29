import { Locator, Page } from '@playwright/test';

export class HeaderFragment {
  pageTitle: Locator;
  navMenu: Locator;

  constructor(page: Page) {
  this.pageTitle = page.getByTestId('page-title');
  this.navMenu = page.getByTestId('nav-menu');
  }
}