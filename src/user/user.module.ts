import { Module } from '@nestjs/common'
import { DataSource } from 'typeorm'

import { PublicUserController } from './public-user.controller'
import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

@Module({
  controllers: [PublicUserController],
  providers: [
    {
      provide: UserRepository,
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(User)
      },
      inject: [DataSource],
    },
    UserService,
  ],
})
export class UserModule {}
