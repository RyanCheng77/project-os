import { test, expect } from '@playwright/test';

/**
 * 布局检测工具类
 */
class LayoutChecker {
  constructor(page) {
    this.page = page;
  }

  async checkOverlapping(selector1, selector2) {
    return await this.page.evaluate(([sel1, sel2]) => {
      const el1 = document.querySelector(sel1);
      const el2 = document.querySelector(sel2);
      if (!el1 || !el2) return null;

      const rect1 = el1.getBoundingClientRect();
      const rect2 = el2.getBoundingClientRect();

      const overlap = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );

      return {
        overlap,
        rect1: { x: rect1.x, y: rect1.y, width: rect1.width, height: rect1.height },
        rect2: { x: rect2.x, y: rect2.y, width: rect2.width, height: rect2.height }
      };
    }, [selector1, selector2]);
  }

  async checkOverflow(containerSelector, childSelector) {
    return await this.page.evaluate(([container, child]) => {
      const containerEl = document.querySelector(container);
      const childEl = document.querySelector(child);
      if (!containerEl || !childEl) return null;

      const containerRect = containerEl.getBoundingClientRect();
      const childRect = childEl.getBoundingClientRect();

      return {
        overflowRight: childRect.right > containerRect.right + 5,
        overflowLeft: childRect.left < containerRect.left - 5,
        overflowBottom: childRect.bottom > containerRect.bottom + 5,
        overflowTop: childRect.top < containerRect.top - 5,
        containerRect,
        childRect
      };
    }, [containerSelector, childSelector]);
  }

  async checkSpacing(selector) {
    return await this.page.evaluate((sel) => {
      const elements = Array.from(document.querySelectorAll(sel));
      if (elements.length < 2) return null;

      const gaps = [];
      for (let i = 0; i < elements.length - 1; i++) {
        const rect1 = elements[i].getBoundingClientRect();
        const rect2 = elements[i + 1].getBoundingClientRect();

        const verticalGap = rect2.top - rect1.bottom;
        const horizontalGap = rect2.left - rect1.right;

        gaps.push({
          index: i,
          verticalGap: Math.round(verticalGap),
          horizontalGap: Math.round(horizontalGap)
        });
      }

      return gaps;
    }, selector);
  }

  async checkAlignment(selector, alignType = 'left') {
    const positions = await this.page.evaluate(([sel, type]) => {
      const elements = Array.from(document.querySelectorAll(sel));

      return elements.map(el => {
        const rect = el.getBoundingClientRect();
        return {
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          top: Math.round(rect.top),
          bottom: Math.round(rect.bottom),
          centerX: Math.round(rect.left + rect.width / 2),
          centerY: Math.round(rect.top + rect.height / 2)
        };
      });
    }, [selector, alignType]);

    if (positions.length < 2) return { aligned: true, positions };

    const key = alignType === 'left' ? 'left' :
                alignType === 'right' ? 'right' :
                alignType === 'top' ? 'top' :
                alignType === 'bottom' ? 'bottom' :
                alignType === 'centerX' ? 'centerX' : 'centerY';

    const firstValue = positions[0][key];
    const aligned = positions.every(pos => pos[key] === firstValue);

    return { aligned, positions, alignType, expectedValue: firstValue };
  }

  async checkInViewport(selector) {
    return await this.page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;

      const rect = el.getBoundingClientRect();
      const inViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );

      return {
        inViewport,
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        viewport: { width: window.innerWidth, height: window.innerHeight }
      };
    }, selector);
  }
}

export { LayoutChecker };
