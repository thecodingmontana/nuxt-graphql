// Move files to: server/assets/graphql/schema/types/test.graphql

import { readFileSync } from 'fs'
import { resolve } from 'path'

const readGraphQLFile = (filename: string): string => {
    // In production, files are in the server assets
    const filePath = resolve(process.cwd(), 'server/assets/graphql/schema/types', filename)
    return readFileSync(filePath, 'utf8')
}

export const typeDefs = [
    readGraphQLFile('test.graphql'),
    // add all your graphql types files here
]