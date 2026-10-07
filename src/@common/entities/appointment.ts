import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

export const APPOINTMENT_STATUS = {
  scheduled: 'scheduled',
  IN_PROGRESS: 'in_progress',
  DONE: 'done',
  CANCELLED: 'cancelled',
}
export type APPOINTMENT_STATUS =
  (typeof APPOINTMENT_STATUS)[keyof typeof APPOINTMENT_STATUS]

// TODO: Considerar só dia e hora e levar em consideração a duração
@Index('appointment_scheduled', ['doctorId', 'date'], {
  unique: true,
  where: `status = '${APPOINTMENT_STATUS.scheduled}'`,
})
@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number

  @Column('number')
  patientId: number

  @Column('number')
  doctorId: number

  @Column('timestamptz')
  date: Date

  @Column('number')
  duration: number

  @Column('enum', {
    enum: APPOINTMENT_STATUS,
  })
  status: APPOINTMENT_STATUS
}
