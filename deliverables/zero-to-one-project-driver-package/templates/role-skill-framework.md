# 角色 Skill 框架

## 目标

把当前项目里已经验证有效的多角色协作方式，拆解成一组可复用的 skills，覆盖从 0-1 到 1-10 的项目推进链路。

这套框架分成两层：

- 主控层：负责判断阶段、拆微闭环、组织并行协作、统一汇总。
- 角色层：负责产品、研究、交付、QA、归档、扩张等不同职责视角。

## 总体设计

### 主控 Skill
- `zero-to-one-project-driver`
  - 负责识别阶段、定义最小闭环、拆解并行协作、要求文档同步、统一汇总。

### 角色 Skills
- `product-lead-planner`
  - 面向产品负责人，负责目标、范围、优先级、验收标准、路线图。
- `user-research-opportunity`
  - 面向用户研究，负责机会点、研究方法、用户输入、竞品与洞察结构化。
- `delivery-engineering-mvp`
  - 面向交付/工程，负责 MVP 落地、演示主路径、兜底方案、最小可运行实现。
- `qa-validation-smoke`
  - 面向 QA/验证，负责主流程回放、冒烟验证、空状态、异常状态和回归风险。
- `archive-pmo-sync`
  - 面向归档 / PMO，负责项目记忆、文档同步、决策沉淀、阶段汇总。
- `product-ops-scale`
  - 面向 1-10 阶段的产品运营 / Product Ops，负责跨团队协同、流程标准化、数据与工具体系、规模化支持。
- `design-system-ui`
  - 面向设计系统 / UI 结构，负责信息层级、组件语义、界面一致性、可读性和视觉任务区分。
- `growth-go-to-market`
  - 面向增长 / GTM，负责定位、叙事、对外表达、发布组织与 post-MVP 增长路径。

## 外部资料整理后的角色要求

### 1. 产品负责人

整理依据：
- Atlassian 对产品管理的定义强调，产品管理要围绕客户需求、业务目标和跨职能协作推动整个生命周期，并强调迭代与适应性。
- Atlassian 对产品经理职责的概括包括：理解并代表用户需求、监测市场、定义产品愿景、对齐利益相关者、做优先级权衡、建立团队共享认知。

对应要求：
- 先定义问题和价值，不先堆功能。
- 持续做范围控制和优先级取舍。
- 默认从最小可验证闭环出发。
- 任何大任务都要拆成微闭环并附带验收口径。
- 必须持续吸收研究与 QA 输入，而不是单向下发需求。

