# 项目总览

## 项目名称

Project Operating System Toolkit

## 项目目标

把已经在实际项目中验证过的项目推进方法、角色协作 skill、文档模板、starter repo 和页面验证工具，整理成一套可独立维护、可重复分发、可跨项目复用的工具包体系。

## 当前范围

当前仓库主要覆盖三类资产：

1. 项目推进与角色协作工具
2. 新项目启动骨架
3. Playwright 页面验证工具

## 当前核心产物

### 1. 项目操作系统工具包

主路径：

- `skills/`
- `deliverables/zero-to-one-project-driver-package/`
- `deliverables/zero-to-one-project-driver-package-release/`

作用：

- 多角色协作
- 小闭环推进
- 项目文档沉淀
- 可复制的项目操作方式

### 2. Starter Repo

主路径：

- `deliverables/starter-repo-template/`

作用：

- 给新项目提供最小可运行骨架
- 提供标准文档目录和默认服务结构

### 3. Playwright 工具包

主路径：

- `deliverables/playwright-responsive-toolkit/`
- `deliverables/poll-vote-playwright-enterprise-toolkit/`

作用：

- 多设备布局检测
- 移动端专项验证
- 截图回归
- 测试结果分析

## 当前阶段判断

当前处于“独立工具包整理与发布准备阶段”。

已经从业务项目中抽出一批可复用资产，但仓库级入口、项目状态文档、源码与 release 的边界说明还在完善中。

## 当前成功标准

- 仓库根层能一眼说明这是什么
- 不同 deliverable 的职责边界清楚
- 项目文档可以支持后续接手和继续整理
- release 包能够独立阅读、安装和分发

## 主要风险

- 同一能力存在多个副本，后续可能继续漂移
- 业务内副本容易被误当成主维护源
- 根目录缺统一索引时，新接手的人理解成本高
- 发布版虽然完整，但仓库级发布流程仍不够统一

## 当前建议

- 以 `project-operating-system-toolkit/` 作为主整理源
- 以 `zero-to-one-project-driver-package-release/` 作为稳定对内分享版
- 后续将 release 生成过程脚本化，减少手工同步
