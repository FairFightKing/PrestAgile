import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger'
import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import UserService from '../Service/UserService'
import UserEntity from '../Entity/UserEntity'
import UserInfoDTO from '../DTO/UserInfoDTO'
import { GetUser } from '../../Authentification/Decorator/GetUser'

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
@UseGuards(AuthGuard())
export class UserManager {
  constructor(private userService: UserService) {}

  @Get()
  getUserInfo(@GetUser() user: UserEntity): Promise<UserInfoDTO> {
    return this.userService.getUser(user)
  }

  @Patch()
  @ApiConsumes('multipart/form-data')
  updateUserInfo(
    @Body() userInfoDTO: UserInfoDTO,
    @GetUser() user: UserEntity,
  ): Promise<UserInfoDTO> {
    return this.userService.updateUserInfo(user, userInfoDTO)
  }
}
