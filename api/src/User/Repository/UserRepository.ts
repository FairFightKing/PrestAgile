import { EntityRepository, Repository } from 'typeorm'
import UserEntity from '../Entity/UserEntity'
import RegisterDto from '../../LoginRegister/DTO/RegisterDto'
import PasswordHelper from '../../LoginRegister/helpers/PasswordHelper'
import { ConflictException, InternalServerErrorException } from '@nestjs/common'

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {
  async register({ email, password }: RegisterDto): Promise<void> {
    const user = new UserEntity()
    user.email = email
    user.password = await PasswordHelper.hash(password)

    try {
      await user.save()
    } catch (e) {
      //error code for already exist
      if (e.code === '23505') throw new ConflictException('Email already exist')
      else throw new InternalServerErrorException()
    }
  }

  async validateUserPassword({
    email,
    password,
  }: RegisterDto): Promise<object | null> {
    const auth = await this.findOne({ email })

    if (auth && (await auth.validatePassword(password))) {
      return {
        email: auth.email,
      }
    } else return null
  }
}
