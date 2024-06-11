import { User } from '@/user/domain/user'

interface AuthServiceDependencies {}

export class AuthService {
  constructor(private dependencies: AuthServiceDependencies) {}

  verifyToken(token: string): User | undefined {
    // TODO: verify token
    return {
      id: '1',
      username: 'Alex I.',
    }
  }
}
