export interface User {
  id: string
  username: string
}

export interface IAuthService {
  verifyToken(token: string): Promise<User | undefined>
}
