/**
 * Debug util module.
 * @module utils/debug
 */

import d from 'debug';

const debugServer = d('Server');
const debugDB = d('Server:db');
const debugMiddleware = d('Server:middleware');
const debugController = d('Server:controller');

/**
 * Debug functions for various server aspects
 * @object
 * @returns {object} - The available debug functions.
 */

export {
    debugServer,
    debugDB,
    debugMiddleware,
    debugController
}
