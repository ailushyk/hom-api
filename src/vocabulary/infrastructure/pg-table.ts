import { pgTableCreator } from 'drizzle-orm/pg-core'

export const homPgTable = pgTableCreator((name) => `vcb_${name}`)
