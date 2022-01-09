interface RegistrationInput {
    email: string,
    password: string
}

interface RegistrationOutput {
    email: boolean,
    password: {
        specialChar: boolean,
        length: boolean,
        uppercase: boolean
    }
}

export class RegistrationServicesImpl {
    public static checkInput = ({email, password}: RegistrationInput): RegistrationOutput => {
        const emailRegex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        return {
            email: emailRegex.test(email),
            password: {
                specialChar: specialCharRegex.test(password),
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password)
            }
        }
    }
}