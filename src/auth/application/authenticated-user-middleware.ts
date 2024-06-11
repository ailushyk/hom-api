import { NextFunction, Request, Response } from 'express'

export async function authenticatedUserMiddleware(
  _: Request,
  res: Response,
  next: NextFunction,
) {
  const session = res.locals.session
  if (!session?.user) {
    return res.sendStatus(401)
  } else {
    next()
  }
}
