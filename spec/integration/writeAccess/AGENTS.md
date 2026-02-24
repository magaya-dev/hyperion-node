<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-24 | Updated: 2026-02-24 -->

# writeAccess

## Purpose
Integration tests for Hyperion database write operations, verifying that objects can be created, populated, and saved through the `dbw` (write access) namespace.

## Key Files

| File | Description |
|------|-------------|
| `saveCustomsMessageTest.js` | Creates a `CustomsMessage` instance, finds a Shipment by GUID, assigns it, and saves — validates the full write pipeline |

## For AI Agents

### Working In This Directory
- Tests exercise the full write path: create object → query related entity → assign → save
- The test uses a hardcoded shipment GUID (`b3d16662-d0f1-4e3e-bdce-4f8dcfe5052c`) — this must exist in the test database
- Async operations use Promise chains; a `setTimeout` of 1 second is used as a crude async completion check
- New write-access tests should follow the same pattern and be added to `../runSuite.js`

### Testing Requirements
- Requires a live Magaya server with the test shipment data present
- Write operations modify the database — run only against test environments

### Common Patterns
- `connection.dbx.DbClass.CustomsMessage()` — instantiate database objects via `DbClass`
- `connection.dbx.using(namespace.ListByX)` — create cursors for querying
- `connection.algorithm.find(cursor).where(predicate)` — query with filtering
- `connection.dbw.save(object)` — persist to database

## Dependencies

### Internal
- `../../../index.js` — main module under test

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
