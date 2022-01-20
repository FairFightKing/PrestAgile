import { ApiProperty } from '@nestjs/swagger'
import { IsString, Matches, MaxLength, MinLength } from 'class-validator'
import {
  EmailRegexp,
  PasswordRegexp,
} from '../Validator/Impl/formInputValidatorImpl'
import UserDTO from '../../User/DTO/UserDTO'

export interface LoginFormDTO {
  email: string
  password?: string
  passwordHash?: string
  age?: number
}

export default class LoginDTO {
  @ApiProperty({
    minimum: 5,
    maximum: 50,
    required: true,
    name: 'email',
    type: 'string',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  @Matches(EmailRegexp, { message: 'Email not conform' })
  email: UserDTO['email']

  @ApiProperty({
    minimum: 8,
    maximum: 30,
    required: true,
    name: 'password',
    description:
      'At least 8 character long, 1 capital, 1 small, 1 special character , 1 number',
    type: 'string',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(PasswordRegexp, { message: 'Password too weak' })
  password: UserDTO['password']
}
