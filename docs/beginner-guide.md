# Beginner Guide | 小白使用教程

This guide is for people who are new to Project OS.  
这份教程是给第一次接触 Project OS 的人准备的。

You do not need to understand every file in this repository before getting started.  
你不需要先搞懂整个仓库，才能开始使用它。

## 1. What Is Project OS? | 这到底是什么

Project OS is a toolkit repository.  
Project OS 是一个工具包仓库。

You can think of it as a box with several ready-to-use tools inside.  
你可以把它理解成一个工具箱，里面放了几种已经整理好的工具。

The most useful parts are:
最常用的是这几类：

- starter repo  
  新项目起步骨架
- project driver bundle  
  项目推进工具包
- Playwright validation toolkit  
  页面验证工具包

## 2. Which One Should I Use First? | 我应该先用哪个

If you are not sure, use this rule:
如果你拿不准，就按这个规则选：

### Case A: I want to start a brand new project | 我想启动一个新项目

Start with:
先用：

- `deliverables/starter-repo-template/`

Why:
原因：

- it gives you a minimal runnable project
- you can replace the homepage later
- it is the easiest place to begin

### Case B: I already have a project, but my process is messy | 我已经有项目了，但推进很乱

Start with:
先用：

- `deliverables/zero-to-one-project-driver-package-release/`

Why:
原因：

- it gives you skills, templates, and a workflow
- you can use it without moving all your business code
- it helps the team work in a clearer way

### Case C: I want to test my pages on desktop and mobile | 我想验证网页在桌面和手机上的表现

Start with:
先用：

- `deliverables/playwright-responsive-toolkit/`

Why:
原因：

- it is the simplest validation toolkit in this repository
- you mainly need to change config instead of rewriting everything

## 3. The Simplest Starting Path | 最简单的上手路线

If you are a beginner, use this order:
如果你是小白，建议按这个顺序来：

1. Read [README.md](../README.md)  
   先看仓库首页，知道这里大概有什么
2. Read [deliverables/README.md](../deliverables/README.md)  
   再看工具包索引，判断自己要用哪个
3. Pick only one package for your first try  
   第一次只选一个工具包，不要全部一起上
4. Run the smallest possible demo first  
   先跑通最小 demo，再考虑扩展

## 4. Recommended First Try | 推荐你的第一次尝试

If you want the easiest possible demo:
如果你想做最简单的一次尝试：

### Step 1

Go to:
进入：

- `deliverables/starter-repo-template/`

### Step 2

Run:
执行：

```bash
node server.js
```

### Step 3

Open:
打开：

```text
http://127.0.0.1:3010
```

### Step 4

What you should do next:
接下来你做这三件事就够了：

1. replace the homepage text  
   把首页文案换成你的项目内容
2. fill the docs folder with your real project info  
   把 `docs/` 里的模板换成你的真实项目内容
3. keep the structure, do not overcomplicate it on day one  
   第一天下手不要太重，先保留这套结构

## 5. If You Want Team Workflow, Not Just a Page | 如果你要的是团队协作，不只是页面

Go to:
去看：

- `deliverables/zero-to-one-project-driver-package-release/README.md`

What it gives you:
它会给你这些东西：

- role-based skills  
  角色技能
- project docs templates  
  项目文档模板
- install script  
  安装脚本
- a reusable workflow  
  可复用的推进方式

The simplest way to use it:
最简单的用法是：

1. install the bundle  
   安装这个 bundle
2. scaffold docs into your own project  
   把文档模板初始化到你自己的项目里
3. use the docs to organize the project  
   用文档和 skills 来组织项目推进

## 6. If You Want Testing | 如果你想要测试能力

Use:
可以用：

- `deliverables/playwright-responsive-toolkit/`

You mainly need to change:
你主要只需要改：

- `baseURL`
- `paths`
- `selectors`

That means:
这意味着：

- you do not need to rewrite the whole toolkit
- you only need to tell it what pages to check

## 7. What Not to Do at the Beginning | 一开始不要做什么

- Do not try to use every package at once.  
  不要一上来把所有包都用上。
- Do not rewrite the whole structure on day one.  
  第一天不要重写整个结构。
- Do not read every document before taking action.  
  不要试图先把所有文档读完才开始动手。
- Do not over-design before the first runnable version exists.  
  在第一个能跑的版本出现之前，不要过度设计。

## 8. A Good Beginner Goal | 一个适合小白的目标

A good first goal is:
一个好的第一目标是：

> Make one small project page run, and make one document tell the truth about the project.  
> 先让一个小页面能跑起来，再让一份文档真实反映这个项目在做什么。

If you can do that, you already started correctly.  
如果你做到了这一点，就已经是正确开局了。

## 9. Where to Go Next | 下一步去哪看

- [README.md](../README.md)
- [deliverables/README.md](../deliverables/README.md)
- [docs/usage-examples.md](usage-examples.md)
- [deliverables/starter-repo-template/README.md](../deliverables/starter-repo-template/README.md)
- [deliverables/zero-to-one-project-driver-package-release/README.md](../deliverables/zero-to-one-project-driver-package-release/README.md)

## 10. One-Sentence Advice | 一句话建议

Start small, keep the structure, and only add complexity after you have one runnable path.  
从最小路径开始，先保留结构，只有在第一条链路跑通之后再增加复杂度。
