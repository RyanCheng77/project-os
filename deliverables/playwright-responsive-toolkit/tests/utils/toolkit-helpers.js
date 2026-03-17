import toolkitConfig from '../../toolkit.config.js';

export function firstSelector(selectorString) {
  return selectorString.split(',').map((item) => item.trim()).filter(Boolean);
}

export async function firstVisibleLocator(page, selectorString) {
  const selectors = firstSelector(selectorString);
  for (const selector of selectors) {
    const locator = page.locator(selector);
    if (await locator.count()) {
      return locator.first();
    }
  }
  return null;
}

export async function elementExists(page, selectorString) {
  const locator = await firstVisibleLocator(page, selectorString);
  return !!locator;
}

export async function openConfiguredPage(page, pageName = 'home') {
  const path = toolkitConfig.paths[pageName] || '/';
  await page.goto(path);
  await page.waitForLoadState('networkidle');
}
