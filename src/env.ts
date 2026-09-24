import { LOG_LEVELS, type LogLevel } from '@nestjs/common'
import { plainToInstance, Transform, Type } from 'class-transformer'
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsString,
  Length,
  validateSync,
} from 'class-validator'

export function validateEnv(config: unknown) {
  const apiEnv = plainToInstance(APIEnv, config)
  const result = validateSync(apiEnv, { whitelist: true })
  if (result.length > 0) {
    throw new Error(JSON.stringify(result, null))
  }

  return apiEnv
}
export class APIEnv {
  @Type(() => Number)
  @IsNumber()
  PORT!: number

  @IsIn(LOG_LEVELS)
  LOG_LEVEL!: LogLevel

  @IsString()
  DB_HOST!: string

  @Type(() => Number)
  @IsNumber()
  DB_PORT = 5432

  @IsString()
  DB_USER!: string

  @IsString()
  DB_PASSWORD!: string

  @IsString()
  DB_NAME!: string

  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  DB_SYNCHRONIZE = false

  @IsIn(LOG_LEVELS)
  DB_LOG_LEVEL: LogLevel = 'error'

  @IsString()
  JWT_SECRET!: string

  @Length(64, 64)
  @IsString()
  JWT_CIPHER_KEY!: string

  @IsString()
  JWT_EXPIRES_IN = '8h'

  @IsString()
  JWT_ISSUER = 'sctec'
}
