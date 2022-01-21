import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { UserModule } from './User/Module/UserModule'
import { AuthModule } from './Authentification/Module/AuthModule'
import typeOrmConfig from './typeorm.config'
import AuthService from './Authentification/Service/AuthService'
import { JwtValidatorImpl } from './Authentification/Validator/Impl/JwtValidatorImpl'
import UserService from './User/Service/UserService'
import { AuthManager } from './Authentification/Manager/AuthManager'
import { UserManager } from './User/Manager/UserManager'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import UserRepository from './User/Repository/UserRepository'
import UserInfoRepository from './User/Repository/UserInfoRepository'

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
