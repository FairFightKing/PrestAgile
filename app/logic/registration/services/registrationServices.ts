import axios, { AxiosResponse } from 'axios'
import { EmailHelper } from '../../helpers/emailHelper'

export interface RegistrationInput {
  email: string
  password: string
  userInfo?: userInfo
}

interface userInfo {
  firstName: string
  lastName: string
  phone?: number
}

export class RegistrationServicesImpl {
  public static checkInputForApi = ({
    email,
    password,
  }: RegistrationInput): boolean => {
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      EmailHelper.emailValidation(email)
    ) {
      const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
      return specialCharRegex.test(password)
    }
    return false;
  }

  public static sendDataToApi = (
    data: RegistrationInput,
  ): Promise<AxiosResponse<any>> => {
    let response = axios.post(`${process.env.API_URL}/api/auth/register`, data)
    return response.then(res => res.data)
  }
}
