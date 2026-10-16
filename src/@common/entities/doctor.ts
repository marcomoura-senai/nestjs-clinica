import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from '../../user/user.entity'

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number

  @Column('varchar', { length: 255 })
  crm: string

  @Column('number')
  userId: number

  @JoinColumn({ name: 'user_id' })
  @OneToOne(() => User)
  user: User
}
