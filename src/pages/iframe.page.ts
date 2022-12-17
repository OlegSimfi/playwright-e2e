import {Locator} from '@playwright/test';

import {BasePage} from './base.page';

export class IframePage extends BasePage {
    iframe: Locator = this.idLocator('frame');
    chevronRight: Locator = this.page.frameLocator('iframe').locator('.right');
    chevronLeft: Locator = this.page.frameLocator('iframe').locator('.left');
    image1 = '../img/amp.svg';
    image2 = '../img/boombox.svg';
    image3 = '../img/nintendo.svg';

     getActiveImage(image: string): Locator {
        return this.page.frameLocator('iframe').locator(`.active [src='${image}']`);
    }
}

