interface StepsProps {
  name: string
  timeAmount: number
}

export interface UserRoutinesProps {
  id: string | number[]
  routineName: string
  time: string
  type: string
  isFinished: boolean
  steps: StepsProps[]
  createdAt: string
  daysOfWeek: any
}

export const userRoutines: UserRoutinesProps[] = [
  {
    id: '1',
    routineName: 'mourning routine ð',
    time: '2023-01-27T17:53:27.000Z',
    type: 'Rotina',
    isFinished: false,
    createdAt: '2023-01-26T14:45:14.518Z',
    steps: [
      { name: 'Arrumar a cama ðï¸', timeAmount: 60 },
      { name: 'Fazer cafÃ© âï¸', timeAmount: 300 },
      { name: 'Escovar os dentes ðª¥', timeAmount: 180 },
    ],
    daysOfWeek: [],
  },
  {
    id: '2',
    routineName: 'evening routine ð´',
    time: '2023-01-27T17:53:27.000Z',
    type: 'Rotina',
    isFinished: false,
    createdAt: '2023-01-26T14:45:14.518Z',
    steps: [
      { name: 'Arrumar a cama ðï¸', timeAmount: 60 },
      { name: 'Desligar luzes', timeAmount: 30 },
      { name: 'Ler um livro', timeAmount: 300 },
      { name: 'meditar', timeAmount: 900 },
    ],
    daysOfWeek: [],
  },
]
