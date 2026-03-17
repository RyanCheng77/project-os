# Deliverables Index

这里汇总当前已经整理出的独立工具包与可分发产物。

## 1. Zero to One Project Driver Package

路径：

- `zero-to-one-project-driver-package/`

定位：

- 可继续编辑的项目操作系统源码包

适合场景：

- 你还在继续整理技能、模板和组合方式
- 你准备基于它继续打下一个 release

包含内容：

- role skills bundle
- 文档模板
- 安装脚本
- 测试工具集成入口

## 2. Zero to One Project Driver Package Release

路径：

- `zero-to-one-project-driver-package-release/`

定位：

- 稳定分享版

适合场景：

- 需要直接发给同事或团队
- 需要一份带版本和说明材料的交付包

包含内容：

- `VERSION.md`
- `CHANGELOG.md`
- `RELEASE-NOTES.md`
- `DISTRIBUTION-COPY.md`
- `LAUNCH-CHECKLIST.md`

## 3. Starter Repo Template

路径：

- `starter-repo-template/`

定位：

- 新项目起步骨架

适合场景：

- 要快速起一个最小可运行项目
- 需要默认首页、服务和文档目录

## 4. Playwright Responsive Toolkit

路径：

- `playwright-responsive-toolkit/`

定位：

- 通用版响应式页面验证工具

适合场景：

- 需要给新项目快速接入多端布局检测
- 想把测试逻辑复用到不同业务项目

## 5. Enterprise Playwright Toolkit

路径：

- `enterprise-playwright-toolkit/`

定位：

- 高级版 Playwright 测试体系

适合场景：

- 需要参考更完整的企业级测试组织方式
- 需要复用通知、脚本和验证流程经验

## 推荐选择方式

如果你要：

- 建项目方法和协作体系，用 `zero-to-one-project-driver-package`
- 直接发包给别人，用 `zero-to-one-project-driver-package-release`
- 起新项目骨架，用 `starter-repo-template`
- 补页面响应式验证，用 `playwright-responsive-toolkit`
- 参考更完整的企业级测试体系，用 `enterprise-playwright-toolkit`

## 当前维护建议

- 主维护优先在源码包和根层 `skills/` 中进行
- release 目录优先承担分发职责
- 不把业务项目中的复制件当成主维护源
