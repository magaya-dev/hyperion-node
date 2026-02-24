<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# spec

## Purpose
Integration test suite for the Hyperion Node addon using the Jasmine test framework. Tests verify database connectivity, query operations, and write access against a live Magaya/Hyperion server.

## Key Files

| File | Description |
|------|-------------|
| (none at this level) | Test files are in subdirectories |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `integration/` | Integration tests for connection and database operations (see `integration/AGENTS.md`) |
| `support/` | Jasmine configuration (see `support/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- All tests are **integration tests** requiring a live Hyperion database connection
- Tests are run with `npm test` which invokes Jasmine
- Jasmine config is in `support/jasmine.json` — it looks for `**/*[sS]pec.js` files
- There are no unit tests or mocked tests currently — all tests hit a real database

### Testing Requirements
- A running Magaya server accessible via connection string (e.g., `test.magaya.com:6110`)
- Tests use `--connection-string` CLI argument to establish connection
- Tests cannot be run in CI without a database server

### Common Patterns
- Tests use Node.js built-in `assert` module (not Jasmine matchers)
- Test aggregation via `runSuite.js` which requires individual test files

## Dependencies

### Internal
- `../index.js` — the main module under test

### External
- `jasmine` — test runner (configured in `support/jasmine.json`)
- `assert` — Node.js built-in assertion library

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
