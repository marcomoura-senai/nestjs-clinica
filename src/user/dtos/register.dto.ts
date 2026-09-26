import { IsEmail, IsIn, IsString, IsStrongPassword } from 'class-validator'

import { RoleName } from '../../role/role.entity'

export class RegisterDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsStrongPassword()
  password: string

  @IsIn(Object.values(RoleName), { each: true })
  roles: RoleName[] = [RoleName.USER]
}
