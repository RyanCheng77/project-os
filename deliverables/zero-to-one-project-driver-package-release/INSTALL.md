# Zero to One Project Driver 安装说明

这个安装包用于把 `zero-to-one-project-driver` skill 安装到本地 Codex skills 目录中。

## 包内结构

- `skills-bundle/`
  - 一组可直接安装的角色 skills
  - 包含主控 skill 与多个角色 skill
- `install.sh`
  - 一键安装脚本
- `templates/docs/`
  - 0-1 项目文档模板，包含项目总览、研究输入、路线图、决策日志等
- `testing-toolkits/`
  - 企业级测试工具，目前包含通用版 Playwright Responsive Toolkit

## 安装方式

### 方式一：直接运行安装脚本

在安装包目录下执行：

```bash
sh install.sh
```

默认会把 skill 安装到：

```bash
$HOME/.codex/skills/
```

如果你是通过技能导入器导入目录，而不是运行脚本：

- 请优先选择带顶层 `SKILL.md` 的包目录
- 如果只想导入单个 skill，请直接选择 `skills-bundle/` 下的对应 skill 目录

### 方式二：手动复制

```bash
mkdir -p "$HOME/.codex/skills"
cp -R skills-bundle/* "$HOME/.codex/skills/"
```

## 安装后验证

确认以下文件存在：

```bash
$HOME/.codex/skills/zero-to-one-project-driver/SKILL.md
$HOME/.codex/skills/zero-to-one-project-driver/agents/openai.yaml
$HOME/.codex/skills/product-lead-planner/SKILL.md
$HOME/.codex/skills/user-research-opportunity/SKILL.md
$HOME/.codex/skills/delivery-engineering-mvp/SKILL.md
$HOME/.codex/skills/qa-validation-smoke/SKILL.md
$HOME/.codex/skills/archive-pmo-sync/SKILL.md
$HOME/.codex/skills/product-ops-scale/SKILL.md
```

## 建议使用方式

适合用于以下场景：

- 从 0 到 1 推进一个产品或工具
- 推进 MVP 落地
- 协调产品、研究、开发、测试、归档并行推进
- 让项目始终保持文档同步、阶段清晰、可验证推进
- 在项目进入 1-10 阶段后，继续补齐 Product Ops / 规模化协作能力

## 推荐先读

如果你是第一次接触这套 bundle，建议按这个顺序阅读：

1. `README.md`
2. `INSTALL.md`
3. `templates/role-skill-framework.md`
4. `templates/role-skill-bundle-guide.md`
5. `templates/docs/README.md`
6. `testing-toolkits/playwright-responsive-toolkit/README.md`

示例提示词：

```text
Use $zero-to-one-project-driver to push this project from idea to MVP with parallel roles, document syncing, and small verifiable closures.
```

## 如何使用模板初始化项目

如果你希望顺手初始化一套项目文档，可以在目标项目目录里执行：

```bash
mkdir -p docs
cp -R templates/docs/* ./docs/
```

推荐优先从这些文件开始：

- `docs/project-overview.md`
- `docs/research-input.md`
- `docs/decision-log.md`
- `docs/roadmap.md`

## 这个 skill 的核心特点

- 默认按小闭环推进，而不是大任务一口气推进
- 默认鼓励并行分工，而不是线性串行
- 要求角色之间及时同步信息
- 要求持续沉淀需求、技术、进展、MVP 文档
- 每轮最后统一汇总项目状态、风险和下一步建议

## 当前打包的 skills

- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`
- `product-ops-scale`
- `design-system-ui`
- `growth-go-to-market`
