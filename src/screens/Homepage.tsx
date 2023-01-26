import {
  VStack,
  Text,
  Container,
  HStack,
  ScrollView,
  Box,
  View,
} from 'native-base'
import { Plus } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

import { TaskCard } from '../components/TaskCard'
import { userRoutines } from '../utils/data'

export function Homepage({ navigation }: any) {
  return (
    <View>
      <VStack safeArea bgColor={'#fff'}>
        <HStack
          pb={4}
          px={4}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'3xl'} letterSpacing={-0.5} fontFamily={'bold'}>
            Olá, Pablo
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewRoutine')}>
            <Box
              borderWidth={2}
              borderRadius={12}
              borderColor={'gray.100'}
              padding={2}
              flexDirection={'row'}
              alignItems={'center'}
            >
              <Plus size={16} weight="bold" />
              <Text marginLeft={2}>Nova rotina</Text>
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
          <Container
            backgroundColor={'blue.500'}
            padding={2}
            borderRadius={100}
          >
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
          {userRoutines.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Routine', { id: item.id })}
              >
                <TaskCard
                  routineName={item.routineName}
                  time={item.time}
                  key={item.id}
                  timeAmount={item.steps.length}
                />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </VStack>
    </View>
  )
}
