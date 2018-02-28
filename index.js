const debug = require('debug')('hyperion-addon'); debug('Loaded debug...');
const os = require('os'); debug('Loaded os...');
const addon = require(`./bin/${os.arch()}/hyperion`); debug('Loaded hyperion addon...');
const Algorithms = require('@magaya/hyperion-algorithms'); debug('Loaded Algorithms...');

module.exports = function({ name, argv }) {
    debug(`Attempting to connect as ${name} with: ${argv}`);

    const connection = addon.connect(name, argv);

    debug('We connected...');
    debug(`Hyperion status: ${connection.hyperion}`);

    return {
        algorithm: new Algorithms(connection.async),
        connection: connection,
        dbx: connection.hyperion
    };
};