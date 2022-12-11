import { test as base } from '@playwright/test';

import {MainPage} from '../pages/main.page';
import {ContactUsPage} from "../pages/contact-us.page";
export const test = base.extend<{
    mainPage: MainPage;
    contactUsPage: ContactUsPage;

}>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    contactUsPage: async ({ page }, use) => {
        await use(new ContactUsPage(page));
    }
});

export const { expect } = test;
