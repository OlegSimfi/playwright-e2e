import {Locator} from '@playwright/test';

import {BasePage} from './base.page';

export class DatepickerPage extends BasePage {
    header: Locator = this.idLocator('main-header');
    selectDateInput: Locator = this.page.locator('.form-control');
    openCalendarButton: Locator = this.page.locator('.input-group-addon');
    datepickerDropdown: Locator = this.page.locator('.datepicker-dropdown');
    mmYY: Locator = this.page.locator('.datepicker-switch').nth(0);
    mmYyPrevArrow: Locator = this.page.locator('.prev').nth(0);
    mmYyNextArrow: Locator = this.page.locator('.next').nth(0);
    date24: Locator = this.page.locator('//td[@class="day"][text()="24"]');

    async openCalendarDropdown(): Promise<void> {
        await this.openCalendarButton.click();
        await this.waitForVisibility(this.datepickerDropdown);
    }

    async selectDdMmYy(date: string, mmYyForSelect: string): Promise<void> {
        while (await this.mmYY.textContent() != mmYyForSelect ) {
            await this.mmYyNextArrow.click();
        }

        await this.page.locator(`//td[@class="day"][text()=${date}]`).click();
        await this.waitForInvisible(this.datepickerDropdown);
    }
}