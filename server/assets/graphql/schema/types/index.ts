import { readFileSync } from 'fs'
import { resolve } from 'path'

const readGraphQLFile = (filename: string): string => {
  if (process.env.NODE_ENV === 'production') {
    // In production, use Nitro's asset system
    const assetPath = resolve(process.cwd(), 'server/graphql/schema/types', filename)
    return readFileSync(assetPath, 'utf8')
  } else {
    // In development, use normal file reading
    return readFileSync(resolve(process.cwd(), 'server/graphql/schema/types', filename), 'utf8')
  }
}

export const typeDefs = [
    readGraphQLFile('test.graphql'),
    // add all your graphql types files here
]