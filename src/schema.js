/**
 * Schema module
 * @module schema
 */

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import Viewer from './types/Viewer';

/**
 * Create `Query` (Root) object type.
 * @function
 * @field {function} viewer - The top-level object type.
 * @returns {function} - A GraphQL schema
 */
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      viewer: {
        type: Viewer,
        resolve() {
            return Object.create(null);
        },
      },
    },
  }),
});
