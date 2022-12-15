import {expect} from '@playwright/test';

import {test} from '../fixtures/page.fixtures';
import {urls} from "../data/urls";
import {contactUsTitle, successMessage} from "../data/contact-us";

test.describe('Contact Us functionality', () => {
    test.beforeEach(async ({contactUsPage}) => {
        await contactUsPage.openPageUrl(urls.contactUs);
        await contactUsPage.waitForVisibility(contactUsPage.title);
    });

    test('should verify the Contact page is opened', async ({mainPage, contactUsPage}) => {
        expect(await contactUsPage.getText(contactUsPage.title)).toBe(contactUsTitle);
    });

    test('should verify the Contact Us form submitting', async ({contactUsPage}) => {
        await contactUsPage.fillForm();
        await contactUsPage.submitButton.click();

        expect(await contactUsPage.getText(contactUsPage.successHeader)).toBe(successMessage);
    });

    test('should verify reset the Contact Us form', async ({contactUsPage}) => {
        await contactUsPage.fillForm();
        await contactUsPage.resetButton.click();

        contactUsPage.each(
            [
                contactUsPage.input(contactUsPage.firstName),
                contactUsPage.input(contactUsPage.lastName),
                contactUsPage.input(contactUsPage.email),
            ],
            async formInputs => {
                expect(await contactUsPage.getInputValue(formInputs)).toBe('');
            }
        );
        expect(await contactUsPage.getInputValue(contactUsPage.messageArea)).toBe('');
    });
});