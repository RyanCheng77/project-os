#!/bin/bash

# 飞书通知快速设置脚本

echo "🚀 自动化测试飞书通知设置向导"
echo "================================"
echo ""

# 检查是否已有 .env 文件
if [ -f .env ]; then
  echo "⚠️  发现已存在的 .env 文件"
  read -p "是否覆盖？(y/n): " overwrite
  if [ "$overwrite" != "y" ]; then
    echo "❌ 取消设置"
    exit 0
  fi
fi

echo ""
echo "📱 请按照以下步骤获取飞书 Webhook 地址："
echo "1. 打开飞书群聊"
echo "2. 点击右上角 ··· → 设置 → 群机器人"
echo "3. 点击 添加机器人 → 自定义机器人"
echo "4. 设置机器人名称（如：测试通知机器人）"
echo "5. 复制 Webhook 地址"
echo ""
echo "Webhook 地址格式："
echo "https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxxxx"
echo ""

read -p "请输入你的飞书 Webhook 地址: " webhook

if [ -z "$webhook" ]; then
  echo "❌ Webhook 地址不能为空"
  exit 1
fi

# 验证 Webhook 格式
if [[ ! $webhook =~ ^https://open.feishu.cn/open-apis/bot/v2/hook/ ]]; then
  echo "⚠️  警告: Webhook 地址格式可能不正确"
  echo "正确格式应该以 https://open.feishu.cn/open-apis/bot/v2/hook/ 开头"
  read -p "是否继续？(y/n): " continue
  if [ "$continue" != "y" ]; then
    echo "❌ 取消设置"
    exit 0
  fi
fi

# 创建 .env 文件
cat > .env << EOF
# 飞书 Webhook 配置
# 生成时间: $(date)

FEISHU_WEBHOOK=$webhook
EOF

echo ""
echo "✅ 配置完成！"
echo ""
echo "📝 .env 文件已创建，内容："
echo "FEISHU_WEBHOOK=$webhook"
echo ""
echo "🧪 测试飞书通知："
echo "npm run notify"
echo ""
echo "🚀 运行测试并发送通知："
echo "npm run test:notify"
echo ""
echo "⚠️  安全提示："
echo "- .env 文件已添加到 .gitignore，不会提交到 git"
echo "- 请勿在公开场合分享 Webhook 地址"
echo ""
