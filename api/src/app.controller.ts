import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import UserRepository from './User/Repository/UserRepository'

@Controller('/ntm')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('test')
  async postRegister(): Promise<string> {
    const userRepository = new UserRepository()
    await userRepository.register({
      email: 'j.d@gmail.com',
      password: 'KliuJrat@87',
    })
    return 'yes'
  }
}
