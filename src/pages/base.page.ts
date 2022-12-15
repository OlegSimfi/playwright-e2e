import { Locator, Page } from '@playwright/test';
import {Timeout} from "../constants/timeouts";
import config from "../../playwright.config";
export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    public idLocator(element: string): Locator {
        return this.page.locator(`[id='${element}']`);
    }

    public input(element: string): Locator {
        return this.page.locator(`input[name='${element}']`);
    }

    public each<T>(data: T[], fn: (value: T) => void): void {
        data.forEach(fn);
    }

    async getText(element: Locator): Promise<string> {
        await element.scrollIntoViewIfNeeded();
        return element.innerText();
    }

    async getInputValue(element: Locator): Promise<string> {
        return element.inputValue();
    }

    async waitForVisibility(element: Locator): Promise<void> {
        return element.waitFor({ state: 'visible', timeout: Timeout.L });
    }

    async scrollIntoView(element: Locator): Promise<void> {
        await element.scrollIntoViewIfNeeded();
    }

    async openNewTab(): Promise<void> {
        const context = this.page.context();
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            this.page.click('a[target="_blank"]') // Opens a new tab
        ])
        await newPage.waitForLoadState();
    }

    async openPageUrl(url): Promise<void> {
        await this.page.goto(`${config.use.baseURL}${url}`);
    }
}