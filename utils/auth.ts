import { APIRequestContext, Page } from '@playwright/test';

export async function loginByApi(request: APIRequestContext, page: Page) {
  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01',
      },
    }
  );

  const { access_token } = await response.json();
  
  await page.evaluate((token) => {
    localStorage.setItem('auth-token', token);
  }, access_token);

  await page.goto('/');
  await page.reload();
}