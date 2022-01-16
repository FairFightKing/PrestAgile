import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
// import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './User/Module/UserModule'
import { AuthModule } from './Authentification/Module/AuthModule'
import { join } from 'path'

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database-pg.db',
      entities: [join(__dirname, '**', 'Entity/*.{ts,js}')],
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  // TypeOrmModule.forRoot({
  //   type: 'sqlite3',
  //   host
  // })
})
export class AppModule {
  constructor(private connection: Connection) {}
}
