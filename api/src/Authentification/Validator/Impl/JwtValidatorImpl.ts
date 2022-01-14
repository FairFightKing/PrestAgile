import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import UserRepository from '../../../User/Repository/UserRepository'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { JwtDto } from '../../DTO/JwtDto'
import UserEntity from '../../../User/Entity/UserEntity'

@Injectable()
export class JwtValidatorImpl extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      usernameField: 'email',
    })
  }
  async validate({ email }: JwtDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ email })
    if (!user) throw new UnauthorizedException()
    return user
  }
}
