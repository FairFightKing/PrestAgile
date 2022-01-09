import UserDTO from '../../DTO/UserDTO'

export class ValidatorInputImpl {
  validateUserInfos(userDTO: UserDTO): boolean | Error {
    return true
  }
  private checkEmail(email: UserDTO['email']): boolean {
    return true
  }
  private checkName(name: UserDTO['name']): boolean {
    return true
  }
  private checkType(password: UserDTO['type']): boolean {
    return true
  }
}
