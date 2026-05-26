import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';
import { AccountPage } from '../pages/account.pages';


test.use({ storageState: 'playwright/.auth/user.json' });

test('@smoke Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await loginPage.navigate();

  await loginPage.performLogin(
  process.env.userEmail || 'customer@practicesoftwaretesting.com',
  process.env.userPassword || 'welcome01');

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  await expect(accountPage.header.pageTitle).toBeVisible();
  await expect(accountPage.header.navMenu).toBeVisible();
});