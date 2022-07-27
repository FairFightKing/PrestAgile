import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import UserRepository from '../Repository/UserRepository'
import UserEntity from '../Entity/UserEntity'
import UserDTO from '../DTO/UserDTO'

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUser(user: UserEntity): Promise<UserEntity> {
    const userInfo = await this.userRepository.findOne({
      where: { id: user.id },
    })
    if (!userInfo) throw new NotFoundException('User not found.')
    return userInfo
  }

  async updateUserInfo(user: UserEntity): Promise<UserDTO> {
    const userInfo = await this.getUser(user)
    userInfo.uuid = user.uuid
    try {
      await userInfo.save()
    } catch (e) {
      throw new InternalServerErrorException()
    }
    return userInfo
  }
}
