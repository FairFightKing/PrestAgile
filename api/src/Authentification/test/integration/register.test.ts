import UserRepository from '../../../User/Repository/UserRepository'
import { AuthManager } from '../../Manager/AuthManager'
import AuthService from '../../Service/AuthService'
import { JwtService } from '@nestjs/jwt'

test('register should work', async () => {
  const manager = new AuthManager(
    new AuthService(new UserRepository(), new JwtService({})),
  )
  expect(
    await manager.register({
      email: 'j.d@gmail.com',
      password: 'KliuJrat@87',
    }),
  ).toBeTruthy()
})
