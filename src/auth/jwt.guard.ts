import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { Observable } from 'rxjs'

import { APIEnv } from '../env'
import { PUBLIC_ROUTE_METADATA_KEY } from './decorator/public-route.decorator'
import { RoleMetadata, ROLES_METADATA_KEY } from './decorator/role.decorator'
import { AuthUserDto } from './dto/auth-user.dto'
import { JwtService } from './jwt.service'
import { DomainError, ERROR_CODE } from '../@common/errors/domain.error'

export const JWT_GUARD_AUTH_REQ_KEY = 'user' as const

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly configService: ConfigService<APIEnv>,
  ) {}

  private logger = new Logger(JwtGuard.name)

  private extractToken(context: ExecutionContext) {
    const expressReq = context.switchToHttp().getRequest<Request>()

    if (!expressReq.headers.authorization) {
      throw new DomainError('No token provided', ERROR_CODE.NAO_AUTENTICADO)
    }

    const [bearerString, token] = expressReq.headers.authorization.split(' ')

    if (bearerString !== 'Bearer') {
      throw new DomainError(
        'Invalid token provided',
        ERROR_CODE.NAO_AUTENTICADO,
      )
    }
    this.logger.debug(`Extracted token: ${token}`)

    return token
  }

  private setPayload(context: ExecutionContext, payload: JwtPayload) {
    const request = context.switchToHttp().getRequest<Request>()
    Object.defineProperties(request, {
      [JWT_GUARD_AUTH_REQ_KEY]: {
        value: payload,
        writable: false,
      },
    })
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const isPublicRoute = this.reflector.getAllAndOverride<true | undefined>(
        PUBLIC_ROUTE_METADATA_KEY,
        [context.getHandler(), context.getClass()],
      )

      if (isPublicRoute) {
        return true
      }

      const payload = this.jwtService.verify(
        this.extractToken(context),
      ) as JwtPayload & { data: AuthUserDto }

      if (payload.iss !== this.configService.getOrThrow('JWT_ISSUER')) {
        throw new DomainError(
          'Invalid token provided',
          ERROR_CODE.NAO_AUTENTICADO,
        )
      }

      const requiredRoles = this.reflector.getAllAndOverride<
        RoleMetadata | undefined
      >(ROLES_METADATA_KEY, [
        // É o método do controller que possui a anotação @Roles (se possuir, por isso pode retornar undefined)
        context.getHandler(),
        // É a classe do controller que possui a anotação @Roles (se possuir, por isso pode retornar undefined)
        context.getClass(),
      ])

      if (requiredRoles) {
        if (requiredRoles.mode === 'every') {
          const hasEvery = requiredRoles.requiredRoles.every((requiredRole) =>
            payload.data.roles.includes(requiredRole),
          )
          if (!hasEvery) {
            throw new DomainError('Forbidden', ERROR_CODE.ACESSO_NEGADO)
          }

          return true
        }

        const hasSome = requiredRoles.requiredRoles.some((requiredRole) =>
          payload.data.roles.includes(requiredRole),
        )
        if (!hasSome) {
          throw new DomainError('Forbidden', ERROR_CODE.ACESSO_NEGADO)
        }

        return true
      }

      this.setPayload(context, payload)
      return true
    } catch (error) {
      this.logger.error(error)
      throw new DomainError(
        'Invalid token provided',
        ERROR_CODE.NAO_AUTENTICADO,
      )
    }
  }
}
