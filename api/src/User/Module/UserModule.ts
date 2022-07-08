import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserManager } from '../Manager/UserManager'
import UserService from '../Service/UserService'
import UserRepository from '../Repository/UserRepository'
import { config } from 'dotenv'

config()
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserManager],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
