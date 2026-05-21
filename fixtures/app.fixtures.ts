import { test as base, expect } from '@playwright/test';
import { App } from '../pages/app.pages';

type MyFixtures = {
  app: App;
};

const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    await use(new App(page));
  },
});

export { test, expect };