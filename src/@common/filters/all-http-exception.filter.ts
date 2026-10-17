import { ArgumentsHost, Catch } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'

import { DomainError } from '../errors/domain.error'

@Catch()
export class AllHttpExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (exception instanceof DomainError) {
      // TODO:
    }

    super.catch(exception, host)
  }
}
