# Usage Examples | 使用示例

This document shows a few practical ways to use Project OS.  
这个文档展示几种更实际的 Project OS 使用方式。

## 1. Launch a new project | 启动一个新项目

Recommended path:  
推荐路径：

1. Start with `deliverables/starter-repo-template/`  
   先用 `deliverables/starter-repo-template/`
2. Add `zero-to-one-project-driver` and the role skills you need  
   再接入 `zero-to-one-project-driver` 和所需角色 skills
3. Initialize project docs from the bundle templates  
   用 bundle 模板初始化项目文档
4. Add smoke tests and a first validation path  
   补 smoke test 和第一条验证链路

Best for:  
适合：

- MVP projects
- internal tools
- new AI experiments

## 2. Improve team coordination without moving code | 不迁移业务代码，只增强协作

Recommended path:  
推荐路径：

1. Keep your application code in the current repository  
   业务代码继续留在原仓库
2. Use the project driver package as the workflow layer  
   用项目推进包承担工作流层
3. Add docs and role-based planning before large-scale changes  
   在大改动前先补文档和角色分工

Best for:  
适合：

- teams with an existing codebase
- projects that already run but lack process clarity
- teams that want stronger documentation and handoff

## 3. Add responsive validation to an existing frontend | 给已有前端补响应式验证

Recommended path:  
推荐路径：

1. Start with `deliverables/playwright-responsive-toolkit/`  
   从 `deliverables/playwright-responsive-toolkit/` 开始
2. Configure `toolkit.config.js` for your routes and selectors  
   在 `toolkit.config.js` 里配置你的路由和选择器
3. Run desktop and mobile checks first  
   先跑桌面和移动端检查
4. Add screenshot regression only when the layout is stable  
   只有在布局稳定后再加截图回归

Best for:  
适合：

- dashboards
- landing pages
- mobile-adaptive web apps

## 4. Use the enterprise toolkit as a reference baseline | 把高级企业版工具包当参考底座

Recommended path:  
推荐路径：

1. Review `deliverables/enterprise-playwright-toolkit/`  
   先阅读 `deliverables/enterprise-playwright-toolkit/`
2. Reuse its reporting and notification structure  
   复用其中的报告和通知结构
3. Rename and adapt tests to your own pages  
   按你的页面重命名并适配测试

Best for:  
适合：

- larger frontend surfaces
- test systems with notifications and reports
- teams that need a stronger starting point than the generic toolkit

## 5. Share the toolkit with teammates | 给团队分发这套工具

Recommended path:  
推荐路径：

1. Start with `deliverables/zero-to-one-project-driver-package-release/`  
   优先使用 `deliverables/zero-to-one-project-driver-package-release/`
2. Share the release bundle rather than the whole repository when the goal is quick adoption  
   如果目标是快速接入，优先分享 release bundle，而不是整个仓库
3. Point teammates to the README and deliverables index first  
   先让团队从 README 和 deliverables 索引读起

Best for:  
适合：

- internal onboarding
- reuse across multiple projects
- handoff between collaborators
