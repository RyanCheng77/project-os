# Project Operating System Toolkit

Project Operating System Toolkit is a reusable toolkit workspace for turning proven project delivery practices into shareable assets.

它用来把项目推进方法、角色协作技能、starter repo、以及页面验证能力拆成可复用资产，并逐步整理成适合独立发布的 GitHub 仓库。

## 这个仓库的定位

这里不是单一项目源码，而是一个工具包工作区。

当前目标是把已经在业务项目里验证过的方法和工具，沉淀成三层可独立分发的资产：

- 项目操作系统工具包
- starter repo 骨架
- Playwright 响应式验证工具

## 当前结构

```text
project-operating-system-toolkit/
├── README.md
├── docs/
├── skills/
└── deliverables/
```

### `docs/`

负责仓库级说明、方法指南和项目管理文档。

### `skills/`

负责项目推进相关的角色 skills 源文件，是工具包方法层的主维护源。

### `deliverables/`

负责已经整理出的可分发产物。

当前重点包括：

- `zero-to-one-project-driver-package/`
  可继续编辑的项目操作系统源码包
- `zero-to-one-project-driver-package-release/`
  用于稳定分享和转交的 release 包
- `starter-repo-template/`
  新项目起步骨架
- `playwright-responsive-toolkit/`
  通用版页面响应式验证工具
- `poll-vote-playwright-enterprise-toolkit/`
  从业务项目抽出的企业版 Playwright 测试体系

## 源码、发布版、业务副本的关系

为了避免后续整理时混淆，当前按下面的原则理解：

1. `project-operating-system-toolkit/skills/`
   是 role skills 的主维护源。

2. `project-operating-system-toolkit/deliverables/zero-to-one-project-driver-package/`
   是可继续迭代、可再次打包的源码交付目录。

3. `project-operating-system-toolkit/deliverables/zero-to-one-project-driver-package-release/`
   是对内分发用的稳定 release 目录，带版本、changelog、release notes。

4. `poll-vote/toolkits/project-operating-system/zero-to-one-project-driver-package/`
   是业务项目中的分发副本，不应作为主维护源直接继续演进。

## 推荐阅读顺序

1. `docs/toolkit-map.md`
2. `docs/project-overview.md`
3. `docs/progress-archive.md`
4. `docs/decision-log.md`
5. `deliverables/README.md`
6. `deliverables/zero-to-one-project-driver-package-release/README.md`
7. `docs/open-source-readiness.md`

## 当前整理重点

当前这一轮重点不是继续扩工具数量，而是把已有资产整理成清晰的独立工具包体系：

- 哪些是主维护源
- 哪些是 release 产物
- 哪些是业务内复制件
- 每个工具包适合什么接入时机
- 后续如何继续发布和收敛

## 下一步建议

- 给 `deliverables/` 增加统一索引文档
- 明确每个工具包的版本策略
- 清理非必要的重复副本和系统文件
- 为独立发布补压缩与校验脚本
