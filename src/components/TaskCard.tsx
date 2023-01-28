import moment from 'moment'
import { Text, Box, Center, Container, View } from 'native-base'

interface TaskCardProps {
  navigation?: any
  routineName: string
  time: string
  timeAmount: number
}

export function TaskCard({
  routineName,
  time,
  timeAmount,
}: TaskCardProps) {
  const horario = moment(time).format('HH:mm')

  return (
    <View
      width="100%"
      display={'block'}
      padding={4}
      borderRadius={12}
      mb={2}
      borderWidth={2}
      borderColor={'gray.100'}
      flexDir={'row'}
      alignItems="center"
      justifyContent="space-between"
    >
      <Container>
        <Text
          fontFamily={'heading'}
          fontSize={'lg'}
          letterSpacing={-0.5}
          color={'black.500'}
        >
          {routineName}
        </Text>
        <Box flexDir={'row'} alignItems="center">
          <Text marginLeft={1} color={'gray.500'}>
            {timeAmount} etapas
          </Text>
        </Box>
      </Container>
      <Box>
        <Text fontSize={'xs'} color={'gray.400'}>Agendado para</Text>
        <Text textAlign={'right'} fontSize="lg" fontFamily={'bold'} color={'gray.700'}>
          {horario}
        </Text>
      </Box>
    </View>
  )
}
