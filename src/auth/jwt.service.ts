import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtPayload, sign, verify } from 'jsonwebtoken'

import { APIEnv } from '../env'
import { AuthUserDto } from './dto/auth-user.dto'

@Injectable()
export class JwtService {
  constructor(private readonly configService: ConfigService<APIEnv>) {}

  sign(payload: AuthUserDto) {
    const iv = randomBytes(12)
    const cipher = createCipheriv(
      'aes-256-gcm',
      Buffer.from(
        this.configService.getOrThrow<string>('JWT_CIPHER_KEY'),
        'hex',
      ),
      iv,
    )

    const cipheredPayload = Buffer.concat([
      cipher.update(JSON.stringify(payload)),
      cipher.final(),
    ])

    const tag = cipher.getAuthTag()

    return sign(
      {
        data: cipheredPayload.toString('base64url'),
        tag: tag.toString('base64url'),
        iv: iv.toString('base64url'),
      },
      this.configService.getOrThrow<string>('JWT_SECRET'),
      {
        expiresIn: this.configService.getOrThrow('JWT_EXPIRES_IN'),
        issuer: this.configService.getOrThrow('JWT_ISSUER'),
      },
    )
  }

  verify(jwt: string): JwtPayload & { data: unknown } {
    const payload = verify(
      jwt,
      this.configService.getOrThrow('JWT_SECRET'),
    ) as JwtPayload

    const cipher = createDecipheriv(
      'aes-256-gcm',
      Buffer.from(
        this.configService.getOrThrow<string>('JWT_CIPHER_KEY'),
        'hex',
      ),
      Buffer.from(payload.iv as string, 'base64url'),
    )

    cipher.setAuthTag(Buffer.from(payload.tag as string, 'base64url'))

    const buffer = Buffer.from(payload.data as string, 'base64url')

    const decipheredPayload = Buffer.concat([
      cipher.update(buffer),
      cipher.final(),
    ])

    return {
      ...payload,
      data: JSON.parse(decipheredPayload.toString('utf-8')),
    }
  }
}
