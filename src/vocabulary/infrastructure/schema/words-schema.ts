import { homPgTable } from '@/vocabulary/infrastructure/pg-table'
import { text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { languages } from '@/vocabulary/infrastructure/schema/languages-schema'
import { sql } from 'drizzle-orm'

export const words = homPgTable('words', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: text('userId').notNull(),
  text: text('word').notNull(),
  language: text('language')
    .notNull()
    .references(() => languages.code),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
})
