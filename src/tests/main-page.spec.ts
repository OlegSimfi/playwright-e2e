import { expect } from '@playwright/test';

import { test } from '../fixtures/page.fixtures';
import {mainPageTitle} from "../data/main-page";

test.describe('Main page functionality', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.openHomePage();
        await mainPage.waitForMainPageTitle();
    });

    test('should verify the Main page title', async ({ mainPage }) => {

        expect(await mainPage.getText(mainPage.title)).toBe(mainPageTitle);
    });
});