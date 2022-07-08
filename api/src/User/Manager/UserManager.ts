import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger'
import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import UserService from '../Service/UserService'
import UserEntity from '../Entity/UserEntity'
import { GetUser } from '../../Authentification/Decorator/GetUser'
import UserDTO from '../DTO/UserDTO'

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserManager {
  constructor(private userService: UserService) {}

  @Get()
  getUserInfo(@GetUser() user: UserEntity): Promise<UserDTO> {
    return this.userService.getUser(user)
  }

  @Patch()
  @ApiConsumes('multipart/form-data')
  updateUserInfo(@GetUser() user: UserEntity): Promise<UserDTO> {
    return this.userService.updateUserInfo(user)
  }
}
