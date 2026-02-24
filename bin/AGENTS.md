<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# bin

## Purpose
Contains precompiled native binaries for the Hyperion database addon, organized by CPU architecture. The correct subdirectory is selected at runtime based on `os.arch()` in `index.js`.

## Key Files

| File | Description |
|------|-------------|
| (none at this level) | Binaries are in architecture-specific subdirectories |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `ia32/` | 32-bit (x86) native binaries (see `ia32/AGENTS.md`) |
| `x64/` | 64-bit (x86_64) native binaries (see `x64/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- **Do NOT modify or delete binary files** — they are precompiled native addons that cannot be rebuilt from this repo
- Each subdirectory contains the same three files compiled for different architectures
- Binary updates are done by replacing the `.node` and `.dll` files with new precompiled versions
- The `bin/` directory is included in the npm package via `package.json` `"files"` field

### Common Patterns
- `hyperion.node` — the Node.js native addon loaded by `require()`
- `FrmTools-mt.dll` and `gsam-mt.dll` — shared library dependencies required by the addon at runtime

## Dependencies

### Internal
- Referenced by `../index.js` via `require('./bin/${os.arch()}/hyperion')`

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
