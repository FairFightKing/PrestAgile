import UserInfoEntity from '../../User/Entity/UserInfoEntity'

export interface JwtDTO {
  email: string
  userInfo: UserInfoEntity
}
