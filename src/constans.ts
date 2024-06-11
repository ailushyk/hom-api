export const DATABASE_URL = process.env.DATABASE_URL || ':memory:'
export const DATABASE_HOST = process.env.DATABASE_HOST || ''
export const DATABASE_PORT = Number(process.env.DATABASE_PORT || '')
export const DATABASE_USER = process.env.DATABASE_USER || ''
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''
export const DATABASE_NAME = process.env.DATABASE_NAME || ''

export const AUTH_SECRET = process.env.AUTH_SECRET || 'access-token'
export const AUTH_EXPIRES_IN = process.env.AUTH_EXPIRES_IN || '30m'
