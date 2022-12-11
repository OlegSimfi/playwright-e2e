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
}