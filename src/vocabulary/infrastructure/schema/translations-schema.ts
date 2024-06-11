import { homPgTable } from '@/vocabulary/infrastructure/pg-table'
import { languages } from '@/vocabulary/infrastructure/schema/languages-schema'
import { sql } from 'drizzle-orm'
import { words } from '@/vocabulary/infrastructure/schema/words-schema'
import { text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const translations = homPgTable('translations', {
  id: uuid('id').primaryKey().defaultRandom(),
  wordId: uuid('wordId')
    .notNull()
    .references(() => words.id),
  language: text('lang')
    .notNull()
    .references(() => languages.code),
  translation: text('translation').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
})
