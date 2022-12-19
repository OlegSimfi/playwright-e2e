import { test as base } from '@playwright/test';

import {MainPage} from '../pages/main.page';
import {ContactUsPage} from "../pages/contact-us.page";
import {IframePage} from "../pages/iframe.page";
import {DatepickerPage} from "../pages/datepicker.page";
import {UploadFilePage} from "../pages/upload-file.page";
export const test = base.extend<{
    mainPage: MainPage;
    contactUsPage: ContactUsPage;
    iFramePage: IframePage;
    datepickerPage: DatepickerPage;
    uploadFilePage: UploadFilePage;

}>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    contactUsPage: async ({ page }, use) => {
        await use(new ContactUsPage(page));
    },
    iFramePage: async ({ page }, use) => {
        await use(new IframePage(page));
    },
    datepickerPage: async ({ page }, use) => {
        await use(new DatepickerPage(page));
    },
    uploadFilePage: async ({ page }, use) => {
        await use(new UploadFilePage(page));
    }
});
export const { expect } = test;
