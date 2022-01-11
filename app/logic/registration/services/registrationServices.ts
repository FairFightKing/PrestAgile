export interface RegistrationInput {
  email: string;
  password: string;
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
}
