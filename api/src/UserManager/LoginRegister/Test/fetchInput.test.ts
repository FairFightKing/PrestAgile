import {expect} from "@jest/globals";
import * as bcrypt from 'bcrypt';

export interface ILoginForm {
    email : string,
    password ?: string,
    passwordHash ?: string,
    age ?: number,
}

const data : ILoginForm = {
    email : 'sosthene.fruchard78@gmail.com',
    password : 'Password@7889',
}
const falseData : ILoginForm = {
    email : 'soenefm',
    password : 'Password@7889',
}
const falseDataPassword : ILoginForm = {
    email : 'sosthene.fruchard78@gmail.com',
    password : 'prd',
}
// export interface IValidatorInput {
//     checkInputFields({email,password} : ILoginForm) : boolean|Error
//     checkInputEmail(email: ILoginForm["email"]) : boolean
//     checkInputPassword(password:ILoginForm["password"]) : boolean
// }

class ValidatorInput {
    public static checkInputFields = ({email,password} : ILoginForm) : ILoginForm => {
        if(!this.checkInputEmail(email)) throw Error('The User Email is not valid');
        if(!this.checkInputPassword(password)) throw Error('The User Password is not valid');
        return {email : email,password: password};
    }
    public static checkInputEmail = (email: ILoginForm["email"]) :boolean => {
        // todo : check length  >= 11
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return email.length >= 11 &&
            regexp.test(email)
            ;
    }
    public static checkInputPassword = (password:ILoginForm["password"]) :boolean => {
        // todo : Make regex allow all special characters
        const regexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?&]{8,}$/);
        return regexp.test(password);
    }
}

class HelperHash {
    public static hashPassword = (password:ILoginForm["password"]) : Promise<ILoginForm["password"]> => {
        return bcrypt.hash(password, 10)
    }
}

/* ------------------------------------------------------------------------------------------------------------------ */


test('The input field should be normalized', () => {
    expect(ValidatorInput.checkInputFields(data)).toBeTruthy();
})
test('False Email should throw custom error', () => {
    expect(() => ValidatorInput.checkInputFields(falseData)).toThrow();
})
test('False password should throw custom error', () => {
    expect(() => ValidatorInput.checkInputFields(falseDataPassword)).toThrow();
})
test('Hash password successfully', () => {
    expect(HelperHash.hashPassword(ValidatorInput.checkInputFields(data).password));
})
test('Hash password is comparable',async() => {
    const compare = await HelperHash.hashPassword(data.password);
    expect(await bcrypt.compare(data.password, compare)).toBeTruthy();
})
test('Hash password is not comparable',async() => {
    const compare = await HelperHash.hashPassword(falseDataPassword.password);
    expect(await bcrypt.compare(data.password, compare)).toBeFalsy();
})
