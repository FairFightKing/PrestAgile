import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import UserRepository from '../../User/Repository/UserRepository'
import { JwtService } from '@nestjs/jwt'
import LoginDto from '../DTO/LoginDTO'
import RegisterDto from '../DTO/RegisterDto'
import { JwtDto } from '../DTO/JwtDto'

@Injectable()
export default class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<void> {
    return this.userRepository.register(registerDto)
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ accessToken: string; user: JwtDto }> {
    const response = await this.userRepository.validateUserPassword(loginDto)
    if (!response) throw new UnauthorizedException('Invalid Credentials')
    const accessToken = this.jwtService.sign(response)

    return {
      accessToken,
      user: response,
    }
  }
}
