#!/bin/sh
set -eu

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname "$0")" && pwd)"
TARGET_ROOT="$HOME/.codex/skills"

mkdir -p "$TARGET_ROOT"

for skill_dir in "$SCRIPT_DIR"/skills-bundle/*; do
  skill_name="$(basename "$skill_dir")"
  target_dir="$TARGET_ROOT/$skill_name"
  rm -rf "$target_dir"
  cp -R "$skill_dir" "$target_dir"
  echo "Installed $skill_name to:"
  echo "$target_dir"
done

echo "All bundled skills installed."
