import { Module } from '@nestjs/common'
import { DataSource } from 'typeorm'

import { PublicUserController } from './public-user.controller'
import { UserController } from './user.controller'
import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { RoleModule } from '../role/role.module'

@Module({
  imports: [RoleModule],
  controllers: [PublicUserController, UserController],
  providers: [
    {
      provide: UserRepository,
      useFactory(dataSource: DataSource) {
        const userRepo = new UserRepository(User, dataSource.manager)
        return userRepo
      },
      inject: [DataSource],
    },
    UserService,
  ],
})
export class UserModule {}
