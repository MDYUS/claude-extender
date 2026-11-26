# Claude Extender

Local-first developer toolkit for reducing unnecessary context and preserving coding continuity. Independent of Anthropic. Does not extend, reset or bypass subscription quotas.

## Run

Node.js 22+ and Git required. No dependencies or API key.

```sh
git clone https://github.com/MDYUS/claude-extender.git
cd claude-extender
node src/cli.mjs help
node src/cli.mjs usage
node src/cli.mjs context /path/to/project 'login authorization' 16000
node src/cli.mjs checkpoint /path/to/project 'Login regression pending; run tests next'
node src/cli.mjs resume /path/to/project
```

Usage reads local Claude JSONL assistant-message counters, deduplicating by message ID and retaining maximum observed counters per field. Log format compatibility is not guaranteed; this is not authoritative billing or quota information. Context extracts lexical matches and surrounding lines within a byte budget; it does not automatically alter Claude requests. Review output before sharing: filename filtering is not comprehensive secret detection, and this version does not honor gitignore. Checkpoints store a manual note, Git HEAD and status, not full conversation or file contents. Add .claude-extender/ to your project's local Git excludes before use. Do not store secrets in notes. Resume prints a checkpoint without restoring files or changing Git state.

## Verify

```sh
npm test
npm run benchmark
```

Five tests passed on the local prototype. The synthetic benchmark compares eligible source bytes with selected snippets, NOT token savings or coding accuracy. Real Claude integration, token-count comparisons and realistic quality evaluation remain pending.

## Roadmap

Official hooks, robust ignore handling, dependency-aware selection, real token-count benchmarking, authorized model adapters and a local dashboard. No automatic provider switching or subscription bypass in this release.

MIT license.
