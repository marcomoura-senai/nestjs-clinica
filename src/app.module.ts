import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD } from '@nestjs/core'

import { DatabaseModule } from './@common/database/database.module'
import { AllHttpExceptionFilter } from './@common/filters/all-http-exception.filter'
import { AppointmentModule } from './appointment/appointment.module'
import { AuthModule } from './auth/auth.module'
import { JwtGuard } from './auth/jwt.guard'
import { DoctorModule } from './doctor/doctor.module'
import { validateEnv } from './env'
import { HealthController } from './health.controller'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    DoctorModule,
    AppointmentModule,
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllHttpExceptionFilter,
    },
  ],
})
export class AppModule {}
