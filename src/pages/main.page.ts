import {Locator} from '@playwright/test';

import config from '../../playwright.config';
import {Timeout} from '../constants/timeouts';

import {BasePage} from './base.page';

export class MainPage extends BasePage {
    title: Locator = this.idLocator('nav-title');
    contactUs: Locator = this.idLocator('contact-us');
    loginPortal: Locator = this.idLocator('login-portal');
    buttonClicks: Locator = this.idLocator('button-clicks');
    pageObjectModel: Locator = this.idLocator('page-object-model').nth(0);
    pageObjectAccordion: Locator = this.idLocator('page-object-model').nth(1);
    dropdownCheckboxesRadiobuttons: Locator = this.idLocator('dropdown-checkboxes-radiobuttons');
    ajaxLoader: Locator = this.idLocator('ajax-loader');
    actions: Locator = this.idLocator('actions');
    scrollingAround: Locator = this.idLocator('scrolling-around');
    popupAlerts: Locator = this.idLocator('popup-alerts');
    iframe: Locator = this.idLocator('iframe');
    hiddenElements: Locator = this.idLocator('hidden-elements');
    dataTable: Locator = this.idLocator('data-table');
    autocompleteTextfield: Locator = this.idLocator('autocomplete-textfield');
    fileUpload: Locator = this.idLocator('file-upload');
    datepicker: Locator = this.idLocator('datepicker');

    async openHomePage(): Promise<void> {
        await this.page.goto(config.use.baseURL, {timeout: Timeout.L});
    }

    async waitForMainPageTitle(): Promise<void> {
        await this.waitForVisibility(this.title);
    }

}