import { ApiTags } from '@nestjs/swagger'
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'
import RegisterDto from '../DTO/RegisterDto'
import AuthService from '../Service/AuthService'
import LoginDTO from '../DTO/LoginDTO'
import { JwtDTO } from '../DTO/JwtDTO'

@ApiTags('Register')
@Controller('/auth')
export class AuthManager {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body(ValidationPipe) registerDto: RegisterDto): Promise<boolean> {
    return this.authService.register(registerDto)
  }

  @Post('/login')
  login(
    @Body(ValidationPipe) loginDto: LoginDTO,
  ): Promise<{ accessToken: string; user: JwtDTO }> {
    return this.authService.login(loginDto)
  }
}
