import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env' })

export default defineConfig({
    schema: './server/database/schema.ts',
    out: './server/database/migrations',
    dialect: 'postgresql',
    verbose: true,
    strict: true,
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
        ssl: 'verify-full',
    },
})