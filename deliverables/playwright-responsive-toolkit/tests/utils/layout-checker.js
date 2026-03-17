class LayoutChecker {
  constructor(page) {
    this.page = page;
  }

  async checkOverlapping(selector1, selector2) {
    return this.page.evaluate(([sel1, sel2]) => {
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

      return { overlap };
    }, [selector1, selector2]);
  }

  async checkSpacing(selector) {
    return this.page.evaluate((sel) => {
      const elements = Array.from(document.querySelectorAll(sel));
      if (elements.length < 2) return null;

      const gaps = [];
      for (let i = 0; i < elements.length - 1; i++) {
        const rect1 = elements[i].getBoundingClientRect();
        const rect2 = elements[i + 1].getBoundingClientRect();
        gaps.push({
          verticalGap: Math.round(rect2.top - rect1.bottom),
          horizontalGap: Math.round(rect2.left - rect1.right)
        });
      }

      return gaps;
    }, selector);
  }
}

export { LayoutChecker };
