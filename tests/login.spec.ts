import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';
import { AccountPage } from '../pages/account.pages';

test.use({ storageState: 'playwright/.auth/user.json' });

test('@smoke Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await test.step('Navigate to login page', async () => {
    await loginPage.navigate();
  });

  await test.step('Fill credentials and login', async () => {
    await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');
  });

  await test.step('Verify logged in and page elements visible', async () => {
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(accountPage.header.pageTitle).toBeVisible();
    await expect(accountPage.header.navMenu).toBeVisible();
  });
});