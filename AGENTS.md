<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# hyperion-node

## Purpose
A Windows-only Node.js native addon package (`@magaya/hyperion-node`) that provides a JavaScript gateway to the Hyperion database system used by Magaya Corporation. It loads platform-specific native binaries (ia32/x64) and exposes database connection, querying (algorithms), write access, and transaction namespace functionality for building Magaya extensions.

## Key Files

| File | Description |
|------|-------------|
| `index.js` | Main entry point — connects to Hyperion via native addon, returns `algorithm`, `dbx`, `dbw`, and `connection` handles |
| `package.json` | Package manifest — `@magaya/hyperion-node` v11.63.0, Windows-only, Node 20.3.0 |
| `package-lock.json` | Locked dependency tree |
| `.gitignore` | Standard Node.js ignore rules |
| `.whitesource` | WhiteSource/Mend security scanning configuration |
| `LICENSE` | MIT license |
| `README.md` | Usage guide with compatibility matrix (Magaya version ↔ Node.js version) |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `bin/` | Platform-specific native binaries (see `bin/AGENTS.md`) |
| `spec/` | Integration test suites using Jasmine (see `spec/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- This is a **Windows-only** package (`"os": ["win32"]`) — do not add cross-platform assumptions
- The native addon (`hyperion.node`) is a precompiled binary loaded via `require()` — it cannot be rebuilt from this repo
- The entry point `index.js` uses `os.arch()` to select the correct binary from `bin/ia32/` or `bin/x64/`
- Dependencies `@magaya/hyperion-algorithms` and `@magaya/hyperion-write-access` are Magaya internal packages
- Version numbers track Magaya Explorer releases (e.g., 11.63.0 → Magaya v11.6.3)
- The `postversion` script auto-pushes tags and publishes to npm — be cautious with `npm version` commands

### Testing Requirements
- Tests require a live Hyperion database connection (`--connection-string=host:port`)
- Run tests with `npm test` (Jasmine)
- Integration tests are in `spec/integration/` — they are NOT unit tests and need a running Magaya server

### Common Patterns
- Connection is established by passing `process.argv` and an API config (string or `{clientId, apiKey}`)
- The returned handle exposes four namespaces: `algorithm`, `connection`, `dbx`, `dbw`
- `debug` module is used for diagnostic logging (enable with `DEBUG=hyperion-addon`)
- Access token retrieval is promisified from callback style

## Dependencies

### Internal
- `@magaya/hyperion-algorithms` — Query algorithm wrappers (findFirst, find, where)
- `@magaya/hyperion-write-access` — Database write/save operations

### External
- `debug` ^4.4.0 — Debug logging
- `jasmine` ^5.8.0 (dev) — Test framework
- `mock-require` ^3.0.3 (dev) — Module mocking for tests

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
