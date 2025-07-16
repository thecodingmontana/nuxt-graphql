import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const loadedFiles = loadFilesSync('server/graphql/schema/types/**/*.graphql')
const typeDefs = mergeTypeDefs(loadedFiles)

export { typeDefs }
