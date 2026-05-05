import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';

const authFile = 'playwright/.auth/user.json';

setup('Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

  await page.context().storageState({ path: authFile });
});