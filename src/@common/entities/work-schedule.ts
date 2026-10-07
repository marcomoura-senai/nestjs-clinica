import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Doctor } from './doctor'

class WorkScheduleConfiguration {
  weekDay: string // Mon, Tue, Wed, Thu, Fri, Sat, Sun

  duration: number // in minutes

  time: {
    startTime: string // HH:MM
    endTime: string // HH:MM
  }[]
}

@Entity()
export class WorkSchedule {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number

  @Column('number')
  doctorId: number

  @Column('jsonb')
  configuration: WorkScheduleConfiguration[]

  @OneToOne(() => Doctor)
  doctor: Doctor
}
