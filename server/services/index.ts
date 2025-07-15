/**
 * GraphQL Schema Configuration
 *
 * This file defines the GraphQL schema and resolvers for the application.
 * It uses GraphQL Yoga's createSchema function to establish the GraphQL API.
 */
import { createSchema } from 'graphql-yoga'
import { typeDefs } from '../graphql/schema/types'

/**
 * Main GraphQL schema definition
 *
 * - typeDefs: Defines the GraphQL schema types and operations
 * - resolvers: Implements the logic for each field in the schema
 */
export const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      /**
       * Hello world resolver
       * @returns {string} A greeting message
       */
      hello: (): string => 'world',

      /**
       * Ping resolver for health checks
       * @returns {string} "pong" confirmation response
       */
      ping: (): string => 'pong',
      love: (): string => 'i love you'
    },
  },
})