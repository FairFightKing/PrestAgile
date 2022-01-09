import * as bcrypt from 'bcrypt'
import { LoginFormDTO } from '../LoginRegister/DTO/LoginFormDTO'

export default class PasswordHelper {
  public static hash = (
    password: LoginFormDTO['password'],
  ): Promise<LoginFormDTO['password']> => {
    if (password === undefined) throw Error
    return bcrypt.hash(password, 10)
  }
  public static compare = (
    passwordToCompareTo: LoginFormDTO['password'] | Buffer,
    passwordInDb: LoginFormDTO['password'],
  ): Promise<boolean> => {
    if (passwordToCompareTo === undefined || passwordInDb === undefined)
      throw Error
    return bcrypt.compare(passwordToCompareTo, passwordInDb)
  }
}
