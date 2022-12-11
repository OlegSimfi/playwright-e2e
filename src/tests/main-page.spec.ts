import {expect} from '@playwright/test';

import {test} from '../fixtures/page.fixtures';
import {mainPageTitle} from "../data/main-page";

test.describe('Main page functionality', () => {
    test.beforeEach(async ({mainPage}) => {
        await mainPage.openHomePage();
        await mainPage.waitForMainPageTitle();
    });

    test('should verify the Main page title', async ({mainPage}) => {

        expect(await mainPage.getText(mainPage.title)).toBe(mainPageTitle);
    });

    test('should verify Main page sections', async ({mainPage}) => {
        mainPage.each(
            [
                mainPage.contactUs,
                mainPage.loginPortal,
                mainPage.buttonClicks,
                mainPage.pageObjectModel,
                mainPage.pageObjectAccordion,
                mainPage.dropdownCheckboxesRadiobuttons,
                mainPage.ajaxLoader,
                mainPage.actions,
                mainPage.scrollingAround,
                mainPage.popupAlerts,
                mainPage.iframe,
                mainPage.hiddenElements,
                mainPage.dataTable,
                mainPage.autocompleteTextfield,
                mainPage.fileUpload,
                mainPage.datepicker
            ],
            async mainPageSections => {
                expect(await mainPageSections.isVisible()).toBe(true);
            }
        );
    });
});