import { test as base } from '@playwright/test';

import {MainPage} from '../pages/main.page';
import {ContactUsPage} from "../pages/contact-us.page";
import {IframePage} from "../pages/iframe.page";
export const test = base.extend<{
    mainPage: MainPage;
    contactUsPage: ContactUsPage;
    iFramePage: IframePage;

}>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    contactUsPage: async ({ page }, use) => {
        await use(new ContactUsPage(page));
    },
    iFramePage: async ({ page }, use) => {
        await use(new IframePage(page));
    }
});
export const { expect } = test;
