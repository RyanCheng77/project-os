#!/usr/bin/env node

/**
 * 测试飞书通知
 * 发送一条测试消息到飞书群
 */

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 加载 .env 文件
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const FEISHU_WEBHOOK = process.env.FEISHU_WEBHOOK;

if (!FEISHU_WEBHOOK) {
  console.error('❌ 错误: 请设置 FEISHU_WEBHOOK 环境变量');
  console.error('');
  console.error('快速设置:');
  console.error('  bash scripts/setup-feishu.sh');
  console.error('');
  console.error('或手动设置:');
  console.error('  export FEISHU_WEBHOOK=你的webhook地址');
  process.exit(1);
}

async function sendTestMessage() {
  try {
    console.log('📤 发送测试消息到飞书...');

    const message = {
      msg_type: 'interactive',
      card: {
        header: {
          title: {
            tag: 'plain_text',
            content: '🧪 飞书通知测试'
          },
          template: 'blue'
        },
        elements: [
          {
            tag: 'div',
            text: {
              tag: 'lark_md',
              content: '✅ 飞书通知配置成功！\n\n这是一条测试消息，说明你的 Webhook 配置正确。'
            }
          },
          {
            tag: 'hr'
          },
          {
            tag: 'div',
            text: {
              tag: 'lark_md',
              content: `**配置信息**:\n- Webhook: ${FEISHU_WEBHOOK.substring(0, 50)}...\n- 时间: ${new Date().toLocaleString('zh-CN')}`
            }
          },
          {
            tag: 'hr'
          },
          {
            tag: 'note',
            elements: [
              {
                tag: 'plain_text',
                content: '下一步: 运行 npm run test:notify 进行完整测试'
              }
            ]
          }
        ]
      }
    };

    const response = await fetch(FEISHU_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    });

    const result = await response.json();

    if (result.code === 0) {
      console.log('✅ 测试消息发送成功！');
      console.log('');
      console.log('请检查你的飞书群，应该能看到测试消息。');
      console.log('');
      console.log('下一步:');
      console.log('  npm run test:notify  # 运行测试并发送通知');
    } else {
      console.error('❌ 发送失败:', result.msg);
      console.error('');
      console.error('可能的原因:');
      console.error('1. Webhook 地址不正确');
      console.error('2. 机器人已被删除');
      console.error('3. 网络连接问题');
    }

  } catch (error) {
    console.error('❌ 发送测试消息时出错:', error.message);
    console.error('');
    console.error('请检查:');
    console.error('1. 网络连接是否正常');
    console.error('2. Webhook 地址是否正确');
  }
}

sendTestMessage();
