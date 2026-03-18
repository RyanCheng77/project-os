#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environment
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"

# Install dependencies for enterprise-playwright-toolkit
if [ -f "$PROJECT_DIR/deliverables/enterprise-playwright-toolkit/package.json" ]; then
  echo "Installing dependencies for enterprise-playwright-toolkit..."
  cd "$PROJECT_DIR/deliverables/enterprise-playwright-toolkit"
  npm install
fi

# Install dependencies for playwright-responsive-toolkit
if [ -f "$PROJECT_DIR/deliverables/playwright-responsive-toolkit/package.json" ]; then
  echo "Installing dependencies for playwright-responsive-toolkit..."
  cd "$PROJECT_DIR/deliverables/playwright-responsive-toolkit"
  npm install
fi

# Install Playwright browsers (chromium only for speed)
echo "Installing Playwright browsers..."
cd "$PROJECT_DIR/deliverables/playwright-responsive-toolkit"
npx playwright install chromium --with-deps || echo "Warning: Playwright browser install failed (may already be installed or network restricted)"

echo "Session start setup complete."
