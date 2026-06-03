import { test as base, expect } from '@playwright/test';
import { App } from '../pages/app.pages';
import { loginByApi } from '../utils/auth';

type LoggedInFixture = {
  loggedInApp: App;
};

const test = base.extend<LoggedInFixture>({
  loggedInApp: async ({ page, request }, use) => {
    const app = new App(page);
    await loginByApi(request, page);
    await use(app);
  },
});

export { test, expect };