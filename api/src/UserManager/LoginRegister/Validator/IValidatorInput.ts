import { LoginFormDTO } from '../DTO/LoginFormDTO'
export interface IValidatorInput {
  checkInputFields({ email, password }: LoginFormDTO): boolean | Error
  checkInputEmail(email: LoginFormDTO['email']): boolean
  checkInputPassword(password: LoginFormDTO['password']): boolean
}
