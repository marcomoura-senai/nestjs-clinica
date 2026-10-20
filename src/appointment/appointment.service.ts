import { Injectable } from '@nestjs/common'

import { Appointment } from '../@common/entities/appointment'
import { DomainError, ERROR_CODE } from '../@common/errors/domain.error'

@Injectable()
export class AppointmentService {
  checkConflict(
    appointments: Appointment[],
    newAppointment: {
      start: Date
      end: Date
    },
  ) {
    const newStartMs = newAppointment.start.getTime()
    const newEndMs = newAppointment.end.getTime()
    appointments.forEach((appointment) => {
      const appointmentStart = appointment.date.getTime()
      const appointmentEnd =
        appointment.date.getTime() + appointment.duration * 60 * 1000
      // diferença do começo da nova consulta com o fim da atual
      const newStartToEnd = newStartMs - appointmentEnd
      const newEndToStart = newEndMs - appointmentStart

      if (newStartToEnd + newEndToStart === 0) {
        throw new Error('Conflito de horário por igualdade')
      }

      if (
        // começa antes de terminar
        newStartToEnd < 0 &&
        // termina antes de começar
        newEndToStart > 0
      ) {
        throw new DomainError(
          'Conflito de horário',
          ERROR_CODE.HORARIO_INDISPONIVEL,
        )
      }
    })

    return true
  }
}
