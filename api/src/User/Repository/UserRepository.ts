import { EntityRepository, Repository } from 'typeorm'
import UserEntity from '../Entity/UserEntity'
import RegisterDto from '../../Authentification/DTO/RegisterDto'
import PasswordHelper from '../../Authentification/helpers/PasswordHelper'
import { ConflictException, InternalServerErrorException } from '@nestjs/common'
import { JwtDTO } from '../../Authentification/DTO/JwtDTO'
import * as bcrypt from 'bcrypt'
import LoginDTO from '../../Authentification/DTO/LoginDTO'

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {
  async register({ email, password, uuid }: RegisterDto): Promise<boolean> {
    const user = new UserEntity()
    user.email = email
    user.uuid = uuid
    user.salt = await bcrypt.genSalt()
    user.password = await PasswordHelper.hash(password, user.salt)
    try {
      await user.save()
    } catch (e) {
      //error code for already exist
      if (e.errno === 19 || e.code === '23505')
        throw new ConflictException('Email already exist')
      if (e.code === '23502')
        throw new InternalServerErrorException(
          `${e.driverError.column} not found. ${e.driverError}`,
        )
      throw new InternalServerErrorException(`${e.driverError}`)
    }
    return true
  }

  async validateUserPassword({ email, password }: LoginDTO): Promise<JwtDTO> {
    const auth = await this.findOne({ email })
    if (auth && (await auth.validatePassword(password)))
      return {
        email: auth.email,
        uuid: auth.uuid,
      }
    return null
  }
}
