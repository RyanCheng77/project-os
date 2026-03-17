import { defineConfig, devices } from '@playwright/test';
import toolkitConfig from './toolkit.config.js';

function mobileProject(name, width, height, extra = {}) {
  return {
    name,
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width, height },
      isMobile: true,
      hasTouch: true,
      ...extra
    }
  };
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    baseURL: toolkitConfig.baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'Desktop 1920x1080',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'Desktop 1366x768',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 }
      }
    },
    {
      name: 'iPad Pro 12.9',
      use: { ...devices['iPad Pro'] }
    },
    mobileProject('iPhone 15 Pro', 393, 852),
    mobileProject('iPhone SE', 375, 667),
    mobileProject('Android Large', 412, 915),
    mobileProject('Android Small', 360, 780)
  ]
});
