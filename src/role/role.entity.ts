import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../user/user.entity'

export const Roles = {
  ADMIN: 'admin',
  USER: 'user',
}

export type Roles = (typeof Roles)[keyof typeof Roles]

@Entity()
export class Role {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number

  @Index({ unique: true })
  @Column('varchar', { length: 255 })
  name: string

  @JoinTable()
  @ManyToMany(() => User, (user: User) => user.roles)
  users: User[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date
}
