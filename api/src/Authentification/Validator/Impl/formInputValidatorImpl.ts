import { LoginFormDTO } from '../../DTO/LoginDTO'

export const EmailRegexp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*){1,40}|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,4}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.{1,4})+[a-zA-Z]{1,5}))$/,
)

// 1 upper, lowe, special, number
export const PasswordRegexp = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?_&])[A-Za-z\d#@$!%*?&]{8,30}$/,
)

export default class FormInputValidatorImpl {
  public static checkInputFields = ({
    email,
    password,
  }: LoginFormDTO): boolean | Error => {
    if (!this.checkInputEmail(email)) throw Error('The User Email is not valid')
    if (!this.checkInputPassword(password))
      throw Error('The User Password is not valid')
    return true
  }
  private static checkInputEmail = (email: LoginFormDTO['email']): boolean => {
    return EmailRegexp.test(email)
  }
  private static checkInputPassword = (
    password: LoginFormDTO['password'],
  ): boolean => {
    if (password === undefined) throw Error
    return PasswordRegexp.test(password)
  }
}
