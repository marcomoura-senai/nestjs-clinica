import { Body, Controller, Post } from '@nestjs/common'

import { LoginDto } from './dtos/login.dto'
import { UserService } from './user.service'
import { PublicRoute } from '../auth/decorator/public-route.decorator'

@PublicRoute()
@Controller('users')
export class PublicUserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto)
  }
}
