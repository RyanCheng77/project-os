# Zero to One Project Driver Bundle

一套面向 0-1 到 1-10 项目的多角色 skill 与文档模板包。

它的目标不是只帮你“完成一个任务”，而是帮助团队建立一套更稳定的项目推进方式：

- 并行协作，而不是线性排队
- 小闭环验证，而不是大任务打包
- 文档持续沉淀，而不是最后补材料
- 每轮统一汇总，而不是上下文散落在聊天和代码里

## 这个包里有什么

### 1. 多角色 skills

- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`
- `product-ops-scale`
- `design-system-ui`
- `growth-go-to-market`

### 2. 项目文档模板

- `project-overview.md`
- `research-input.md`
- `roadmap.md`
- `decision-log.md`

### 3. 安装与初始化脚本

- `install.sh`
- `scaffold-docs.sh`

### 4. 角色框架与组合指南

- `templates/role-skill-framework.md`
- `templates/role-skill-bundle-guide.md`

### 5. 可继续扩展到 starter repo

如果你希望进一步把这套 bundle 变成一个真正可直接开新项目的模板仓库，可以参考项目内的：

- `docs/starter-repo-guide.md`

### 6. 企业级通用 Playwright 测试工具

现在这个 bundle 里也已经并入：

- `testing-toolkits/playwright-responsive-toolkit/`

它负责：

- 多设备响应式布局检测
- 移动端专项验证
- 截图回归
- 测试结果分析

推荐理解方式：

- `skills-bundle/` 负责项目怎么推进
- `templates/` 负责项目怎么沉淀
- `testing-toolkits/` 负责页面和交互怎么验证

## 适合谁用

- 想从 0 到 1 推进一个新产品 / 新工具的人
- 想把 MVP 做得可演示、可验证、可交接的人
- 想让产品、研究、开发、QA、归档协同更稳定的人
- 想把项目经验沉淀成一套可复制方法的人

## 怎么开始最快

### 安装 skills

```bash
sh install.sh
```

### 初始化项目文档

在目标项目目录执行：

```bash
sh scaffold-docs.sh /path/to/your/project
```

### 推荐起手组合

如果是新项目启动：

- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

如果已经进入对外表达和增长阶段，再加入：

- `design-system-ui`
- `growth-go-to-market`
- `product-ops-scale`

## 这套方法和普通项目模板最大的区别

不是只给文档目录，也不是只给一个 skill。

它把四件事放到一起：

1. 项目推进方法
2. 角色分工方法
3. 文档沉淀方法
4. 可直接复用的技能与模板

这意味着你拿到之后，不只是能“开个仓库”，而是能“开一套推进系统”。

## 推荐阅读顺序

1. `INSTALL.md`
2. `templates/role-skill-framework.md`
3. `templates/role-skill-bundle-guide.md`
4. `templates/docs/README.md`
5. `testing-toolkits/playwright-responsive-toolkit/README.md`

## 一句话总结

如果你经常遇到“项目很忙，但推进很乱、验证很慢、信息总丢”，这套 bundle 就是给这种问题准备的。
