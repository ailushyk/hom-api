import express from 'express'
import createError from 'http-errors'
import homRouter from '@/hom/api/hom-router'

import { errorHandler } from '@/utils/error-handler'
import { authMiddleware } from '@/auth/application/auth-middleware'
import { authenticatedUserMiddleware } from '@/auth/application/authenticated-user-middleware'

const app = express()

app.use(express.json())
app.use(authMiddleware)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(errorHandler)

export default app
