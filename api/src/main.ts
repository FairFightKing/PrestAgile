import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { getConnection } from 'typeorm'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = +process.env.APP_PORT || 3000
  app.setGlobalPrefix('api')
  console.log('Port running on: ', port)

  const options = new DocumentBuilder().addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/', app, document)

  await app.listen(port)
}
bootstrap().then(() => console.log(getConnection()))
