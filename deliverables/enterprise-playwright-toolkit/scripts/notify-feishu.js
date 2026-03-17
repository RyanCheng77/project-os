#!/usr/bin/env node

/**
 * 飞书通知脚本
 * 用于发送 Playwright 测试结果到飞书群
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 加载 .env 文件
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// 从环境变量读取飞书 Webhook URL
const FEISHU_WEBHOOK = process.env.FEISHU_WEBHOOK;

if (!FEISHU_WEBHOOK) {
  console.error('错误: 请设置 FEISHU_WEBHOOK 环境变量');
  console.error('使用方法: FEISHU_WEBHOOK=你的webhook地址 node scripts/notify-feishu.js');
  process.exit(1);
}

/**
 * 读取测试结果
 */
function readTestResults() {
  try {
    // 读取 Playwright 测试报告
    const reportPath = path.join(__dirname, '..', 'playwright-report', 'index.html');

    // 检查是否有测试结果
    if (!fs.existsSync(reportPath)) {
      return {
        status: 'no_results',
        message: '未找到测试结果，请先运行测试'
      };
    }

    // 读取测试统计信息（从 test-results 目录）
    const testResultsDir = path.join(__dirname, '..', 'test-results');

    if (!fs.existsSync(testResultsDir)) {
      return {
        status: 'no_results',
        message: '未找到测试结果目录'
      };
    }

    // 统计测试结果
    const results = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      failedTests: []
    };

    // 遍历测试结果目录
    const files = fs.readdirSync(testResultsDir);

    files.forEach(file => {
      const filePath = path.join(testResultsDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        results.total++;

        // 检查是否有失败截图
        const failureFiles = fs.readdirSync(filePath).filter(f =>
          f.includes('failed') || f.includes('diff')
        );

        if (failureFiles.length > 0) {
          results.failed++;
          results.failedTests.push(file);
        } else {
          results.passed++;
        }
      }
    });

    return {
      status: 'success',
      results
    };

  } catch (error) {
    return {
      status: 'error',
      message: error.message
    };
  }
}

/**
 * 发送飞书消息
 */
async function sendFeishuMessage(content) {
  try {
    const response = await fetch(FEISHU_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content)
    });

    const result = await response.json();

    if (result.code === 0) {
      console.log('✅ 飞书通知发送成功');
    } else {
      console.error('❌ 飞书通知发送失败:', result.msg);
    }

    return result;
  } catch (error) {
    console.error('❌ 发送飞书消息时出错:', error.message);
    throw error;
  }
}

/**
 * 构建测试结果消息
 */
function buildMessage(testData) {
  if (testData.status === 'no_results') {
    return {
      msg_type: 'text',
      content: {
        text: `📊 自动化测试结果\n\n⚠️ ${testData.message}`
      }
    };
  }

  if (testData.status === 'error') {
    return {
      msg_type: 'text',
      content: {
        text: `📊 自动化测试结果\n\n❌ 读取测试结果时出错: ${testData.message}`
      }
    };
  }

  const { results } = testData;
  const passRate = ((results.passed / results.total) * 100).toFixed(1);
  const status = results.failed === 0 ? '✅ 全部通过' : '❌ 有失败';

  let message = `📊 自动化测试结果\n\n`;
  message += `状态: ${status}\n`;
  message += `总计: ${results.total} 个测试\n`;
  message += `通过: ${results.passed} ✅\n`;
  message += `失败: ${results.failed} ❌\n`;
  message += `通过率: ${passRate}%\n`;

  if (results.failed > 0) {
    message += `\n失败的测试:\n`;
    results.failedTests.slice(0, 10).forEach((test, index) => {
      message += `${index + 1}. ${test}\n`;
    });

    if (results.failedTests.length > 10) {
      message += `... 还有 ${results.failedTests.length - 10} 个失败测试\n`;
    }
  }

  message += `\n查看详细报告: npm run test:report`;

  return {
    msg_type: 'text',
    content: {
      text: message
    }
  };
}

/**
 * 构建富文本消息（卡片）
 */
function buildCardMessage(testData) {
  if (testData.status !== 'success') {
    return buildMessage(testData);
  }

  const { results } = testData;
  const passRate = ((results.passed / results.total) * 100).toFixed(1);
  const status = results.failed === 0 ? '全部通过' : '有失败';
  const color = results.failed === 0 ? 'green' : 'red';

  const card = {
    msg_type: 'interactive',
    card: {
      header: {
        title: {
          tag: 'plain_text',
          content: '📊 自动化测试结果'
        },
        template: color
      },
      elements: [
        {
          tag: 'div',
          text: {
            tag: 'lark_md',
            content: `**状态**: ${status}\n**总计**: ${results.total} 个测试\n**通过**: ${results.passed} ✅\n**失败**: ${results.failed} ❌\n**通过率**: ${passRate}%`
          }
        }
      ]
    }
  };

  if (results.failed > 0) {
    card.card.elements.push({
      tag: 'hr'
    });

    card.card.elements.push({
      tag: 'div',
      text: {
        tag: 'lark_md',
        content: '**失败的测试**:'
      }
    });

    const failedList = results.failedTests.slice(0, 5).map((test, index) =>
      `${index + 1}. ${test}`
    ).join('\n');

    card.card.elements.push({
      tag: 'div',
      text: {
        tag: 'plain_text',
        content: failedList
      }
    });

    if (results.failedTests.length > 5) {
      card.card.elements.push({
        tag: 'div',
        text: {
          tag: 'plain_text',
          content: `... 还有 ${results.failedTests.length - 5} 个失败测试`
        }
      });
    }
  }

  card.card.elements.push({
    tag: 'hr'
  });

  card.card.elements.push({
    tag: 'note',
    elements: [
      {
        tag: 'plain_text',
        content: '运行 npm run test:report 查看详细报告'
      }
    ]
  });

  return card;
}

/**
 * 主函数
 */
async function main() {
  console.log('📊 读取测试结果...');
  const testData = readTestResults();

  console.log('📤 发送飞书通知...');

  // 使用卡片消息（更美观）
  const message = buildCardMessage(testData);

  await sendFeishuMessage(message);
}

main().catch(error => {
  console.error('执行失败:', error);
  process.exit(1);
});
