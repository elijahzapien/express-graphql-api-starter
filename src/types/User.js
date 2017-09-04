/**
 * User module.
 * @module types/user
 */

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} from 'graphql';

/**
 * Create `User` object type.
 * @function
 * @field {id} id - The User's id.
 * @field {string} name - The User's name.
 * @field {string} email - The User's email.
 * @returns {function} - A GraphQL object type for a `User`
 */
export default new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString 
        },
        email: {
            type: GraphQLString
        }
    },
    description: 'A User'
});
