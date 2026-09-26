import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

import { JWT_GUARD_AUTH_REQ_KEY } from '../jwt.guard'

export const GetAuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>()
    if (JWT_GUARD_AUTH_REQ_KEY in request) {
      return request[JWT_GUARD_AUTH_REQ_KEY]
    }

    return null
  },
)
