/**
 * Express GraphQL API Starter
 */

// Load environment variables.
// check out: /.env.starter
import 'dotenv/config';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';

import { debugServer } from './utils/debug';
import authentication from './middleware/authentication';

import schema from './schema';

const server = express();

/**
 * Add body parser middleware
 *
 * For API information checkout out:
 * https://www.npmjs.com/package/body-parser#api
 */
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

/**
 * Add authentication middleware
 */
server.use(authentication);

/**
 * Add GraphQL middleware
 *
 * For more options check out:
 * https://github.com/graphql/express-graphql#options
 */
server.use(
    '/graphql',
    graphqlHTTP(req => ({
        schema,
        context: {
            user: req.user,
        },
        graphiql: process.env.NODE_ENV !== 'production',
        pretty: process.env.NODE_ENV !== 'production',
    })
));

/**
 * Listen for connections on specified host and port
 */
const port = process.env.PORT || 8080;
const instance = server.listen(port, () => {
    debugServer(`GraphQL API listening on port ${port}`);
});

export default instance;
