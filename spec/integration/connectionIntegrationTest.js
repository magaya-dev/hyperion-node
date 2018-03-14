const assert = require('assert');
const hyperion = require('../../index');

// Ensure we can connection without specifying an API
const connectionWithoutApi = hyperion(["--connection-string=test.magaya.com:6110"]);

assert.ok(connectionWithoutApi, 'no connection');
assert.ok(connectionWithoutApi.dbx, 'no hyperion');

// Ensure we can connect by specifying an API
const connectionWithApi = hyperion(["--connection-string=test.magaya.com:6110"], 'livetrack');

assert.ok(connectionWithApi, 'no connection');
assert.ok(connectionWithApi.dbx, 'no hyperion');