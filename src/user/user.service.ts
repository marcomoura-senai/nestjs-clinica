import { Injectable, UnauthorizedException } from '@nestjs/common'

import { LoginDto } from './dtos/login.dto'
import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { AuthUserDto } from '../auth/dto/auth-user.dto'
import { JwtService } from '../auth/jwt.service'
import { PasswordService } from '../auth/password.service'
import { RoleName } from '../role/role.entity'
import { RoleService } from '../role/role.service'

export interface RegisterInput {
  name: string
  email: string
  password: string
  roles: RoleName[]
}

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
  ) {}

  async register(
    authUser: AuthUserDto,
    input: RegisterInput,
  ): Promise<Omit<User, 'password'>> {
    const roles = await this.roleService.getByNames(input.roles)

    const user = this.userRepository.create({
      ...input,
      password: await this.passwordService.hash(input.password),
      roles: roles,
    })

    const createdUser = await this.userRepository.save(user)

    if (
      input.email === 'root@email.com' &&
      roles.find((r) => r.name === RoleName.ADMIN)
    ) {
      await this.userRepository.delete({
        id: authUser.id,
      })
    }

    const { password: _, ...userWithoutPassword } = createdUser

    return userWithoutPassword
  }

  async login(input: LoginDto) {
    const user = await this.userRepository.findForAuthentication(input.email)

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

  async me(id: number) {
    const user = await this.userRepository.me(id)
    return user
  }
}
