const addon = require('./bin/hyperion');
const Algorithms = require('./algorithms/algorithm');

module.exports = function({ name, argv }) {
    const connection = addon.connect(name, argv);

    return {
        algorithm: new Algorithms(connection.async),
        connection: connection,
        dbx: connection.hyperion
    };
};