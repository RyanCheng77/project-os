#!/usr/bin/env node

/**
 * 测试结果分析脚本
 * 读取 Playwright 测试结果并生成详细的问题报告
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 读取测试结果
 */
function readTestResults() {
  const testResultsDir = path.join(__dirname, '..', 'test-results');
  const reportFile = path.join(__dirname, '..', 'test-results', '.last-run.json');

  if (!fs.existsSync(testResultsDir)) {
    return {
      status: 'no_results',
      message: '未找到测试结果，请先运行测试'
    };
  }

  // 读取最后一次运行的结果
  let lastRun = null;
  if (fs.existsSync(reportFile)) {
    try {
      const content = fs.readFileSync(reportFile, 'utf-8');
      lastRun = JSON.parse(content);
    } catch (error) {
      console.error('读取测试报告失败:', error.message);
    }
  }

  // 统计测试结果
  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    failedTests: [],
    failedByCategory: {
      layout: [],
      overflow: [],
      alignment: [],
      spacing: [],
      screenshot: [],
      other: []
    }
  };

  // 遍历测试结果目录
  const files = fs.readdirSync(testResultsDir);

  files.forEach(file => {
    const filePath = path.join(testResultsDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.total++;

      // 检查是否有失败截图或差异图
      const dirFiles = fs.readdirSync(filePath);
      const hasFailure = dirFiles.some(f =>
        f.includes('failed') || f.includes('diff') || f.includes('actual')
      );

      if (hasFailure) {
        results.failed++;

        // 分析失败原因
        const testName = file;
        const category = categorizeFailure(testName, dirFiles);

        results.failedTests.push({
          name: testName,
          category: category,
          files: dirFiles.filter(f => f.endsWith('.png'))
        });

        results.failedByCategory[category].push(testName);
      } else {
        results.passed++;
      }
    }
  });

  return {
    status: 'success',
    results,
    lastRun
  };
}

/**
 * 分类失败原因
 */
function categorizeFailure(testName, files) {
  const name = testName.toLowerCase();

  if (name.includes('screenshot') || name.includes('截图')) {
    return 'screenshot';
  }
  if (name.includes('overflow') || name.includes('溢出')) {
    return 'overflow';
  }
  if (name.includes('alignment') || name.includes('对齐')) {
    return 'alignment';
  }
  if (name.includes('spacing') || name.includes('间距')) {
    return 'spacing';
  }
  if (name.includes('layout') || name.includes('布局')) {
    return 'layout';
  }

  return 'other';
}

/**
 * 生成问题报告
 */
