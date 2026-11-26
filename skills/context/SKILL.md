---
name: context
description: Select relevant project source snippets within a byte budget
disable-model-invocation: true
---
# Select relevant project source snippets within a byte budget

When explicitly invoked, check Node.js 22+ and normal tool permissions. Use the current project directory. Run the following command with appropriate safe argument quoting:

```bash
node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs" context . 'QUERY' 16000
```

Replace QUERY with the user's search terms using safe shell quoting. Explain lexical matching limitations and inspect snippets for secrets; do not send them elsewhere.

If the command fails, report the actual error. Do not modify subscriptions, claim savings not measured, or automatically send files to another provider.
