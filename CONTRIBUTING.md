# Contributing | 参与贡献

Thanks for helping improve Project OS.  
感谢你帮助改进 Project OS。

## Before You Start | 开始之前

- Read `README.md` for repository structure.  
  先阅读 `README.md`，了解仓库结构。
- Read `docs/toolkit-map.md` to understand source, release, and copied artifacts.  
  阅读 `docs/toolkit-map.md`，理解主维护源、release 包和复制件之间的关系。
- Prefer updating source directories before touching release or copied directories.  
  修改时优先更新主维护目录，再考虑 release 或复制目录。

## Contribution Rules | 贡献规则

1. Keep changes small and reviewable.  
   尽量把改动控制得小而清晰，方便审阅。
2. Update project docs when structure, packaging, or release rules change.  
   当结构、打包或发布规则变化时，记得同步更新项目文档。
3. Do not treat project-copy directories as the primary maintenance source.  
   不要把项目内复制目录当成主维护源。
4. If you modify release assets, document whether the same change must flow back to the source package.  
   如果你修改了 release 产物，请写明这些改动是否需要回流到源码包。

## Recommended Flow | 推荐流程

1. Update source materials in `skills/`, `docs/`, or editable deliverables first.  
   优先在 `skills/`、`docs/` 或可编辑的 deliverables 中修改主内容。
2. Verify whether the same change affects:  
   再确认同样的改动是否会影响：
   - `deliverables/zero-to-one-project-driver-package/`
   - `deliverables/zero-to-one-project-driver-package-release/`
   - project-copy directories / 项目内复制目录
3. Update `docs/decision-log.md` for meaningful packaging or maintenance decisions.  
   对有意义的打包或维护决策，同步更新 `docs/decision-log.md`。
4. Update `docs/progress-archive.md` with completed work and next actions when the change is structural.  
   如果改动影响结构或流程，也请同步更新 `docs/progress-archive.md`。

## Pull Request Notes | PR 说明建议

Please include:  
建议在 PR 中说明：

- what changed  
  改了什么
- why it changed  
  为什么改
- whether release artifacts were updated  
  是否同步更新了 release 产物
- whether any copied artifacts still need sync  
  是否还有复制产物需要继续同步
