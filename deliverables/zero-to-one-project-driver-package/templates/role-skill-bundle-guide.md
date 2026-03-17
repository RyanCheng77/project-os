# Role Skill Bundle 使用说明

## 这是什么

这是当前项目沉淀出来的一组多角色 skills 使用指南。

目标不是让所有 skill 同时无脑启动，而是帮助团队根据项目阶段，组合最合适的角色视角，并保持：

- 小闭环推进
- 并行协作
- 及时同步
- 文档沉淀
- 阶段汇总

## 当前包含的 skills

### 主控
- `zero-to-one-project-driver`

### 角色
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`
- `product-ops-scale`
- `design-system-ui`
- `growth-go-to-market`

## 推荐组合方式

### 1. 想法阶段

目标：
- 搞清楚做什么、为什么做、先做哪一小块

推荐组合：
- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `archive-pmo-sync`

适用问题：
- 这个项目要不要做
- 用户是谁
- 最小闭环是什么
- 哪些信息必须先补

### 2. MVP 搭建阶段

目标：
- 把首页、Demo、核心流程、基础文档搭起来

推荐组合：
- `zero-to-one-project-driver`
- `product-lead-planner`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

按需加入：
- `design-system-ui`

适用问题：
- 主流程怎么落地
- 页面怎么分层
- 失败时怎么兜底
- 当前版本怎么验证

### 3. 演示打磨阶段

目标：
- 让项目更易讲、更易用、更稳

推荐组合：
- `zero-to-one-project-driver`
- `design-system-ui`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

适用问题：
- 页面是否清楚
- 步骤是否可理解
- 视觉层级是否有问题
- 是否适合实际演示

### 4. 验证稳态阶段

目标：
- 补 smoke test、mock/fallback、空状态、日志与文档完整性

推荐组合：
- `zero-to-one-project-driver`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

适用问题：
- 如何提高成功率
- 如何避免外部依赖打断演示
- 怎么让项目更可交接

### 5. 1-10 增长与规模化阶段

目标：
- 从可演示走向可增长、可传播、可协作

推荐组合：
- `product-lead-planner`
- `product-ops-scale`
- `growth-go-to-market`
- `archive-pmo-sync`

按需加入：
- `design-system-ui`
- `qa-validation-smoke`

适用问题：
- 如何做定位和对外表达
- 如何组织 launch / GTM
- 如何让跨团队协同更顺

## 使用原则

### 原则 1：主控 skill 不等于万能 skill

`zero-to-one-project-driver` 更像总控器。
它负责：
- 判断阶段
- 拆微闭环
- 分派并行角色
- 要求同步和沉淀

具体工作还是要交给角色 skill。

### 原则 2：每轮只拉最必要的角色

不要因为技能多，就每轮都全拉上。

判断标准：
- 当前问题需要哪个角色的专业视角
- 哪些信息必须现在同步
- 哪些角色参与会增加噪音而不是增加价值

### 原则 3：一轮只推进少量微闭环

推荐每轮只推进 1 到 3 个小闭环，例如：

- 拆首页和 Demo
- 给画像提取补 mock
- 给方案输入补校验

而不是：

- 一口气重做整个产品、文档、设计和增长体系

### 原则 4：所有角色输出最终都要进入统一文档

至少应同步到：
- `project-overview`
- `requirements`
- `technical-design`
- `mvp-1.0`
- `progress-archive`
- `decision-log`

## 一个实用调用示例

如果你要推进一个 MVP，可以这样理解：

1. `zero-to-one-project-driver`
   - 负责判断当前在“搭建期”还是“验证期”
2. `product-lead-planner`
   - 负责把需求收成最小闭环
3. `delivery-engineering-mvp`
   - 负责落代码和 fallback
4. `qa-validation-smoke`
   - 负责快速验证主流程
5. `archive-pmo-sync`
   - 负责把变化写进项目文档

这就是一个完整的小型推进系统。

## 当前建议

如果是新项目启动，优先从下面这套开始：

- `zero-to-one-project-driver`
- `product-lead-planner`
- `user-research-opportunity`
- `delivery-engineering-mvp`
- `qa-validation-smoke`
- `archive-pmo-sync`

如果项目已经进入对外表达、传播或发布阶段，再加入：

- `design-system-ui`
- `growth-go-to-market`
- `product-ops-scale`
