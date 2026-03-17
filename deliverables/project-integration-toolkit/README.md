# Project Integration Toolkit

这是一组用于补充项目推进与协作的工具，不替代现有 Playwright 测试体系，而是和它并行工作。

## 这套工具解决什么问题

现有企业级 Playwright 自动化测试能力适合做：

- 多设备布局验证
- 视觉回归
- 飞书通知
- HTML 测试报告

这次补进去的工具，负责另外一类事情：

- 从 0-1 到 1-10 的项目推进方法
- 多角色 skill 协作
- 项目文档模板
- starter repo 思路
- 产品 / 研究 / 交付 / QA / PMO / UI / GTM 的角色能力拆分

## 和现有 Playwright 的关系

### 现有 Playwright 负责
- 页面行为验证
- 布局质量检测
- 回归风险发现
- 自动化执行与通知

### 新增工具包负责
- 项目如何拆闭环
- 角色如何并行协作
- 文档如何持续沉淀
- MVP 如何定义
- Starter repo 如何快速起步

### 推荐配合方式
- 用 `zero-to-one-project-driver` 负责总控推进
- 用 `delivery-engineering-mvp` 负责主链路落地
- 用 `qa-validation-smoke` 负责补轻量验证逻辑
- 用现有 Playwright 做更重、更完整的企业级自动化验证

换句话说：

> 这套新增工具负责“项目怎么推进”，  
> 现有 Playwright 负责“页面和体验怎么验证”。

## 目录说明

### `zero-to-one-project-driver-package/`
- 多角色 skills bundle
- 安装脚本
- 文档模板
- role skill 框架与组合指南

### `starter-repo-template/`
- 最小可运行 starter repo 骨架
- 适合未来新项目或新模块快速起步

## 推荐阅读顺序

1. `zero-to-one-project-driver-package/README.md`
2. `zero-to-one-project-driver-package/INSTALL.md`
3. `zero-to-one-project-driver-package/templates/role-skill-framework.md`
4. `zero-to-one-project-driver-package/templates/role-skill-bundle-guide.md`
5. `starter-repo-template/README.md`

## 推荐接入方式

如果后面要把这套工具更深地接到某个具体项目里，建议按这个顺序：

1. 先让团队读懂这套 bundle，不急着全量启用
2. 先从 `zero-to-one-project-driver` + `archive-pmo-sync` 开始
3. 再把现有 Playwright 测试流程映射到 `qa-validation-smoke`
4. 如果后面要做新模块或新子项目，再启用 `starter-repo-template`
