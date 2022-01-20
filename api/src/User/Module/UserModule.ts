import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import UserInfoRepository from '../Repository/UserInfoRepository'
import { UserManager } from '../Manager/UserManager'
import UserService from '../Service/UserService'
import UserRepository from '../Repository/UserRepository'

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserInfoRepository])],
  controllers: [UserManager],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
