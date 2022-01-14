import { ApiTags } from '@nestjs/swagger'
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'
import RegisterDto from '../DTO/RegisterDto'
import AuthService from '../Service/AuthService'
import LoginDto from '../DTO/LoginDTO'
import { JwtDto } from '../DTO/JwtDto'

@ApiTags('Register')
@Controller('register')
export class RegisterManager {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body(ValidationPipe) registerDto: RegisterDto): Promise<void> {
    return this.authService.register(registerDto)
  }

  @Post('/login')
  login(
    @Body(ValidationPipe) loginDto: LoginDto,
  ): Promise<{ accessToken: string; user: JwtDto }> {
    return this.authService.login(loginDto)
  }
}
