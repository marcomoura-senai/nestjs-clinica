import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { PublicRoute } from './auth/decorator/public-route.decorator'
import { APIEnv } from './env'

@PublicRoute()
@Controller('health')
export class HealthController {
  constructor(private readonly configService: ConfigService<APIEnv>) {}

  @Get()
  getHealth() {
    return {
      status: 'ok',
      message: 'healthy',
      version: this.configService.getOrThrow<string>('APP_VERSION'),
    }
  }
}
