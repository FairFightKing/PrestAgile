import { EntityRepository, Repository } from 'typeorm'
import UserEntity from '../Entity/UserEntity'
import RegisterDto from '../../Authentification/DTO/RegisterDto'
import PasswordHelper from '../../Authentification/helpers/PasswordHelper'
import { ConflictException, InternalServerErrorException } from '@nestjs/common'
import { JwtDTO } from '../../Authentification/DTO/JwtDTO'
import UserInfoEntity from '../Entity/UserInfoEntity'
import * as bcrypt from 'bcrypt'

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {
  async register({ email, password }: RegisterDto): Promise<boolean> {
    const user = new UserEntity()
    user.email = email
    user.salt = await bcrypt.genSalt()
    user.password = await PasswordHelper.hash(password, user.salt)
    try {
      const userInfo = new UserInfoEntity()
      await userInfo.save()
      user.userInfo = userInfo
      await user.save()
    } catch (e) {
      //error code for already exist
      if (e.errno === 19 || e.code === '23505')
        throw new ConflictException('Email already exist')
      else throw new InternalServerErrorException()
    }
    return true
  }

  async validateUserPassword({
    email,
    password,
  }: RegisterDto): Promise<JwtDTO> {
    const auth = await this.findOne({ email })
    if (auth && (await auth.validatePassword(password))) {
      return {
        email: auth.email,
        userInfo: auth.userInfo,
      }
    } else return null
  }
}
