const debug = require('debug')('hyperion-addon');
const os = require('os'); debug('Loaded os...');
const addon = require(`./bin/${os.arch()}/hyperion`); debug('Loaded hyperion addon...');
const Algorithms = require('@magaya/hyperion-algorithms'); debug('Loaded Algorithms...');
const WriteAccess = require('@magaya/hyperion-write-access'); debug('Loaded WriteAccess...');

/**
 * @typedef HyperionConnectionHandle
 * @type {object}
 * @property {object} algorithm Namespace for algorithm functions.
 * @property {object} connection Whole connection object
 * @property {object} dbx Hyperion handle, contains transaciton namespaces.
 * @property {object} dbw Namespace for databse update and saving functions.
 */

/**
 * Attemps to connect to database. If the connection is successful an object which
 * provides access to the databse is returned. Currently looking for --connection-string
 * in the list of provided arguments.
 * 
 * @param {string[]} argv List of command line arguments for program.
 * @param {string} [api] Optional name for requested api
 * 
 * @returns {HyperionConnectionHandle} Handle for hyperion connection.
 */
module.exports = (argv, api) => {
    debug(`Attempting to connect with: ${argv}`);

    const token_url = "http://localhost:5000/connect/token"; // !TODO(jose): handle this
    const client_id = api && api.clientId ? api.clientId : api;

    if (api) {
        debug(`Connecting with a request for ${client_id} api`)

        if (api.clientId) {
            api.tokenUrl = token_url;
        }
    }

    const connection = addon.connect(argv, api);

    debug('We connected...');
    debug(`Hyperion defined: ${connection.hyperion !== undefined && connection.hyperion !== null}`);

    if (api) {
        // !NOTE(jose): promisify call to get access token
        const api_obj = connection[client_id];
        if (api_obj && api_obj.getAccessToken) {
            const orginal = api_obj.getAccessToken;
            api_obj.getAccessToken = () => new Promise((resolve, reject) => orginal(token_url, client_id, (err, token) => {
                if (err) reject(err);
                else resolve(token);
            }));
        }
    }

    return {
        algorithm: new Algorithms(connection.async),
        dbw: new WriteAccess(connection.async),
        dbx: connection.hyperion,
        connection: connection
    };
};