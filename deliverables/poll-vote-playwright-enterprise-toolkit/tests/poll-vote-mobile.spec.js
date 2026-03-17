import { test, expect } from '@playwright/test';
import { LayoutChecker } from './utils/layout-checker.js';

/**
 * Poll-Vote 移动端专项测试
 * 专门测试移动设备上的布局和交互
 */

test.describe('Poll-Vote 移动端布局测试', () => {
  let checker;

  test.beforeEach(async ({ page }) => {
    checker = new LayoutChecker(page);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('移动端导航栏适配', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      // 检查导航栏是否适配小屏幕
      const nav = page.locator('.nav');
      const navBox = await nav.boundingBox();

      if (navBox) {
        // 导航栏不应该超出视口
        expect(navBox.width).toBeLessThanOrEqual(viewport.width);
      }

      // 检查返回按钮的短标签是否显示
      const backBtn = page.locator('#navDetailBackBtn');
      if (await backBtn.count() > 0 && await backBtn.isVisible()) {
        const shortLabel = page.locator('.nav-detail-back-label-short');
        const fullLabel = page.locator('.nav-detail-back-label-full');

        // 在小屏幕上，应该显示短标签
        if (viewport.width < 480) {
          const shortVisible = await shortLabel.isVisible().catch(() => false);
          const fullVisible = await fullLabel.isVisible().catch(() => false);

          console.log('短标签可见:', shortVisible, '完整标签可见:', fullVisible);
        }
      }
    }
  });

  test('移动端 Hero 区域适配', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      const hero = page.locator('.hero');
      await expect(hero).toBeVisible();

      // 检查 Hero 标题是否适配
      const heroTitle = page.locator('.hero-title-main');
      const titleBox = await heroTitle.boundingBox();

      if (titleBox) {
        // 标题不应该超出视口
        expect(titleBox.right).toBeLessThanOrEqual(viewport.width + 5);
      }

      // 检查投票按钮在移动端的大小
      const voteBtn = page.locator('#voteToggleBtn');
      if (await voteBtn.count() > 0) {
        const btnBox = await voteBtn.boundingBox();

        if (btnBox) {
          // 移动端按钮至少 44px 高
          expect(btnBox.height).toBeGreaterThanOrEqual(44);

          // 按钮不应该超出视口
          expect(btnBox.right).toBeLessThanOrEqual(viewport.width);
        }
      }
    }
  });

  test('移动端卡片网格适配', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      await page.waitForTimeout(1000);

      const cards = page.locator('.fold2-info-card');
      const cardCount = await cards.count();

      if (cardCount > 0) {
        // 检查第一个卡片
        const firstCard = cards.first();
        const cardBox = await firstCard.boundingBox();

        if (cardBox) {
          // 卡片宽度应该适配移动端
          expect(cardBox.width).toBeLessThanOrEqual(viewport.width);
          expect(cardBox.right).toBeLessThanOrEqual(viewport.width + 5);

          // 卡片应该有合理的最小宽度
          expect(cardBox.width).toBeGreaterThan(200);
        }

        // 检查卡片标题是否被截断
        const cardTitles = page.locator('.fold2-info-title');
        if (await cardTitles.count() > 0) {
          const truncations = await page.evaluate(() => {
            const titles = Array.from(document.querySelectorAll('.fold2-info-title'));
            return titles.map(el => ({
              text: el.textContent?.trim(),
              truncated: el.scrollWidth > el.clientWidth
            }));
          });

          truncations.forEach(item => {
            if (item.truncated) {
              console.warn(`标题可能被截断: "${item.text}"`);
            }
          });
        }
      }
    }
  });

  test('移动端卡片翻转区域适配', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      const coverStage = page.locator('.fold2-cover-stage');

      if (await coverStage.count() > 0) {
        const stageBox = await coverStage.boundingBox();

        if (stageBox) {
          // 翻转区域不应该超出视口
          expect(stageBox.right).toBeLessThanOrEqual(viewport.width + 10);
        }

        // 检查翻转卡片
        const coverCard = page.locator('.fold2-cover-card').first();
        if (await coverCard.count() > 0) {
          const cardBox = await coverCard.boundingBox();

          if (cardBox) {
            // 卡片应该适配移动端
            expect(cardBox.width).toBeLessThanOrEqual(viewport.width - 40);
          }
        }

        // 检查导航箭头在移动端的大小
        const arrows = page.locator('.fold2-nav-arrow');
        if (await arrows.count() > 0) {
          const arrowBox = await arrows.first().boundingBox();

          if (arrowBox) {
            // 箭头触摸目标至少 44px
            expect(arrowBox.width).toBeGreaterThanOrEqual(44);
            expect(arrowBox.height).toBeGreaterThanOrEqual(44);
          }
        }
      }
    }
  });

  test('移动端详情页适配', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      // 点击第一个卡片
      const firstCard = page.locator('.fold2-info-card').first();

      if (await firstCard.count() > 0) {
        await firstCard.click();
        await page.waitForTimeout(1000);

        const detailPage = page.locator('.detail-page');

        if (await detailPage.count() > 0) {
          await expect(detailPage).toBeVisible();

          // 检查详情页是否全屏
          const detailBox = await detailPage.boundingBox();

          if (detailBox) {
            // 详情页应该占满视口宽度
            expect(detailBox.width).toBeGreaterThanOrEqual(viewport.width - 10);
          }

          // 检查媒体区域
          const detailMedia = page.locator('.detail-main-media');
          if (await detailMedia.count() > 0) {
            const mediaBox = await detailMedia.boundingBox();

            if (mediaBox) {
              // 媒体不应该超出视口
              expect(mediaBox.right).toBeLessThanOrEqual(viewport.width + 5);
            }
          }

          // 检查投票按钮
          const voteBtn = page.locator('.detail-vote-btn');
          if (await voteBtn.count() > 0) {
            const btnBox = await voteBtn.boundingBox();

            if (btnBox) {
              // 移动端按钮至少 44px 高
              expect(btnBox.height).toBeGreaterThanOrEqual(44);
            }
          }
        }
      }
    }
  });

  test('移动端字体大小检测', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      const smallText = await page.evaluate(() => {
        const minSize = 12;
        const elements = document.querySelectorAll('p, span, a, button, div');
        const small = [];

        elements.forEach(el => {
          const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
          const text = el.textContent?.trim();

          if (fontSize < minSize && text && text.length > 5) {
            small.push({
              tag: el.tagName,
              class: el.className,
              text: text.substring(0, 30),
              fontSize
            });
          }
        });

        return small;
      });

      if (smallText.length > 0) {
        console.warn('发现字体过小的元素:', smallText.slice(0, 5));
      }

      // 移动端主要文本至少 12px
      expect(smallText.length).toBeLessThan(5);
    }
  });

  test('移动端图片响应式检测', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      const images = await page.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        const viewportWidth = window.innerWidth;
        const issues = [];

        imgs.forEach(img => {
          const rect = img.getBoundingClientRect();

          if (rect.width > viewportWidth + 5) {
            issues.push({
              src: img.src.substring(0, 50),
              width: rect.width,
              viewportWidth,
              issue: 'overflow'
            });
          }
        });

        return issues;
      });

      if (images.length > 0) {
        console.warn('发现超出视口的图片:', images);
      }

      expect(images.length).toBe(0);
    }
  });

  test('移动端滚动性能检测', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      // 滚动到底部
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });

      await page.waitForTimeout(500);

      // 检查是否真的滚动了
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThan(0);

      // 滚动回顶部
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });

      await page.waitForTimeout(500);

      const scrollYTop = await page.evaluate(() => window.scrollY);
      expect(scrollYTop).toBeLessThan(50);
    }
  });

  test('移动端截图对比', async ({ page }) => {
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      // 禁用动画
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            transition-duration: 0s !important;
          }
        `
      });

      await page.waitForTimeout(500);

      await expect(page).toHaveScreenshot('poll-vote-mobile.png', {
        fullPage: true,
        animations: 'disabled',
        maxDiffPixels: 100
      });
    }
  });
});
