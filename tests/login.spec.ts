import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';
import { AccountPage } from '../pages/account.pages';

test('Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await page.goto('/auth/login');

  await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  await expect(accountPage.header.pageTitle).toBeVisible();
  await expect(accountPage.header.navMenu).toBeVisible();
});