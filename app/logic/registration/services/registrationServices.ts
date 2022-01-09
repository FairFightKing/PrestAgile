interface RegistrationInput {
    email: string,
    password: string
}

export class RegistrationServicesImpl {
    public static checkInputForApi = ({email, password}: RegistrationInput): boolean => {
        const emailRegex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        if (!(password.length >= 8)) return false
        if (!(/[A-Z]/.test(password))) return false
        if (!(emailRegex.test(email))) return false
        return specialCharRegex.test(password);
    }
}