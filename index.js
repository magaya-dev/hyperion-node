const os = require('os');
const addon = require(`./bin/${os.arch()}/hyperion`);
const Algorithms = require('@magaya/hyperion-algorithms');

module.exports = function({ name, argv }) {
    const connection = addon.connect(name, argv);

    return {
        algorithm: new Algorithms(connection.async),
        connection: connection,
        dbx: connection.hyperion
    };
};