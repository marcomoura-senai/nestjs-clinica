import { Injectable } from '@nestjs/common'
import { hash, compare, genSalt } from 'bcrypt'

@Injectable()
export class PasswordService {
  async hash(password: string) {
    return await hash(password, await genSalt())
  }

  async compare(password: string, hash: string) {
    return await compare(password, hash)
  }
}
