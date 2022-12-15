import {Locator} from '@playwright/test';

import {BasePage} from './base.page';
import {ContactUsMessage} from "../data/contact-us";

export class ContactUsPage extends BasePage {
    title: Locator = this.page.locator('.section_header');
    contactUsForm: Locator = this.idLocator('contact_form');
    submitButton: Locator = this.page.locator('[value="SUBMIT"]');
    resetButton: Locator = this.page.locator('[value="RESET"]');
    messageArea: Locator = this.page.locator('textarea[name="message"]');
    firstName = 'first_name';
    lastName = 'last_name';
    email = 'email';
    successHeader = this.page.locator('h1');

    async fillInput(input: string, value: string): Promise<void> {
        await this.input(input).fill(value)
    }

    async fillForm(): Promise<void> {
        await this.fillInput(this.firstName, ContactUsMessage.FirstName);
        await this.fillInput(this.lastName, ContactUsMessage.LastName);
        await this.fillInput(this.email, ContactUsMessage.Email);
        await this.messageArea.fill(ContactUsMessage.Message);
    }
}
