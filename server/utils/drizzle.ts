import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../database/schema'

import 'dotenv/config'

export { and, eq, or, sql } from 'drizzle-orm'

export const tables = schema

const connectionString = process.env.DATABASE_URL!

const queryClient = postgres(connectionString, { prepare: false })

export function useDrizzle() {
  return drizzle(queryClient, { schema })
}

// optional: keep-alive ping every 4 minutes
setInterval(async () => {
  try {
    await queryClient`SELECT 1`
    console.log("Keep-alive sent", new Date().toISOString())
  } catch (err) {
    console.error("Keep-alive failed", err)
  }
}, 4 * 60 * 1000)