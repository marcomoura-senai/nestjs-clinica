import { Body, Controller, Param, ParseArrayPipe, Put } from '@nestjs/common'

import { DoctorService } from './doctor.service'
import { CreateWorkScheduleDto } from './dto/create-work-schedule.dto'
import { RequireRole } from '../auth/decorator/role.decorator'
import { RoleName } from '../role/role.entity'

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @RequireRole([RoleName.DOCTOR, RoleName.ADMIN])
  @Put(':id/work-schedule')
  async createWorkSchedule(
    @Param('id') id: number,
    @Body({
      pipes: [
        new ParseArrayPipe({
          items: CreateWorkScheduleDto,
        }),
      ],
    })
    workScheduleDto: CreateWorkScheduleDto[],
  ) {
    return this.doctorService.upsertWorkSchedule(id, workScheduleDto)
  }
}
