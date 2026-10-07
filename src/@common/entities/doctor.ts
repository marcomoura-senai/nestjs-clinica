import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../../user/user.entity'

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number

  @Column('varchar', { length: 255 })
  crm: string

  @Column('number')
  userId: number

  @OneToOne(() => User)
  user: User
}
