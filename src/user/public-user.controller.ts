import { Body, Controller, Post } from '@nestjs/common'

import { LoginDto } from './dtos/login.dto'
import { RegisterDto } from './dtos/register.dto'
import { UserService } from './user.service'

@Controller('users')
export class PublicUserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto)
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto)
  }
}
