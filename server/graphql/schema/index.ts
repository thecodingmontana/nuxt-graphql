import { buildSchema } from 'drizzle-graphql'
import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { createSchema } from 'graphql-yoga'
import { typeDefs } from './types'
import { stitchSchemas } from '@graphql-tools/stitch'
import { resolvers } from '../resolvers'

// Drizzle-generated entities
const db = useDrizzle()
const { entities } = buildSchema(db)

const drizzleGraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // drizzle generates queries
      ...entities.queries
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: entities.mutations,
  }),
  // In case you need types inside your schema
  types: [...Object.values(entities.types), ...Object.values(entities.inputs)],
})

const userCustomGraphQLSchema = createSchema({
  typeDefs,
  resolvers,
})


export const schema = stitchSchemas({
  subschemas: [
    drizzleGraphQLSchema,
    userCustomGraphQLSchema
  ]
})