# 飞书通知配置指南

## 📱 功能说明

测试完成后自动发送结果到飞书群，包括：
- ✅ 测试通过/失败状态
- 📊 测试统计（总数、通过、失败、通过率）
- ❌ 失败测试列表
- 🎨 美观的卡片消息

---

## 🚀 快速设置（3 步）

### 1️⃣ 创建飞书机器人

1. 打开飞书群聊
2. 点击右上角 `···` → `设置` → `群机器人`
3. 点击 `添加机器人` → `自定义机器人`
4. 设置机器人名称（如：`测试通知机器人`）
5. 复制 **Webhook 地址**（类似：`https://open.feishu.cn/open-apis/bot/v2/hook/xxx`）

### 2️⃣ 配置 Webhook

**方式 A：创建 .env 文件（推荐）**

在项目根目录创建 `.env` 文件：

```bash
cd /path/to/your-app
echo "FEISHU_WEBHOOK=你的webhook地址" > .env
```

**方式 B：设置环境变量**

```bash
# macOS/Linux
export FEISHU_WEBHOOK="你的webhook地址"

# 或者添加到 ~/.zshrc 永久保存
echo 'export FEISHU_WEBHOOK="你的webhook地址"' >> ~/.zshrc
source ~/.zshrc
```

### 3️⃣ 运行测试并发送通知

```bash
# 运行测试并自动发送飞书通知
npm run test:notify

# 或者先运行测试，再手动发送通知
npm test
npm run notify
```

---

## 📋 使用命令

```bash
# 运行测试 + 自动发送飞书通知
npm run test:notify

# 只发送通知（不运行测试）
npm run notify

# 临时指定 Webhook（不保存）
FEISHU_WEBHOOK=你的地址 npm run notify
```

---

## 🎨 通知消息示例

### 全部通过时
```
📊 自动化测试结果

状态: ✅ 全部通过
总计: 570 个测试
通过: 570 ✅
失败: 0 ❌
通过率: 100.0%

查看详细报告: npm run test:report
```

### 有失败时
```
📊 自动化测试结果

状态: ❌ 有失败
总计: 570 个测试
通过: 565 ✅
失败: 5 ❌
通过率: 99.1%

失败的测试:
1. enterprise-layout-spec-js-iPhone-16-Pro-Max
2. enterprise-mobile-spec-js-Samsung-Galaxy-S23
3. ...

查看详细报告: npm run test:report
```

---

## 🔧 高级配置

### 自定义通知内容

编辑 `scripts/notify-feishu.js` 文件，修改 `buildCardMessage` 函数。

### 添加 @提醒

在飞书机器人设置中配置关键词，或修改脚本添加 `open_id`：

```javascript
{
  msg_type: 'text',
  content: {
    text: `<at user_id="ou_xxx">@某人</at> 测试完成`
  }
}
```

### 发送测试截图

修改脚本上传失败截图到飞书：

```javascript
// 需要使用飞书开放平台 API
// 参考: https://open.feishu.cn/document/server-docs/im-v1/message-content-description/create_json
```

---

## 🐛 常见问题

### Q: 提示 "请设置 FEISHU_WEBHOOK 环境变量"

**A:** 确保已经设置了 Webhook 地址：

```bash
# 检查是否设置
echo $FEISHU_WEBHOOK

# 如果为空，重新设置
export FEISHU_WEBHOOK="你的webhook地址"
```

### Q: 发送失败，提示 "invalid webhook url"

**A:** 检查 Webhook 地址是否正确：
- 应该以 `https://open.feishu.cn/open-apis/bot/v2/hook/` 开头
- 确保复制完整，没有多余空格

### Q: 想在多个群发送通知

**A:** 创建多个机器人，设置多个 Webhook：

```bash
# 方式 1: 修改脚本支持多个 Webhook
FEISHU_WEBHOOK="webhook1,webhook2,webhook3" npm run notify

# 方式 2: 多次运行
FEISHU_WEBHOOK=webhook1 npm run notify
FEISHU_WEBHOOK=webhook2 npm run notify
```

### Q: 如何在 CI/CD 中使用

**A:** 在 GitHub Actions 中添加 Secret：

```yaml
# .github/workflows/test.yml
- name: Run tests and notify
  env:
    FEISHU_WEBHOOK: ${{ secrets.FEISHU_WEBHOOK }}
  run: npm run test:notify
```

---

## 📝 .env 文件示例

创建 `.env` 文件（已添加到 .gitignore，不会提交到 git）：

```bash
# 飞书 Webhook 地址
FEISHU_WEBHOOK=https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxxxx

# 可选：其他配置
# FEISHU_WEBHOOK_DEV=https://open.feishu.cn/open-apis/bot/v2/hook/dev_xxx
# FEISHU_WEBHOOK_PROD=https://open.feishu.cn/open-apis/bot/v2/hook/prod_xxx
```

---

## 🎯 完整工作流

```bash
# 1. 启动开发服务器
cd /path/to/your-app/server
npm start

# 2. 新开终端，运行测试并发送通知
cd /path/to/your-app
npm run test:notify

# 3. 查看飞书群消息
# 4. 如果有失败，查看详细报告
npm run test:report
```

---

## 🔐 安全提示

- ⚠️ **不要**将 Webhook 地址提交到 git
- ⚠️ **不要**在公开场合分享 Webhook 地址
- ✅ 使用 `.env` 文件存储（已在 .gitignore 中）
- ✅ 定期更换 Webhook 地址

---

## 📞 获取帮助

如果遇到问题：
1. 检查飞书机器人是否正常
2. 检查 Webhook 地址是否正确
3. 查看脚本输出的错误信息
4. 参考飞书开放平台文档：https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot
