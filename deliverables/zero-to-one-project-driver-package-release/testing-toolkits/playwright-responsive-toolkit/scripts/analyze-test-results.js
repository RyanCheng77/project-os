#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readTestResults() {
  const testResultsDir = path.join(__dirname, '..', 'test-results');
  if (!fs.existsSync(testResultsDir)) {
    return { status: 'no_results', message: '未找到测试结果，请先运行测试' };
  }

  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    failedTests: []
  };

  const files = fs.readdirSync(testResultsDir);
  files.forEach((file) => {
    const filePath = path.join(testResultsDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isDirectory()) return;

    results.total++;
    const dirFiles = fs.readdirSync(filePath);
    const hasFailure = dirFiles.some((name) => name.includes('failed') || name.includes('diff') || name.includes('actual'));

    if (hasFailure) {
      results.failed++;
      results.failedTests.push(file);
    } else {
      results.passed++;
    }
  });

  return { status: 'success', results };
}

function main() {
  const data = readTestResults();
  if (data.status !== 'success') {
    console.log(data.message);
    return;
  }

  const { results } = data;
  const passRate = results.total ? ((results.passed / results.total) * 100).toFixed(1) : '0.0';
  let report = '# Playwright Responsive Toolkit 测试报告\n\n';
  report += `- 总测试数: ${results.total}\n`;
  report += `- 通过: ${results.passed}\n`;
  report += `- 失败: ${results.failed}\n`;
  report += `- 通过率: ${passRate}%\n\n`;

  if (results.failedTests.length) {
    report += '## 失败测试\n\n';
    results.failedTests.forEach((name) => {
      report += `- ${name}\n`;
    });
  } else {
    report += '## 结果\n\n全部测试通过。\n';
  }

  const reportPath = path.join(__dirname, '..', 'TEST-REPORT.md');
  fs.writeFileSync(reportPath, report, 'utf8');
  console.log(report);
  console.log(`\n报告已保存到: ${reportPath}`);
}

main();
