# 开源准备清单

## 当前目标

将 `project-operating-system-toolkit/` 整理为一个可以独立发布到 GitHub 的仓库。

## 已完成

- 补齐仓库根入口 `README.md`
- 补齐项目级文档和工具包索引
- 明确主维护源、release 包、业务副本的关系
- 新增开源基础文件：
  - `LICENSE`
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - `SECURITY.md`
  - `.gitignore`

## 发布前仍需确认

- GitHub 仓库名
- 是否公开为 public
- 许可证是否继续使用 `MIT`
- 是否要保留所有 deliverables 一起开源
- 是否需要先清理业务特定文案或内部表达

## 建议发布顺序

1. 先把 `project-operating-system-toolkit/` 视为独立仓库
2. 检查是否存在不适合公开的内部信息
3. 初始化独立 git 历史或从大仓库中拆分
4. 创建 GitHub repo
5. 首次推送
6. 再补 release 标签、截图、示例和 issue 模板

## 风险

- 当前还有从业务项目抽出的企业工具，公开前需要再看一遍是否包含内部假设
- 业务副本与主维护源边界虽然已写清，但流程还没完全脚本化
- 根目录 README 目前更偏内部整理视角，后续可再补更面向外部读者的首屏介绍
