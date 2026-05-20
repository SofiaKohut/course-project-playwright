import { Page } from '@playwright/test';

export class BillingPage {
  constructor(private page: Page) {}

  country = this.page.getByTestId('country');
  postalCode = this.page.getByTestId('postal_code');
  houseNumber = this.page.getByTestId('house_number');
  state = this.page.getByTestId('state');

  proceedToPayment = this.page.getByTestId('proceed-3');


async fillBillingAddress() {
  await this.postalCode.fill('79000');
  await this.houseNumber.fill('12');
  await this.state.fill('Lviv');
}
}