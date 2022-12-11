import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import {Timeout} from "./src/constants/timeouts";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: Timeout.L
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    headless: true,
    actionTimeout: Timeout.L,
    navigationTimeout: Timeout.L,
    baseURL: 'http://www.webdriveruniversity.com/',
    // storageState: 'e2e/storageState.json',
    screenshot: 'only-on-failure',
    ignoreHTTPSErrors: true,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: {
          slowMo: 100
        },
        viewport: {
          width: 1280,
          height: 950
        }
      }
    }
  ]

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
