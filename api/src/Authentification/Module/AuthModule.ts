import { Global, Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import UserRepository from '../../User/Repository/UserRepository'
import { AuthManager } from '../Manager/AuthManager'
import AuthService from '../Service/AuthService'
import { JwtValidatorImpl } from '../Validator/Impl/JwtValidatorImpl'
import { config } from 'dotenv'
config()

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: +process.env.APP_EXPIRES,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthManager],
  providers: [AuthService, JwtValidatorImpl],
  exports: [JwtValidatorImpl, PassportModule, AuthService],
})
export class AuthModule {}
