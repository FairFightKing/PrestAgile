import { LoginRegisterManagerStates } from '../Types/types'
import { LoginFormDTO } from '../DTO/LoginFormDTO'
import FormInputValidatorImpl from '../Validator/Impl/formInputValidatorImpl'
import PasswordHelper from '../helpers/PasswordHelper'

export class LoginManager {
  private State: LoginRegisterManagerStates =
    LoginRegisterManagerStates.AwaitingHandleLoginRequest

  private input: LoginFormDTO

  constructor(input: LoginFormDTO) {
    this.input = input
  }

  public async HandleLoginRequest(): Promise<any> {
    if (this.State !== LoginRegisterManagerStates.AwaitingHandleLoginRequest)
      throw Error('The process has already started')
    try {
      this.State = LoginRegisterManagerStates.AwaitingInputValidation
      this.MakeInputValidation()
      // TODO : this is in Register to add in DB
      this.State = LoginRegisterManagerStates.AwaitingPasswordHash
      await this.MakePasswordHash()
      this.State = LoginRegisterManagerStates.AwaitingPasswordCompare
      await this.MakePasswordCompare()
      this.State = LoginRegisterManagerStates.Completed
    } catch (e) {
      return {
        status: 500,
        message: e,
      }
    }
    if (this.State !== LoginRegisterManagerStates.Completed)
      throw Error('Login Request ended early')
    return {
      status: 200,
      sessionToken: 'dahbdwk',
    }
  }

  private MakeInputValidation(): boolean | Error {
    if (this.State !== LoginRegisterManagerStates.AwaitingInputValidation)
      throw Error('The Login process is not waiting for Input Validation')
    return FormInputValidatorImpl.checkInputFields(this.input)
  }

  private async MakePasswordHash(): Promise<boolean | Error> {
    if (this.State !== LoginRegisterManagerStates.AwaitingPasswordHash)
      throw Error('The Login process is not waiting for Password Hash')
    this.input.passwordHash = await PasswordHelper.hash(this.input.password)
    return true
  }

  private async MakePasswordCompare(): Promise<boolean | Error> {
    if (this.State !== LoginRegisterManagerStates.AwaitingPasswordCompare)
      throw Error('The Login process is not waiting for Password Compare')
    // TODO : GET PASSWORDHASH FROM DB
    return await PasswordHelper.compare(
      this.input.password,
      this.input.passwordHash,
    )
  }
}
