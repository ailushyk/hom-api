import express from 'express'
import createError from 'http-errors'
import homRouter from '@/hom/api/hom-router'

import { errorHandler } from '@/utils/error-handler'

const app = express()

app.use(express.json())
app.use('/api', homRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(errorHandler)

export default app
