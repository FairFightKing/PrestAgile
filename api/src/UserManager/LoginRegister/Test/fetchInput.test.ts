import {expect} from "@jest/globals";
import * as bcrypt from 'bcrypt';

export interface ILoginForm {
    email: string,
    password?: string,
    passwordHash?: string,
    age?: number,
}

const data: ILoginForm = {
    email: 'sosthene.fruchard78@gmail.com',
    password: 'Password@7889',
}
const falseData: ILoginForm = {
    email: 'soenefm',
    password: 'Password@7889',
}
const falseDataPassword: ILoginForm = {
    email: 'sosthene.fruchard78@gmail.com',
    password: 'prd',
}
// export interface IValidatorInput {
//     checkInputFields({email,password} : ILoginForm) : boolean|Error
//     checkInputEmail(email: ILoginForm["email"]) : boolean
//     checkInputPassword(password:ILoginForm["password"]) : boolean
// }

class InputValidator {
    public static checkInputFields = ({email, password}: ILoginForm): ILoginForm => {
        if (!this.checkInputEmail(email)) throw Error('The User Email is not valid');
        if (!this.checkInputPassword(password)) throw Error('The User Password is not valid');
        return {email: email, password: password};
    }
    private static checkInputEmail = (email: ILoginForm["email"]): boolean => {
        // todo : check length  >= 11
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return email.length >= 11 &&
            regexp.test(email)
            ;
    }
    private static checkInputPassword = (password: ILoginForm["password"]): boolean => {
        // todo : Make regex allow all special characters
        const regexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?&]{8,}$/);
        return regexp.test(password);
    }
}

class PasswordHelper {
    public static hash = (password: ILoginForm["password"]): Promise<ILoginForm["password"]> => {
        return bcrypt.hash(password, 10)
    }
    public static compare = (passwordToCompareTo: ILoginForm["password"], passwordInDb: ILoginForm["password"]): Promise<boolean> => {
        return bcrypt.compare(passwordToCompareTo, passwordInDb)
    }
}

/* ------------------------------------------------------------------------------------------------------------------ */


test('The input fields should be verified', () => expect(InputValidator.checkInputFields(data)).toBeTruthy() )
test('Wrong Email should throw custom error', () => expect(() => InputValidator.checkInputFields(falseData)).toThrow() )
test('Wrong password should throw custom error', () => expect(() => InputValidator.checkInputFields(falseDataPassword)).toThrow() )
test('Password hashed successfully', () => expect(PasswordHelper.hash(InputValidator.checkInputFields(data).password)) )
test('Hash password can be validated', async () => {
    const compare = await PasswordHelper.hash(data.password);
    expect(await PasswordHelper.compare(data.password, compare)).toBeTruthy();
})
test('Hash password will return false when data arent equal', async () => {
    const compare = await PasswordHelper.hash(falseDataPassword.password);
    expect(await PasswordHelper.compare(data.password, compare)).toBeFalsy();
})
