# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

For detailed per-directory documentation (file descriptions, AI agent instructions, testing notes, dependencies), see the hierarchical `AGENTS.md` files throughout the repo starting at the root `AGENTS.md`.

## Project Overview

`@magaya/hyperion-node` is a **Windows-only** Node.js native addon that provides a JavaScript gateway to the Hyperion database system (Magaya Corporation). It loads precompiled C++ binaries per CPU architecture and exposes database connection, querying, write access, and transaction namespaces for building Magaya extensions.

## Commands

- **Run tests:** `npm test` (Jasmine — requires a live Hyperion database server)
- **Version bump + publish:** `npm version <patch|minor|major>` (auto-pushes tags and publishes via `postversion` script)

There is no build step, linter, or formatter configured. The native `.node` and `.dll` binaries are precompiled externally.

## Architecture

The entire public API is in `index.js` — a single factory function:

```
require('@magaya/hyperion-node')(argv, apiConfig) → { algorithm, dbx, dbw, connection }
```

1. **Binary loading:** `os.arch()` selects `bin/ia32/` or `bin/x64/`, then `require()` loads `hyperion.node` (native addon) along with its DLL dependencies.
2. **Connection:** `addon.connect(argv, api)` parses `--connection-string` from argv and establishes a database connection.
3. **API handle:** If an API config is provided (`string` or `{clientId, apiKey}`), the factory promisifies `getAccessToken` from callback to Promise style.
4. **Return value:** Four namespaces — `algorithm` (query wrappers), `dbw` (write ops), `dbx` (transaction namespaces), `connection` (raw connection object).

## Key Constraints

- **Windows-only** (`"os": ["win32"]`) — no cross-platform support
- **Node.js 20.3.0** — pinned engine version; must match the Magaya Explorer release
- **Precompiled binaries** — `bin/` contents cannot be rebuilt from this repo; do not modify them
- **Version scheme** tracks Magaya Explorer (e.g., package 11.63.0 → Magaya v11.6.3)
- **Integration tests only** — all tests require `--connection-string` to a live Magaya server; no unit tests or mocks exist
