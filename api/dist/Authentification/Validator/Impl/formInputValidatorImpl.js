"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRegexp = exports.EmailRegexp = void 0;
exports.EmailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*){1,40}|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,4}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.{1,4})+[a-zA-Z]{1,5}))$/);
// 1 upper, lowe, special, number
exports.PasswordRegexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?_&])[A-Za-z\d#@$!%*?&]{8,30}$/);
class FormInputValidatorImpl {
    static checkInputFields = ({ email, password, }) => {
        if (!this.checkInputEmail(email))
            throw Error('The User Email is not valid');
        if (!this.checkInputPassword(password))
            throw Error('The User Password is not valid');
        return true;
    };
    static checkInputEmail = (email) => {
        return exports.EmailRegexp.test(email);
    };
    static checkInputPassword = (password) => {
        if (password === undefined)
            throw Error;
        return exports.PasswordRegexp.test(password);
    };
}
exports.default = FormInputValidatorImpl;
//# sourceMappingURL=formInputValidatorImpl.js.map