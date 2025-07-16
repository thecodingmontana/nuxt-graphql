import { type InferSelectModel } from 'drizzle-orm'
import {
    pgTable,
    text,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core'

import { customAlphabet } from 'nanoid';

export const generateNanoId = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-', 12);


export const quote = pgTable(
    'quotes',
    {
        id: varchar('id', { length: 12 }).primaryKey().$defaultFn(() => generateNanoId()),
        quote: text('quote').notNull(),
        author: text('quote').notNull(),
        created_at: timestamp('created_at', { mode: 'date', precision: 3 })
            .notNull()
            .defaultNow(),
        updated_at: timestamp('updated_at', {
            mode: 'date',
            precision: 3,
        }).$onUpdate(() => new Date()),
    },
)

export type Quote = InferSelectModel<typeof quote>