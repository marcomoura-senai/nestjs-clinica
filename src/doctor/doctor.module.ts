import { Module } from '@nestjs/common'

import { DoctorController } from './doctor.controller'
import { DoctorRepository } from './doctor.repository'
import { DoctorService } from './doctor.service'
import { WorkScheduleRepository } from './work-schedule.repository'
import { typeOrmRepositoryFactory } from '../@common/database/typeorm'
import { Doctor } from '../@common/entities/doctor'
import { WorkSchedule } from '../@common/entities/work-schedule'

@Module({
  controllers: [DoctorController],
  providers: [
    DoctorService,
    typeOrmRepositoryFactory(DoctorRepository, Doctor),
    typeOrmRepositoryFactory(WorkScheduleRepository, WorkSchedule),
  ],
})
export class DoctorModule {}
