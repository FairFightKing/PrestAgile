import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { getConnection } from 'typeorm'
import { config } from 'dotenv'

async function bootstrap() {
  config()
  const app = await NestFactory.create(AppModule, {
    cors: true,
  })
  const port = +process.env.PORT || 3000
  // app.enableCors({
  //   origin: 'http://localhost:' + port,
  // })
  app.setGlobalPrefix('api')
  console.log('Port running on: ', port)

  const options = new DocumentBuilder().addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/', app, document)

  await app.listen(port, '0.0.0.0')
}
bootstrap().then(() => {
  console.log('success', getConnection())
})
