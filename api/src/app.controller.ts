import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { createConnection } from 'typeorm'

@Controller('/ntm')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
