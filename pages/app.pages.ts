import { Page } from '@playwright/test';
import { HomePage } from './home.pages';
import { ProductPage } from './product.pages';
import { CartPage } from './cart.pages';
import { HeaderFragment } from './header.pages';
import { LoginPage } from './login.pages';
import { AccountPage } from './account.pages';

export class App {
  homePage: HomePage;
  productPage: ProductPage;
  cartPage: CartPage;
  loginPage: LoginPage;
  header: HeaderFragment;
  accountPage: AccountPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.productPage = new ProductPage(page);
    this.cartPage = new CartPage(page);
    this.loginPage = new LoginPage(page);
    this.header = new HeaderFragment(page);
    this.accountPage = new AccountPage(page);
  }
}