import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Patient } from './patient'

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number

  @Column('text')
  text: string

  @Column('number')
  patientId: number

  @OneToOne(() => Patient)
  patient: Patient
}
