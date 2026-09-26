import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import { User } from './user.entity'

@Injectable()
export class UserRepository extends Repository<User> {
  async findForAuthentication(email: string) {
    return this.findOne({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
      where: {
        email,
      },
      relations: {
        roles: true,
      },
    })
  }

  async me(id: number) {
    return this.findOne({
      where: {
        id,
      },
      relations: {
        roles: true,
      },
    })
  }
}
