# 决策日志

## 2026-03-17 - 将 `project-operating-system-toolkit/` 定义为主整理工作区

### 背景

当前存在源码目录、release 目录，以及业务项目中的拷贝目录。如果不先定义主维护源，后续修改容易发生漂移。

### 决策

将 `project-operating-system-toolkit/` 定义为独立工具包的主整理工作区。

### 影响

- 后续结构、文档、打包逻辑优先在这里整理
- 项目内复制目录只作为分发副本看待

## 2026-03-17 - 将 `zero-to-one-project-driver-package-release/` 定义为稳定分享版

### 背景

当前 release 目录已经具备 `VERSION.md`、`CHANGELOG.md`、`RELEASE-NOTES.md` 等发布语义，比源码目录更适合直接分发。

### 决策

将 `deliverables/zero-to-one-project-driver-package-release/` 作为当前稳定对内分享版。

### 影响

- 分享和交接优先使用 release 目录或其压缩包
- 源码包继续承担编辑与再打包职责

## 2026-03-17 - 先补仓库级入口和项目文档，再继续拆更多工具

### 背景

当前工具数量已经开始增加，但仓库根层缺少统一入口和项目状态说明，理解成本高于继续新增工具的收益。

### 决策

本轮优先补：

- 根目录 `README.md`
- `project-overview.md`
- `progress-archive.md`
- `roadmap.md`
- `toolkit-map.md`

### 影响

- 降低后续接手和继续整理的上下文成本
- 让“独立工具包”从文件集合变成项目化资产

## 2026-03-17 - 先按 GitHub 开源仓库标准补基础治理文件

### 背景

仓库已经开始具备独立工具包形态，但还缺少开源仓库常见的基础文件，例如许可证、贡献说明、行为准则和安全策略。

### 决策

先按最小可公开标准补齐：

- `LICENSE`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `.gitignore`
- `docs/open-source-readiness.md`

许可证先按 `MIT` 准备，后续如有需要再调整。

### 影响

- 仓库更接近可直接发布到 GitHub 的状态
- 后续只需要再确认仓库名、可见性和最终公开范围

## 2026-03-17 - 将仓库级首发版本定义为 `v0.1.0`

### 背景

仓库本身已经独立发布到 GitHub，但仓库级版本和内部 deliverable 的版本还没有分层定义。

### 决策

将仓库自身的首次公开版本定义为 `v0.1.0`。

内部 release bundle 继续保留自己的版本号，例如 `deliverables/zero-to-one-project-driver-package-release/` 当前使用的 `v1.0.0`。

### 影响

- 仓库级发布和包级发布不会互相混淆
- 后续可以分别维护 repo changelog 和 deliverable changelog
