import {expect} from "@jest/globals";
import FormInputValidator from "../../../../../logic/validators/registration/formInputValidator";
import PasswordHelper from "../../helpers/PasswordHelper";
import {LoginFormDTO} from "../DTO/LoginFormDTO";

const data: LoginFormDTO = {
    email: 'sosthene.fruchard78@gmail.com',
    password: 'Password@7889',
}
const falseData: LoginFormDTO = {
    email: 'soenefm',
    password: 'Password@7889',
}
const falseDataPassword: LoginFormDTO = {
    email: 'sosthene.fruchard78@gmail.com',
    password: 'prd',
}

test('The input fields should be verified', () => expect(FormInputValidator.checkInputFields(data)).toBeTruthy() )
test('Wrong Email should throw custom error', () => expect(() => FormInputValidator.checkInputFields(falseData)).toThrow() )
test('Wrong password should throw custom error', () => expect(() => FormInputValidator.checkInputFields(falseDataPassword)).toThrow() )
test('Password hashed successfully', async () => expect(await PasswordHelper.hash(FormInputValidator.checkInputFields(data).password)) )
test('Hash password can be validated', async () => {
    const compare = await PasswordHelper.hash(data.password);
    expect(await PasswordHelper.compare(data.password, compare)).toBeTruthy();
})
test('Hash password will return false when data arent equal', async () => {
    const compare = await PasswordHelper.hash(falseDataPassword.password);
    expect(await PasswordHelper.compare(data.password, compare)).toBeFalsy();
})
