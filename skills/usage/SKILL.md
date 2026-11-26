---
name: usage
description: Inspect observed local Claude Code token counters
disable-model-invocation: true
---
# Inspect observed local Claude Code token counters

When explicitly invoked, check Node.js 22+ and normal tool permissions. Use the current project directory. Run the following command with appropriate safe argument quoting:

```bash
node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs" usage
```

Report only observed aggregate counters, including cache categories. Never infer remaining quota.

If the command fails, report the actual error. Do not modify subscriptions, claim savings not measured, or automatically send files to another provider.
