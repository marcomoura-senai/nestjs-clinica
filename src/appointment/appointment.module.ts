import { Module } from '@nestjs/common'

import { AppointmentController } from './appointment.controller'
import { AppointmentRepository } from './appointment.repository'
import { AppointmentService } from './appointment.service'
import { typeOrmRepositoryFactory } from '../@common/database/typeorm'
import { Appointment } from '../@common/entities/appointment'

@Module({
  imports: [],
  controllers: [AppointmentController],
  providers: [
    AppointmentService,
    typeOrmRepositoryFactory(AppointmentRepository, Appointment),
  ],
})
export class AppointmentModule {}
