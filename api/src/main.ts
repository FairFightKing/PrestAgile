import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
// import { getConnection } from 'typeorm'
import { config } from 'dotenv'

async function bootstrap() {
  config()
  const app = await NestFactory.create(AppModule, {
    cors: true,
  })
  app.enableCors({
    origin: 'http://localhost:3000',
  })
  const port = +process.env.APP_PORT || 3000
  app.setGlobalPrefix('api')
  console.log('Port running on: ', port)

  const options = new DocumentBuilder().addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/', app, document)

  await app.listen(port)
}
bootstrap().then(() => {
  console.log(
    'success',
    //, getConnection()
  )
})
