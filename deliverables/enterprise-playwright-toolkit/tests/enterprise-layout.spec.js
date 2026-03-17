import { test, expect } from '@playwright/test';
import { LayoutChecker } from './utils/layout-checker.js';

/**
 * 企业级页面布局测试
 * 针对复杂页面组件和交互进行测试
 */

test.describe('Enterprise 响应式布局测试', () => {
  let checker;

  test.beforeEach(async ({ page }) => {
    checker = new LayoutChecker(page);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('导航栏布局检测', async ({ page }) => {
    const nav = page.locator('.nav');
    await expect(nav).toBeVisible();

    // 检查导航栏是否固定在顶部
    const navBox = await nav.boundingBox();
    expect(navBox?.y).toBeLessThanOrEqual(5);

    // 检查导航栏内部元素对齐
    const navInner = page.locator('.nav-inner');
    await expect(navInner).toBeVisible();

    // 检查导航按钮是否可见
    const audioToggle = page.locator('#navAudioToggle');
    if (await audioToggle.count() > 0) {
      await expect(audioToggle).toBeVisible();
    }

    // 检查状态按钮
    const voteStatus = page.locator('#navVoteStatus');
    if (await voteStatus.count() > 0) {
      const voteStatusBox = await voteStatus.boundingBox();
      if (voteStatusBox) {
        // 按钮高度应该合理
        expect(voteStatusBox.height).toBeGreaterThan(30);
        expect(voteStatusBox.height).toBeLessThan(60);
      }
    }
  });

  test('Hero 区域布局检测', async ({ page }) => {
    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();

    // 检查 Hero 标题
    const heroTitle = page.locator('.hero-title-main');
    await expect(heroTitle).toBeVisible();

    // 检查 Hero 副标题
    const heroSub = page.locator('.hero-sub');
    await expect(heroSub).toBeVisible();

    // 检查 Hero 描述
    const heroDesc = page.locator('.hero-desc');
    await expect(heroDesc).toBeVisible();

    // 检查主 CTA 按钮
    const voteCta = page.locator('#voteToggleBtn');
    if (await voteCta.count() > 0) {
      await expect(voteCta).toBeVisible();

      const ctaBox = await voteCta.boundingBox();
      if (ctaBox) {
        // 按钮应该足够大（至少 44px 高度）
        expect(ctaBox.height).toBeGreaterThanOrEqual(44);
      }
    }

    // 检查 Hero 环形动画容器
    const heroRing = page.locator('.hero-ring');
    if (await heroRing.count() > 0) {
      const ringBox = await heroRing.boundingBox();
      if (ringBox) {
        // 环形容器不应该溢出视口
        const viewport = page.viewportSize();
        if (viewport) {
          expect(ringBox.right).toBeLessThanOrEqual(viewport.width + 10);
        }
      }
    }
  });

  test('作品卡片网格布局检测', async ({ page }) => {
    // 等待卡片加载
    await page.waitForTimeout(1000);

    const grid = page.locator('.fold2-grid');
    if (await grid.count() > 0) {
      await expect(grid).toBeVisible();

      // 检查卡片
      const cards = page.locator('.fold2-info-card');
      const cardCount = await cards.count();

      if (cardCount > 0) {
        console.log(`找到 ${cardCount} 个作品卡片`);

        // 检查第一个卡片
        const firstCard = cards.first();
        await expect(firstCard).toBeVisible();

        const firstCardBox = await firstCard.boundingBox();
        if (firstCardBox) {
          // 卡片宽度应该合理
          expect(firstCardBox.width).toBeGreaterThan(200);

          // 卡片不应该溢出视口
          const viewport = page.viewportSize();
          if (viewport) {
            expect(firstCardBox.right).toBeLessThanOrEqual(viewport.width + 5);
          }
        }

        // 检查卡片间距（如果有多个卡片）
        if (cardCount > 1) {
          const gaps = await checker.checkSpacing('.fold2-info-card');
          if (gaps && gaps.length > 0) {
            // 检查间距是否一致（允许 5px 误差）
            const firstGap = gaps[0].verticalGap || gaps[0].horizontalGap;
            gaps.forEach(gap => {
              const currentGap = gap.verticalGap || gap.horizontalGap;
              if (currentGap > 0 && firstGap > 0) {
                expect(Math.abs(currentGap - firstGap)).toBeLessThanOrEqual(5);
              }
            });
          }
        }
      }
    }
  });

  test('作品详情页布局检测', async ({ page }) => {
    // 尝试点击第一个作品卡片
    const firstCard = page.locator('.fold2-info-card').first();

    if (await firstCard.count() > 0) {
      await firstCard.click();
      await page.waitForTimeout(1000);

      // 检查详情页是否打开
      const detailPage = page.locator('.detail-page');
      if (await detailPage.count() > 0) {
        await expect(detailPage).toBeVisible();

        // 检查详情页标题
        const detailTitle = page.locator('.detail-title');
        if (await detailTitle.count() > 0) {
          await expect(detailTitle).toBeVisible();
        }

        // 检查详情页媒体区域
        const detailMedia = page.locator('.detail-main-media');
        if (await detailMedia.count() > 0) {
          const mediaBox = await detailMedia.boundingBox();
          if (mediaBox) {
            // 媒体区域不应该溢出
            const viewport = page.viewportSize();
            if (viewport) {
              expect(mediaBox.right).toBeLessThanOrEqual(viewport.width + 5);
            }
          }
        }

        // 检查主 CTA 按钮
        const voteBtn = page.locator('.detail-vote-btn');
        if (await voteBtn.count() > 0) {
          await expect(voteBtn).toBeVisible();

          const voteBtnBox = await voteBtn.boundingBox();
          if (voteBtnBox) {
            // 按钮高度应该足够（至少 44px）
            expect(voteBtnBox.height).toBeGreaterThanOrEqual(44);
          }
        }

        // 检查返回按钮
        const backBtn = page.locator('.detail-back-btn, #navDetailBackBtn');
        if (await backBtn.count() > 0) {
          await expect(backBtn.first()).toBeVisible();
        }
      }
    }
  });

  test('卡片翻转动画区域检测', async ({ page }) => {
    const coverStage = page.locator('.fold2-cover-stage');

    if (await coverStage.count() > 0) {
      await expect(coverStage).toBeVisible();

      // 检查卡片容器
      const coverViewport = page.locator('.fold2-cover-viewport');
      if (await coverViewport.count() > 0) {
        const viewportBox = await coverViewport.boundingBox();
        if (viewportBox) {
          // 卡片容器不应该溢出
          const viewport = page.viewportSize();
          if (viewport) {
            expect(viewportBox.right).toBeLessThanOrEqual(viewport.width + 10);
          }
        }
      }

      // 检查翻转卡片
      const coverCard = page.locator('.fold2-cover-card');
      if (await coverCard.count() > 0) {
        const cardBox = await coverCard.first().boundingBox();
        if (cardBox) {
          // 卡片应该有合理的尺寸
          expect(cardBox.width).toBeGreaterThan(200);
          expect(cardBox.height).toBeGreaterThan(200);
        }
      }

      // 检查导航箭头
      const prevArrow = page.locator('.fold2-nav-arrow.prev');
      const nextArrow = page.locator('.fold2-nav-arrow.next');

      if (await prevArrow.count() > 0 && await nextArrow.count() > 0) {
        await expect(prevArrow).toBeVisible();
        await expect(nextArrow).toBeVisible();

        // 检查箭头是否重叠
        const overlap = await checker.checkOverlapping('.fold2-nav-arrow.prev', '.fold2-nav-arrow.next');
        if (overlap) {
          expect(overlap.overlap).toBeFalsy();
        }
      }
    }
  });

  test('作者信息布局检测', async ({ page }) => {
    const authorRow = page.locator('.fold2-author-row');

    if (await authorRow.count() > 0) {
      await expect(authorRow.first()).toBeVisible();

      // 检查作者头像
      const avatar = page.locator('.fold2-author-avatar');
      if (await avatar.count() > 0) {
        const avatarBox = await avatar.first().boundingBox();
        if (avatarBox) {
          // 头像应该是正方形或接近正方形
          const ratio = avatarBox.width / avatarBox.height;
          expect(ratio).toBeGreaterThan(0.8);
          expect(ratio).toBeLessThan(1.2);
        }
      }

      // 检查作者名称
      const authorName = page.locator('.fold2-author-name');
      if (await authorName.count() > 0) {
        await expect(authorName.first()).toBeVisible();
      }

      // 检查头像和名称是否重叠
      if (await avatar.count() > 0 && await authorName.count() > 0) {
        const overlap = await checker.checkOverlapping(
          '.fold2-author-avatar',
          '.fold2-author-name'
        );
        if (overlap) {
          expect(overlap.overlap).toBeFalsy();
        }
      }
    }
  });

  test('横向滚动检测（移动端常见问题）', async ({ page }) => {
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > window.innerWidth;
    });

    expect(hasHorizontalScroll).toBeFalsy();

    // 检查所有元素是否超出视口
    const overflowElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const viewportWidth = window.innerWidth;
      const problematic = [];

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > viewportWidth + 10) {
          problematic.push({
            tag: el.tagName,
            class: el.className,
            id: el.id,
            right: rect.right,
            viewportWidth
          });
        }
      });

      return problematic;
    });

    if (overflowElements.length > 0) {
      console.warn('发现超出视口的元素:', overflowElements.slice(0, 5));
    }

    expect(overflowElements.length).toBe(0);
  });

  test('按钮触摸目标大小检测', async ({ page }) => {
    const buttons = await page.locator('button, .btn').all();

    for (const button of buttons) {
      if (await button.isVisible()) {
        const box = await button.boundingBox();

        if (box) {
          // 按钮至少 40x40px（移动端友好）
          expect(box.height).toBeGreaterThanOrEqual(40);
          expect(box.width).toBeGreaterThanOrEqual(40);
        }
      }
    }
  });

  test('全页面截图对比', async ({ page }) => {
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

    // 全页面截图
    await expect(page).toHaveScreenshot('enterprise-full-page.png', {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixels: 100
    });
  });
});
