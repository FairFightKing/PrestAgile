import axios, {AxiosResponse} from 'axios'
import {EmailHelper} from '../../helpers/emailHelper'
import {RegistrationServices} from "./registrationServices";
import RegistrationInput from "../types/RegistrationInput";

export class RegistrationServicesImpl implements RegistrationServices {

    checkInputForApi({email, password}: RegistrationInput): boolean {
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        return (
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            EmailHelper.emailValidation(email) &&
            specialCharRegex.test(password)
        )
    }

    sendDataToApi(data: RegistrationInput): Promise<AxiosResponse> {
        let response = axios.post(`${process.env.API_URL}/api/auth/register`, data)
        return response.then(res => res.data)
    }
}
