---
name: checkpoint
description: Save a manual project progress note and Git state
disable-model-invocation: true
---
# Save a manual project progress note and Git state

When explicitly invoked, check Node.js 22+ and normal tool permissions. Use the current project directory. Run the following command with appropriate safe argument quoting:

```bash
node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs" checkpoint . 'NOTE'
```

Replace NOTE with a concise user-approved summary using safe shell quoting. Do not include credentials. Confirm that the user wants to write the checkpoint and that the local Git excludes cover .claude-extender/.

If the command fails, report the actual error. Do not modify subscriptions, claim savings not measured, or automatically send files to another provider.
