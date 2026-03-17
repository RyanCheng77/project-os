# Poll-Vote 自动化测试套件

专为 AI 实践应用投票系统定制的响应式布局自动化测试方案。

## ✨ 特性

- 30 种设备覆盖，覆盖桌面、平板、iPhone、Android
- 19 个测试用例，自动检测布局问题
- 飞书通知，测试完成后可自动推送结果
- 视觉回归测试，支持截图对比
- 详细报告，失败截图与执行结果可追踪

## 🚀 5 分钟快速开始

```bash
# 1. 安装依赖
cd deliverables/poll-vote-playwright-enterprise-toolkit
npm install
npx playwright install

# 2. 设置飞书通知（可选）
npm run setup:feishu

# 3. 测试飞书通知
npm run notify:test

# 4. 启动服务器（新终端窗口）
cd /path/to/your/app && npm start

# 5. 运行测试并发送飞书通知
npm run test:notify
```

完成后，你会在飞书群收到测试结果通知。

## 📊 测试覆盖

### 30 种设备

| 类型 | 数量 | 设备 |
|------|------|------|
| 桌面 | 9 | 2K、Full HD、1366x768、MacBook 等 |
| 平板 | 4 | iPad Pro/Air/Mini、Galaxy Tab |
| iPhone | 8 | iPhone 16 Pro Max、15 Pro、14 Pro、13、SE 等 |
| Android | 7 | Galaxy S24 Ultra、Pixel 8 Pro、小米 14 Pro 等 |

### 19 个测试用例

- 导航栏布局（固定定位、按钮对齐）
- Hero 区域（标题、动画、投票按钮）
- 作品卡片网格（间距、对齐）
- 卡片翻转动画
- 作品详情页
- 移动端适配
- 横向滚动检测
- 触摸目标大小
- 字体大小
- 图片响应式
- 视觉回归测试

### 自动检测的问题

- ❌ 元素重叠
- ❌ 间距不一致
- ❌ 对齐错误
- ❌ 元素溢出
- ❌ 横向滚动
- ❌ 触摸目标太小
- ❌ 文本截断
- ❌ 图片超出视口

## 📱 飞书通知示例

测试完成后，你会收到这样的消息：

```
📊 Poll-Vote 自动化测试结果

状态: ✅ 全部通过
总计: 570 个测试
通过: 570 ✅
失败: 0 ❌
通过率: 100.0%

查看详细报告: npm run test:report
```

## 🎯 常用命令

```bash
# 测试相关
npm test                    # 运行所有测试（570 次执行）
npm run test:ui             # UI 模式（可视化调试）
npm run test:report         # 查看 HTML 报告
npm run test:update         # 更新基准截图

# 飞书通知相关
npm run setup:feishu        # 设置飞书通知
npm run notify:test         # 测试飞书通知
npm run test:notify         # 运行测试 + 发送通知

# 测试特定设备
npx playwright test --project="iPhone 16 Pro Max"
npx playwright test --project="Samsung Galaxy S24 Ultra"
npx playwright test --project="Desktop 1920x1080 (Full HD)"

# 快速测试（高优先级设备）
npx playwright test \
  --project="iPhone 16 Pro Max" \
  --project="Samsung Galaxy S24 Ultra" \
  --project="Desktop 1920x1080 (Full HD)"
```

## 📚 文档

- **[README-TEST.md](./README-TEST.md)** - 完整测试文档
- **[DEVICES.md](./DEVICES.md)** - 30 种设备详细清单
- **[FEISHU-NOTIFY.md](./FEISHU-NOTIFY.md)** - 飞书通知配置指南
- **[TOOLKIT-README.md](./TOOLKIT-README.md)** - 工具包定位与使用说明

## 🎨 测试报告示例

运行 `npm run test:report` 查看详细的 HTML 报告，包含：
- 每个测试的通过/失败状态
- 失败测试的截图对比
- 执行时间统计
- 详细的错误信息

## ⏱️ 测试时间

- **单设备测试**: ~2-3 分钟
- **高优先级设备（5 个）**: ~10-15 分钟
- **所有移动设备（15 个）**: ~30-45 分钟
- **完整测试（30 个设备）**: ~60-90 分钟

## 🔧 技术栈

- **Playwright** - 端到端测试框架
- **Node.js** - 运行环境
- **飞书 Webhook** - 消息通知

## 📈 测试统计

- **设备数量**: 30 种
- **测试用例**: 19 个
- **总执行次数**: 570 次（19 × 30）
- **覆盖分辨率**: 360px - 2560px
- **覆盖系统**: iOS、Android、macOS、Windows

## 🎯 推荐工作流

### 日常开发

```bash
# 终端 1: 启动目标应用
cd /path/to/your/app && npm start

# 终端 2: 运行测试
npm run test:notify
```

### 快速验证

只测试最容易出问题的设备：

```bash
npx playwright test \
  --project="iPhone SE (3rd)" \
  --project="Samsung Galaxy S23" \
  --project="Desktop 1366x768 (常见笔记本)"
```

### CI/CD 集成

```yaml
# .github/workflows/test.yml
- name: Run tests
  run: npm test

- name: Notify Feishu
  env:
    FEISHU_WEBHOOK: ${{ secrets.FEISHU_WEBHOOK }}
  run: npm run notify
```

## 🐛 常见问题

### Q: 飞书通知发送失败？

```bash
# 检查配置
echo $FEISHU_WEBHOOK

# 重新设置
npm run setup:feishu

# 测试通知
npm run notify:test
```

### Q: 测试失败怎么办？

```bash
# 查看详细报告
npm run test:report

# 查看失败截图
ls test-results/
```

### Q: 如何更新基准截图？

```bash
npm run test:update
```

## 📞 获取帮助

1. 查看 [README-TEST.md](./README-TEST.md) 完整文档
2. 查看 [TOOLKIT-README.md](./TOOLKIT-README.md) 工具包说明
3. 查看测试报告中的详细错误信息

## 📄 许可证

MIT

---

提示：这套测试方案适合当作企业项目的响应式验证底座，再按目标业务页面补选择器和路径配置。
