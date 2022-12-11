import { Locator, Page } from '@playwright/test';
import {Timeout} from "../constants/timeouts";
export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    public idLocator(element: string): Locator {
        return this.page.locator(`[id='${element}']`);
    }

    public each<T>(data: T[], fn: (value: T) => void): void {
        data.forEach(fn);
    }

    async getText(element: Locator): Promise<string> {
        await element.scrollIntoViewIfNeeded();
        return element.innerText();
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
        console.log('DEBUG', await newPage.title());
    }
}