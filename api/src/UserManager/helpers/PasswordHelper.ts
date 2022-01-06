import * as bcrypt from "bcrypt";
import {ILoginForm} from "../LoginRegister/Test/fetchInput.test";

export default class PasswordHelper {
    public static hash = (password: ILoginForm["password"]): Promise<ILoginForm["password"]> => {
        return bcrypt.hash(password, 10)
    }
    public static compare = (passwordToCompareTo: ILoginForm["password"], passwordInDb: ILoginForm["password"]): Promise<boolean> => {
        return bcrypt.compare(passwordToCompareTo, passwordInDb)
    }
}