import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import UserEntity from '../../User/Entity/UserEntity'

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext): UserEntity => {
    const request = context.switchToHttp().getRequest()
    return request.user
  },
)
