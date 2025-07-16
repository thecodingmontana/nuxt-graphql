import { readFileSync } from 'fs'
import { join } from 'path'

const readGraphQLFile = (filename: string): string => {
    return readFileSync(join(process.cwd(), 'server', 'graphql', 'schema', 'types', filename), 'utf8')
}

export const typeDefs = [
    readGraphQLFile('test.graphql'),
    // add all your graphql types files here
]
