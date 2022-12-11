import {Locator} from '@playwright/test';

import config from '../../playwright.config';
import {Timeout} from '../constants/timeouts';

import {BasePage} from './base.page';

export class ContactUsPage extends BasePage {
    contactUsForm: Locator = this.idLocator('contact_form');
    submitButton: Locator = this.page.locator('[value="SUBMIT"]');

    async openHomePage(): Promise<void> {
        await this.page.goto(config.use.baseURL, {timeout: Timeout.L});
    }
}