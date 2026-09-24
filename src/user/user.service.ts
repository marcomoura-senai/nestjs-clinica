import { randomUUID } from 'node:crypto'

import { Injectable, UnauthorizedException } from '@nestjs/common'

import { LoginDto } from './dtos/login.dto'
import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { JwtService } from '../auth/jwt.service'
import { PasswordService } from '../auth/password.service'

export interface RegisterInput {
  name: string
  email: string
  password: string
}

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async register(input: RegisterInput): Promise<Omit<User, 'password'>> {
    const role = this.userRepository.create({
      name: 'admin',
    }) // TODO: Pegar o id da role na tabela
    const user = this.userRepository.create({
      ...input,
      clinicId: randomUUID(),
      password: await this.passwordService.hash(input.password),
      roles: [role],
    })

    const createdUser = await this.userRepository.save(user)

    const { password: _, ...userWithoutPassword } = createdUser

    return userWithoutPassword
  }

  async login(input: LoginDto) {
    const user = await this.userRepository.findOne({
      select: {
        id: true,
        roles: true,
        clinicId: true,
        password: true,
      },
      where: { email: input.email },
    })

    if (!user) {
      throw new UnauthorizedException('Email or password is invalid')
    }

    if (!(await this.passwordService.compare(input.password, user.password))) {
      throw new UnauthorizedException('Email or password is invalid')
    }

    const jwt = this.jwtService.sign({
      id: user.id,
      roles: user.roles.map((role) => role.name),
    })

    return { jwt }
  }
}
