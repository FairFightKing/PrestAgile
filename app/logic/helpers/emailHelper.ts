export class EmailHelper {
  public static emailValidation = (input = null) => {
    const emailRegex =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    if (emailRegex.test(input)) return true
  }
}
