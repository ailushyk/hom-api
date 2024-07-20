import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from '@/constans'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

const client = new Pool({
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
})

export const db = drizzle(client)
