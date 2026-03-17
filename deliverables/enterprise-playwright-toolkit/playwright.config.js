import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: {
      executablePath: '/Users/ryan/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
    },
  },

  projects: [
    // ========== 桌面端测试 ==========
    // 高分辨率
    {
      name: 'Desktop 2560x1440 (2K)',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2560, height: 1440 }
      },
    },
    {
      name: 'Desktop 1920x1080 (Full HD)',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'Desktop 1680x1050',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1680, height: 1050 }
      },
    },
    {
      name: 'Desktop 1536x864',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1536, height: 864 }
      },
    },
    {
      name: 'Desktop 1440x900',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 }
      },
    },
    {
      name: 'Desktop 1366x768 (常见笔记本)',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 }
      },
    },
    {
      name: 'Desktop 1280x720',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
    },
    // Safari 测试
    {
      name: 'MacBook Pro 16" (Safari)',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1728, height: 1117 }
      },
    },
    {
      name: 'MacBook Air 13" (Safari)',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 900 }
      },
    },

    // ========== 平板测试 ==========
    {
      name: 'iPad Pro 12.9"',
      use: { ...devices['iPad Pro'] }, // 1024x1366
    },
    {
      name: 'iPad Air',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 820, height: 1180 },
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15'
      },
    },
    {
      name: 'iPad Mini',
      use: { ...devices['iPad Mini'] }, // 768x1024
    },
    {
      name: 'Samsung Galaxy Tab S8',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 800, height: 1280 },
        userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-X706B) AppleWebKit/537.36'
      },
    },

    // ========== iPhone 测试 ==========
    {
      name: 'iPhone 16 Pro Max',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 440, height: 956 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15'
      },
    },
    {
      name: 'iPhone 16 Pro',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 402, height: 874 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15'
      },
    },
    {
      name: 'iPhone 15 Pro Max',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 430, height: 932 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'
      },
    },
    {
      name: 'iPhone 15 Pro',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 393, height: 852 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'
      },
    },
    {
      name: 'iPhone 14 Pro Max',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 430, height: 932 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15'
      },
    },
    {
      name: 'iPhone 14 Pro',
      use: { ...devices['iPhone 14 Pro'] }, // 393x852
    },
    {
      name: 'iPhone 13',
      use: { ...devices['iPhone 13'] }, // 390x844
    },
    {
      name: 'iPhone SE (3rd)',
      use: { ...devices['iPhone SE'] }, // 375x667
    },

    // ========== Android 手机测试 ==========
    {
      name: 'Samsung Galaxy S24 Ultra',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 412, height: 915 },
        deviceScaleFactor: 3.5,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36'
      },
    },
    {
      name: 'Samsung Galaxy S23',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 360, height: 780 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-S911B) AppleWebKit/537.36'
      },
    },
    {
      name: 'Google Pixel 8 Pro',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 412, height: 915 },
        deviceScaleFactor: 2.625,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36'
      },
    },
    {
      name: 'Google Pixel 7',
      use: { ...devices['Pixel 7'] }, // 412x915
    },
    {
      name: 'Xiaomi 14 Pro',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 440, height: 960 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (Linux; Android 14; 2312DRA50C) AppleWebKit/537.36'
      },
    },
    {
      name: 'OnePlus 12',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 450, height: 1000 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: 'Mozilla/5.0 (Linux; Android 14; CPH2581) AppleWebKit/537.36'
      },
    },
    {
      name: 'Galaxy S9+ (旧设备)',
      use: { ...devices['Galaxy S9+'] }, // 412x846
    },
  ],

  // 不自动启动服务器，需要手动运行
  // webServer: {
  //   command: 'cd server && npm start',
  //   url: 'http://localhost:8080',
  //   reuseExistingServer: !process.env.CI,
  // },
});
