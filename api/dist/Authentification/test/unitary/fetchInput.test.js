"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const formInputValidatorImpl_1 = require("../../Validator/Impl/formInputValidatorImpl");
const PasswordHelper_1 = require("../../helpers/PasswordHelper");
const LoginManager_1 = require("../../Manager/LoginManager");
const data = {
    email: 'sosthene.fruchard78@gmail.com',
    password: 'Password@7889',
};
const falseData = {
    email: 'soenefm',
    password: 'Password@7889',
};
const falseDataPassword = {
    email: 'sosthene.fruchard78@gmail.com',
    password: 'prd',
};
test('The input fields should be verified', () => (0, globals_1.expect)(formInputValidatorImpl_1.default.checkInputFields(data)).toBeTruthy());
test('Wrong Email should throw custom error', () => (0, globals_1.expect)(() => formInputValidatorImpl_1.default.checkInputFields(falseData)).toThrow());
test('Wrong password should throw custom error', () => (0, globals_1.expect)(() => formInputValidatorImpl_1.default.checkInputFields(falseDataPassword)).toThrow());
test('Password hashed successfully', async () => (0, globals_1.expect)(await PasswordHelper_1.default.hash(data.password)));
test('Hash password can be validated', async () => {
    const compare = await PasswordHelper_1.default.hash(data.password);
    (0, globals_1.expect)(await PasswordHelper_1.default.compare(data.password, compare)).toBeTruthy();
});
test('Hash password will return false when data arent equal', async () => {
    const compare = await PasswordHelper_1.default.hash(falseDataPassword.password);
    (0, globals_1.expect)(await PasswordHelper_1.default.compare(data.password, compare)).toBeFalsy();
});
test('The Manager should verify correctly the input data', async () => {
    const loginManager = new LoginManager_1.LoginManager(data);
    (0, globals_1.expect)(await loginManager.HandleLoginRequest()).toBeTruthy();
});
//# sourceMappingURL=fetchInput.test.js.map