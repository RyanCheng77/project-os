---
name: zero-to-one-project-driver-package
description: Bundle entry skill for importing the editable Zero to One Project Driver package when the importer requires a top-level SKILL.md file.
---

# Zero to One Project Driver Package | 技能包导入入口

This file is the top-level import entry for skill importers that require a `SKILL.md` file in the selected folder.  
这个文件是给要求“所选目录根部必须有 `SKILL.md`”的技能导入器准备的顶层入口。

## What This Package Contains | 这个包里有什么

This package includes multiple skills, templates, and testing toolkits.  
这个包里包含多个 skills、模板和测试工具。

Core bundled skills:
核心 skills 包括：

- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`
- `product-ops-scale`
- `design-system-ui`
- `growth-go-to-market`

## Import Options | 导入方式

### Option 1: Import one skill directly | 方式 1：直接导入单个 skill

Import one folder under `skills-bundle/`.  
直接导入 `skills-bundle/` 下面的某一个目录。

### Option 2: Install the whole bundle | 方式 2：安装整个技能包

Run `install.sh`, or copy all folders under `skills-bundle/` into your local skills directory.  
运行 `install.sh`，或者把 `skills-bundle/` 下面的所有目录复制到本地 skills 目录。

## Recommended Reading | 推荐先看

- `README.md`
- `templates/role-skill-framework.md`
- `templates/role-skill-bundle-guide.md`

## In One Sentence | 一句话说明

This file exists to satisfy importers that require a top-level `SKILL.md`; the actual reusable skills are inside `skills-bundle/`.  
这个文件的作用是满足“根目录必须有 `SKILL.md`”的导入器；真正可复用的 skills 在 `skills-bundle/` 里。
