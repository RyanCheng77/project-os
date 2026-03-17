#!/bin/sh
set -eu

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname "$0")" && pwd)"
TARGET_DIR="${1:-.}"

mkdir -p "$TARGET_DIR/docs"
cp -R "$SCRIPT_DIR/templates/docs/." "$TARGET_DIR/docs/"

echo "Project doc templates copied to:"
echo "$TARGET_DIR/docs"
