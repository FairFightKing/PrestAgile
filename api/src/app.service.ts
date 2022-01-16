import { Injectable } from '@nestjs/common'
import { getConnection } from 'typeorm'

@Injectable()
export class AppService {
  getHello(): string {
    console.log(getConnection())
    return 'Hello World!'
  }
}
