import { IAuthService, User } from '@/auth/domain/user'

export class AuthService implements IAuthService {
  verifyToken(token: string) {
    // TODO:
    return Promise.resolve({
      id: '1',
      username: 'Alex I.',
    })
  }
}
