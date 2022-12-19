import {expect} from '@playwright/test';

import {test} from '../fixtures/page.fixtures';
import {urls} from '../data/urls';
import {successUploadingMessage} from "../data/upload-file";

test.describe.skip('Upload file', () => {
    test.beforeEach(async ({uploadFilePage}) => {
        await uploadFilePage.openPageUrl(urls.uploadFile);
        await uploadFilePage.waitForVisibility(uploadFilePage.title);
    });
    //TODO: Find out why the click is not working properly
    test('should verify file uploading', async ({uploadFilePage, page}) => {
        await uploadFilePage.uploadInput.setInputFiles('src/data/img/pepe.jpg');
        await uploadFilePage.submitButton.click();
        page.on('dialog', async dialog => {
            expect(await dialog.message()).toBe(successUploadingMessage);
        });
    });
});