function generateReport(testData) {
  if (testData.status !== 'success') {
    return testData.message;
  }

  const { results } = testData;
  const passRate = ((results.passed / results.total) * 100).toFixed(1);

  let report = '# 📊 自动化测试结果分析报告\n\n';
  report += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;

  report += '## 测试统计\n\n';
  report += `- 总测试数: ${results.total}\n`;
  report += `- 通过: ${results.passed} ✅\n`;
  report += `- 失败: ${results.failed} ❌\n`;
  report += `- 通过率: ${passRate}%\n\n`;

  if (results.failed === 0) {
    report += '## ✅ 所有测试通过！\n\n';
    report += '恭喜！所有测试都通过了，没有发现布局问题。\n';
    return report;
  }

  report += '## ❌ 失败测试分类\n\n';

  // 按类别统计
  const categories = {
    layout: '布局问题',
    overflow: '元素溢出',
    alignment: '对齐问题',
    spacing: '间距问题',
    screenshot: '视觉差异',
    other: '其他问题'
  };

  Object.entries(categories).forEach(([key, label]) => {
    const count = results.failedByCategory[key].length;
    if (count > 0) {
      report += `### ${label} (${count} 个)\n\n`;
      results.failedByCategory[key].forEach(test => {
        report += `- ${test}\n`;
      });
      report += '\n';
    }
  });

  report += '## 🔧 建议修复步骤\n\n';

  if (results.failedByCategory.layout.length > 0) {
    report += '### 1. 修复布局问题\n\n';
    report += '布局问题通常是由于元素定位、尺寸或容器设置不当导致的。\n\n';
    report += '**检查项：**\n';
    report += '- 检查 CSS 布局属性（display, position, flex, grid）\n';
    report += '- 确认容器宽度和高度设置正确\n';
    report += '- 检查响应式断点是否合理\n\n';
  }

  if (results.failedByCategory.overflow.length > 0) {
    report += '### 2. 修复溢出问题\n\n';
    report += '元素溢出通常是由于内容超出容器边界。\n\n';
    report += '**检查项：**\n';
    report += '- 添加 `overflow: hidden` 或 `overflow: auto`\n';
    report += '- 检查元素的 `max-width` 和 `max-height`\n';
    report += '- 确认文本是否需要截断（text-overflow: ellipsis）\n\n';
  }

  if (results.failedByCategory.alignment.length > 0) {
    report += '### 3. 修复对齐问题\n\n';
    report += '对齐问题通常是由于 flexbox 或 grid 设置不当。\n\n';
    report += '**检查项：**\n';
    report += '- 检查 `align-items`, `justify-content` 属性\n';
    report += '- 确认元素的 `margin` 和 `padding` 是否一致\n';
    report += '- 检查是否需要使用 `align-self`\n\n';
  }

  if (results.failedByCategory.spacing.length > 0) {
    report += '### 4. 修复间距问题\n\n';
    report += '间距问题通常是由于 margin 或 padding 不一致。\n\n';
    report += '**检查项：**\n';
    report += '- 统一使用设计系统的间距变量\n';
    report += '- 检查 `gap` 属性（flex/grid）\n';
    report += '- 确认 margin collapse 是否影响布局\n\n';
  }

  if (results.failedByCategory.screenshot.length > 0) {
    report += '### 5. 检查视觉差异\n\n';
    report += '视觉差异可能是由于样式变化或动画状态不同。\n\n';
    report += '**检查项：**\n';
    report += '- 查看失败截图的差异图（diff.png）\n';
    report += '- 确认是否是预期的设计变更\n';
    report += '- 如果是预期变更，运行 `npm run test:update` 更新基准截图\n\n';
  }

  report += '## 📁 失败测试详情\n\n';

  results.failedTests.slice(0, 10).forEach((test, index) => {
    report += `### ${index + 1}. ${test.name}\n\n`;
    report += `**类别**: ${categories[test.category]}\n\n`;
    if (test.files.length > 0) {
      report += '**相关文件**:\n';
      test.files.forEach(file => {
        report += `- \`test-results/${test.name}/${file}\`\n`;
      });
    }
    report += '\n';
  });

  if (results.failedTests.length > 10) {
    report += `\n... 还有 ${results.failedTests.length - 10} 个失败测试\n\n`;
  }

  report += '## 🚀 下一步操作\n\n';
  report += '1. 查看详细测试报告: `npm run test:report`\n';
  report += '2. 查看失败截图目录: `ls test-results/`\n';
  report += '3. 修复问题后重新运行测试: `npm test`\n';
  report += '4. 如果是预期变更，更新基准截图: `npm run test:update`\n';

  return report;
}

/**
 * 主函数
 */
function main() {
  console.log('📊 分析测试结果...\n');

  const testData = readTestResults();
  const report = generateReport(testData);

  // 输出到控制台
  console.log(report);

  // 保存到文件
  const reportPath = path.join(__dirname, '..', 'TEST-REPORT.md');
  fs.writeFileSync(reportPath, report, 'utf-8');

  console.log(`\n✅ 报告已保存到: ${reportPath}`);
  console.log('\n💡 提示: 你可以将这个报告发送给 Claude，让它帮你修复问题。');
}

main();
