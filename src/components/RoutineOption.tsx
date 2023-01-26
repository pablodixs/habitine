import { Box, Text } from 'native-base'
import { CaretRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

interface RoutineOptionsProps {
  title: string
}

export function RoutineOption({ title }: RoutineOptionsProps) {
  return (
    <TouchableOpacity>
      <Box
        width={'full'}
        borderWidth={2}
        borderColor={'gray.100'}
        borderRadius={12}
        py={3}
        px={4}
        mb={4}
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <Text fontSize={'md'} color={'black.500'} fontFamily={'medium'}>
          {title}
        </Text>
        <CaretRight color="gray" />
      </Box>
    </TouchableOpacity>
  )
}
