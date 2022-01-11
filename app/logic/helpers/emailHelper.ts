export class EmailHelper {
    public static emailValidation = (input) => {
        const emailRegex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
        return emailRegex.test(input)
    }
}