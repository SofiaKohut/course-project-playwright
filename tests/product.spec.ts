import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.pages';


test('Verify user can view product details', async ({ page }) => {
    const homePage = new HomePage(page);
   
    await homePage.navigate();
    await page.getByText('Combination Pliers').click();
    
    
    await expect(page).toHaveURL(/product/);
    await expect(page.locator('[data-test="product-name"]')).toHaveText('Combination Pliers');
    await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15');
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();
})
