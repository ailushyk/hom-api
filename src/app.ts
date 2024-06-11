import express from 'express'
import createError from 'http-errors'
import vocabularyRouter from '@/vocabulary/api/vocabulary-router'

import { errorHandler } from '@/utils/error-handler'
import { authMiddleware } from '@/auth/middleware/auth-middleware'
import { AuthService } from '@/auth/application/auth-service'

const app = express()
app.use(express.json())

const auth = authMiddleware(new AuthService())
app.use(auth.authenticateToken)

app.use('/test', (req, res) => {
  res.json({ message: 'HOM' })
})

app.use('/api', auth.guard, vocabularyRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(errorHandler)

export default app
