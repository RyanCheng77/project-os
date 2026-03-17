# Security Policy | 安全策略

## Reporting | 报告方式

If you find a security issue, please do not open a public issue with sensitive details.  
如果你发现安全问题，请不要在公开 issue 中直接披露敏感细节。

Instead, contact the maintainer privately and include:  
请改为私下联系维护者，并尽量提供：

- a description of the issue  
  问题描述
- impact and affected paths  
  影响范围和涉及路径
- reproduction steps if available  
  如可复现，请附上复现步骤
- suggested mitigation if known  
  如果已有判断，也可以附上缓解建议

## Scope Notes | 范围说明

This repository mainly contains reusable project assets, templates, scripts, and testing toolkits. Security-sensitive review should focus on:  
这个仓库主要包含可复用的项目资产、模板、脚本和测试工具包。安全检查建议重点关注：

- scripts that execute commands  
  会执行命令的脚本
- install and packaging flows  
  安装与打包流程
- test utilities that may handle credentials or notifications  
  可能处理凭证或通知的测试工具
- example configuration files  
  示例配置文件

## Response Goal | 响应目标

We will aim to acknowledge valid reports promptly and coordinate a fix before public disclosure when appropriate.  
对于有效的安全报告，我们会尽快确认，并在适合的情况下先协调修复，再考虑公开披露。
