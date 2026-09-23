import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { APIEnv } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService: ConfigService<APIEnv> = app.get(ConfigService)

  const port = configService.getOrThrow<number>('PORT')

  await app.listen(port)
  console.log(`Listening on port ${port.toString()}`)
}

bootstrap().catch((err: unknown) => {
  console.error(err)
  process.exit(-1)
})
