import { NextFunction, Request, Response } from 'express'
import { IAuthService } from '@/auth/domain/user'

export function authMiddleware(authService: IAuthService) {
  function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = (authHeader && authHeader.split(' ')[1]) || 'abc' // for testing
    const user = authService.verifyToken(token)
    res.locals.session = { user }
    next()
  }
  function guard(req: Request, res: Response, next: NextFunction) {
    const session = res.locals.session
    if (!session?.user) {
      return res.sendStatus(401)
    } else {
      next()
    }
  }
  return {
    authenticateToken,
    guard,
  }
}
