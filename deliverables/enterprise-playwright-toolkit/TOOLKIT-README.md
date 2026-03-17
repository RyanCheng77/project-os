# Enterprise Playwright 企业级测试工具包

这是一份可复用的企业级 Playwright 测试工具包。

## 包含内容

- 企业级 Playwright 配置
- 多设备覆盖配置
- 桌面端与移动端专项布局测试
- 通用布局检测工具
- 飞书通知脚本
- 测试结果分析脚本
- 配套文档与 `.env.example`

## 适合什么场景

- 对现有页面做多设备布局与交互验证
- 做视觉回归测试
- 做移动端适配专项测试
- 输出测试报告并接入飞书通知

## 当前保留的文件

- `package.json`
- `playwright.config.js`
- `tests/`
- `scripts/`
- `README.md`
- `README-TEST.md`
- `DEVICES.md`
- `FEISHU-NOTIFY.md`
- `.env.example`

## 没有带上的内容

为了让它保持轻量可转交，这个工具包没有包含：

- `node_modules`
- `playwright-report`
- `test-results`
- 项目业务代码

## 使用建议

### 1. 如果你要直接复用在内容展示或多模块页面项目

优先检查：

- `playwright.config.js` 里的 `baseURL`
- Chrome 可执行路径
- 页面选择器是否与目标项目一致

### 2. 如果你要把它并入我们的项目工具包体系

推荐搭配：

- `zero-to-one-project-driver`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

这套 Playwright 工具负责“企业级自动化验证”，  
而 role skills 负责“项目如何推进、如何沉淀、如何组织协作”。
