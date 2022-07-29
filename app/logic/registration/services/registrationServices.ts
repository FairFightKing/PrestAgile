import { AxiosResponse } from 'axios'
import RegistrationInput from '../types/RegistrationInput'

export interface RegistrationServices {
  checkInputForApi: ({ email, password }: RegistrationInput) => boolean | undefined
  sendDataToApi: (data: RegistrationInput) => Promise<AxiosResponse>
}
