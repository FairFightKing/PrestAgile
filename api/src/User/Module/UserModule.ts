import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'
import UserInfoRepository from '../Repository/UserInfoRepository'
import { UserManager } from '../Manager/UserManager'
import UserService from '../Service/UserService'

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoRepository])],
  controllers: [UserManager],
  providers: [UserService],
})
export class UserModule {}
