import UserInfo  from "../../common/types/UserInfo";

export default interface RegistrationInput {
    email: string
    password: string
    userInfo?: UserInfo
}
