# 企业级测试设备覆盖清单

## 📊 测试统计

- **总设备数**: 30 种
- **测试用例数**: 19 个
- **总测试执行次数**: 570 次（19 × 30）

---

## 💻 桌面端测试（9 种分辨率）

| 设备 | 分辨率 | 使用场景 |
|------|--------|----------|
| 2K 显示器 | 2560×1440 | 高端显示器 |
| Full HD | 1920×1080 | 最常见桌面分辨率 |
| 标准宽屏 | 1680×1050 | 常见办公显示器 |
| 笔记本 | 1536×864 | Windows 笔记本 |
| MacBook | 1440×900 | MacBook Air |
| 常见笔记本 | 1366×768 | 最常见笔记本分辨率 |
| HD | 1280×720 | 小屏幕笔记本 |
| MacBook Pro 16" | 1728×1117 | Safari 测试 |
| MacBook Air 13" | 1440×900 | Safari 测试 |

---

## 📱 平板测试（4 种）

| 设备 | 分辨率 | 系统 |
|------|--------|------|
| iPad Pro 12.9" | 1024×1366 | iOS |
| iPad Air | 820×1180 | iOS |
| iPad Mini | 768×1024 | iOS |
| Samsung Galaxy Tab S8 | 800×1280 | Android |

---

## 🍎 iPhone 测试（8 种最新机型）

| 设备 | 分辨率 | 发布年份 | 特点 |
|------|--------|----------|------|
| iPhone 16 Pro Max | 440×956 | 2024 | 最新旗舰 |
| iPhone 16 Pro | 402×874 | 2024 | 最新旗舰 |
| iPhone 15 Pro Max | 430×932 | 2023 | 灵动岛 |
| iPhone 15 Pro | 393×852 | 2023 | 灵动岛 |
| iPhone 14 Pro Max | 430×932 | 2022 | 灵动岛 |
| iPhone 14 Pro | 393×852 | 2022 | 灵动岛 |
| iPhone 13 | 390×844 | 2021 | 标准版 |
| iPhone SE (3rd) | 375×667 | 2022 | 小屏设备 |

---

## 🤖 Android 测试（7 种最新机型）

| 设备 | 分辨率 | 发布年份 | 品牌 |
|------|--------|----------|------|
| Samsung Galaxy S24 Ultra | 412×915 | 2024 | 三星旗舰 |
| Samsung Galaxy S23 | 360×780 | 2023 | 三星旗舰 |
| Google Pixel 8 Pro | 412×915 | 2023 | 谷歌旗舰 |
| Google Pixel 7 | 412×915 | 2022 | 谷歌旗舰 |
| Xiaomi 14 Pro | 440×960 | 2024 | 小米旗舰 |
| OnePlus 12 | 450×1000 | 2024 | 一加旗舰 |
| Galaxy S9+ | 412×846 | 2018 | 旧设备兼容性 |

---

## 🎯 测试覆盖分析

### 分辨率覆盖范围
- **最小宽度**: 360px (Galaxy S23)
- **最大宽度**: 2560px (2K 显示器)
- **最小高度**: 667px (iPhone SE)
- **最大高度**: 1440px (2K 显示器)

### 设备像素比覆盖
- **1x**: 桌面浏览器
- **2x**: 标准移动设备
- **2.625x**: Pixel 8 Pro
- **3x**: 大部分 iPhone 和高端 Android
- **3.5x**: Galaxy S24 Ultra

### 操作系统覆盖
- **iOS**: 8 种 iPhone + 3 种 iPad = 11 种
- **Android**: 7 种手机 + 1 种平板 = 8 种
- **macOS**: 2 种 MacBook (Safari)
- **Windows/Linux**: 7 种桌面分辨率 (Chrome)

---

## 🚀 运行特定设备测试

```bash
# 测试所有桌面端
npx playwright test --project="Desktop*"

# 测试所有 iPhone
npx playwright test --project="iPhone*"

# 测试所有 Android
npx playwright test --project="*Galaxy*" --project="*Pixel*" --project="*Xiaomi*" --project="*OnePlus*"

# 测试特定设备
npx playwright test --project="iPhone 16 Pro Max"
npx playwright test --project="Samsung Galaxy S24 Ultra"

# 测试小屏幕设备（最容易出问题）
npx playwright test --project="iPhone SE" --project="Samsung Galaxy S23"

# 测试大屏设备
npx playwright test --project="Desktop 2560x1440" --project="iPad Pro 12.9\""
```

---

## 📈 测试优先级建议

### 高优先级（必测）
1. iPhone 16 Pro Max（最新 iOS）
2. Samsung Galaxy S24 Ultra（最新 Android）
3. Desktop 1920×1080（最常见桌面）
4. iPhone SE（最小 iPhone 屏幕）
5. Samsung Galaxy S23（最小 Android 屏幕）

### 中优先级
6. Desktop 1366×768（常见笔记本）
7. iPad Pro（平板代表）
8. iPhone 14 Pro（灵动岛）
9. Pixel 8 Pro（原生 Android）

### 低优先级（兼容性测试）
10. Desktop 2560×1440（高分辨率）
11. Galaxy S9+（旧设备）
12. 其他设备

---

## 💡 快速测试命令

```bash
# 只测试高优先级设备（快速验证）
npx playwright test \
  --project="iPhone 16 Pro Max" \
  --project="Samsung Galaxy S24 Ultra" \
  --project="Desktop 1920x1080 (Full HD)" \
  --project="iPhone SE (3rd)" \
  --project="Samsung Galaxy S23"

# 测试所有移动设备
npx playwright test --project="iPhone*" --project="*Galaxy*" --project="*Pixel*" --project="*Xiaomi*" --project="*OnePlus*"

# 测试所有设备（完整测试）
npm test
```

---

## 📊 预计测试时间

- **单设备测试**: ~2-3 分钟
- **高优先级设备（5 个）**: ~10-15 分钟
- **所有移动设备（15 个）**: ~30-45 分钟
- **完整测试（30 个设备）**: ~60-90 分钟

---

## ✅ 测试完成后

查看测试报告：
```bash
npm run test:report
```

更新基准截图：
```bash
npm run test:update
```

查看失败截图：
```bash
ls test-results/
```
