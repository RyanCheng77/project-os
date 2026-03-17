# Starter Repo Template

这是一个面向 0-1 项目的最小 starter repo 骨架。

它不是完整产品，而是一个适合新项目快速起步的默认结构，包含：

- 最小可运行静态服务
- 一个示例首页
- 基础 smoke test
- 标准文档目录
- 适合配合 role skills 使用的项目骨架

## 目录结构

```text
starter-repo-template/
├── README.md
├── server.js
├── docs/
├── public/
│   └── index.html
└── scripts/
    └── smoke-test.js
```

## 启动

```bash
node server.js
```

默认打开：

```bash
http://127.0.0.1:3010
```

## 推荐下一步

1. 把 `docs/` 里的模板替换成你的真实项目信息
2. 引入 `zero-to-one-project-driver` 与角色 skills
3. 把首页换成你的产品介绍页或 Demo 入口
4. 给主流程补 smoke test 和 fallback
