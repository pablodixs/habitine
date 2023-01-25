import { VStack, Text, Container, HStack, ScrollView, Box } from 'native-base'
import { TouchableOpacity } from 'react-native'

import { TaskCard } from '../../components/TaskCard'

export function Homepage() {
  return (
    <VStack bgColor={'#fff'}>
      <HStack
        pt={16}
        pb={4}
        px={4}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text fontSize={'3xl'} letterSpacing={-0.5} fontFamily={'bold'}>
          Olá, Pablo
        </Text>
        <TouchableOpacity>
          <Box padding={2}>
            <Text>Adicionar nova rotina</Text>
          </Box>
        </TouchableOpacity>
      </HStack>
      <HStack
        px={4}
        pb={2}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text>SEG</Text>
        <Container backgroundColor={'blue.500'} padding={2} borderRadius={100}>
          <Text fontFamily={'medium'} color="white.100">
            TER
          </Text>
        </Container>
        <Text>QUA</Text>
        <Text>QUI</Text>
        <Text>SEX</Text>
        <Text>SÁB</Text>
        <Text>DOM</Text>
      </HStack>
      <ScrollView padding={4} height={'full'}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
    </VStack>
  )
}
