<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# x64

## Purpose
64-bit (x86_64) precompiled native binaries for the Hyperion database addon. Used when Node.js runs on a 64-bit architecture (`os.arch() === 'x64'`).

## Key Files

| File | Description |
|------|-------------|
| `hyperion.node` | Native Node.js addon — the core C++ binding to the Hyperion database engine |
| `FrmTools-mt.dll` | Shared library dependency — Magaya framework tools (multithreaded) |
| `gsam-mt.dll` | Shared library dependency — GSAM database engine (multithreaded) |

## For AI Agents

### Working In This Directory
- **Do NOT modify these files** — they are precompiled binaries
- All three files must be present and version-compatible for the addon to load
- Binary updates are performed by replacing all three files together from a Magaya build
- The `.node` file is loaded by Node.js `require()` and the `.dll` files must be in the same directory or on the system PATH

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
