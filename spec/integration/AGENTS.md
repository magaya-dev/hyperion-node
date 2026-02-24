<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# integration

## Purpose
Integration tests that verify end-to-end Hyperion database connectivity, querying, and write operations against a live Magaya server.

## Key Files

| File | Description |
|------|-------------|
| `runSuite.js` | Test aggregator — requires all individual test files to run them as a suite |
| `connectionIntegrationTest.js` | Verifies connection with and without API config; asserts all four handle namespaces (`dbx`, `dbw`, `algorithm`, `connection`) are present |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `writeAccess/` | Tests for database write/save operations (see `writeAccess/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Tests require a live database at `--connection-string=test.magaya.com:6110`
- New test files should follow the pattern `*Test.js` and be added to `runSuite.js`
- Tests use Node.js `assert` module — not Jasmine expect/matchers
- Connection tests validate both no-API and with-API connection modes

### Testing Requirements
- Cannot run without a Magaya server — these are true integration tests
- Connection string format: `host:port` (e.g., `test.magaya.com:6110`)

### Common Patterns
- Each test file creates its own connection via `require('../../index')`
- Assertions check that returned handle has all expected namespaces
- Async operations use Promise chains with `.then()` / `.catch()`

## Dependencies

### Internal
- `../../index.js` — main module under test

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
