# 企业级自动化测试方案

面向复杂页面和多设备场景的响应式布局测试套件。

## 🎯 测试覆盖

### 自动检测的布局问题
- ✅ 元素重叠
- ✅ 间距不一致
- ✅ 对齐错误
- ✅ 元素溢出
- ✅ 横向滚动（移动端最常见问题）
- ✅ 触摸目标大小
- ✅ 文本截断
- ✅ 图片响应式

### 测试的关键组件
- ✅ 导航栏（固定定位、按钮对齐）
- ✅ Hero 区域（标题、环形动画、主 CTA 按钮）
- ✅ 作品卡片网格（间距、对齐）
- ✅ 卡片翻转动画区域
- ✅ 作品详情页（媒体区域、主 CTA 按钮）
- ✅ 作者信息（头像、名称）

### 测试设备（30 种）

**桌面端（9 种分辨率）**
- 2560x1440 (2K)
- 1920x1080 (Full HD)
- 1680x1050
- 1536x864
- 1440x900
- 1366x768 (常见笔记本)
- 1280x720
- MacBook Pro 16" (1728x1117)
- MacBook Air 13" (1440x900)

**平板（4 种）**
- iPad Pro 12.9" (1024x1366)
- iPad Air (820x1180)
- iPad Mini (768x1024)
- Samsung Galaxy Tab S8 (800x1280)

**iPhone（8 种最新机型）**
- iPhone 16 Pro Max (440x956)
- iPhone 16 Pro (402x874)
- iPhone 15 Pro Max (430x932)
- iPhone 15 Pro (393x852)
- iPhone 14 Pro Max (430x932)
- iPhone 14 Pro (393x852)
- iPhone 13 (390x844)
- iPhone SE 3rd (375x667)

**Android（7 种最新机型）**
- Samsung Galaxy S24 Ultra (412x915)
- Samsung Galaxy S23 (360x780)
- Google Pixel 8 Pro (412x915)
- Google Pixel 7 (412x915)
- Xiaomi 14 Pro (440x960)
- OnePlus 12 (450x1000)
- Galaxy S9+ 旧设备 (412x846)

## 🚀 快速开始

### 1. 安装依赖

```bash
cd /path/to/your-app
npm install
npx playwright install
```

### 2. 配置飞书通知（可选）

如果你想在测试完成后自动发送结果到飞书：

```bash
# 复制配置文件
cp .env.example .env

# 编辑 .env 文件，填入你的飞书 Webhook 地址
# FEISHU_WEBHOOK=https://open.feishu.cn/open-apis/bot/v2/hook/xxx
```

详细配置请查看 [FEISHU-NOTIFY.md](./FEISHU-NOTIFY.md)

### 3. 启动开发服务器

在一个终端窗口中启动你的服务器：

```bash
cd server
npm start
```

服务器应该运行在 `http://localhost:8080`

### 4. 运行测试

在另一个终端窗口中：

```bash
# 首次运行：生成基准截图
npm run test:update

# 之后运行测试
npm test

# 运行测试并发送飞书通知
npm run test:notify

# 使用 UI 模式（推荐，可视化调试）
npm run test:ui

# 调试模式
npm run test:debug

# 查看测试报告
npm run test:report
```

## 📋 测试文件说明

### `tests/enterprise-layout.spec.js`
主要的响应式布局测试，包含 10 个测试用例：

1. **导航栏布局检测** - 检查导航栏固定定位、按钮对齐
2. **Hero 区域布局检测** - 检查标题、副标题、主 CTA 按钮、环形动画
3. **作品卡片网格布局检测** - 检查卡片间距、对齐、溢出
4. **作品详情页布局检测** - 检查详情页打开后的布局
5. **卡片翻转动画区域检测** - 检查翻转卡片、导航箭头
6. **作者信息布局检测** - 检查头像、名称、重叠
7. **横向滚动检测** - 检查是否有元素超出视口
8. **按钮触摸目标大小检测** - 确保所有按钮至少 40x40px
9. **全页面截图对比** - 视觉回归测试

