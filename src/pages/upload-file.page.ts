import {Locator} from '@playwright/test';

import {BasePage} from './base.page';

export class UploadFilePage extends BasePage {
    title: Locator = this.page.locator('h1');
    uploadInput: Locator = this.idLocator('myFile');
    submitButton: Locator = this.idLocator('submit-button');
}

