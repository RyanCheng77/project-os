# 工具包地图

## 仓库目标

这个仓库不是单个工具，而是一组正在被拆分和整理的独立工具包集合。

当前重点是把已经沉淀的资产分成“主维护源、可分发产物、业务副本”三层，避免后续继续混在一起。

## 一、主维护源

### 1. `skills/`

定位：

- role skills 的主维护目录

负责：

- 项目推进方法
- 多角色协作方式
- 文档同步要求

### 2. `docs/`

定位：

- 仓库级说明和项目级管理文档

负责：

- 仓库导览
- 结构关系说明
- 决策、进展、路线图沉淀

## 二、可分发工具包

### 1. `deliverables/zero-to-one-project-driver-package/`

定位：

- 可继续编辑、可继续迭代的项目操作系统源码包

负责：

- 项目推进 skill bundle
- 文档模板
- 安装脚本
- 测试工具集成入口

### 2. `deliverables/zero-to-one-project-driver-package-release/`

定位：

- 当前稳定对内分享版

负责：

- 版本化分发
- changelog / release notes / launch checklist
- 面向接收方的安装与阅读路径

### 3. `deliverables/starter-repo-template/`

定位：

- 新项目起步骨架

负责：

- 最小可运行服务
- 示例首页
- 默认文档目录
- smoke test 起点

### 4. `deliverables/playwright-responsive-toolkit/`

定位：

- 通用版页面验证工具

负责：

- 多设备布局检测
- 移动端专项验证
- 截图回归
- 结果分析

### 5. `deliverables/enterprise-playwright-toolkit/`

定位：

- 更完整的企业版 Playwright 测试体系

负责：

- 更复杂的测试组织、通知和结果分析方案
- 作为通用 Playwright toolkit 的增强版本之一

## 三、嵌入式模块关系

### `deliverables/zero-to-one-project-driver-package/testing-toolkits/playwright-responsive-toolkit/`

定位：

- 已并入项目操作系统包内部的测试能力模块

说明：

- 它不是新的主维护源
- 更适合作为总工具包的一部分被分发

## 四、业务副本

### `toolkits/project-operating-system/zero-to-one-project-driver-package/`

定位：

- 业务项目中的分发副本

说明：

- 用于项目内接入和使用
- 不建议作为主维护源继续演进

## 推荐接入方式

如果是一个新项目，推荐组合：

1. 用 `zero-to-one-project-driver-package` 建项目推进方法和角色协作方式
2. 用 `starter-repo-template` 建最小项目骨架
3. 当页面进入可验证阶段，再接 `playwright-responsive-toolkit`

## 三类能力的协作关系

- role skills 负责“项目怎么推进”
- starter repo 负责“项目怎么起步”
- Playwright toolkit 负责“页面和交互怎么验证”

这三类工具不是替代关系，而是分工协作关系。

## 当前建议

后续整理和发布时，优先遵循这条链路：

`skills/ + docs/` -> `deliverables/源码包` -> `deliverables/release 包` -> `业务项目副本`
