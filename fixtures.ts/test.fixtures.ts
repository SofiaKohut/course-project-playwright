import { test as base } from '@playwright/test';
import { App } from '../pages/app.pages';

type Fixtures = {
  app: App;
  loggedInApp: App;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    await use(new App(page));
  },

  loggedInApp: async ({ app }, use) => {
    await app.loginPage.navigate();
    await app.loginPage.performLogin(
      'customer@practicesoftwaretesting.com',
      'welcome01'
    );
    await use(app);
  },
});

export { expect } from '@playwright/test';