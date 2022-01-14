import * as bcrypt from 'bcrypt'
import LoginDTO from '../DTO/LoginDTO'

export default class PasswordHelper {
  public static hash = (
    password: LoginDTO['password'],
    salt: string | number = 10,
  ): Promise<LoginDTO['password']> => {
    if (password === undefined) throw Error
    return bcrypt.hash(password, salt)
  }
  public static compare = (
    passwordToCompareTo: LoginDTO['password'] | Buffer,
    passwordInDb: LoginDTO['password'],
  ): Promise<boolean> => {
    if (passwordToCompareTo === undefined || passwordInDb === undefined)
      throw Error
    return bcrypt.compare(passwordToCompareTo, passwordInDb)
  }
}
