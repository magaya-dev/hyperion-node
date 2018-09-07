/**
 * Ensure we can connect with and without an api request.
 */

const assert = require('assert');
const hyperion = require('../../index');

// Ensure we can connection without specifying an API
const connectionWithoutApi = hyperion(["--connection-string=test.magaya.com:6110"]);

assert.ok(connectionWithoutApi, 'no connection');
assert.ok(connectionWithoutApi.dbx, 'no hyperion');
assert.ok(connectionWithoutApi.dbw, 'no write access');
assert.ok(connectionWithoutApi.algorithm, 'no algorithm');

// Ensure we can connect by specifying an API
const connectionWithApi = hyperion(["--connection-string=test.magaya.com:6110"], 'livetrack');

assert.ok(connectionWithApi, 'no connection');
assert.ok(connectionWithApi.dbx, 'no hyperion');
assert.ok(connectionWithApi.dbw, 'no write access');
assert.ok(connectionWithApi.algorithm, 'no algorithm');
