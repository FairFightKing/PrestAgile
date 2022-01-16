import { ApiProperty } from '@nestjs/swagger'
import { IsString, Matches, MaxLength, MinLength } from 'class-validator'
import {
  EmailRegexp,
  PasswordRegexp,
} from '../Validator/Impl/formInputValidatorImpl'
import UserDTO from '../../User/DTO/UserDTO'

export default class RegisterDto {
  @ApiProperty({
    minimum: 9,
    maximum: 25,
    required: true,
    name: 'email',
  })
  @IsString()
  @MinLength(9)
  @MaxLength(25)
  @Matches(
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,4}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{9,25}))/,
    { message: 'Email not conform' },
  )
  email: string

  @ApiProperty({
    minimum: 8,
    maximum: 30,
    required: true,
    name: 'password',
    description:
      'At least 8 character long, 1 capital, 1 small, 1 special character , 1 number',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?_&])[A-Za-z\d#@$!%*?&]{8,30}$/,
    { message: 'Password too weak' },
  )
  password: UserDTO['password']
}
