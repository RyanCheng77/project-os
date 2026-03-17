import { test, expect } from '@playwright/test';
import toolkitConfig from '../toolkit.config.js';
import { openConfiguredPage } from './utils/toolkit-helpers.js';

test.describe('Generic Mobile Responsive Toolkit', () => {
  test.beforeEach(async ({ page }) => {
    await openConfiguredPage(page, 'home');
  });

  test('移动端关键元素不超出视口', async ({ page }) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= toolkitConfig.mobileBreakpoint) test.skip();

    const overflowElements = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      const viewportWidth = window.innerWidth;
      return elements
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return { right: rect.right, tag: el.tagName, className: el.className };
        })
        .filter((item) => item.right > viewportWidth + 10)
        .slice(0, 10);
    });

    expect(overflowElements.length).toBe(0);
  });

  test('移动端字体不应过小', async ({ page }) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= toolkitConfig.mobileBreakpoint) test.skip();

    const tooSmall = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('p, span, a, button, div'));
      return elements.filter((el) => {
        const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
        const text = el.textContent?.trim();
        return fontSize < 12 && text && text.length > 5;
      }).length;
    });

    expect(tooSmall).toBeLessThan(5);
  });

  test('移动端可以正常上下滚动', async ({ page }) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= toolkitConfig.mobileBreakpoint) test.skip();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThanOrEqual(0);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    const top = await page.evaluate(() => window.scrollY);
    expect(top).toBeLessThan(50);
  });

  test('移动端截图回归', async ({ page }) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= toolkitConfig.mobileBreakpoint) test.skip();
    test.skip(!toolkitConfig.screenshot.enabled);

    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }
      `
    });

    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot(toolkitConfig.screenshot.mobileName, {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixels: toolkitConfig.screenshot.maxDiffPixels
    });
  });
});
