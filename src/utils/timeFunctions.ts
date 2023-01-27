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

  const fullTime = moment(data).add(minutesAmount, 'minutes').format(`hh:mm`)

  return fullTime
}
