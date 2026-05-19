import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  paymentMethod = this.page.getByTestId('payment-method');

  cardNumber = this.page.getByTestId('credit_card_number');
  expirationDate = this.page.getByTestId('expiration_date');
  cvv = this.page.getByTestId('cvv');
  cardHolder = this.page.getByTestId('card_holder_name');

  confirmButton = this.page.getByTestId('finish');
  successMessage = this.page.getByTestId('payment-success-message');

  getExpirationDate() {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${month}/${year}`;
  }

  async fillCardData() {
    await this.paymentMethod.selectOption('credit-card');

    await this.cardNumber.fill('1111-1111-1111-1111');
    await this.expirationDate.fill(this.getExpirationDate());
    await this.cvv.fill('111');
    await this.cardHolder.fill('Test User');
  }

  async confirmPayment() {
    await this.confirmButton.click();
  }

  async verifySuccess() {
    await this.successMessage.isVisible();
  }
}