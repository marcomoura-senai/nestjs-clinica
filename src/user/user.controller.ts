import { Body, Controller, Get, Post } from '@nestjs/common'

import { RegisterDto } from './dtos/register.dto'
import { UserService } from './user.service'
import { GetAuthUser } from '../auth/decorator/get-auth-user.decorator'
import { RequireRole } from '../auth/decorator/role.decorator'
import { AuthUserDto } from '../auth/dto/auth-user.dto'
import { RoleName } from '../role/role.entity'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  me(@GetAuthUser() authUser: AuthUserDto) {
    return this.userService.me(authUser.id)
  }

  @RequireRole([RoleName.ADMIN])
  @Post()
  async register(
    @Body() registerDto: RegisterDto,
    @GetAuthUser() authUser: AuthUserDto,
  ) {
    return this.userService.register(authUser, registerDto)
  }
}
