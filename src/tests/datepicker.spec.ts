import {expect} from '@playwright/test';

import {test} from '../fixtures/page.fixtures';
import {urls} from "../data/urls";
import {DateForSelect} from "../data/datepicker";

test.describe('Datepicker', () => {
    test.beforeEach(async ({datepickerPage}) => {
        await datepickerPage.openPageUrl(urls.datepicker);
        await datepickerPage.waitForVisibility(datepickerPage.header);
    });

    test('should verify date selecting', async ({datepickerPage}) => {
        await datepickerPage.openCalendarDropdown();
        await datepickerPage.selectDdMmYy(DateForSelect.date, DateForSelect.mmYy);

        expect(await datepickerPage.getInputValue(datepickerPage.selectDateInput)).toBe(DateForSelect.mmDdYyyy);
    });
});