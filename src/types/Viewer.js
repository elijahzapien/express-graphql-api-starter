/**
 * Viewer module.
 * @module types/Viewer
 */

import { GraphQLObjectType } from 'graphql';

import User from './User';

/**
 * Create `Viewer` object type.
 * @function
 * @field {object} me - The User's account information
 * @returns {function} - A GraphQL object type for a `User`
 */
export default new GraphQLObjectType({
    name: 'Viewer',
    fields: {
        me: {
            type: User,
            resolve(root, args, { user }) {
                return user;
            }
        },
    },
    description: 'The top-level object type'
});
