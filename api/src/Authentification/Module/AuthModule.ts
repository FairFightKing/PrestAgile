import { Global, Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import UserRepository from '../../User/Repository/UserRepository'
import { LoginManager } from '../Manager/LoginManager'
import { RegisterManager } from '../Manager/RegisterManager'
import AuthService from '../Service/AuthService'
import { JwtValidatorImpl } from '../Validator/Impl/JwtValidatorImpl'

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
  controllers: [LoginManager, RegisterManager],
  providers: [AuthService, JwtValidatorImpl],
  exports: [JwtValidatorImpl, PassportModule],
})
export class AuthModule {}
