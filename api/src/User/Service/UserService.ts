import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import UserRepository from '../Repository/UserRepository'
import UserEntity from '../Entity/UserEntity'
import UserInfoEntity from '../Entity/UserInfoEntity'
import UserInfoRepository from '../Repository/UserInfoRepository'
import UserInfoDTO from '../DTO/UserInfoDTO'

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserInfoRepository,
  ) {}

  async getUser(user: UserEntity): Promise<UserInfoEntity> {
    const userInfo = await this.userRepository.findOne({
      where: { id: user.userInfo.id },
    })
    if (!userInfo) throw new NotFoundException('User not found.')
    return userInfo
  }

  async updateUserInfo(
    user: UserEntity,
    userInfoDTO: UserInfoDTO,
  ): Promise<UserInfoDTO> {
    const userInfo = await this.getUser(user)
    userInfo.phoneNumber = userInfoDTO.phoneNumber

    try {
      await userInfo.save()
    } catch (e) {
      throw new InternalServerErrorException()
    }
    return userInfo
  }
}
