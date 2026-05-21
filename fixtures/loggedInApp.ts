import { test as base, expect } from '@playwright/test';
import { App } from '../pages/app.pages';

type LoggedInFixture = {
  loggedInApp: App;
};

const test = base.extend<LoggedInFixture>({
  loggedInApp: async ({ page }, use) => {
    const app = new App(page);
    await app.loginPage.navigate();
    await app.loginPage.performLogin(
      'customer@practicesoftwaretesting.com',
      'welcome01'
    );
     await expect(page).toHaveURL('/account');
    await use(app);
  },
});

export { test, expect };