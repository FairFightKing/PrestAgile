import {ILoginForm} from "../../../api/src/UserManager/LoginRegister/Test/fetchInput.test";

export default class FormInputValidator {
    public static checkInputFields = ({email, password}: ILoginForm): ILoginForm => {
        if (!this.checkInputEmail(email)) throw Error('The User Email is not valid');
        if (!this.checkInputPassword(password)) throw Error('The User Password is not valid');
        return {email: email, password: password};
    }
    private static checkInputEmail = (email: ILoginForm["email"]): boolean => {
        // todo : check length  >= 11 && comment what does the regex do
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