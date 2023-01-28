import moment from 'moment'
import { UserRoutinesProps } from './data'

export function getMinutesAmount(routine: UserRoutinesProps) {
  const totalMinutes = routine?.steps.reduce((total, item) => {
    return total + item.timeAmount
  }, 0)

  const minutesAmount = Math.round((totalMinutes as number) / 60)

  return minutesAmount
}

export function getFullTime(minutesAmount: number) {
  const data = new Date()
  const fullTime = moment(data).add(minutesAmount, 'minutes').format(`HH:mm`)

  return fullTime
}

export function getWeekDay(day: string) {
  if (day === '0') {
    return 'SEG'
  }
  if (day === '1') {
    return 'TER'
  }
  if (day === '2') {
    return 'QUA'
  }
  if (day === '3') {
    return 'QUI'
  }
  if (day === '4') {
    return 'SEX'
  }
  if (day === '5') {
    return 'SÁB'
  }
  if (day === '6') {
    return 'DOM'
  }
}
