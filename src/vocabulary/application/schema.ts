import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { words } from '@/vocabulary/infrastructure/schema/words-schema'
import { z } from 'zod'

const insertWordSchema = createInsertSchema(words)
const selectWordSchema = createSelectSchema(words)
type InsertWordType = z.infer<typeof insertWordSchema>
type SelectWordType = z.infer<typeof selectWordSchema>

export { insertWordSchema, selectWordSchema }
export type { InsertWordType, SelectWordType }
