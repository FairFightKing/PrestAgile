import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { createConnection } from 'typeorm'

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    createConnection()
      .then(async connection => {
        console.log(connection)
      })
      .catch(error => console.log(error))
    return this.appService.getHello()
  }
}
