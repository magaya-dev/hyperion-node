<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# support

## Purpose
Jasmine test framework configuration for the project's test suite.

## Key Files

| File | Description |
|------|-------------|
| `jasmine.json` | Jasmine config — sets `spec_dir` to `spec`, matches `**/*[sS]pec.js` files, enables random order |

## For AI Agents

### Working In This Directory
- The `spec_files` glob `**/*[sS]pec.js` matches files ending in `Spec.js` or `spec.js`
- Current integration test files end in `Test.js` — they are aggregated via `runSuite.js` instead of auto-discovered
- `random: true` randomizes spec execution order
- `helpers` directory glob is configured but no helpers exist currently

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
