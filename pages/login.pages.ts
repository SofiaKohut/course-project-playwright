 import { Locator, Page } from '@playwright/test';



export class LoginPage {
    page: Page;
    emailField: Locator;
    passwordField: Locator;
    constructor (page : Page) {
        this.page = page;
        this.emailField = this.page.getByLabel('Email address');
        this.passwordField = this.page.locator('[data-test="password"]') ;

    }

    async performLogin(email: string, password: string): Promise<void> {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
   
}