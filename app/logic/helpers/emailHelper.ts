export class EmailHelper {
    public static emailValidation = input => {
        const emailRegex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
        if (emailRegex.test(input)) return true
        throw new Error('The email format is not valid')
    }
}
