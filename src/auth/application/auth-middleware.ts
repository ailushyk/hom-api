import { NextFunction, Request, Response } from 'express'
import { AuthService } from '@/auth/application/auth-service'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization']
  const token = (authHeader && authHeader.split(' ')[1]) || 'abc' // for testing
  const user = new AuthService({}).verifyToken(token)
  res.locals.session = { user }
  next()
}
