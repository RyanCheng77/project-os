# Starter Repo 结构说明

## 什么是 starter repo

这里说的 starter repo，不是“一个已经完成的产品”，而是一个可以直接拿来启动新项目的标准仓库骨架。

它应该同时提供：

- 项目推进方法
- 角色技能体系
- 文档模板
- 最小脚本与验证路径
- 一套默认的协作结构

## 推荐结构

```text
project/
├── README.md
├── docs/
│   ├── project-overview.md
│   ├── requirements.md
│   ├── technical-design.md
│   ├── mvp-1.0.md
│   ├── research-input.md
│   ├── roadmap.md
│   ├── decision-log.md
│   └── progress-archive.md
├── skills/
│   ├── zero-to-one-project-driver/
│   ├── product-lead-planner/
│   ├── user-research-opportunity/
│   ├── delivery-engineering-mvp/
│   ├── qa-validation-smoke/
│   ├── archive-pmo-sync/
│   ├── product-ops-scale/
│   ├── design-system-ui/
│   └── growth-go-to-market/
├── scripts/
│   ├── smoke-test.js
│   └── ...
├── deliverables/
│   └── ...
├── public/
├── server.js
└── ...
```

## 每一层的作用

### 1. `docs/`

负责项目记忆和跨轮同步。

最重要的不是数量，而是每份文档负责的真相不同：

- `project-overview`：项目是什么
- `requirements`：为什么做、做什么
- `technical-design`：怎么实现
- `mvp-1.0`：当前版本的最小闭环
- `research-input`：用户和机会输入
- `roadmap`：接下来往哪走
- `decision-log`：为什么这么选
- `progress-archive`：现在进行到哪里

### 2. `skills/`

负责把项目协作方式产品化、可复用化。

### 3. `scripts/`

负责最小验证与重复动作自动化。

例如：

- smoke test
- 文档初始化
- 打包与导出

### 4. `deliverables/`

负责对外可转交物。

例如：

- demo 包
- 安装包
- 对外材料

## 推荐启动顺序

1. 先写 `project-overview`
2. 再补 `requirements` 和 `mvp-1.0`
3. 并行补 `research-input` 和 `technical-design`
4. 每轮维护 `progress-archive` 和 `decision-log`
5. MVP 稳定后再进入 `roadmap`

## 为什么 starter repo 有价值

因为很多团队开新项目时，真正浪费时间的不是代码，而是：

- 不知道该先写什么
- 不知道谁负责什么
- 不知道怎么同步
- 不知道什么信息必须被沉淀

starter repo 的作用，就是把这些“每次都重新发明”的动作，提前做成默认结构。

## 当前建议

如果后面你要把这套东西做成公开模板仓库，建议再补三类内容：

1. `README` 首屏示例
2. `第一周推进 checklist`
3. 一个最小演示项目骨架