参考来源：
- [Atlassian - Product Management](https://www.atlassian.com/agile/product-management)
- [Atlassian - Product Manager](https://www.atlassian.com/agile/product-management/product-manager)

### 2. 用户研究

整理依据：
- NNGroup 的可用性测试资料强调：研究应使用真实任务、真实用户；定性可用性测试常见样本量是 5-8 人；研究提问要保持开放、中性，不要诱导。
- NNGroup 的方法总览强调：研究方法要根据阶段和问题来选，不同方法覆盖发现问题、测量表现、理解行为与态度。
- NNGroup 的 field research tips 强调尽快分享初步发现、版本化记录、研究过程中及时做去偏差和上下文记录。

对应要求：
- 优先回答“这轮最需要知道什么”，而不是堆方法。
- 研究输入要直接服务产品决策，不做只好看不好用的长报告。
- 研究发现应尽快共享初步结论，而不是等最终完整版。
- 画像、痛点、场景都必须带证据感，不凭空抽象。
- 研究工作也要拆成小闭环，例如先确认机会点，再补方法，再补竞品。

参考来源：
- [NNGroup - Usability Testing 101](https://media.nngroup.com/media/articles/attachments/Usability-Testing-101_SizeA4.pdf)
- [NNGroup - 20 UX Methods in Brief](https://media.nngroup.com/media/articles/attachments/User_Research_Methods_A4-compressed.pdf)
- [NNGroup - 27 Tips for User Research in the Field](https://media.nngroup.com/media/articles/attachments/27Tips_Poster.pdf)

### 3. 交付 / 工程

整理依据：
- 当前项目实践表明，MVP 阶段最关键的不是架构完整，而是主流程、fallback、mock、可演示性和可验证性。
- Martin Fowler 的测试金字塔强调测试要分层，自动化反馈越快越好；Google Testing Blog 进一步用 Small / Medium / Large 测试定义了不同验证边界和运行成本。

对应要求：
- 优先确保主流程可跑，再谈大规模优化。
- 外部依赖必须有兜底，不允许演示链路完全单点失败。
- 改动优先按“最小可验证单元”推进。
- 技术实现完成后，要能快速给 QA 和归档提供可验证信息。
- 小测试、小脚本、小 mock 优先于复杂测试体系。

参考来源：
- [Martin Fowler - The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Google Testing Blog - Test Sizes](https://testing.googleblog.com/2010/12/test-sizes.html)

### 4. QA / 验证

整理依据：
- 测试金字塔和 Google test sizes 都强调：反馈越快越好，测试要有清晰边界，尽量高隔离、易并行、成本可控。
- 在 0-1 项目里，QA 的价值不仅是找 bug，更是帮助团队尽快发现“哪里不稳、哪里说不清、哪里会让用户失去信心”。

对应要求：
- 每轮都优先验证主流程，而不是只看局部功能。
- 要覆盖成功态、失败态、空状态、边界状态。
- 先补冒烟验证，再谈更重测试体系。
- 测试发现要能直接转成产品和工程的下一步输入。
- 验证结果必须进入文档，而不是只停留在口头或控制台。

参考来源：
- [Martin Fowler - The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Google Testing Blog - Test Sizes](https://testing.googleblog.com/2010/12/test-sizes.html)

### 5. 归档 / PMO

整理依据：
- PMI 关于沟通与利益相关者管理强调：项目经理大量时间都花在沟通上，单靠报告不够，必须根据不同相关方设计沟通与信息分发方式。
- ProjectManagement.com 关于知识共享和 lessons learned 的材料强调：项目知识必须进入共享仓库，不能只留在单团队文档里；不仅要记“做了什么”，还要记“怎么做”与“为什么这样做”。

对应要求：
- 每轮都要更新项目记忆，而不是最后补归档。
- 要把已完成、已验证、剩余风险、下一步建议写清楚。
- 决策要有时间、背景、原因、影响范围，而不是只写结论。
- 文档要面向“后来者能快速接手”来组织。
- 归档工作必须吸收产品、研究、交付、QA 四方信息。

参考来源：
- [PMI - Beyond Reporting: The Communication Strategy](https://www.pmi.org/learning/library/communication-strategy-stakeholder-generating-reports-6887)
- [ProjectManagement.com - Process Knowledge Matters](https://www.projectmanagement.com/articles/293673/process-knowledge-matters--how-to-share-the--how--of-projects)
- [ProjectManagement.com - How are learnings shared between project teams?](https://www.projectmanagement.com/blog-post/72327/how-are-learnings-shared-between-project-teams-)

### 6. Product Ops / 规模化支持

整理依据：
- Atlassian 对 Product Ops 的定义强调，这个角色负责流程优化、数据管理、跨团队协作、工具体系与反馈流转，让产品经理从运营性负担中解放出来，更专注战略和客户。

对应要求：
- 当项目从 0-1 进入 1-10，必须开始补流程、工具、数据和跨团队协同机制。
- 重点不是“多一个管理层”，而是减少重复劳动、标准化接口、提升信息流动效率。
- 要持续把分散经验沉淀成模板、仪表、标准与工作流。
- 产品、研发、销售、市场、运营之间需要清晰的同步机制和共享视图。

参考来源：
- [Atlassian - Product Operations](https://www.atlassian.com/agile/product-management/product-operations)

### 7. Design System / UI

整理依据：
- NNGroup 长期强调视觉层级、可读性、一致性和状态清晰度对任务理解和可用性的重要性。
- Atlassian 关于文档标准的内容也强调一致性和可访问性对协作效率的重要作用，这种原则同样适用于产品界面系统。

对应要求：
- 要清楚区分流程元素、内容模块和状态反馈。
- 优先解决层级、对比、分组和组件语义问题，而不是只做装饰性美化。
- UI 优化必须服务于理解和完成任务。
- 重复出现的界面模式应尽量组件化、一致化。

参考来源：
- [Atlassian - Documentation Standards](https://www.atlassian.com/work-management/knowledge-sharing/documentation/standards)
- [NNGroup - Usability Testing 101](https://media.nngroup.com/media/articles/attachments/Usability-Testing-101_SizeA4.pdf)

### 8. Growth / Go-to-Market

整理依据：
- Product Marketing Alliance 的 GTM 课程与框架强调：完整 GTM 需要覆盖 pre-launch、launch、post-launch，并围绕定位、叙事、细分、内部沟通、enablement 和增长优化展开。
- PMA 的 framework 也强调，市场研究、定位、信息传达、团队训练和 post-launch 分析是一个连续动作，而不是一次性营销事件。

对应要求：
- 在产品已经跑通主价值后，再系统整理定位和对外叙事。
- 先回答“给谁、解决什么、为什么值得关注”，再谈渠道和动作。
- GTM 要覆盖 pre-launch、launch、post-launch，而不是只准备一个发布日。
- 产品、市场、销售、客户成功之间要共享同一套核心信息。

参考来源：
- [Product Marketing Alliance - Core Framework](https://support.productmarketingalliance.com/en/articles/10453971-the-product-marketing-core-framework)
- [Product Marketing Alliance - Product Launches Certified](https://support.productmarketingalliance.com/en/articles/11033101-product-launches-certified-masters)

## 推荐协作方式

### 0-1 阶段
- 以 `zero-to-one-project-driver` 为主控
- 并行拉起：
  - `product-lead-planner`
  - `user-research-opportunity`
  - `delivery-engineering-mvp`
  - `qa-validation-smoke`
  - `archive-pmo-sync`

### 1-10 阶段
- 在保留上面几类职责的基础上，新增：
  - `product-ops-scale`
  - `design-system-ui`
  - `growth-go-to-market`

## 当前建议

1. 把这套 role skills 继续纳入启动包，而不只停留在单一项目里。
2. 后续如果继续扩展，可以再补“设计系统 / 增长 / 商业化 / 数据分析”类 skills。
3. 所有角色 skill 都应坚持小闭环、并行协作、及时沉淀、统一汇总这四个总原则。
