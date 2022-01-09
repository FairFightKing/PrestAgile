import UserDTO from '../DTO/UserDTO'
export interface IValidatorInput {
  validateUserInfos({}: UserDTO): boolean | Error
  checkEmail(email: UserDTO['email']): boolean
  checkName(name: UserDTO['name']): boolean
  checkType(password: UserDTO['type']): boolean
}
