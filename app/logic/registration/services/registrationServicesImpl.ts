import axios, { AxiosResponse } from 'axios'
import { EmailHelper } from '../../helpers/emailHelper'
import { RegistrationServices } from './registrationServices'
import RegistrationInput from '../types/RegistrationInput'
import { HttpRequests } from '../../common/methods/httpRequests/HttpRequests'
import {specialChar} from "../../helpers/specialChar";

export class RegistrationServicesImpl implements RegistrationServices {
  checkInputForApi({ email, password }: RegistrationInput): boolean {
    if (password.length < 8) throw new Error('The password is too short')
    if (!/[A-Z]/.test(password))
      throw new Error('The password should have at least one uppercase')
    if (!specialChar.test(password))
      throw new Error('The password should have at least one special character')
    return EmailHelper.emailValidation(email)
  }

  async sendDataToApi(data: RegistrationInput): Promise<AxiosResponse> {
    return HttpRequests.postHttpRequest('back-end', '/api/auth/register', data)
  }
}
