import { test as base } from '@playwright/test';

import {MainPage} from '../pages/main.page';
export const test = base.extend<{
    mainPage: MainPage;

}>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    }
});

export const { expect } = test;
