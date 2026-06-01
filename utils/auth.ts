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
   await page.context().addCookies([
    {
      name: 'auth_token',
      value: access_token,
      url: process.env.baseURL || 'https://practicesoftwaretesting.com',
    },
  ]);
  
  await page.goto('/');
  await page.reload();
}