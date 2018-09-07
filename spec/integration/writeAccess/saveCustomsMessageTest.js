/**
 * Tests that we can write a database object by use the CustomsMessage as sample.
 */

const assert = require('assert');
const hyperion = require('../../../index');

const connection = hyperion(["--connection-string=test.magaya.com:6110"]);

let message = new connection.dbx.DbClass.CustomsMessage();

assert.ok(message, 'unable to create message instance');

const shipmengGuid = 'b3d16662-d0f1-4e3e-bdce-4f8dcfe5052c';
let shipmentCursor = connection.dbx.using(connection.dbx.Shipping.Shipment.ListByGuid);
let success = false;

assert.ok(shipmentCursor, 'unable to create cursor');

shipmentCursor = shipmentCursor.from(shipmengGuid);

connection.algorithm.find(shipmentCursor)
    .where(obj => obj.GUID == shipmengGuid)
    .then(sh => {
        message.Shipment = sh;
        assert.ok(message.Shipment, 'unable to assign shipment to message')
    })
    .then(() => connection.dbw.save(message))
    .then(dbMessage => {
        success = true;
        assert.ok(dbMessage, 'we were not able to save message');
    })
    .catch(e => {
        console.log({ exception: e.message})
        assert.fail('we were unable to complete the database op')
    });

// Give ourselves 1 second to do the database operation
setTimeout(() => {
    assert.ok(success, 'we never found the shipment');
}, 1000);    