---
name: zero-to-one-project-driver-package-release
description: Bundle entry skill for importing the Zero to One Project Driver package as a single skill package. Use this as the import entry when the importer requires a top-level SKILL.md file.
---

# Zero to One Project Driver Package Release | 技能包导入入口

This file exists as the top-level import entry for skill importers that require a `SKILL.md` file in the selected folder.  
这个文件是给那些要求“所选目录根部必须有 `SKILL.md`”的导入器准备的顶层入口。

## What This Package Is | 这是什么

This is not just one skill.  
这不是单一 skill。

It is a bundle that includes:
它是一整个技能包，里面包含：

- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`
- `product-ops-scale`
- `design-system-ui`
- `growth-go-to-market`

## If You Want To Import Only One Skill | 如果你只想导入一个 skill

Import one of these folders directly:
请直接导入这些子目录中的某一个：

- `skills-bundle/zero-to-one-project-driver/`
- `skills-bundle/product-lead-planner/`
- `skills-bundle/user-research-opportunity/`
- `skills-bundle/delivery-engineering-mvp/`
- `skills-bundle/qa-validation-smoke/`
- `skills-bundle/archive-pmo-sync/`
- `skills-bundle/product-ops-scale/`
- `skills-bundle/design-system-ui/`
- `skills-bundle/growth-go-to-market/`

## If You Want The Whole Bundle | 如果你想导入整个技能包

Use one of these methods:
请用下面任一方式：

1. Run `install.sh` in this package  
   运行这个包里的 `install.sh`
2. Copy all folders under `skills-bundle/` into your local skills directory  
   把 `skills-bundle/` 下的所有目录复制到本地 skills 目录

## Recommended Reading | 推荐先看

- `README.md`
- `INSTALL.md`
- `templates/role-skill-framework.md`
- `templates/role-skill-bundle-guide.md`

## In One Sentence | 一句话说明

If your importer says “missing `SKILL.md`”, use this file as the package entry, or import one skill folder inside `skills-bundle/` instead.  
如果导入器提示“缺少 `SKILL.md`”，你可以把这个文件当成技能包入口，或者直接改为导入 `skills-bundle/` 里的单个 skill 目录。
