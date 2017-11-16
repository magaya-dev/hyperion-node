const os = require('os');
const addon = require(`./bin/${os.arch()}/hyperion`);
const Algorithms = require('./algorithms/algorithm');

module.exports = function({ name, argv }) {
    const connection = addon.connect(name, argv);

    return {
        algorithm: new Algorithms(connection.async),
        connection: connection,
        dbx: connection.hyperion
    };
};