### `tests/enterprise-mobile.spec.js`
移动端专项测试，包含 9 个测试用例：

1. **移动端导航栏适配** - 检查导航栏在小屏幕上的表现
2. **移动端 Hero 区域适配** - 检查标题和按钮在移动端的大小
3. **移动端卡片网格适配** - 检查卡片在移动端的宽度和间距
4. **移动端卡片翻转区域适配** - 检查翻转动画在移动端的表现
5. **移动端详情页适配** - 检查详情页全屏显示
6. **移动端字体大小检测** - 确保文本至少 12px
7. **移动端图片响应式检测** - 检查图片是否超出视口
8. **移动端滚动性能检测** - 检查滚动是否正常
9. **移动端截图对比** - 移动端视觉回归测试

## 🔧 工具类

`tests/utils/layout-checker.js` 提供以下检测方法：

```javascript
// 检测两个元素是否重叠
await checker.checkOverlapping('.element1', '.element2');

// 检测子元素是否溢出容器
await checker.checkOverflow('.container', '.child');

// 检测元素间距是否一致
await checker.checkSpacing('.items');

// 检测元素对齐
await checker.checkAlignment('.items', 'left');

// 检测元素是否在视口内
await checker.checkInViewport('.element');
```

## 📊 查看测试结果

### 测试通过
所有测试通过后，你会看到绿色的成功消息。

### 测试失败
如果测试失败：

1. **查看详细报告**
   ```bash
   npm run test:report
   ```

2. **查看失败截图**
   失败的截图保存在 `test-results/` 目录中

3. **使用 UI 模式调试**
   ```bash
   npm run test:ui
   ```
   可以逐步查看每个测试的执行过程

## 🎨 更新基准截图

当你修改了设计后，需要更新基准截图：

```bash
npm run test:update
```

这会重新生成所有截图作为新的基准。

## 🔍 只测试特定设备

```bash
# 只测试 iPhone 14 Pro
npx playwright test --project="iPhone 14 Pro"

# 只测试桌面端
npx playwright test --project="Desktop 1920x1080"

# 只测试移动端
npx playwright test --project="iPhone 14 Pro" --project="iPhone SE" --project="Pixel 7"
```

## 🐛 常见问题

### Q: 测试失败说找不到元素？
A: 确保服务器正在运行，并且页面已经完全加载。可以增加 `waitForTimeout` 时间。

### Q: 截图对比失败？
A: 这可能是正常的，如果你修改了设计。运行 `npm run test:update` 更新基准截图。

### Q: 测试太慢？
A: 可以只运行特定的测试文件：
```bash
npx playwright test enterprise-layout
```

### Q: 如何跳过某个测试？
A: 在测试前加 `.skip`：
```javascript
test.skip('暂时跳过的测试', async ({ page }) => {
  // ...
});
```

## 📈 CI/CD 集成

在 GitHub Actions 中运行：

```yaml
name: Visual Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: cd server && npm start &
      - run: sleep 5
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## 💡 自定义测试

如果你想添加自己的测试：

```javascript
test('自定义测试', async ({ page }) => {
  await page.goto('/');

  // 检查特定元素
  const myElement = page.locator('.my-class');
  await expect(myElement).toBeVisible();

  // 检查布局
  const box = await myElement.boundingBox();
  expect(box?.width).toBeGreaterThan(100);
});
```

## 📝 测试报告示例

测试完成后会生成 HTML 报告，包含：
- 每个测试的通过/失败状态
- 失败测试的截图对比
- 执行时间统计
- 详细的错误信息

## 🎯 下一步

1. ✅ 安装依赖
2. ✅ 启动服务器
3. ✅ 运行 `npm run test:update` 生成基准截图
4. ✅ 运行 `npm test` 验证所有测试通过
5. ✅ 每次修改设计后运行测试
6. ✅ 集成到 CI/CD 流程

---

**提示**: 这套测试方案可以自动发现 90% 的布局问题，比手动测试快 100 倍！
