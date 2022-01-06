import * as bcrypt from "bcrypt";
import {LoginFormDTO} from "../LoginRegister/DTO/LoginFormDTO";


export default class PasswordHelper {
    public static hash = (password: LoginFormDTO["password"]): Promise<LoginFormDTO["password"]> => {
        return bcrypt.hash(password, 10)
    }
    public static compare = (passwordToCompareTo: LoginFormDTO["password"], passwordInDb: LoginFormDTO["password"]): Promise<boolean> => {
        return bcrypt.compare(passwordToCompareTo, passwordInDb)
    }
}