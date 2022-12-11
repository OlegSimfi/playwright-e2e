import { Locator } from '@playwright/test';

import config from '../../playwright.config';
import { Timeout } from '../constants/timeouts';

import { BasePage } from './base.page';

export class MainPage extends BasePage {
     title: Locator = this.idLocator('nav-title');

    async openHomePage(): Promise<void> {
        await this.page.goto(config.use.baseURL, { timeout: Timeout.L });
    }

    async waitForMainPageTitle(): Promise<void> {
        await this.waitForVisibility(this.title);
    }

}