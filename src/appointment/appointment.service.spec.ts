import { beforeEach, describe, expect, it } from 'vitest'

import { AppointmentService } from './appointment.service'
import { Appointment } from '../@common/entities/appointment'
import { DomainError, ERROR_CODE } from '../@common/errors/domain.error'

function buildAppointment(
  isoDate: string,
  durationMinutes: number,
): Appointment {
  return {
    date: new Date(isoDate),
    duration: durationMinutes,
  } as Appointment
}

function buildNewAppointment(isoStart: string, isoEnd: string) {
  return {
    start: new Date(isoStart),
    end: new Date(isoEnd),
  }
}

describe('AppointmentService.checkConflict', () => {
  let service: AppointmentService

  beforeEach(() => {
    service = new AppointmentService()
  })

  const existing = buildAppointment('2026-01-01T10:00:00.000Z', 30) // 10:00 -> 10:30

  describe('non-conflicting cases', () => {
    it('returns true when there are no existing appointments', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T10:00:00.000Z',
        '2026-01-01T10:30:00.000Z',
      )

      expect(service.checkConflict([], newAppointment)).toBe(true)
    })

    it('does not conflict when the new appointment starts exactly when the existing one ends', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T10:30:00.000Z',
        '2026-01-01T11:00:00.000Z',
      )

      expect(service.checkConflict([existing], newAppointment)).toBe(true)
    })

    it('does not conflict when the new appointment ends exactly when the existing one starts', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T09:30:00.000Z',
        '2026-01-01T10:00:00.000Z',
      )

      expect(service.checkConflict([existing], newAppointment)).toBe(true)
    })

    it('does not conflict when the new appointment happens entirely before the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T09:00:00.000Z',
        '2026-01-01T09:30:00.000Z',
      )

      expect(service.checkConflict([existing], newAppointment)).toBe(true)
    })

    it('does not conflict when the new appointment happens entirely after the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T11:00:00.000Z',
        '2026-01-01T11:30:00.000Z',
      )

      expect(service.checkConflict([existing], newAppointment)).toBe(true)
    })

    it('returns true when none of several appointments conflict', () => {
      const other = buildAppointment('2026-01-01T14:00:00.000Z', 30) // 14:00 -> 14:30
      const newAppointment = buildNewAppointment(
        '2026-01-01T11:00:00.000Z',
        '2026-01-01T11:30:00.000Z',
      )

      expect(service.checkConflict([existing, other], newAppointment)).toBe(
        true,
      )
    })
  })

  describe('conflicting cases', () => {
    it('conflicts when the new appointment is identical to the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T10:00:00.000Z',
        '2026-01-01T10:30:00.000Z',
      )

      // An identical range always makes (start - existingEnd) + (end - existingStart) === 0,
      // which short-circuits into the service's "igualdade" branch before the DomainError check.
      expect(() => service.checkConflict([existing], newAppointment)).toThrow(
        'Conflito de horário por igualdade',
      )
    })

    it('conflicts when the new appointment starts before and ends during the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T09:45:00.000Z',
        '2026-01-01T10:15:00.000Z',
      )

      expect(() => service.checkConflict([existing], newAppointment)).toThrow(
        DomainError,
      )
    })

    it('conflicts when the new appointment starts during and ends after the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T10:15:00.000Z',
        '2026-01-01T10:45:00.000Z',
      )

      expect(() => service.checkConflict([existing], newAppointment)).toThrow(
        DomainError,
      )
    })

    it('conflicts when the new appointment is fully contained within the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T10:05:00.000Z',
        '2026-01-01T10:20:00.000Z',
      )

      expect(() => service.checkConflict([existing], newAppointment)).toThrow(
        DomainError,
      )
    })

    it('conflicts when the new appointment fully contains the existing one', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T09:50:00.000Z',
        '2026-01-01T10:45:00.000Z',
      )

      expect(() => service.checkConflict([existing], newAppointment)).toThrow(
        DomainError,
      )
    })

    it('conflicts with the HORARIO_INDISPONIVEL domain error code', () => {
      const newAppointment = buildNewAppointment(
        '2026-01-01T10:05:00.000Z',
        '2026-01-01T10:20:00.000Z',
      )

      try {
        service.checkConflict([existing], newAppointment)
        expect.unreachable('should have thrown a DomainError')
      } catch (error) {
        expect(error).toBeInstanceOf(DomainError)
        expect((error as DomainError).code).toBe(
          ERROR_CODE.HORARIO_INDISPONIVEL,
        )
      }
    })

    it('conflicts when one of several appointments overlaps, even if the others do not', () => {
      const other = buildAppointment('2026-01-01T14:00:00.000Z', 30) // 14:00 -> 14:30
      const newAppointment = buildNewAppointment(
        '2026-01-01T14:15:00.000Z',
        '2026-01-01T14:45:00.000Z',
      )

      expect(() =>
        service.checkConflict([existing, other], newAppointment),
      ).toThrow(DomainError)
    })
  })
})
