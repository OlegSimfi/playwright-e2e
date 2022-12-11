import {expect} from '@playwright/test';

import {test} from '../fixtures/page.fixtures';

test.describe.skip('Contact Us functionality', () => {
    test.beforeEach(async ({mainPage}) => {
        await mainPage.openHomePage();
        await mainPage.waitForMainPageTitle();
    });
    //TODO: End the test after solving the issue with locators
    test('should verify the Contact page is opened', async ({mainPage, contactUsPage}) => {
        await mainPage.contactUs.click();
        await mainPage.openNewTab();
        await contactUsPage.submitButton.click();
    });
});