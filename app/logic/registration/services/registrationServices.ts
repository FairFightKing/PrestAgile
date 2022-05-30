import  {AxiosResponse} from 'axios'
import RegistrationInput from "../types/RegistrationInput";


export interface RegistrationServices {
    checkInputForApi : ({email, password}: RegistrationInput) => boolean
    sendDataToApi : (data: RegistrationInput,) => Promise<AxiosResponse>
}
