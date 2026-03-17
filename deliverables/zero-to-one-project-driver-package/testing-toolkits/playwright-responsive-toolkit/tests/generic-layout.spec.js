import { test, expect } from '@playwright/test';
import toolkitConfig from '../toolkit.config.js';
import { LayoutChecker } from './utils/layout-checker.js';
import { firstVisibleLocator, openConfiguredPage } from './utils/toolkit-helpers.js';

test.describe('Generic Responsive Layout Toolkit', () => {
  let checker;

  test.beforeEach(async ({ page }) => {
    checker = new LayoutChecker(page);
    await openConfiguredPage(page, 'home');
  });

  test('导航与首屏关键区域可见', async ({ page }) => {
    const nav = await firstVisibleLocator(page, toolkitConfig.selectors.nav);
    if (nav) await expect(nav).toBeVisible();

    const hero = await firstVisibleLocator(page, toolkitConfig.selectors.hero);
    if (hero) await expect(hero).toBeVisible();

    const heroTitle = await firstVisibleLocator(page, toolkitConfig.selectors.heroTitle);
    if (heroTitle) await expect(heroTitle).toBeVisible();
  });

  test('卡片网格与关键卡片不应溢出视口', async ({ page }) => {
    const viewport = page.viewportSize();
    const cards = page.locator(toolkitConfig.selectors.cards);
    const cardCount = await cards.count();

    if (!cardCount || !viewport) test.skip();

    const firstCard = cards.first();
    await expect(firstCard).toBeVisible();
    const box = await firstCard.boundingBox();
    if (box) {
      expect(box.right).toBeLessThanOrEqual(viewport.width + 5);
      expect(box.width).toBeGreaterThan(120);
    }

    if (cardCount > 1) {
      const gaps = await checker.checkSpacing(toolkitConfig.selectors.cards.split(',')[0].trim());
      expect(gaps).toBeTruthy();
    }
  });

  test('页面不应出现横向滚动', async ({ page }) => {
    const hasHorizontalScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    expect(hasHorizontalScroll).toBeFalsy();
  });

  test('按钮触摸目标尺寸合理', async ({ page }) => {
    const buttons = await page.locator(toolkitConfig.selectors.primaryButton).all();
    for (const button of buttons) {
      if (await button.isVisible()) {
        const box = await button.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(40);
          expect(box.width).toBeGreaterThanOrEqual(40);
        }
      }
    }
  });

  test('桌面截图回归', async ({ page }) => {
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
    await expect(page).toHaveScreenshot(toolkitConfig.screenshot.fullPageName, {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixels: toolkitConfig.screenshot.maxDiffPixels
    });
  });
});
