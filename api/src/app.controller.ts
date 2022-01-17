import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import UserRepository from './User/Repository/UserRepository'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Root')
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello()
  }
}
