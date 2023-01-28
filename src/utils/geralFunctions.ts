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

export function countRoutinesDone(userRoutines: UserRoutinesProps[]) {
  const completedRoutines = userRoutines.filter(
    (routine) => routine.isFinished === true
  )
  return completedRoutines.length
}

export function orderRoutineByFinished(userRoutines: UserRoutinesProps[]) {
  const result = userRoutines.sort((a, b) => {
    if (a.isFinished < b.isFinished) {
      return -1
    }
    if (a.isFinished > b.isFinished) {
      return 1
    }
    return 0
  })

  return result
}

export function handleMarkAsFinished(id: string | number[], userRoutines: UserRoutinesProps[]) {
  const routine = userRoutines.filter((item) => item.id === id)[0]
  routine.isFinished = !routine.isFinished
}

export function handleDeleteRoutine(id: string | number[], userRoutines: UserRoutinesProps[]) {
  const findIndex = userRoutines.findIndex((item) => item.id === id)
  userRoutines.splice(findIndex, 1)
}