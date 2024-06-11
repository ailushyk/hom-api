import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from '@/constans'
import { Client } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

const client = new Client({
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
})

client.connect().then()

export const db = drizzle(client)
