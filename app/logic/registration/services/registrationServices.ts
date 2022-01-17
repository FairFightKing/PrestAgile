import axios, { AxiosResponse } from 'axios';

export interface RegistrationInput {
  email: string;
  password: string;
  userInfo?: userInfo;
}

interface userInfo {
  firstName: string;
  lastName: string;
  phone?: number;
}

export class RegistrationServicesImpl {
  public static checkInputForApi = ({
    email,
    password,
  }: RegistrationInput): boolean => {
    if (!(password.length >= 8)) return false;
    if (!/[A-Z]/.test(password)) return false;
    const emailRegex =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (!emailRegex.test(email)) return false;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return specialCharRegex.test(password);
  };

  public static sendDataToApi = (
    data: RegistrationInput,
  ): Promise<AxiosResponse<any>> => {
    let response = axios.post('http://localhost:8000/api/auth/register', data);
    return response.then(res => {
      return res.data;
    });
  };
}
