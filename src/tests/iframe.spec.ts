import {expect} from '@playwright/test';

import {test} from '../fixtures/page.fixtures';
import {urls} from "../data/urls";
import {contactUsTitle, successMessage} from "../data/contact-us";

test.describe('iFrame carousel', () => {
    test.beforeEach(async ({iFramePage}) => {
        await iFramePage.openPageUrl(urls.iFrame);
        await iFramePage.waitForVisibility(iFramePage.iframe);
    });

    test('should verify carousel right scrolling', async ({iFramePage}) => {
        expect(await iFramePage.getActiveImage(iFramePage.image1).isVisible()).toBe(true);

        await iFramePage.chevronRight.click();
        await iFramePage.waitForVisibility(iFramePage.getActiveImage(iFramePage.image2));

        expect(await iFramePage.getActiveImage(iFramePage.image2).isVisible()).toBe(true);

        await iFramePage.chevronRight.click();
        await iFramePage.waitForVisibility(iFramePage.getActiveImage(iFramePage.image3));

        expect(await iFramePage.getActiveImage(iFramePage.image3).isVisible()).toBe(true);
    });

    test('should verify carousel left scrolling', async ({iFramePage}) => {
        expect(await iFramePage.getActiveImage(iFramePage.image1).isVisible()).toBe(true);

        await iFramePage.chevronLeft.click();
        await iFramePage.waitForVisibility(iFramePage.getActiveImage(iFramePage.image3));

        expect(await iFramePage.getActiveImage(iFramePage.image3).isVisible()).toBe(true);

        await iFramePage.chevronLeft.click();
        await iFramePage.waitForVisibility(iFramePage.getActiveImage(iFramePage.image2));

        expect(await iFramePage.getActiveImage(iFramePage.image2).isVisible()).toBe(true);
    });
});