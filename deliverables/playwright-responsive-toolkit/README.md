# Playwright Responsive Toolkit

这是从一套更完整的企业级 Playwright 测试体系抽象出来的通用版工具包。

## 目标

把“多设备覆盖 + 布局检测 + 移动端专项验证 + 截图回归 + 结果分析”的能力，变成一个可以迁移到其他项目的通用工具，而不是只服务单一业务页面。

## 通用化方式

这版工具包把原来的业务耦合点抽到了 `toolkit.config.js`：

- 目标地址
- 桌面 / 移动断点
- 关键页面路径
- 组件选择器
- 是否启用截图回归

因此你迁移到新项目时，重点不是改测试逻辑，而是改配置。

## 目录

```text
playwright-responsive-toolkit/
├── README.md
├── package.json
├── playwright.config.js
├── toolkit.config.js
├── tests/
│   ├── generic-layout.spec.js
│   ├── generic-mobile.spec.js
│   └── utils/
│       ├── layout-checker.js
│       └── toolkit-helpers.js
└── scripts/
    └── analyze-test-results.js
```

## 快速开始

```bash
npm install
npx playwright install
cp toolkit.config.js toolkit.config.local.js
```

然后根据你的项目修改：

- `baseURL`
- `paths`
- `selectors`

再运行：

```bash
npm test
```

## 推荐使用方式

### 当成企业级 UI 测试底座

适合验证：

- 多设备响应式布局
- 关键组件可见性和尺寸
- 横向滚动 / 溢出
- 移动端触摸目标
- 截图回归

### 和项目操作系统配合

推荐搭配：

- `zero-to-one-project-driver`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

其中：

- 这套 Playwright Toolkit 负责“企业级自动化验证”
- role skills 负责“项目如何拆闭环、同步和沉淀”

## 迁移建议

如果你要接入一个新项目，建议顺序是：

1. 先确认首页和主流程入口路径
2. 再补 `selectors`
3. 先跑布局测试
4. 再跑移动端测试
5. 最后决定是否启用截图回归
