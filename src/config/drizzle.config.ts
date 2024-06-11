import 'dotenv/config'

import { defineConfig } from 'drizzle-kit'

import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from '@/constans'

export default defineConfig({
  schema: './src/*/infrastructure/schema/*',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
  },
  verbose: true,
  strict: true,
})
