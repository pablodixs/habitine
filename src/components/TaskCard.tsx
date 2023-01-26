import { Text, Box, Center, Container } from 'native-base'
import { Clock } from 'phosphor-react-native'

interface TaskCardProps {
  navigation?: any
  routineName: string
  time: string
  timeAmount: number
}

export function TaskCard({ navigation,routineName, time, timeAmount }: TaskCardProps) {
  return (
      <Box
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
            {/* <Clock weight="bold" size={14} color="gray" /> */}
            <Text marginLeft={1} color={'gray.500'}>
              {timeAmount} etapas
            </Text>
          </Box>
        </Container>
        <Text fontSize="lg" fontFamily={'bold'} color={'gray.700'}>
          {time}
        </Text>
      </Box>
  )
}
